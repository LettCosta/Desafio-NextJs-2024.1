import CardsPlanos from '@/components/cards_planos'
import PerguntasFrequentes from '@/components/perguntas_frequentes'
import ContactUs from '@/components/contact_us'
import TresImg from '@/components/tresimg'

export default function Home() {
  return (
   <>
    <div className=' bg-gray-400' >
      <TresImg/>
      <div className='bg-blue-900 w-full h-0.1 rounded-lg shadow-sm'></div>
      <CardsPlanos/>
      <PerguntasFrequentes/>
      <ContactUs/>
    </div>
   </>
  )
}
