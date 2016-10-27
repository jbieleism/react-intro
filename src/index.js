import React from 'react';

import ReactDOM from 'react-dom'

//create a new component
//should produce some html
const App = function() {
  return <div> Hello pooper </div>;
}



//take component generated html and render to dom

ReactDOM.render(<App />, document.querySelector('.container'));



