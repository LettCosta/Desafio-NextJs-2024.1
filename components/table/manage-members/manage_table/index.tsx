
import { Membro } from "@prisma/client";
import { DeleteButton, EditButton, ViewButton } from "../../buttons";

export default function ManageMembers({members}: {members:Membro}){
    return(
        <tr className="border-b hover:bg-blue-900/30">
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl lg:text-lg">
                {members?.id} 
            </td>
            
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-md lg:text-lg">
                {members?.name} 
            </td>
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-md lg:text-lg">
                {members?.cargo} 
            </td>
            <td className="px-6 py-6 font-medium text-sm xl:text-lg 2xl:text-xl 3xl:text-2xl md:text-md lg:text-lg">
                {members?.email} 
            </td>
            <td className="px-6 py-6 items-center flex text-center align-middle self-center gap-3 ">
                <ViewButton id={members.id}/>
                <EditButton id={members.id}/>
                <DeleteButton id={members.id}/>
            </td>
        </tr>  
    )
}