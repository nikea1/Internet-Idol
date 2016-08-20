$("button").click(function () {
    var singer = $(this).text();
    console.log(singer);


$(".dropdown-menu li").click( function() {
    var song = $(this).text();
    console.log(song);

 $.ajax({
  type: "GET",
  dataType: "xml",
  url: "https://crossorigin.me/http://api.chartlyrics.com/apiv1.asmx/SearchLyricDirect?artist="+ singer + "&song=" + song +"",
  }).done(function(xml) {
    console.log(xml);
    txt = xml.getElementsByTagName("Lyric")[0].childNodes[0].nodeValue;
      console.log(txt);
    txt = txt.replace(/(?:\r\n|\r|\n)/g, '<br />');
      $("#lyrics").append(txt);

  });

}); 

});