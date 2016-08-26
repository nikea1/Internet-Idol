//this script will generate the artist buttons in the home page. 
//It is also set such that music and artists can easily be added
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

<<<<<<< HEAD
      songList[0] = new artist("Micheal Jackson", [['Bad','dsUXAEzaC3Q'], ['Thriller', 'hG6oy46qKE4'], ['Dirty Diana','yUi_S6YWjZw'], ['PYT','5B0itw6rmmI']]);
      songList[1] = new artist("TKA", [['Maria','vxSkIklMnTQ'], ['Louder Than Love', 'ksCMTwM1E-k'], ['Come Get My Love','YCPgM6WScaw'], ['Scars','RQGqYGjFnh4']]);
      songList[2] = new artist("Queen", [['Bohemian Rhapsody','fJ9rUzIMcZQ'], ['We Are the Champions', '04854XqcfCY'], ['We Will Rock You ','-tJYN-eG1zk'], ['Another One Bites the Dust','rY0WxgSXdEE']]);
      songList[3] = new artist("Prince", [['Purple Rain','F8BMm6Jn6oU'], ['When Doves Cry', 'RQAKjkXDHQM'], ['Kiss','KpCi8TC9QtI'], ['Adore','9gGPVBtQ7JU']]);
      songList[4] = new artist("Cyndi Lauper", [['Girls Just Wanna Have Fun','PIb6AZdTr-A'], ['Time After Time', 'VdQY7BusJNU'], ['Change of Heart','svHeFdSvPL0'], ['She Bop','KFq4E9XTueY']]);

=======
add artist and music here. 
Ex: songList.push(new artist(artistName, [['songName1, youtubeID1'], [songName2, youtubeID2],...,[songNameN, youtubeIDN]]));
      songList.push(new artist("Micheal Jackson", [['Bad','dsUXAEzaC3Q'], ['Thriller', 'hG6oy46qKE4'], ['Dirty Diane','yUi_S6YWjZw'], ['PVT','5B0itw6rmmI']]));
      songList.push(new artist("TKA", [['Maria','vxSkIklMnTQ'], ['Louder Than Love', 'ksCMTwM1E-k'], ['Come get my Love','YCPgM6WScaw'], ['Scars','RQGqYGjFnh4']]));
      songList.push(new artist("Queen", [['Bohemian Rhapsody','fJ9rUzIMcZQ'], ['We are the champions', '04854XqcfCY'], ['We Will Rock You ','-tJYN-eG1zk'], ['Another One Bites the Dust','rY0WxgSXdEE']]));
      songList.push(new artist("Prince", [['Purple Rain','F8BMm6Jn6oU'], ['When Doves Cry', 'RQAKjkXDHQM'], ['Kiss','KpCi8TC9QtI'], ['Adore','9gGPVBtQ7JU']]));
      songList.push(new artist("Cyndi Lauper", [['Girls Just Wanna Have Fun','PIb6AZdTr-A'], ['Time after Time', 'VdQY7BusJNU'], ['Change of Heart','svHeFdSvPL0'], ['She Bop','KFq4E9XTueY']]));
      >>>>>>> 3e0ca90d3e27fd0171ebd8b75cd02180cddc5f13


//this function will generate the artist buttons from the list
function artistButton(songList){

  //makes sure parameter is an array
  if(!Array.isArray(songList)){ 
    console.log('Error, parameter is not an array');
    return;
  }
  console.log(songList[0]);

  for(var i = 0; i < songList.length; i++){
    console.log(songList[i]);
    //creates btn-group div then appends to div on page
    var $btn_group = $('<div/>').addClass('btn-group').appendTo($('.btn-holder'));
    //creates button then appends to btn-group
    var $button = $('<button/>')
                  .attr('type', 'button')
                  .addClass('btn dropdown-toggle')
                  .attr('data-toggle', 'dropdown')
                  .attr('aria-haspopup', 'true')
                  .attr('aria-expanded', 'false')
                  .html(songList[i].getArtistName()+"<span class='caret'></span>")
                  .appendTo($btn_group);

   
    //creates dropdown list and appends to btn-group
    var $ul = $('<ul>').addClass('dropdown-menu').appendTo($btn_group);

    //generates list items
    for(var j = 0; j < songList[i].songs.length; j++){
      
      //creates li  and appends to ul
      var $li = $('<li>').appendTo($ul);
      console.log(songList[i].getSongName[j]);
      
      //creates link and stores youtube id in link for later use then appends to li
      var $a = $('<a>').attr('href', 'internetidol.html')
                  .text(songList[i].getSongName(j))
                  .attr('data-id', songList[i].getSongID(j))
                  .appendTo($li);
    }//second for loop end

  }//first for loop end
}//end of function

//generate buttons
artistButton(songList);


