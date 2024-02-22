import { membersAll } from "@/back/search/actions";
import ManageMembersTable from "@/components/table/manage-members";
import Title from "@/components/title";
import Link from "next/link";

export default async function Page(){
    
    const {members} = await membersAll();

    return(
        <div style={{background: 'linear-gradient(to bottom, #050437 60%, #3C3C41'}} className=" w-full space-y-12 flex flex-col items-center">
            <Title title="Gerenciamento de Membros"/>
            <Link href={'/admin/manage/members/create'}>
                <button style={{backgroundColor: '#0A0953'}} className="font-medium text-white py-2 px-3 rounded-3xl text-sm  shadow-lg">
                   NOVO MEMBRO 
                </button>
            </Link>
            <ManageMembersTable members={members} />

        </div>
    )
}