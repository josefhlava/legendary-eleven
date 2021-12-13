import React from "react";
import './ix.css';
import { gk, lb, cb, rb, lw, cm, cam, rw, st } from '../../Players/players'

const choosePlayer = (array) => {
    let random = Math.floor(Math.random() * array.length);
    return array[random];
}

export const fourFourTwo = () => {
    let legendaryTeam = [choosePlayer(gk), choosePlayer(lb), choosePlayer(cb), choosePlayer(cb), choosePlayer(rb), choosePlayer(lw), choosePlayer(cm), choosePlayer(cam), choosePlayer(rw), choosePlayer(st), choosePlayer(st)]
    while (legendaryTeam[2] === legendaryTeam[3]) {
        legendaryTeam[3] = choosePlayer(cb);
    };
    while (legendaryTeam[9] === legendaryTeam[10]) {
        legendaryTeam[10] = choosePlayer(st);
    };
    legendaryTeam[2].position = 'cb-one';
    legendaryTeam[3].position = 'cb-two';
    legendaryTeam[9].position = 'st-one';
    legendaryTeam[10].position = 'st-two';
    for (let i = 0; i < legendaryTeam.length; i++) {
        legendaryTeam[i].formation = 'four-four-two';
    }
    return legendaryTeam;
}

export const fourThreeThree = () => {
    let legendaryTeam = [choosePlayer(gk), choosePlayer(lb), choosePlayer(cb), choosePlayer(cb), choosePlayer(rb), choosePlayer(cm), choosePlayer(cam), choosePlayer(cm), choosePlayer(lw), choosePlayer(st), choosePlayer(rw)]
    while (legendaryTeam[2] === legendaryTeam[3]) {
        legendaryTeam[3] = choosePlayer(cb);
    };
    while (legendaryTeam[6] === legendaryTeam[8]) {
        legendaryTeam[8] = choosePlayer(cm);
    };
    legendaryTeam[2].position = 'cb-one';
    legendaryTeam[3].position = 'cb-two';
    legendaryTeam[6].position = 'cm-one';
    legendaryTeam[8].position = 'cm-two';
    for (let i = 0; i < legendaryTeam.length; i++) {
        legendaryTeam[i].formation = 'four-three-three';
    }
    return legendaryTeam;
}

export const fiveThreeTwo = () => {
    let legendaryTeam = [choosePlayer(gk), choosePlayer(lb), choosePlayer(cb), choosePlayer(cb), choosePlayer(cb), choosePlayer(rb), choosePlayer(lw), choosePlayer(cm), choosePlayer(rw), choosePlayer(st), choosePlayer(st)]
    while (legendaryTeam[2] === legendaryTeam[3]) {
        legendaryTeam[3] = choosePlayer(cb);
    };
    while (legendaryTeam[4] === legendaryTeam[3] || legendaryTeam[4] === legendaryTeam[2]) {
        legendaryTeam[4] = choosePlayer(cb);
    };
    while (legendaryTeam[9] === legendaryTeam[10]) {
        legendaryTeam[10] = choosePlayer(st);
    };
    legendaryTeam[2].position = 'cb-one';
    legendaryTeam[3].position = 'cb-two';
    legendaryTeam[4].position = 'cb-tree';
    legendaryTeam[9].position = 'st-one';
    legendaryTeam[10].position = 'st-two';
    for (let i = 0; i < legendaryTeam.length; i++) {
        legendaryTeam[i].formation = 'five-three-two';
    }
    return legendaryTeam;
}



export function Eleven() {
    return (
        <div className="pitch fft">
            <h2 className="test">Goalkeeper</h2>
            <h2>...</h2>
        </div>
    )
}