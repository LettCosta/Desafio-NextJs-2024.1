import CreateMember from "@/components/crud/create";

export default function Page(){
    return(
        <div style={{background: 'linear-gradient(to bottom, #050437 60%, #3C3C41'}} className=" flex flex-col gap-6 pb-8">
            <CreateMember/>
        </div>
    )
}