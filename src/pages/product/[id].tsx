import Image from 'next/image'
import { useRouter } from 'next/router'

import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src="" alt="" />
      </ImageContainer>
      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
          consequuntur assumenda facere ab! Unde alias, animi, quaerat sit
          reiciendis, doloribus exercitationem repellendus dolorum esse maiores
          provident voluptates a. Vero, minus.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
