import React, { useState } from 'react';

const SimpleFormHooks = () => {
    const [email, setEmail] = useState('');

    const handleChange = (evt) => {
        setEmail(evt.target.value);
    };

    return (
        <div>
            <h1>The value is: {email}</h1>
            <input type='text' value={email} onChange={handleChange} />
            <button onClick={() => setEmail('')}>Submit</button>
        </div>
    );
}

export default SimpleFormHooks;
