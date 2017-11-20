import data from '../mock.json'

const INITIAL_STATE = {
  name:'',
  email:'',
  phone:'',
  status:''
}
export default (state = INITIAL_STATE, action) => {
  console.log('10', state, action)
  switch (action.type) {
    case 'clientData': 
      return { clientData: action.payload};
    default:
      return state;
  }
}

