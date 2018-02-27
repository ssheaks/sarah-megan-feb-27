'use strict';

/* global api, store, $ */

// VideoList
// Declare a generateListItem function that builds out an HTML string comprised of one video item
// Expose a render function that will look in store.videos, invoke generateListItem for every video, and put the results into the DOM
// Declare a handleFormSubmit function which:
// Listens for form submit event
// Retrieves the search term input from DOM
// Calls the api module's method to make a request
// Inside the callback, send the received videos into your store's method
// Call render()
// Expose a bindEventListeners function, which invokes your only event listener function

const videoList = function(){

  const decorateResponse = function(response) {
    return response.items.map(item => {
      return {
        id: item.id.videoId, 
        title: item.snippet.title, 
        thumbnail: item.snippet.thumbnails.default.url};
    });
  };

  const generateVideoItemHtml = function(video) {
    return `<li>
    <span>${video.id}</span>
    <span>${video.title}</span>
    <img src = '${video.thumbnail}' alt = 'search result 1'>
    </li>`;
  };

  const render = function() {
    const videoElements = store.videos.map(video => generateVideoItemHtml(video));
    $('.results').html(videoElements);
  };

  const handleFormSubmit = function() {
    $('form').submit(event=>{
      event.preventDefault();
      const searchInput = $('#search-term').val();
      $('#search-term').val('');
      fetchVideos(searchInput, response =>{
        let decorated = decorateResponse(response);
        console.log(decorated);
        addVideosToStore(decorated);
        render();
      });
    });
  };

  return {
    handleFormSubmit
  };
}();