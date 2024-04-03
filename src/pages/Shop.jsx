import React from 'react'
import Header from '../components/header/header'
import Features from '../components/features/features'
import Popular from '../components/popular/popular'
import Creater from '../components/craeter/creater'
import Components from '../components/components/components'

export default function Shop() {
  return (
    <div>

      <Header/>
      <Popular/>
      <Creater/>
      <Components/>
      <Features/>

    </div>
  )
}
