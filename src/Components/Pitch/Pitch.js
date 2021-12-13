import './Pitch.css';
import React from 'react';
import { Player } from '../Player/Player';

export const Pitch = ({
    eleven,
    team
}) => {
    return (
        <div className="pitch">
            <Player
                team={team}
            />
        </div>
    )
}