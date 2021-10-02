import React from 'react';

const Brather = (props) => {
    const {house} = props;
    return (
        <div>
            <h2>My brather</h2>
            <h3>House: {house}</h3>
        </div>
    );
};

export default Brather;