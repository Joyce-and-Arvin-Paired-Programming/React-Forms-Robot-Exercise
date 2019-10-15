import React from 'react';
import './App.css';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
      form: {
        inputText: ""
      },
      translateBla: ""
    }
  }
  
  
  handleChange = (e) => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    // set state only changes the first level thus why why update form object  
    this.setState({form})
  }

  render() {
    const { inputText } = this.state.form

    
    return (
      // const { inputText } = this.state.form

      <div className="App">
        <h1>Robot Active Listening</h1>
        <React.Fragment>
        <form>
            <p>Say Something</p>
            <input type="text" 
                   name="inputText"
                   onChange={this.handleChange}
                   placeholder="Say Something"
                   autoComplete="off"
                   /> 
          </form>
        </React.Fragment>
        <GoodRobot inputText = {inputText} />
        <BadRobot inputText = {inputText} />

      </div>
    );  
  }
}

export default App;
