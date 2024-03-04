import { fetchMembers } from "@/back/adm/actions";
import MembersPage from "@/components/members_page";

type MembroProp = {
    searchParams: {
        page?: string,
    }
}

export default async function Page({searchParams} : MembroProp){
    
    const currentPage = Number(searchParams?.page) || 1
    const {members, totalPages} = await fetchMembers(currentPage)
        
    
    return(
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }} className="w-full pb-16 px-2 md:px-12 min-h-screen flex flex-col justify-start items-center">
            <h1 className="text-white font-normal text-3xl mt-12 mb-6 text-center">Lista de Membros</h1>
            <MembersPage currentPage={currentPage} totalPages={totalPages} members={members} />
        </div>
    )
}