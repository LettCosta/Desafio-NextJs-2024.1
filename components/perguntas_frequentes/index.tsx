import Title from "../title";
import CardPerguntas from "./card_pergunta";

export default function PerguntasFrequentes(){
    return(
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }}  className=" items-center w-full flex flex-col gap-8 pb-12" >
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