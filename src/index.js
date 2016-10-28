import React from 'react';

import ReactDOM from 'react-dom'

import SearchBar from './components/search-bar'


const API_KEY = config.API_KEY;


//create a new component
//should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}



//take component generated html and render to dom

ReactDOM.render(<App />, document.querySelector('.container'));



