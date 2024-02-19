import EditMember from "@/components/crud/edit";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Page(){
    return(
        <div style={{background: 'linear-gradient(to bottom, #050437 60%, #3C3C41'}} className=" flex flex-col gap-6 pb-8">
            <Link className="w-0" href='/admin/manage/members'>
                <ArrowLeft className="text-white size-6 lg:size-10 lg:ml-12 lg:mt-12 mt-8 ml-8 justify-start"/>
            </Link>
            <EditMember/>
        </div>
    )
}