import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


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
 
  const Container = styled.div`
    border-top: 2rem solid black;

  `
  const CardContainer = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 90%;
    margin-left: 7%
  `
  const Card = styled.div`
    width: 35%;
    background-color: black;
    margin: 2%;
    padding: 2%;
    border-right: 1rem solid green;
  `

  const Name = styled.h1`
    color: white;
    text-align: center;

  `
  const Country = styled.h2`
    color: orange; 
    text-align: center;
  `
  const Title = styled.h1`
    text-align: center;
    font-family: 'Bungee Outline', cursive;
    font-size: 3.5rem;
  `
  const Rank = styled.h2`
    color: lightBlue; 
    text-align: center;
  `
    return (
      <Container>
      <Title>Women's World Cup Players Ranked By Search Interest</Title>
      <CardContainer>
        {this.state.players.map((player,index) => (
              <Card key={index}>
                <Name>{player.name}</Name>
                <Country>{player.country}</Country>
                <Rank>#{index + 1}</Rank>
              </Card>
          ))}
      </CardContainer>
    </Container>  
    )
  }
}

export default App
