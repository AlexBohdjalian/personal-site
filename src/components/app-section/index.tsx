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
        backgroundColor: props.nextCol ? 'rgb(16,46,106)' : 'white',
        color: props.nextCol ? 'white' : 'black',
      }}
    >
      {props.circle &&
        <div
          className='half-circle horizontal bottom'
          style={{ backgroundColor: props.nextCol ? 'white' : 'rgb(16,46,106)' }}
        />
      }
      {props.children}
    </div>
  );
};

export default AppSection;
