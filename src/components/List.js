import React, { Component } from 'react';
import uuid from 'uuid/v4';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        // { title: 'make coffee', priority: 'medium', id: uuid() },
        // { title: 'meet Paul', priority: 'high', id: uuid() },
        // { title: 'clean the mess up', priority: 'low', id: uuid() },
        // { title: 'wash the dishes', priority: 'medium', id: uuid() }
      ],
      title: '',
      priority: '',
      id: uuid()
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput = e => {
    this.setState({
      [e.taget.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, priority } = this.state;
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: this.state.title,
          priority: this.state.priority,
          id: uuid()
        }
      ]
    });
  };

  render() {
    return (
      <ul className='list'>
        <h2>Add Items</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='title'
            onChange={this.handleInput}
            name='title'
          />
          <input
            type='text'
            placeholder='priority'
            onChange={this.handleInput}
            name='priority'
          />
          <input type='submit' value='add task' className='submit' />
        </form>
        <h2>My daily tasks</h2>
        {this.state.tasks.map(task => {
          return (
            <li className='item' key={task.id}>
              {task.title}
              <span className='badge'>{task.priority}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default List;
