import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Search from 'youtube-api-search'
import SearchBar from './components/search-bar';
import VideoList from './components/video-list'

const API_KEY = 'AIzaSyBbrqtLRSuXj53lDoPnGEQMWag55Lc7svE';

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
        <VideoList videos={ this.state.videos }/>
     </div>
    )
  }
}



//take component generated html and render to dom

ReactDOM.render(<App />, document.querySelector('.container'));



