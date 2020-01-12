import React from 'react';
import GraphContainer from '../containers/GraphContainer';
import UserContainer from '../containers/UserContainer';

function App(props) {
  return (
    <div className="app-container">
      {props.username === '' ? <UserContainer /> : <GraphContainer />}
    </div>
  );
}

export default App;
