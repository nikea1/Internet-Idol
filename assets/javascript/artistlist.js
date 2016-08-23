function artist(name, song){
        this.artistName = name,
        this.songs = song
        this.getSongID = function(id){
          return this.songs[id][1];
        }
        this.getSongName = function(id){
          return this.songs[id][0];
        }

        this.getArtistName = function(){
          return this.artistName;
        }
      }

var songList = [];

      songList[0] = new artist("Micheal Jackson", [['Bad','dsUXAEzaC3Q'], ['Thriller', 'hG6oy46qKE4'], ['Dirty Diana','yUi_S6YWjZw'], ['PYT','5B0itw6rmmI']]);
      songList[1] = new artist("TKA", [['Maria','vxSkIklMnTQ'], ['Louder Than Love', 'ksCMTwM1E-k'], ['Come get my Love','YCPgM6WScaw'], ['Scars','RQGqYGjFnh4']]);
      songList[2] = new artist("Queen", [['Bohemian Rhapsody','fJ9rUzIMcZQ'], ['We are the Champions', '04854XqcfCY'], ['We Will Rock You ','-tJYN-eG1zk'], ['Another One Bites the Dust','rY0WxgSXdEE']]);
      songList[3] = new artist("Prince", [['Purple Rain','F8BMm6Jn6oU'], ['When Doves Cry', 'RQAKjkXDHQM'], ['Kiss','KpCi8TC9QtI'], ['Adore','9gGPVBtQ7JU']]);
      songList[4] = new artist("Cyndi Lauper", [['Girls Just Wanna Have Fun','PIb6AZdTr-A'], ['Time after Time', 'VdQY7BusJNU'], ['Change of Heart','svHeFdSvPL0'], ['She Bop','KFq4E9XTueY']]);



function artistButton(songList){

  if(!Array.isArray(songList)) return;
  console.log(songList[0]);
  for(var i = 0; i < songList.length; i++){
    console.log(songList[i]);
    var $btn_group = $('<div/>').addClass('btn-group').appendTo($('.btn-holder'));
    var $button = $('<button/>')
                  .attr('type', 'button')
                  .addClass('btn dropdown-toggle')
                  .attr('data-toggle', 'dropdown')
                  .attr('aria-haspopup', 'true')
                  .attr('aria-expanded', 'false')
                  .html(songList[i].getArtistName()+"<span class='caret'></span>")
                  .appendTo($btn_group);

   
    
    var $ul = $('<ul>').addClass('dropdown-menu').appendTo($btn_group);

    for(var j = 0; j < songList[i].songs.length; j++){
      var $li = $('<li>').appendTo($ul);
      console.log(songList[i].getSongName[j]);
      var $a = $('<a>').attr('href', 'internetidol.html')
                  .text(songList[i].getSongName(j))
                  .attr('data-id', songList[i].getSongID(j))
                  .appendTo($li);
    }//second for loop

  }//first for loop
}//end of function

artistButton(songList);

$('a').on('click', function(){
  if(typeof(Storage) !== 'undefined')
    localStorage.videoID = $(this).data('id');
})
