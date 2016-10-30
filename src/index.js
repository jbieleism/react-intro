import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Search from 'youtube-api-search'

import SearchBar from './components/search-bar'

const API_KEY = /*API key here*/;


class App extends Component {

  constructor(props){
    super(props)
    this.state = { videos: [] };
    Search({
      key: API_KEY,
      term: 'surfboard'
    }, (data) => {
      this.setState({ videos: data })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
     </div>
    )
  }


}

ReactDOM.render(<App />, document.querySelector('.container'));



