import React, {useEffect, useState} from 'react';
import {Joke} from "../../type";
import JokeItem from "./Joke-item";

const url = 'https://api.chucknorris.io/jokes/random';
interface Props {
  showButton:boolean;
}

const Jokes:React.FC<Props> = ({showButton}) => {
  const [jokes, setJokes] = useState<Joke[]>([]);
  const [button, setButton] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        if (response.ok) {
          const jokesResponse = await response.json();
          setJokes(prev => [...prev, jokesResponse]);
        }
      };
      fetchData().catch(console.error);
    }, [])

  const clickButton = () => setButton(prev => !prev);

    if (showButton !== button) {

      const fetchData = async () => {
        const response = await fetch(url);
        if (response.ok) {
          const jokesResponse = await response.json();
          setJokes(prev => [...prev, jokesResponse]);
        }
      };
      fetchData().catch(console.error);
      clickButton();
    }
  return (
    <div className='Jokes d-flex flex-column-reverse'>
      {jokes.map(joke => (
        <JokeItem key={joke.id} jokes={joke.value}/>
      ))}
    </div>
  );
};

export default Jokes;