import Image from "next/image";

export default function TresImg(){
    return(
        
            <div>
                <div className="flex flex-row gap-12 px-10 py-20 justify-between">
                    <Image
                    width='500'
                    height='500'
                    src='/img/funcionarios.jpg'
                    alt="Logo"
                    className="rounded-xl h-52 w-64"
                    />
                    <Image
                    width='500'
                    height='500'
                    src='/img/funcionarios.jpg'
                    alt="Logo"
                    className="rounded-xl w-64 h-52"
                    />
                    <Image
                    width='500'
                    height='500'
                    src='/img/funcionarios.jpg'
                    alt="Logo"
                    className=" rounded-xl w-64 h-52"
                    />
                </div> 
    
            </div>
    )
}