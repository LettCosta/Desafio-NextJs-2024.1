import prisma from "@/lib/db"
import { Membro } from "@prisma/client"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"



export default function ViewMember({member}:{member:Membro|null}){
    return(
        
        <div className="bg-zinc-100 flex items-center justify-center min-h-screen">
            <div className="bg-white w-4/5 flex-col rounded-lg items-center h-5/6 justify-center mb-6">
                <Link className="w-0" href='/admin/manage/members'>
                    <ArrowLeft className="text-blue-900 size-6 lg:size-10 lg:ml-12 lg:mt-12 mt-8 ml-8 justify-start"/>
                </Link>
                <div className=" flex flex-col-reverse items-center justify-around md:flex-row-reverse ">
                    <div className="md:mb-12">
                        <h1 className="text-blue-900 font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-8">VISUALIZAR MEMBRO</h1>
                            <div className="flex flex-col gap-2 items-center">
                                <label className="text-black font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Nome</label>
                                <input name="name" placeholder="Nome" className=" drop-shadow-xl border-zinc-200 border  shadow-inherit rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={member?.name} />
                                <label className="text-black font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Cargo</label>
                                <input name="cargo" placeholder="Cargo" className="drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={member?.cargo}/>
                                <label className="text-black font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Email</label>
                                <input name="email" placeholder="Email" className=" drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl h-7 lg:w-64 px-2" defaultValue={member?.email} />
                            </div>
                        
                    </div>
                    
                    <Image
                        width='500'
                        height='500'
                        src='/img/edit.png'
                        alt="Imagem ilustrativa de edição"
                        className=" w-80"
                    />
                </div>
            </div>
        </div>
    )
}