import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AppPlayerForm';

class App extends Component {

  state = {
      players: [
          {
              name: "Guil",
              score: 0,
              id: 1
          },
          {
              name: "Treasure",
              score: 0,
              id: 2
          },
          {
              name: "Ashley",
              score: 0,
              id: 3
          },
          {
              name: "James",
              score: 0,
              id: 4
          }
      ]
  }

  //player id counter
  prevPlayerId = 4;

  getHighScore = () => {
      const scores = this.state.players.map( p => p.score );
      const highScore = Math.max(...scores);
      if (highScore) {
          return highScore;
      }
      return null;
  }

  handleScoreChange = (index, delta) => {
        this.setState( prevState => ({
            score: prevState.players[index].score += delta
        }));
    }

    handleAddPlayer = (name) => {
        this.setState(prevState => {
            return {
                players: [
                    ...prevState.players,
                    //spread operator
                    {
                        name,
                        score: 0,
                        id: this.prevPlayerId += 1
                    }
                ]
            }
        });
    }

  handleRemovePlayer = (id) => {
      this.setState( prevState => {
          return {
              players: prevState.players.filter(p => p.id !== id)
              //When this function is invoked, we iterate through the player's array and state
              //and filter out only the player object whose id does not equal the id passed into handleRemovePlayer
          };
      })
  }

  render() {
    const highScore = this.getHighScore();

      return (
          <div className="scoreboard">
              <Header 
                  players={this.state.players}
              />
              {/* Players list */}
              {this.state.players.map( (player, index) =>
                  <Player 
                      name={player.name}
                      score={player.score}
                      id={player.id}
                      key={player.id.toString()}
                      index={index}
                      changeScore={this.handleScoreChange}
                      removePlayer={this.handleRemovePlayer}
                      isHighScore={highScore === player.score} // is a plyer's 'score' prop equal to the high score?
                  />
              )}
              
            <AddPlayerForm addPlayer={this.handleAddPlayer}/>
          </div>
      );    
  }
}

export default App;