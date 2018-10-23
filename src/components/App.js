import React from 'react'
import styled from 'styled-components'
import Ledger from './Ledger'
import WishList from './WishList'
import LedgerForm from './LedgerForm'
import WishListForm from './WishListForm'
import { flex } from './Shared'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`

const App = () => (
  <div>
  <Flex alignItems="stretch">
    <LedgerForm />
    <WishListForm />
  </Flex>
  <Flex justifyContent="space-around">
  </Flex>
  <Container>
    <Ledger />
    <WishList />
  </Container>
  </div>
)

export default App