import React from 'react';

const UserMarker = () => {
  return (
    <div className='user-marker' style={{
      position: 'absolute',
      width: 40,
      height: 40,
      left: -20,
      top: -20 / 2,
      border: '5px solid black',
      borderRadius: 40,
      backgroundColor: 'white',
      textAlign: 'center',
      color: '#3f51b5',
      fontSize: 16,
      fontWeight: 'bold',
      padding: 4
    }}>
      Me
    </div>
  )
}

export default (UserMarker);
