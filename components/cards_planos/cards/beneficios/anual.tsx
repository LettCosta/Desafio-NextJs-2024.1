import { CheckSquare } from "lucide-react";
import Beneficios from "./props";

export default function BeneficiosAnual(){
    return(
        <div className="flex flex-col w-full gap-3 md:gap-2 mb-6 md:mb-0">
            <Beneficios text="Acesso ilimitado durante todo o ano."/>
            <Beneficios text="Treino personalizado e acompanhamento contínuo com um instrutor."/>
            <Beneficios text="Participação em aulas coletivas e eventos exclusivos para membros."/>
            <Beneficios text="Consultas mensais com um nutricionista para planos alimentares personalizados."/>
            <Beneficios text="Utilização livre de todas as áreas, incluindo piscina, sauna e estacionamento VIP."/>
            <Beneficios text="Wi-Fi gratuito em toda a academia e áreas de relaxamento."/>
            <Beneficios text="Avaliação física completa a cada 3 meses com reavaliações."/>
            <Beneficios text="Acesso prioritário em horários de pico."/>
     </div>
    )
}