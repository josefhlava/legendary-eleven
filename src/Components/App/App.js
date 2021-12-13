import './App.css';
import { IxSelector } from '../ixSelector/ixSelector'
import React, { useState } from 'react'
import { Pitch } from '../Pitch/Pitch';
import { fourFourTwo, fourThreeThree, fiveThreeTwo } from '../IX/ix';

function App() {
  const [eleven, setEleven] = useState('four-four-two');
  const [team, setTeam] = useState([]);


  const handleChange = (e) => {
    setEleven(e.target.value);
  }

  const selectEleven = (e) => {
    e.preventDefault();
    setTeam([]);
    if (eleven === 'four-four-two') {
      setTeam(fourFourTwo);
    } else if (eleven === 'four-three-three') {
      setTeam(fourThreeThree);
    } else {
      setTeam(fiveThreeTwo);
    }
  }


  return (
    <div className="App">
      <h1>Legendary IX</h1>
      <IxSelector 
        eleven={eleven}
        selectEleven={selectEleven}
        setEleven={setEleven}
        handleChange={handleChange}
      />
      <Pitch 
        eleven={eleven}
        team={team}
      />
    </div>
  );
}

export default App;
