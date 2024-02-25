

import { editMember } from "@/back/admin/actions";
import { Membro } from "@prisma/client";
import Image from "next/image";

export default function EditMember({member}:{member:Membro|null}){
    
    const editMemberWithId = editMember.bind(null, member?.id);

    return(
        <div className=" flex flex-col-reverse items-center justify-around md:flex-row-reverse w-full p-4 ">
            <div className="md:mb-6">
                <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl 3xl:text-7xl mb-16 mt-10 md:mt-16">EDITAR MEMBRO</h1>
                <form className="flex flex-col gap-4" autoComplete="off" action={editMemberWithId}>
                    <div className="flex flex-col gap-2 items-center">
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Nome</label>
                        <input name="name" placeholder="Nome" className=" rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={member?.name} />
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Cargo</label>
                        <input name="cargo" placeholder="Cargo" className=" rounded-3xl mb-6 lg:w-64 lg:mb-8 h-7 px-2" defaultValue={member?.cargo}/>
                        <label className="text-white font-medium text-md md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl">Email</label>
                        <input name="email" placeholder="Email" className=" rounded-3xl h-7 lg:w-64 px-2" defaultValue={member?.email} />
                    </div>
                    <div className="flex flex-row justify-between">
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-6/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                            Descartar
                        </button>
                        <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-5/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
            <Image
                width='500'
                height='500'
                src='/img/edit.png'
                alt="Imagem ilustrativa de edição"
                className="w-64"
            />
        </div>
    )
}