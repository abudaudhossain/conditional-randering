import React from 'react';
import Brather from '../Brather/Brather';
import Myself from '../Myself/Myself';

const Father = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>Father</h1>
            <h2>House: {house}</h2>
            <div>
                <Brather house = {house}></Brather>
                <Myself house = {house}></Myself>
            </div>
        </div>
    );
};

export default Father;