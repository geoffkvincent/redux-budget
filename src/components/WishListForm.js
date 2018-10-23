import React from 'react'
import { connect } from 'react-redux'
import { addEntry } from '../reducer/ledger'
import {Input, Button, Flex, FormBox} from './Shared'

class LedgerForm extends React.Component {
  defaultState = {
    amt: '',
    description: '',
    type: 'Debit',
  }

  state = this.defaultState

  handleSubmit = () => {
    e.preventDefault()
    this.props.dispatch(addEntry(this.state))
    this.setState(this.defaultState)
  }

  handleChange = () => {
    const { value, name } = e.target
    this.setState({[name]: value})
  }

  render() {
    const{ amt, description, type} = this.state
    return(
      <FormBox onSubmit={this.handleSubmit}>
        <Flex
          alignItems="stretch"
          direction="column"<
        >
          <Input
          />
          <Input
            name="description"
            placeholder="Description"
            value={description}
            onChange={this.handleChange}
          />
        </Flex>
      </FormBox>
    )
  }

}

export default connect()(LedgerForm)