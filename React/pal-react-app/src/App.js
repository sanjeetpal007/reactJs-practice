import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponentx from './components/ParentComponentx'
import Usergreeting from './components/Usergreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import Form from './components/Form'

// Creating app in react
// npm install create-react-app -g
// create-react-app <project-name>
function App() {
  return (
    <div className="App">
    	<Form />
       { /*<Greet name="sanjeet" heroname="spider-man">
      <p>This is children</p></Greet>
      <Greet name="sagar" heroname="superman" >
      <button >Submit</button>
      </Greet>
      <Welcome name="welcome sanjeet" heroname="superman"></Welcome>
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponentx />
      <Usergreeting />
      <NameList />
      <Stylesheet primary={true}/>
     <Welcome />
      <Hello />*/}
    </div>
  );
}

export default App;
