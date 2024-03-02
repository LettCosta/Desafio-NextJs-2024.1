import AboutUs from '@/components/about_us'
import CardsPlanos from '@/components/cards_planos'
import Depoimentos from '@/components/depoimentos'
import HorariosFuncionamento from '@/components/horarios'
import OurServices from '@/components/ourservices'
import PerguntasFrequentes from '@/components/perguntas_frequentes'
import TresImg from '@/components/tresimg'

export default function Home() {
  return (
   <>
    <div style={{backgroundColor: '#F7F7F7'}} className=" " >
      <AboutUs/>
      <OurServices/>
      <div className='bg-blue-900 w-full h-0.1 rounded-lg shadow-sm'></div>
      <CardsPlanos/>
      <TresImg/>
      <HorariosFuncionamento/>
      <Depoimentos/>
      <PerguntasFrequentes/>
    </div>
   </>
  )
}
