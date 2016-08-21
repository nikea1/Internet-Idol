

  //youtube API
   // 2. This code loads the IFrame Player API code asynchronously.

   var tag = document.createElement('script');

   tag.src = "https://www.youtube.com/iframe_api";
   var firstScriptTag = document.getElementsByTagName('script')[0];
   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  //only runs if Storage is supported and all data exists
  if(typeof(Storage) !== 'undefined' && localStorage.videoID && localStorage.singer && localStorage.song){
    console.log(localStorage.videoID);

		 // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.

      function onYouTubeIframeAPIReady() {
      	player = new YT.Player('player', {
      		height: '360',
      		width: '640',
          	videoId: localStorage.videoID, //<---determines video
          	events: {
          		'onReady': onPlayerReady,
          		'onStateChange': onPlayerStateChange
          	}
          });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
      	event.target.pauseVideo();
      }

      // 5. The API calls this function when the player's state changes. Ex: playing, buffering, stopped, ending, etc...
      var done = false;
      function onPlayerStateChange(event) {
      	/*
        if (event.data == YT.PlayerState.PLAYING && !done) {
      		setTimeout(stopVideo, 6000);
      		done = true;
      	}*/
      }
      
      /*
      //stop function
      function stopVideo() {
      	player.stopVideo();
      }*/
      
      //lyrics API
      
      
      var singer = localStorage.singer;
      var song = localStorage.song;
      console.log(singer);
      console.log(song);
      

      $.ajax({
       type: "GET",
       dataType: "xml",
       url: "https://crossorigin.me/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist="+ singer + "&song=" + song +"",
     }).done(function(xml) {
      var txt;
      console.log(xml);
      txt = xml.getElementsByTagName("Lyric")[0].childNodes[0].nodeValue;
      console.log(txt);
      txt = txt.replace(/(?:\r\n|\r|\n)/g, '<br />');
      $("#lyrics").append(txt);
    });
   }
   else{
    $("#lyrics").append("Sorry your current browser does not support Local Storage");
    console.log("This browser does not support local storage")
  }
