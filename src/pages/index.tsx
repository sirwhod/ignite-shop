import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'
import { HomeContainer, Product } from '@/styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        return (
          <Product className="keen-slider__slide" key={product.id}>
            <Image
              width={520}
              height={480}
              src={product.imageUrl}
              alt="Camiseta 2"
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const respone = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = respone.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
    }
  })

  return {
    props: {
      products,
    },
  }
}
