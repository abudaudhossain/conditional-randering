import React from 'react';
import Annty from '../Annty/Annty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const GrandFather = (props) => {
    const {house} = props
    return (
        <div>
            <h1>GrandFather</h1>
            <h2>{house}</h2>
            <div className="box">
                <Father house = {house}></Father>
                <Uncle house = {house}></Uncle>
                <Annty house = {house}></Annty>
            </div>
        </div>
    );
};

export default GrandFather;