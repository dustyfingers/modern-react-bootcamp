import React, { useState } from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartbroken, toggleIsHeartbroken] = useToggle(false);

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ":D" : ">:O"}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartbroken ? "</3" : "<3"}</h1>
        </div>
    );
}

export default Toggler;