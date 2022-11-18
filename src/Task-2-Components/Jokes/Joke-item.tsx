import React from 'react';


interface Props {
  jokes:string;
}

const JokeItem:React.FC<Props> = ({jokes}) => {
  return (
    <div className='card m-3'>
      <p className='card-text'>{jokes}</p>
    </div>
  );
};

export default JokeItem;