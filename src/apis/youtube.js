import axios from "axios";

const KEY = 'AIzaSyCcoU0fhBi9jwSeT3gzP3iQ9HMTNGgdgPI';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
}
});

