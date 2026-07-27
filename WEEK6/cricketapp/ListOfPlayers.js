import React from 'react';

function ListOfPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 88 },
        { name: "Shubman Gill", score: 72 },
        { name: "KL Rahul", score: 65 },
        { name: "Hardik Pandya", score: 78 },
        { name: "Ravindra Jadeja", score: 69 },
        { name: "Rishabh Pant", score: 84 },
        { name: "Suryakumar Yadav", score: 91 },
        { name: "Jasprit Bumrah", score: 60 },
        { name: "Mohammed Siraj", score: 55 },
        { name: "Kuldeep Yadav", score: 73 }
    ];

    const playersBelow70 = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h2>Players with Scores Below 70</h2>

            <ul>
                {playersBelow70.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListOfPlayers;