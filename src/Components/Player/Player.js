import React from "react";
import './Player.css';

export const Player = ({ team }) => {
    return(
        <div className="squad">
            {team.map((player, index) => (
                <div key={index} className={`${player.formation} ${player.position} player`}>
                    <p className="first-name">{player.firstName}</p>
                    <p className="last-name">{player.lastName}</p>
                    <p className="nationality">{player.nationality}</p>
                </div>
            ))}
        </div>
    )
}