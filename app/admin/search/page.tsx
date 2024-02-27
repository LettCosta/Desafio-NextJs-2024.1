import { fetchFilteredMembers } from "@/back/search/actions";
import AdmSearchPage from "@/components/searchPage/adm";


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
            <AdmSearchPage count={count} members={members} totalPages={totalPages} />
        </div>
    )
}