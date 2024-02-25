import { CheckSquare } from "lucide-react";
import Beneficios from "./props";

export default function BeneficiosMensal(){
    return(
        <div className="flex flex-col w-full gap-3 md:gap-2 mb-6 md:mb-0">
            <Beneficios text="Acesso ilimitado à academia durante um mês."/>
            <Beneficios text="Treino personalizado com um instrutor especializado."/>
            <Beneficios text="Participação em todas as aulas de grupo oferecidas."/>
            <Beneficios text="Utilização da piscina e da sauna."/>
            <Beneficios text="Wi-Fi gratuito e acesso às áreas de relaxamento."/>
            <Beneficios text="Avaliação física inicial e plano de treino personalizado"/>
            <Beneficios text="Vestiários com armários e chuveiros."/>
     </div>
    )
}