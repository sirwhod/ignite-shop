import Image from 'next/image'

import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from '../assets/shirts/1.png'
import camiseta2 from '../assets/shirts/2.png'
// import camiseta3 from '../assets/shirts/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image width={520} height={480} src={camiseta1} alt="Camiseta 1" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image width={520} height={480} src={camiseta2} alt="Camiseta 2" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
