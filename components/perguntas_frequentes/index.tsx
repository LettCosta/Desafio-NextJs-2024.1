import Title from "../title";
import CardPerguntas from "./card_pergunta";

export default function PerguntasFrequentes(){
    return(
        <div className="bg-black items-center w-full flex flex-col gap-4" >
            <Title title="PERGUNTAS PREQUENTES"/>
            <CardPerguntas text="O que preciso para realizar a matrícula?" />
            <CardPerguntas text="Quais são as formas de pagamento aceitas pela BlueFit?" />
            <CardPerguntas text="Quais aulas são oferecidas pela BlueFit?" />
            <CardPerguntas text="Como faço para cancelar meu plano?" />
        </div>

    )
}