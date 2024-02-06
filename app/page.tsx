import CardsPlanos from '@/components/cards_planos'
import PerguntasFrequentes from '@/components/perguntas_frequentes'
import ContactUs from '@/components/contact_us'

export default function Home() {
  return (
   <>
    <div className="bg-black/95">
      <CardsPlanos/>
      <PerguntasFrequentes/>
      <ContactUs/>
    </div>
    hello
   </>
  )
}
