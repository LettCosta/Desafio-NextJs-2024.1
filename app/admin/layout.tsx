import AdminSideBar from "@/components/admin_sidebar"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return(
        <section>
            <AdminSideBar />
            <section className=" sm:pl-20 sm:ml-40  ">
                {children}
            </section>
        </section>

    )
}

