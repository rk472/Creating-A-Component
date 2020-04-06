import React from 'react';
import './MyFirstCss.css';

function Component3() {
    const [text, setText] = React.useState();

    const handleTextChange = (event) => { 
        setText(event.target.value);
    }
  return (
    <div >
        <textarea onChange={handleTextChange} />
        <h3>Output</h3>
        <p>{text}</p>
    </div>
  );
}

export default Component3;