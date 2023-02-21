import React from 'react';

import './index.css';

function Age(){
    let name='Samcyril'
    alert('My name is'+' '+name)
}

export default function Alternative(msg) {
  return (
    <div>
      <lable htmlFor="">Click here to get a Message</lable>
      <button onClick={msg.msgfn}>Click</button><br></br><br></br>
      <lable htmlFor="">Click here to get a Message</lable>
      <button onClick={Age}>Click</button>
      <p>hi everyone this is {msg.name}</p>
    </div>
  );
}
