import CardsPlanos from '@/components/cards_planos'
import Inicio from '@/components/inicio'
import PerguntasFrequentes from '@/components/perguntas_frequentes'
import TresImg from '@/components/tresimg'

export default function Home() {
  return (
   <>
    <div style={{backgroundColor: '#F7F7F7'}} className=" " >
      <Inicio/>
      <div className='flex py-16'>
        <TresImg/>
      </div>
      <div className='bg-blue-900 w-full h-0.1 rounded-lg shadow-sm'></div>
      <CardsPlanos/>
      <PerguntasFrequentes/>
    </div>
   </>
  )
}
