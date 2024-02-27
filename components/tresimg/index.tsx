import { transform } from "next/dist/build/swc";
import Image from "next/image";
import { Transform } from "stream";

const images = [
    '/img/inicio.jpg',
    '/img/delete.png',
    '/img/a.jpg',
  ];

export default function TresImg(){
    return(
           
            <div>
                <div className="flex flex-col md:flex-row gap-12 mx-6 justify-between">
                    <div className="bg-blue-950/90 rounded-xl h-72 px-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md justify-center pb-8">
                        <Image
                        width='500'
                        height='500'
                        src='/img/professor.jpg'
                        alt="Logo"
                        className="rounded-xl w-80 h-48"
                        />
                        <h2 className="text-white text-xl mt-4 text-center">Profissionais qualificados</h2>
                    </div> 
                    <div className="bg-blue-950/80 rounded-xl h-72 px-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md justify-center pb-8">
                        <Image
                        width='500'
                        height='500'
                        src='/img/bicicleta.jpg'
                        alt="Logo"
                        className="rounded-xl max-h-40 w-80"
                        /> 
                        <h2 className="text-white text-xl mt-4 text-center">Mais de 20 modalidades de aulas coletivas</h2>
                    </div> 
                    <div className="bg-blue-950 rounded-xl h-72 px-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md justify-center pb-8">
                        <Image
                        width='500'
                        height='500'
                        src='/img/academia.jpg'
                        alt="Logo"
                        className="rounded-xl max-h-40 w-80"
                        />
                        <h2 className="text-white font-medium text-xl mt-4 text-center">Equipamentos de qualidade</h2>
                    </div> 
                </div> 
    
            </div>
    )
}