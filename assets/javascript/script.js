

//store artist name in local storage
$("button").click(function () {
  console.log("in button click")
  if(typeof(Storage) !== 'undefined')
    localStorage.singer = $(this).text();

  //stores song in local storage
  $(".dropdown-menu li").click( function() {
  if(typeof(Storage) !== 'undefined')
    localStorage.song = $(this).text();

  });

  //saves youtube id data in local storages before link becomes active
  $('a').on('click', function(){
    if(typeof(Storage) !== 'undefined')
      localStorage.videoID = $(this).data('id');
  }); 

});