import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 }
    ]
  }
  addNinja = (ninja) => {
      ninja.id = Math.random();
      let ninjas = [...this.state.ninjas, ninja]
      this.setState({
          ninjas: ninjas
      })
  }
  deleteNinja = (id) => {
      let ninjas = this.state.ninjas.filter(ninja => {
          return ninja.id !== id
      });
      this.setState({
          ninjas: ninjas
      })
  }
  componentDidMount(){
      console.log("component mounted");
  }
  componentDidUpdate(prevProps, prevState) {
      console.log("component updated");
      console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first react App!</h1>
        <p>Welcome!</p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja}/>
      </div>
    );
  }
}

export default App;






//Previous Lessons
/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <title>Document</title>
</head>
<body>


    <div id="app"></div>

    <script type="text/babel">
        class App extends React.Component {
            state = {
                name: 'Ryu',
                age: 30
            }
            // handleClick = (e) => {
            //     // console.log(e.target);
            //     this.setState({
            //         name: 'Yoshi',
            //         age: 25
            //     });
            //     console.log(this.state);
            // }
            // handleMouseOver = (e) => {
            //     console.log(e.target, e.pageX);
            // }
            // handleCopy = (e) => {
            //     console.log("Try Being original for once");
            // }
            handleChange = (e) => {
                this.setState({
                    name: e.target.value
                })
            }
            handleSubmit = (e) => {
                e.preventDefault();
                console.log("form submitted", this.state.name);
            }
            render() {
                return (
                    <div className="app-content">
                        <h1>My name is { this.state.name }</h1>
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" onChange={ this.handleChange} />
                            <button>Submit</button>
                        </form>
                    </div>
                )
            }
        }
                        // <h1>Hey, ninjas</h1>
                        // <button onClick={this.handleClick}>Click Me</button>
                        // <button onMouseOver={this.handleMouseOver}>Hover Me</button>
                        // <p onCopy={this.handleCopy}>What we think, we become</p>
        ReactDOM.render(<App />, document.getElementById('app'));
    </script>
    
</body>
</html> */
