import React from 'react';
import './index.css';

interface PTypes {
  nextCol?: boolean
  circle?: boolean
  children?: React.ReactNode
}

const AppSection = (props: PTypes) => {
  return (
    <div
      className='app-section'
      style={{
        backgroundColor: props.nextCol ? 'purple' : 'white',
        color: props.nextCol ? 'white' : 'black',
      }}
    >
      {props.circle &&
        <div
          className='half-circle horizontal bottom'
          style={{ backgroundColor: props.nextCol ? 'white' : 'purple' }}
        />
      }
      {props.children}
    </div>
  );
};

export default AppSection;
