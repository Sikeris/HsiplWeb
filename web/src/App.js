import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {route} from './Route.js';
import Hamburger from './components/Hamburger'
import HomePage from './components/HomePage1';
import { LabDirector } from './components/LabDirector';

import Introduction from './components/Introduction';

import Professor from './components/Professor';

import Members from './components/Members1';
import Equipment from './components/Equipment';
import Research_interests from './components/Research_interests'
import Research_Posters from './components/Research_Posters'
import Awards from './components/Awards'


function App() {
  return (
    <div className="App">
      <Hamburger/>
      <HomePage></HomePage>
      <LabDirector></LabDirector>
      <Introduction></Introduction>
      <Professor></Professor>
      <Members></Members>
      <Equipment></Equipment>
      <Research_interests/>
      <Research_Posters/>
      <Awards/>
      <Route path="/test" component={Awards}/>
    </div>
  );
}

export default App;
