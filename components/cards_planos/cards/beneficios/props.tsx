import { CheckSquare } from "lucide-react";

type BeneficiosProps = {
    text: string;
}

export default function Beneficios({text}: BeneficiosProps){
    return(
        <div className="flex flex-row items-start mx-2 mb-1 gap-3">
            <div className="flex items-center">
                <CheckSquare className=" text-blue-800 md:mt-1 w-5 h-5 "/> 
            </div>
            <span className="text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl">{text}</span>
        </div>
    )
}