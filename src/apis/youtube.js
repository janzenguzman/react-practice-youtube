import axios from 'axios';

const KEY = 'AIzaSyD4_0eZT52iasor9rx6Df_JSbimj8uiCNI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
