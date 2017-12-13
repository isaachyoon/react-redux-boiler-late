import React from 'react';
import { connect } from 'react-redux';
// import {clientData} from '../../actions';
// import {login} from '../../services/api/index'
import styles from './index.css'


class Authentication extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  
  onChangeCredentials(type, evt) {
    if(type === 'username') {
      this.setState({
        username: evt.target.value
      })
    } 
    if(type === 'password') {
      this.setState({
        password: evt.target.value
      })
    } 
  }
  submitCredentials(){
    console.log(this.state)
  }



  render(){
    return(
      <div className="container">
        User Name: <input type="text" name="username" onChange = {this.onChangeCredentials.bind(this, 'username')}/> <br/>
        Password: <input type="text" name="password" onChange = {this.onChangeCredentials.bind(this, 'password')}/>
        <button onClick={this.submitCredentials.bind(this)}> submit </button>
      </div>
    )
  }
}

export default Authentication