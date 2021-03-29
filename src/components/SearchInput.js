import { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_ROW } from '../redux/actionTypes'
import Button from './Button'
import Input from './Input'

const mapDispatchToProps = (dispatch) => ({
  citySearch: (name) => {
    dispatch({ type: ADD_ROW, name })
  },
})

class SearchInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.submitCitySearch = this.submitCitySearch.bind(this)
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    })
  }

  submitCitySearch() {
    console.log('submit')
    this.props.citySearch(this.state.input)
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
        <Button onClick={this.submitCitySearch} title="Поиск" />
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchInput)
