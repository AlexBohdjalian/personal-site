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
      style={{
        backgroundColor: props.nextCol ? 'purple' : 'white',
        color: props.nextCol ? 'white' : 'black',
        paddingBottom: '1rem'
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
