import './App.css';
import { Counter } from './counter';
import { QuestionGame } from './QuestionGame';
import { TitleSubtitle } from './TitleSubtitle';
import { Typography } from './Typography';
import { useState } from "react";
import { TicTacToe } from "./TicTacToe";
import { ProfileCard } from './ProfileCard';
import { RPSgame } from './RPSgame';
import { Mapper } from './mapper';
import { AddDeleteFruits } from './AddDeleteFruits';
import { ToDoList } from './ToDoList';
import { Carousel } from './carousel';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <> 
      {/*
      <TitleSubtitle
        showSubTitle
        title={"Titolo"}
        subTitle={"Questo e il sottotitolo che dobbiamo mostrare"}
      />

      <Counter counter={counter} setCounter={() => setCounter(counter + 1)} />
      <Counter counter={counter * 2} setCounter={() => setCounter(counter + 2)} />

      <div>
        < QuestionGame />
      </div>
      
      <div>
        < TicTacToe />
      </div>
      
      <ProfileCard
        name = "Talan Dias"
        job = "UX designer"
        image = "https://www.giulianofroio.com/wp-content/uploads/2020/12/foto-profilo-linkedin-IMG_4168.jpg"
        checked = "true"
        />
      <ProfileCard
        name = "Sara Rossi"
        job = "Web Developer"
        image = "https://www.giulianofroio.com/wp-content/uploads/2022/02/foto-profilo-linkedin.jpg"
        checked = "true"
        />
        <RPSgame />
        <Mapper />
        
        <ToDoList />
        */}
        <Carousel />
    </>
  );
};
 
export default App;
