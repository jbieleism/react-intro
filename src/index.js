import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Search from 'youtube-api-search'
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const API_KEY = 'AIzaSyBbrqtLRSuXj53lDoPnGEQMWag55Lc7svE';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('kanye')

  }

  videoSearch(term) {
    Search({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })

  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300)

    return (
      <div>
        <SearchBar onSearchChange={ videoSearch }/>
        <VideoDetail video={ this.state.selectedVideo }/>
        <VideoList
          onVideoSelect={ (selectedVideo) => this.setState( { selectedVideo: selectedVideo } ) }
          videos={ this.state.videos } />
     </div>
    )
  }
}



//take component generated html and render to dom

ReactDOM.render(<App />, document.querySelector('.container'));



