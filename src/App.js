import React, { Component } from 'react';
import './App.css';
import FlipMove from 'react-flip-move';

class App extends Component {
  state = {
    newTech: '',
    techs: ['Node.js', 'ReactJS', 'React Native']
  };

  // Executando assim que o componenteaparece na tela
  componentDidMount() {
    const techs = localStorage.getItem('techs');
    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  //Executado sempre que houver alterações nas props ou estado
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
      localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      techs: [...this.state.techs, this.state.newTech],
      newTech: ''
    });
  };

  removeTech = tech => {
    this.setState({
      techs: this.state.techs.filter(ti => ti !== tech)
    });
  };

  render() {
    return (
      <div className='App'>
        <form onSubmit={this.handleSubmit}>
          <h2>Add a Tech</h2>
          <input
            type='text'
            placeholder='tech'
            onChange={this.handleInputChange}
            value={this.state.newTech}
          />
          <input type='submit' value='add a tech' className='submit' />
          <ul>
            <FlipMove duration={500} ease-in-out='true'>
              {this.state.techs.map(tech => (
                <li key={tech}>
                  {tech}{' '}
                  <span onClick={() => this.removeTech(tech)}>&times;</span>
                </li>
              ))}
            </FlipMove>
          </ul>
        </form>
      </div>
    );
  }
}
export default App;
