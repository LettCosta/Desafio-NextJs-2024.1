import Title from "../title";
import CardPerguntas from "./card_pergunta";

export default function PerguntasFrequentes(){
    return(
        <div className="bg-black items-center w-full flex flex-col gap-8" >
            <div className="mt-12 mb-8">
                <Title title="PERGUNTAS PREQUENTES"/>
            </div>
            <CardPerguntas text="O que preciso para realizar a matrícula?" />
            <CardPerguntas text="Quais são as formas de pagamento aceitas pela BlueFit?" />
            <CardPerguntas text="Quais aulas são oferecidas pela BlueFit?" />
            <CardPerguntas text="Como faço para cancelar meu plano?" />
        </div>

    )
}