import Image from "next/image";

export default function Delete(){
    return(
        <div className="bg-white rounded-lg flex flex-col gap-2">
            <div className="flex justify-center items-center">
                <Image
                src="/img/delete.png"
                alt="Interrogação"
                width={100}
                height={300}
                className="mt-4"
                />
            </div>
            <h1 className="text-black text-lg text-center">Realmente deseja deletar esse usuário?</h1>
            <div className="flex flex-row mb-4 justify-between">
                <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-6/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                    Cancelar
                </button>
                <button style={{backgroundColor: '#0A0953'}} className="font-semibold text-white py-1 px-3 rounded-3xl text-sm shadow-lg h-8 w-5/12 x1:w-3/12 2xl:w-2/12 text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
                    Confirmar
                </button>
            </div>
        </div>

    )
}