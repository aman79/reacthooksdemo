import React, { useState } from 'react';

export default () => {
  const [age, setAge] = useState(21);
  const [name, setName] = useState('abc');
  return (
    <div>
      <p>
        Name:{' '}
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </p>
      <p>Age: {age}</p>
      <button onClick={() => setAge(age + 1)}>Increment Age by one</button>

      <p>
        Age : {age} , name : {name}
      </p>
    </div>
  );
};
