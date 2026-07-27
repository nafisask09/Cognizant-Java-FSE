import React from 'react';
import ListOfPlayers from './ListOfPlayers';
import IndianPlayers from './IndianPlayers';

function App() {

    const flag = false;

    return (
        <div>
            {flag ? <ListOfPlayers /> : <IndianPlayers />}
        </div>
    );
}

export default App;