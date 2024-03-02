import { fetchMembers } from "@/back/adm/actions";
import ManageMembersTable from "@/components/table/manage-members";
import Title from "@/components/title";
import Link from "next/link";

type MembroProp = {
    searchParams: {
        page?: string,
    }
}

export default async function Page({searchParams} : MembroProp){

    const currentPage = Number(searchParams?.page) || 1

    const {members, totalPages} = await fetchMembers(currentPage)

    return(
        <div style={{background: 'linear-gradient(to bottom, #050437 60%, #3C3C41'}} className="min-h-screen w-full space-y-8 px-2 flex flex-col pb-16 items-center">
            <h1 className="text-white font-normal text-3xl mt-12  text-center">Gerenciamento de Membros</h1>
            <Link href={'/admin/manage/members/create'}>
                <button  className="transition ease-in-out delay-100 bg-blue-900/40  hover:scale-110 hover:bg-blue-900/80 duration-200 font-regular text-white py-2 px-3 rounded-3xl text-sm  shadow-lg">
                   NOVO MEMBRO 
                </button>
            </Link>
            <ManageMembersTable members={members} totalPages={totalPages}  currentPage={currentPage}/>

        </div>
    )
}