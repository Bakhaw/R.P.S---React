import React, {Component} from 'react';
import {Button} from './components/Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: null,
      computerChoice: null,
      userScore: 0,
      computerScore: 0
    }
    this.setChoice = this.setChoice.bind(this)
  }

  setChoice(value) {
    this.setState({
      userChoice: value,
      computerChoice: ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)] //tableau dynamique: le tableau mathfloor va faire le random dans le tableau avec le strings
    }, () => this.compareChoice())
  }

  compareChoice() {
    const user = this.state.userChoice
    const computer = this.state.computerChoice

    if ((user === 'Rock' && computer === 'Scissors') || (user === 'Paper' && computer === 'Rock') || (user === 'Scissors' && computer === 'Paper')) {
      this.setState({
        userScore: this.state.userScore + 1
      }, () => console.log('User :', this.state.userScore))
    } else if (user != computer) {
      this.setState({
        computerScore: this.state.computerScore + 1
      }, () => console.log('Computer: ', this.state.computerScore))
    }
  }

  render() {
    return (
      <div>
        <Button content='Rock' setChoice={this.setChoice}/>
        <Button content='Paper' setChoice={this.setChoice}/>
        <Button content='Scissors' setChoice={this.setChoice}/>
        <p>user choice: {this.state.userChoice}</p>
        <img src={this.state.userChoice==='Rock'? './rock.png' : this.state.userChoice==='Scissors'? './scissors.png' : './paper.png'}/>
        <p>user score: {this.state.userScore}</p>
        <p>computer choice: {this.state.computerChoice}</p>
        <img src={this.state.computerChoice==='Rock'? './rock.png' : this.state.computerChoice==='Scissors'? './scissors.png' : './paper.png'}/>
        <p>computer score: {this.state.computerScore}</p>
      </div>
    );
  };
};

export default App;
