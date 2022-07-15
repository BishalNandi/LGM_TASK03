import React from 'react';

function Refresh() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div className='button-align'>
      <button onClick={refreshPage}>Click Me To Clear 😄</button>
    </div>
  );
}

export default Refresh;