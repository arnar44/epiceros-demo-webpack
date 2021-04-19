import React, { Fragment, useState, useEffect } from 'react';
import "regenerator-runtime/runtime.js";

import SideBar from './components/sidebar/Sidebar';
import RegisterForm from './components/registerForm/RegisterForm';

function App() {

  const [ name, setName ] = useState('');
  const [ teamList, setTeamList ] = useState([]);

  const fetchList = async () => {
    let response;
    try {
      response = await fetch('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6');
    } catch (error) {
      console.error(error);
      setTeamList(['Error fetching team!']);
      return;
    }

    const json = await response.json();    
    if(!json.team) {
      setTeamList(['Error fetching team!']);
      return;
    }
    
    setTeamList(json.team);
  }

  useEffect(() => {
    fetchList();
  }, []);

  const handleSubmit = (e, form) => {
    e.preventDefault();

    if (!name) return;

    e.target.reset();
    setTeamList( prevList => [...prevList, name]);
    setName('');
  }

  return (
    <Fragment>
      <SideBar teamList={teamList} />
      <RegisterForm 
        submitHandler={handleSubmit}
        nameHandler={setName}
      />
    </Fragment>    
  )
}

export default App;