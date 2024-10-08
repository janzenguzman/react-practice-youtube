import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { items: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('BTS');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({ 
      items: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="ui container" style={{ margin: `10px 0` }}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.items}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
