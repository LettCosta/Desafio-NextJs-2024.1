import { fetchMembersById } from "@/back/adm/actions";
import EditMember from "@/components/crud/edit";

export default async function Page({params}: {
    params: {id:string}
}){

    const id= parseInt(params.id, 10)
    const member = await fetchMembersById(id);



    return(
            <EditMember member={member}/>
       
    )
}