import type { AppProps } from 'next/app'
import Image from 'next/image'

import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'

import logo from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="Logo Ignite Shop" />
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
