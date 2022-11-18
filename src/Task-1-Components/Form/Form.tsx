import React, {Component} from 'react';
import {Movie} from "../../type";

interface Props {
    movies:Movie[];
}

class Form extends Component<{} , Props> {

  state: Props = {
    movies:[
      {id:'1', title:'Spider man'}
    ]
  }

  onMovieName = (e:React.ChangeEvent<HTMLInputElement>)=> {
    this.setState(prev => ({
      ...prev,
      id:Math.random().toString(),
      title:e.target.value,
    }));
  };


  movieAddFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    // this.setState()
    };


  render() {
    return (
      <form className='m-3 d-flex justify-content-center'>
        <input onChange={this.onMovieName} type="text" className='input-group-text w-75' placeholder='Your movie'/>
        <button type='submit' className='btn btn-primary ms-3'>Add</button>
      </form>
    );
  }
}

export default Form;