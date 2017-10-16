import React, {Component} from 'react';

export class Button extends Component {
  handleClick(e) {
    e.target.textContent //textContent permet de récuperer le texte du button
    this.props.setChoice(e.target.textContent)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>{this.props.content}</button>
      </div>
    )
  };
}
