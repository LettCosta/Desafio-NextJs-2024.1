import { fetchFilteredMembers } from "@/back/search/actions";
import MembersPage from "@/components/members_page";
import SearchPage from "@/components/searchPage";

export default async function Page() 
{
    
        const query=''
        const currentPage= 1
    
        const {members} = await fetchFilteredMembers(query, currentPage)
        
    
    return(
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }} className="w-full py-16 px-12  min-h-screen flex justify-center items-center">
            <MembersPage totalPages={7} members={members} />
        </div>
    )
}