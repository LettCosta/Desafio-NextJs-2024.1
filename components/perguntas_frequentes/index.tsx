import Title from "../title";
import CardPerguntas from "./card_pergunta";

export default function PerguntasFrequentes(){
    return(
        <div style={{background: 'linear-gradient(to bottom, #02012F, #96969C 250%)' }}  className=" items-center w-full  flex flex-col gap-6 md:gap-8 pb-24" >
            <div className="mt-16 mb-6">
                <h1 className="text-white text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl ">Perguntas Frequentes</h1>
            </div>
            <CardPerguntas perg="O que preciso para realizar a matrícula?" ans="Depois de escolher seu plano, basta ir à unidade mais próxima com um documento de identificação com foto e um comprovante de residência." />
            <CardPerguntas perg="Quais são as formas de pagamento aceitas pela BlueFit?" ans="Na BlueFit aceitamos dinheiro, cartões de crédito e débito, além de pix." />
            <CardPerguntas perg="Quais aulas são oferecidas pela BlueFit?" ans="Possuímos mais de 20 mobilidades de aulas coletivas. Entre elas: zumba, boxe, ciclismo, yoga, pilates, natação, alongamento, step, etc."/>
            <CardPerguntas perg="Como faço para cancelar meu plano?" ans="Para cancelamento você precisa entrar em contato com a equipe de suporte, que te enviará uma confirmação do cancelamento via e-mail. Ele deverá ser feito com no mínimo 15 dias de antecedência."/>
            <CardPerguntas perg="Como faço para receber o meu treino?" ans="Para receber o seu treino personalizado, basta agendar uma consulta conosco. Nossos profissionais altamente qualificados irão trabalhar diretamente com você para entender suas metas, necessidades e limitações específicas, criando um plano de treinamento adaptado exclusivamente para suas necessidades. Com suporte contínuo e ajustes conforme necessário, estamos aqui para guiá-lo em sua jornada fitness de forma eficaz e personalizada."/>
            <CardPerguntas perg="Quais são os serviços oferecidos pela academia?" ans="Nossa academia oferece uma ampla gama de serviços, incluindo musculação, aulas de grupo, treinamento personalizado, piscina, sauna, aulas de dança e muito mais. Temos tudo que você precisa para atingir seus objetivos fitness."/>
            <CardPerguntas perg="Posso experimentar a academia antes de me comprometer?" ans="Sim, oferecemos uma aula experimental gratuita para que você possa conhecer nossas instalações, experimentar algumas aulas e decidir se somos a escolha certa para você. Basta agendar sua visita através do nosso site."/>
            <CardPerguntas perg="Quais são os benefícios de se tornar um membro da academia?" ans="Como membro, você terá acesso ilimitado a todas as nossas instalações e aulas, incluindo a orientação de nossos instrutores especializados. Além disso, oferecemos descontos exclusivos em serviços adicionais e eventos especiais para nossos membros."/>
       
        </div>

    )
}