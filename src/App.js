import React, { Component } from 'react';
import { GET, PUT} from './fetchRequest';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: ''
    }

  }
  componentWillMount() {
    this.getAllUserData();
  }

  getAllUserData = () => {
    GET('/notes/all')
      .then(res => this.setState({data: res})
    )
  }

  changeUser = (userHashId, name, surname) => {
    PUT(
      '/notes/all',
      {_id: userHashId, name, surname}
    )
  }

  render() {
    const { data } = this.state;
    console.log(data);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <section>
          {data
            ? data.map(user => (
                <React.Fragment key={user._id}>
                  <span>{user.name} </span>
                  <span>{user.surname}</span>
                  <hr/>
                </React.Fragment>
              ))
            : ''
          }
        </section>
      </div>
    );
  }
}

export default App;
