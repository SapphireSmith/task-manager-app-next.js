"use client"

import{ useState } from 'react';

const DynamicColor = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e:any) => {
    setInputValue(e.target.value);
  };

  const getBackgroundColor = () => {
    return inputValue.length < 10 ? 'blue' : 'yellow';
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type something..."
        style={{
          backgroundColor: getBackgroundColor(),
        }}
      />
    </div>
  );
};

export default DynamicColor;