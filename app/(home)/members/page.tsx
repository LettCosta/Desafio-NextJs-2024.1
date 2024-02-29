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
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }} className="w-full px-12 min-h-screen flex flex-col justify-start items-center">
            <h1 className="text-white font-medium text-2xl mt-12 mb-12 text-center">Página de membros</h1>
            <MembersPage currentPage={currentPage} totalPages={totalPages} members={members} />
        </div>
    )
}