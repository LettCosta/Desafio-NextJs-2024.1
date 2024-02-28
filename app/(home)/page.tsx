import AboutUs from '@/components/about_us'
import CardsPlanos from '@/components/cards_planos'
import Depoimentos from '@/components/depoimentos'
import HorariosFuncionamento from '@/components/horarios'
import Inicio from '@/components/inicio'
import PerguntasFrequentes from '@/components/perguntas_frequentes'
import TresImg from '@/components/tresimg'

export default function Home() {
  return (
   <>
    <div style={{backgroundColor: '#F7F7F7'}} className=" " >
      <Inicio/>
      <AboutUs/>
      <TresImg/>
      <div className='bg-blue-900 w-full h-0.1 rounded-lg shadow-sm'></div>
      <CardsPlanos/>
      <HorariosFuncionamento/>
      <Depoimentos/>
      <PerguntasFrequentes/>
    </div>
   </>
  )
}
