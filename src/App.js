import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurfs } from "./actions/index";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {
  componentDidMount(){
    this.props.dispatch(addSmurfs());
  }
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}


export default  connect(null) (App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.