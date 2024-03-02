import { createMember } from "@/back/adm/actions";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CreateMember(){
    return(
        <div className="bg-gradient-to-b from-blue-950 to-gray-600 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white w-full md:p-2 lg:p-8 md:w-3/4 flex-col shadow-md rounded-lg items-center h-4/5 justify-center">
                <Link className="" href='/admin/manage/members'>
                    <ArrowLeft className="text-blue-900 size-6 lg:size-10 lg:ml-6 mt-6 ml-6 justify-start"/>
                </Link>
                <div className=" flex flex-col-reverse items-center justify-around md:flex-row-reverse ">
                    <div className="w-1/2">
                        <h1 className="text-blue-900 text-center font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-8">CRIAR NOVO MEMBRO</h1>
                        <form className="flex flex-col gap-4 items-center" autoComplete="off" action={createMember}>
                            <div className="flex flex-col gap-2 items-center">
                                <label className="text-blue-900 font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Nome</label>
                                <input name="name" placeholder="Nome" className="  drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl h-7 lg:w-64 px-2 " />
                                <label className="text-blue-900 font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-3">Cargo</label>
                                <input name="cargo" placeholder="Cargo" className="  drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl h-7 lg:w-64 px-2"/>
                                <label className="text-blue-900 font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-3">Email</label>
                                <input name="email" placeholder="Email" className="  drop-shadow-xl border-zinc-200 border shadow-inherit rounded-3xl h-7 lg:w-64 px-2"/>
                            </div>
                            <div className="flex justify-center items-center w-full mt-4 mb-4">
                                <button style={{backgroundColor: '#0A0953'}} className="font-semibold px-3 md:px-6 text-white rounded-3xl h-6 md:h-7 lg:h-9 xl:h-10  text-center w-28 md:w-32 lg:w-48  text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                    
                    <Image
                        width='500'
                        height='500'
                        src='/img/create.png'
                        alt="Imagem ilustrativa de criar"
                        className="w-64 md:w-80 lg:w-96"
                    />
                </div>
            </div>
        </div>
    )
}