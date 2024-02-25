import { CheckSquare } from "lucide-react";
import Beneficios from "./props";

export default function BeneficiosDiario(){
    return(
        <div className="flex flex-col w-full gap-3 md:gap-2 mb-6 md:mb-0">
            <Beneficios text="Acesso completo às instalações da academia por um dia."/>
            <Beneficios text="Participação em aulas de grupo disponíveis no dia da visita."/>
            <Beneficios text="Treino cardio e musculação em equipamentos modernos."/>
            <Beneficios text="Wi-Fi gratuito."/>
            <Beneficios text="Acompanhamento de um instrutor para orientação inicial."/>
            <Beneficios text="Vestiários com armários e chuveiros."/>
            <Beneficios text="Nutricionista disponível para consultas (custo adicional)."/>
            <Beneficios text="Avaliação física completa (custo adicional)."/>        
     </div>
    )
}