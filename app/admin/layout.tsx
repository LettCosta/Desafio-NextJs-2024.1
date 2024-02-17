import AdminSideBar from "@/components/admin_sidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <AdminSideBar />
            <section className=" sm:px-20 sm:ml-64 ">
                {children}
            </section>
        </section>

    )
}

