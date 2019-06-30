import React from 'react';
import useToggle from './hooks/useToggle';

function Toggler() {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isHeartBroken, toggleIsHeartbroken] = useToggle(false);
    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy ? ':D' : ':('}</h1>
            <h1 onClick={toggleIsHeartbroken}>{isHeartBroken ? '</3' : '<3'}</h1>
        </div>
    );
}
export default Toggler;