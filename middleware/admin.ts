export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabaseClient()

    console.log('Admin middleware triggered for route:', to.path)
    if(to.path === '/admin/login' || to.path.startsWith('/admin') === false) {
        return
    }

    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
        return navigateTo('/')
    }

})