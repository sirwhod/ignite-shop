import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from '../assets/shirts/1.png'
import camiseta2 from '../assets/shirts/2.png'
import camiseta3 from '../assets/shirts/3.png'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={camiseta1} alt="Camiseta 1" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={camiseta2} alt="Camiseta 2" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={camiseta3} alt="Camiseta 3" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image width={520} height={480} src={camiseta3} alt="Camiseta 3" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return {
    props: {
      list: [1, 2, 3],
    },
  }
}
