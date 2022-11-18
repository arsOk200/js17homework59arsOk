import React, {Component} from 'react';
import ListItem from '../List-Item/ListItem'



class List extends Component {
  render() {
    return (
      <div className='List'>
      <h1>My movie list</h1>
        <ListItem/>
      </div>
    );
  }
}

export default List;