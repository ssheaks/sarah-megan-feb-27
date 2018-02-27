'use strict';

/* global  */

// Store
// Exposes a videos array
// Exposes a setVideos function that simply receives videos and sets it to this.videos

const store = function() {
  let videos = [];
  
  const setVideos = function(videos) {
    this.videos = videos;
  };
  return{
    videos,
    setVideos
  };
}();

