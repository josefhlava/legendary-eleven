import React from "react";
import './ix.css';
import { gk, lb, cb, rb, lw, cm, cam, rw, st } from '../../Players/players'

const choosePlayer = (array) => {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}

const printPlayer = (player) => {
    return (
        <div className={player.position}>
            <p>{player.firstName}</p>
            <p>{player.lastName}</p>
            <p>{player.nationality}</p>
        </div>
    )
};

const fourFourTwo = () => {
    let goalkeeper = choosePlayer(gk);
    let leftBack = choosePlayer(lb);
    let centerBackOne = choosePlayer(cb);
    let centerBackTwo = choosePlayer(cb);
    while (centerBackOne === centerBackTwo) {
        centerBackTwo = choosePlayer(cb);
    };
    let rightBack = choosePlayer(rb);
    let leftWing = choosePlayer(lw);
    let centerMid = choosePlayer(cm);
    let centerAttMid = choosePlayer(cam);
    let rightWing = choosePlayer(rw);
    let strikerOne = choosePlayer(st);
    let strikerTwo = choosePlayer(st);
    while (strikerOne === strikerTwo) {
        strikerTwo = choosePlayer(st);
    };
    centerBackOne.position = 'cb-one'
    centerBackTwo.position = 'cb-two'
    strikerOne.position = 'st-one'
    strikerTwo.position = 'st-two'
    return (
        <div className="fft">
            {printPlayer(goalkeeper)}
            {printPlayer(leftBack)}
            {printPlayer(centerBackOne)}
            {printPlayer(centerBackTwo)}
            {printPlayer(rightBack)}
            {printPlayer(leftWing)}
            {printPlayer(centerMid)}
            {printPlayer(centerAttMid)}
            {printPlayer(rightWing)}
            {printPlayer(strikerOne)}
            {printPlayer(strikerTwo)}
        </div>
    )
}



export function Eleven() {
    return (
        <div className="pitch fft">
            <h2 className="test">Goalkeeper</h2>
            {fourFourTwo()}
            <h2>...</h2>
        </div>
    )
}