import React from 'react';

const RenderList = (props) => {
  return (
    <div className='list'>
      <span className='task'>Task #{props.index + 1}</span>
      <li>{props.title}</li>
      <span className='delete' onClick={() => props.delete(props.id)}>
        X
      </span>
    </div>
  );
};

export default RenderList;
