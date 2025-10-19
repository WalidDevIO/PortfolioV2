// /home/walkloly/proj_perso/portfoliov2/auth/checkAuth.ts
// Server-side helper for Nuxt (Nuxt 3 + @nuxtjs/supabase) to check if Supabase auth exists
// Returns whether supabase is available and, if available, current session/user when possible.

export type CheckAuthResult = {
    supabaseAvailable: boolean
    authenticated: boolean
    user?: any | null
    session?: any | null
    error?: string
}

/**
 * Check for a Supabase client & auth on the server.
 * Works best when called from a Nuxt server context (server route, serverMiddleware, server plugin).
 * Tries several common injection points used by Nuxt Supabase integrations.
 */
export async function checkSupabaseAuthServer(event?: any): Promise<CheckAuthResult> {
    try {
        // Ensure running on server
        if (import.meta.client) {
            return { supabaseAvailable: false, authenticated: false, error: 'Not running on server' }
        }

        let nuxtApp: any | undefined
        try {
            // Prefer Nuxt app if available (works in server handlers / plugins)
            // If an event (like Nitro event) was passed, try to extract nuxtApp from it.
            if (event?.context?.nuxtApp) nuxtApp = event.context.nuxtApp
            else if (event?.context?.app) nuxtApp = event.context.app
            else nuxtApp = useNuxtApp()
        } catch {
            // useNuxtApp may throw if not available — ignore and try global fallbacks below
        }

        // Attempt to resolve supabase in common locations:
        // - nuxtApp.$supabase (module inject)
        // - nuxtApp.$supabase.client
        // - useSupabaseClient() composable (if available in this scope)
        let supabase: any | undefined

        if (nuxtApp) {
            supabase = nuxtApp.$supabase?.client ?? nuxtApp.$supabase ?? undefined
        }

        try {
            // try composable if present in this execution context
            // If not available this will throw / be undefined and we'll ignore it
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const maybeComposable: any = (globalThis as any).useSupabaseClient ?? undefined
            if (!supabase && typeof maybeComposable === 'function') {
                supabase = maybeComposable()
            }
        } catch {
            // ignore
        }

        if (!supabase) {
            // final attempt: try calling useSupabaseClient directly (if Nuxt provides it as a top-level import)
            try {
                // This will succeed only if this file is used in a setup context where useSupabaseClient is available.
                // Surround with try/catch to avoid runtime ReferenceError.
                // @ts-ignore
                const client = typeof useSupabaseClient === 'function' ? useSupabaseClient() : undefined
                if (client) supabase = client
            } catch {
                // ignore
            }
        }

        if (!supabase) {
            return { supabaseAvailable: false, authenticated: false, error: 'Supabase client not found on server (nuxtApp.$supabase or useSupabaseClient unavailable)' }
        }

        // Resolve session/user for supabase-js v2 and v1 compatibility
        if (supabase.auth && typeof supabase.auth.getSession === 'function') {
            const { data } = await supabase.auth.getSession()
            const session = data?.session ?? null
            return { supabaseAvailable: true, authenticated: !!session, session, user: session?.user ?? null }
        }

        if (supabase.auth && typeof supabase.auth.session === 'function') {
            // legacy v1
            const session = await supabase.auth.session()
            return { supabaseAvailable: true, authenticated: !!session, session, user: session?.user ?? null }
        }

        // Some integrations expose user directly (rare)
        if (supabase.auth && supabase.auth.user) {
            return { supabaseAvailable: true, authenticated: true, user: supabase.auth.user, session: null }
        }

        return { supabaseAvailable: true, authenticated: false, error: 'Supabase client found but no auth/session API detected' }
    } catch (err: any) {
        return { supabaseAvailable: false, authenticated: false, error: err?.message ?? String(err) }
    }
}

export default checkSupabaseAuthServer