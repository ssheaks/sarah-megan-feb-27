'use strict';

const API_KEY = 'AIzaSyCClYXh2mFYDkbX8OmiaZi7E2woFr9nfV8';

const store = {
  videos: []
};

// TASK: Add the Youtube Search Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

// TASK:
// 1. Create a `fetchVideos` function that receives a `searchTerm` and `callback`
// 2. Use `searchTerm` to construct the right query object based on the Youtube API docs
// 3. Make a getJSON call using the query object and sending the provided callback in as the last argument
// TEST IT! Execute this function and console log the results inside the callback.
const fetchVideos = function(searchTerm, callback) {
  const query = {
    part : 'snippet',
    key : API_KEY,
    q : searchTerm,
  };
  $.getJSON(BASE_URL, query, callback);
  console.log('fetchVideos working');
};

// TASK:
// 1. Create a `decorateResponse` function that receives the Youtube API response
// 2. Map through the response object's `items` array
// 3. Return an array of objects, where each object contains the keys `id`, `title`, 
// `thumbnail` which each hold the appropriate values from the API item object. You 
// WILL have to dig into several nested properties!
// TEST IT! Grab an example API response and send it into the function - make sure
// you get back the object you want.
const decorateResponse = function(response) {
  console.log(response.items.map(item => {
    return [item.id, item.snippet.title, item.snippet.thumbnails.default.url];
  }));
};

// TASK:
// 1. Create a `generateVideoItemHtml` function that receives the decorated object
// 2. Using the object, return an HTML string containing all the expected data
// TEST IT!
const generateVideoItemHtml = function(video) {

};

// TASK:
// 1. Create a `addVideosToStore` function that receives an array of decorated video 
// objects and sets the array as the value held in store.items
// TEST IT!
const addVideosToStore = function(videos) {

};

// TASK:
// 1. Create a `render` function
// 2. Map through `store.videos`, sending each `video` through your `generateVideoItemHtml`
// 3. Add your array of DOM elements to the appropriate DOM element
// TEST IT!
const render = function() {

};

// TASK:
// 1. Create a `handleFormSubmit` function that adds an event listener to the form
// 2. The listener should:
//   a) Prevent default event
//   b) Retrieve the search input from the DOM
//   c) Clear the search input field
//   d) Invoke the `fetchVideos` function, sending in the search value
//   e) Inside the callback, send the API response through the `decorateResponse` function
//   f) Inside the callback, add the decorated response into your store using the `addVideosToStore` function
//   g) Inside the callback, run the `render` function 
// TEST IT!
const handleFormSubmit = function() {

};


const testResponse = {
  'items': [
    {
      'kind': 'youtube#searchResult',
      'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/ZJmoWSEYX7l2Dor2mhUcbrrNnlg"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'ShZ978fBl6Y'
      },
      'snippet': {
        'publishedAt': '2018-01-05T10:00:01.000Z',
        'channelId': 'UCwUtwxkX0IDk9_OYaBcmRnQ',
        'title': 'Calum Scott - You Are The Reason (Official)',
        'description': 'Pre-order Calum\'s debut album \'Only Human\' feat. “You Are The Reason” & “Dancing On My Own” now: http://calumscott.lnk.to/onlyhuman "You Are The Reason" available now: http://calumsco...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/ShZ978fBl6Y/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/ShZ978fBl6Y/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/ShZ978fBl6Y/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'CalumScottVEVO',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/HSKDFkwbVuEgNHxkHX5mHYrnwJU"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '6ZfuNTqbHE8'
      },
      'snippet': {
        'publishedAt': '2017-11-29T13:26:24.000Z',
        'channelId': 'UCvC4D8onUfXzvjTOM-dBfEA',
        'title': 'Marvel Studios\' Avengers: Infinity War Official Trailer',
        'description': '"There was an idea…" Avengers: Infinity War. In theaters May 4. ▻ Subscribe to Marvel: http://bit.ly/WeO3YJ Follow Marvel on Twitter:   https://twitter.com/marvel Like Marvel on FaceBook:...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/6ZfuNTqbHE8/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/6ZfuNTqbHE8/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/6ZfuNTqbHE8/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Marvel Entertainment',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/4waNpT3L_cG_rBYV0H4g_VC3c2k"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'xpVfcZ0ZcFM'
      },
      'snippet': {
        'publishedAt': '2018-02-17T05:00:01.000Z',
        'channelId': 'UCQznUf1SjfDqx65hX3zRDiA',
        'title': 'Drake - God’s Plan',
        'description': 'God\'s Plan (Official Video) Song Available Here: https://Drake.lnk.to/ScaryHoursYD Directed by Karena Evans Executive Producers Director X & Taj Critchlow Produced by Fuliane Petikyan...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/xpVfcZ0ZcFM/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/xpVfcZ0ZcFM/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/xpVfcZ0ZcFM/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'DrakeVEVO',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/5d5OQ9ytZPMpQp_G8Vgv1hoq1eE"',
      'id': {
        'kind': 'youtube#video',
        'videoId': 'CwfoyVa980U'
      },
      'snippet': {
        'publishedAt': '2017-10-19T15:00:24.000Z',
        'channelId': 'UCwppdrjsBPAZg5_cUwQjfMQ',
        'title': 'Charlie Puth - "How Long" [Official Video]',
        'description': 'Download and Stream "How Long": https://Atlantic.lnk.to/HowLongID Pre-Order Voicenotes: https://Atlantic.lnk.to/VoicenotesID Exclusive VoiceNotes Merchandise Bundles Available Here: http://smartu...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/CwfoyVa980U/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/CwfoyVa980U/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/CwfoyVa980U/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Charlie Puth',
        'liveBroadcastContent': 'none'
      }
    },
    {
      'kind': 'youtube#searchResult',
      'etag': '"_gJQceDMxJ8gP-8T2HLXUoURK8c/841gm4moVMbR3dc2A0ABYoitUuA"',
      'id': {
        'kind': 'youtube#video',
        'videoId': '2Vv-BfVoq4g'
      },
      'snippet': {
        'publishedAt': '2017-11-09T11:04:14.000Z',
        'channelId': 'UC0C-w0YjGpqDXGB8IHb662A',
        'title': 'Ed Sheeran - Perfect (Official Music Video)',
        'description': 'https://ad.gt/yt-perfect : https://atlanti.cr/yt-album Subscribe to Ed\'s channel: http://bit.ly/SubscribeToEdSheeran Follow Ed on... Facebook: http://www.facebook.com/EdSheeranMusic...',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/2Vv-BfVoq4g/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/2Vv-BfVoq4g/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/2Vv-BfVoq4g/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Ed Sheeran',
        'liveBroadcastContent': 'none'
      }
    }
  ]
};






// When DOM is ready:
$(function () {
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});
