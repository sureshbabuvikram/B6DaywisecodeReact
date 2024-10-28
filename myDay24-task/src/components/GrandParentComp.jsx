import React from 'react';

const GrandParentComp = (props) => {
    return (
        <div>
            <h1>Grand parent comp</h1>
            {props.a}
        </div>
    );
};

export default GrandParentComp;