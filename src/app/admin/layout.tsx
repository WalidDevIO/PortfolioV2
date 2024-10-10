import { pathname } from 'next-extra/pathname'
import { createClientServer } from '@/lib/supabase'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/admin/navbar'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode,
}) {
    const supabase = createClientServer()
    const { data: { session } } = await supabase.auth.getSession()
    if (!session && pathname() !== "/admin") {
        redirect('/admin')
    }
    if(session && pathname() === "/admin") {
        redirect('/admin/dashboard')
    }

    return <>
        {pathname() !== "/admin" && <Navbar />}
        {children}
    </>
}