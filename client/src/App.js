import React, { Component} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import FavoritePlayer from "./favoritePlayer"

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
      this.setState({
        players: res.data
      })
    })
    .catch(error => {
      console.log(error)
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
    margin-left: 10%
  `
  let Card = styled.div`
    width: 35%;
    background-color: black;
    margin: 2%;
    padding: 2%;
    border-right: 1rem solid green;
  `

  const Name = styled.h1`
    color: white;
    text-align: center;
    font-family: 'Bungee', cursive;
  `
  const Country = styled.h2`
    color: orange; 
    text-align: center;
  `
  const Title = styled.h1`
    text-align: center;
    font-family: 'Bungee Shade', cursive;
    font-size: 3rem;
  `
  const Rank = styled.h2`
    color: lightBlue; 
    text-align: center;
  `
  const Button = styled.button`
  
  `
  
    return (
      <div data-testid='app-test' className="App">
      <Container>

      <Title data-testid="main-header">Women's World Cup Players Ranked By Search Interest</Title>
      <FavoritePlayer/>
      {/* <Button onClick={toggleInvert}>Invert Cards</Button>  */}
      <CardContainer>
        {this.state.players.map((player,index) => (
              <Card key={index} id='card' >
                <Name>{player.name}</Name>
                <Country>{player.country}</Country>
                <Rank>#{index + 1}</Rank>
              </Card>
          ))}
      </CardContainer>
    </Container>  
    </div>
    )
  }
}

export default App
