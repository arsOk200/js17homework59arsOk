import React, {useState} from 'react';
import Form from "./Task-1-Components/Form/Form";
import List from "./Task-1-Components/List/List";
import Jokes from "./Task-2-Components/Jokes/Jokes";




function App() {

  // const [movie, setMovie] = useState<Movie[]>([]);
  // //
  // const addMovie = (newMovie:Movie) => {
  //   setMovie(prev => [...prev, newMovie]);
  // };
  //
  // const changeMovieName = (event:React.ChangeEvent<HTMLInputElement>, id:string) => {
  //   setMovie(prev => prev.map(film => {
  //     return film.id === id ? {
  //       ...film,
  //       title:event.target.value,
  //     } : film;
  //   }));
  // };


  const [button, setButton] = useState(false);

  return (
    <>
     <div className="Movies text-center border border-primary mb-2 pb-2">
        <Form/>
       <List/>
     </div>

      <div className="Chack-Norris text-center">
        <button onClick={() => setButton(prev => !prev)} className='btn btn-primary'>New joke</button>
        <Jokes showButton={button}/>
      </div>
    </>
  );
}

export default App;
