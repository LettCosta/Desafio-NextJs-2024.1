import AdminHeader from "@/components/admin_header"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <AdminHeader/>
                {children}
        </section>

    )
}

