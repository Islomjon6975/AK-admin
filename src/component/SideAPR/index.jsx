
import React from 'react'
import { PairAPR } from './PairAPR'
import { SignleAPR } from './SingleAPR'
import { Container } from './style'


export const SideAPR = () => {
  return (
    <Container>
      <SignleAPR />
      <PairAPR />
      
    </Container>
  )
}
