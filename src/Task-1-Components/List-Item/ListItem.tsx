import React, {Component} from 'react';

class ListItem extends Component {
  render() {
    return (
      <div className='d-flex justify-content-center align-items-center'>
        <input type="text " className='input-group-text'/>
        <button type="button" className="btn-close ms-5" data-bs-dismiss="alert" aria-label="Close"></button>

      </div>
    );
  }
}

export default ListItem;