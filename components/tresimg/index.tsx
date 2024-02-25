import Image from "next/image";

export default function TresImg(){
    return(
        
            <div>
                <div className="flex flex-row gap-12 px-10 py-20 justify-between">
                    <div className="bg-white rounded-xl h-72 px-6 flex items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md justify-center pb-8">
                        <Image
                        width='500'
                        height='500'
                        src='/img/funcionarios.jpg'
                        alt="Logo"
                        className="rounded-xl h-52 w-64"
                        />
                    </div> 
                    <div className="bg-white rounded-xl h-72 px-6 flex items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md justify-center pb-8">
                        <Image
                        width='500'
                        height='500'
                        src='/img/funcionarios.jpg'
                        alt="Logo"
                        className="rounded-xl h-52 w-64"
                        />
                    </div> 
                    <div className="bg-white rounded-xl h-72 px-6 flex items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-md justify-center pb-8">
                        <Image
                        width='500'
                        height='500'
                        src='/img/funcionarios.jpg'
                        alt="Logo"
                        className="rounded-xl h-52 w-64"
                        />
                    </div> 
                </div> 
    
            </div>
    )
}