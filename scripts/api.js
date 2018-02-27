'use strict';
/* global */

// Declare a BASE_URL constant appropriate for the Youtube API.
// Expose an asyncronous fetchVideos function, which receives a searchTerm and callback
// The function will retrieve Youtube data, filter out only the content it needs (video title, image and link), and send that array back in the callback

const api = function() {

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

  const API_KEY = 'AIzaSyCClYXh2mFYDkbX8OmiaZi7E2woFr9nfV8';

  const fetchVideos = function(searchTerm, callback) {
    const query = {
      part : 'snippet',
      key : API_KEY,
      q : searchTerm,
    };
    $.getJSON(BASE_URL, query, callback);
    console.log('fetchVideos working');
  };
  return {
    fetchVideos
  };
}();