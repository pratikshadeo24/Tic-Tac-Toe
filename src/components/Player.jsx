import {useState} from 'react';

export default function Player({name, symbol, isActive, onPlayerChange}){
    const [isEditing, setIsEditing] = useState(false);
    const [curPlayerName, setPlayerName] = useState(name)
    function handleEditing(){
        setIsEditing(editing=> !editing);
        if(isEditing){
            onPlayerChange(symbol, curPlayerName);
        }
    }
    function handlePlayerName(event){
        setPlayerName(event.target.value);
    }
    let playerName = <span className="player-name">{curPlayerName}</span>
    let btnText = "Edit"
    if(isEditing){
        playerName = <input type="text" value={curPlayerName} onChange={handlePlayerName} required/>
        btnText = "Save"
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditing}>{btnText}</button>
        </li>
    );
}