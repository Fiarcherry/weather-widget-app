import { Component } from 'react'
import { connect } from 'react-redux'
import { addRow } from '../redux/actions'
import Button from './Button'
import Input from './Input'

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmitCitySearch = this.handleSubmitCitySearch.bind(this)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  handleSubmitCitySearch() {
    console.log('submit')
    this.props.addRow(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <Input
          placeholder="Название города"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <Button onClick={this.handleSubmitCitySearch} title="Поиск" />
      </div>
    )
  }
}

export default connect(null, { addRow })(SearchInput)
