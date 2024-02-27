import { fetchMembersById } from "@/back/adm/actions";
import ViewMember from "@/components/crud/viewMember";


export default async function Page({params}: {
    params: {id:string}
}){

    const id= parseInt(params.id, 10)
    const member = await fetchMembersById(id);

    return(
        <div className=" min-h-screen">
            <ViewMember member={member}/>
        </div>
    )
}