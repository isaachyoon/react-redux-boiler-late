import React from 'react';
import { connect } from 'react-redux';
import {clientData} from '../../actions';
import {login} from '../../services/api/index'
import styles from './index.css'

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      number: ''
    }
  }
 
  submitInfo(input) {
    console.log(this.state.name, this.state.number)
    login();
    this.props.clientData({
      name: this.state.name,
      number: this.state.number
    })
  }
  updateInputValue(type, evt) {
    if(type === 'name') {
      this.setState({
        name: evt.target.value
      })
    } if(type === 'number') {
      this.setState({
        number: evt.target.value
      })
    }
  }

  render(){
    return(
      <div className="container">
      <div>
        <p>What is Lorem Ipsum? you tell me</p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      <div>
        Name: <input type="text" value = {this.state.name} name="fname" onChange={this.updateInputValue.bind(this, 'name')}/> 
        Number: <input type="text" value = {this.state.number} name="number" onChange={this.updateInputValue.bind(this, 'number')}/>
        <button onClick={this.submitInfo.bind(this)}> submit </button>
      </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('7', state)
  return {clientData: state.client}
}

export default connect(mapStateToProps, {clientData})(Header);