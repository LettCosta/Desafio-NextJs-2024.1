import { fetchFilteredMembers } from "@/back/search/actions";
import SearchPage from "@/components/searchPage";


export default async function Page({
    searchParams,
}:{
    searchParams:{
        query?: string;
        page?: string;
    }
}) {

    const query=searchParams?.query || ''
    const currentPage= Number(searchParams?.page) || 1

    const {members,count, totalPages} = await fetchFilteredMembers(query, currentPage)

    return(
        <div className="min-h-screen">
            <SearchPage count={count} members={members} totalPages={totalPages} />
            
        </div>
    )
}