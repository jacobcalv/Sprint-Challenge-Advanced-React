import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
  constructor(){
    super()
    this.state = {
      players : []
    }
  }
  componentDidMount() {
    this.fetchSoccerData()
  }
  fetchSoccerData = () => {
    axios.get('http://localhost:5000/api/players')
    .then(res => {
      console.log(res.data)
      this.setState({
        players: res.data
      })
    })
    .catch(error => {
      console.log('👎', error)
    })
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default App
