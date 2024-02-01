import CardsPlanos from '@/components/cards_planos'
import PerguntasFrequentes from '@/components/perguntas_frequentes'
import Image from 'next/image'

export default function Home() {
  return (
   <>
    <div className="bg-black/95">
      <CardsPlanos/>
      <PerguntasFrequentes/>
    </div>
    hello
   </>
  )
}
