import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form className='mt-3 d-flex justify-content-center'>
        <input type="text" className='input-group-text' placeholder='Your movie'/>
        <button type='submit' className='btn btn-primary ms-3'>Add</button>
      </form>
    );
  }
}

export default Form;