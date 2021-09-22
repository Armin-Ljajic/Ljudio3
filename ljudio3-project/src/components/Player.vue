<template>
  <div>
      <div class="form2">
            <input type="text" placeholder="Search.." v-model="keyword">
            <button @click.prevent="searchSongs"><i class="fas fa-search"></i></button>
            
              <div class="buttons2">
                <button @click="previous"><i class="fas fa-backward"></i></button>
                <button @click="pause"><i class="fas fa-pause"></i></button>
                <button @click="next"><i class="fas fa-forward"></i></button>
              </div>
            <p>Search songs and artists</p>
        </div>
    <div class="form">
        <h1 class="searchResults">Search results</h1>
         <button v-if="showContent" @click.prevent="showTopTen">Show top 10 results</button>
        <ul>
            <li v-for="(song, index) in songs" :key="index">
                <div> 
                  <!-- <p><span><i class="fas fa-record-vinyl"></i>Album:</span> {{song.album.name}}</p>  -->
                  <p><span><i class="fas fa-user"></i>Artist:</span> {{song.artist.name}}</p> 
                  <img :src="song.thumbnails[1].url"> 
                  <p><span><i class="fab fa-itunes-note"></i>Song:</span> {{song.name}}</p>
                  <p><span><i class="fas fa-link"></i>Link:</span> <router-link :to="'/songs/' + song.videoId">Click to see song</router-link> </p> 
                </div>
                <div class="buttons">
                  <button @click="play(song.videoId, index)"><i class="fas fa-play"></i></button>
                </div>
            </li>
        </ul>
        
    </div>

    
  </div>
</template>

<script>
import axios from 'axios';
import jquery from 'jquery';
window.$ = jquery;
//import {debounce} from 'lodash';

export default {
  components:{
  },
  data(){
        return{
            keyword: "",
            songs: [],
            playlist: [],
            currentPlaylistIndex: 0,
            showContent: false

            
        }
    },
    computed:{
      // keyword: {
      //   get(){
      //     return this.$store.state.properties.keyword
      //   },
      //   set(value){
      //     this.$store.commit('updateInput', value)
      //   }
      // },
      // songs(){
      //   return this.$store.state.arrayOfLists.songs
      // },
    },

    methods:{
      // searchSongs(){
      //   this.$store.dispatch('searchSongs')
      // },
   
    play(id, index){
      // calling global variable
      
      window.player.loadVideoById({
        'videoId': id,
        })
      this.currentPlaylistIndex = index
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    next(){
      this.play(this.playlist[this.currentPlaylistIndex+1], this.currentPlaylistIndex +1)
      // if (this.playlist[19]) {
      //    this.play(this.playlist[this.currentPlaylistIndex[0]], this.playlist[this.currentPlaylistIndex[0]])
      // }
    },
    previous(){
      this.play(this.playlist[this.currentPlaylistIndex -1 ], this.currentPlaylistIndex -1)
      // if (this.currentPlaylistIndex === 0) {
      //    this.play(this.playlist[this.currentPlaylistIndex +19], this.playlist[this.currentPlaylistIndex + 19])
      // }
    },

    searchSongs(){
            axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.keyword}`)
            
            .then(res => {
              console.log(res.data.content)
              this.songs = res.data.content;
              this.playlist.length = 0;
              for(const val of this.songs){
                this.playlist.push(val.videoId);
                console.log(this.playlist);
                }
                this.showContent = true;
            })
            .catch(err => {
                console.log(err)
            })
        }
    
    },

    showTopTen(){
      axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.keyword}`)
            
            .then(res => {
              this.songs = res.data.content;
              this.songs.splice(10,19);
              console.log(this.songs)
              for(const val of this.songs){
                this.playlist.push(val.videoId);
                this.playlist.splice(10,19)
                console.log(this.playlist);
                }
            })
            .catch(err => {
                console.log(err)
            })
      
    },

  
  // watch:{
  //   keyword();{
  //     if (!this.keyword) return;
  //     this.debounceName();
  //   }
  // }
  // created();{
  //   this.debounceName = debounce(this.searchSongs, 500)
  // }
//}
}
</script>

<style scoped>

.form{
  background-color: rgb(187, 166, 138, 0.5);
  /* min-height:40vh; */
  width:50%;
  margin: auto;
  margin-top: 10vh;
  padding-bottom: 2vw;
  padding-top: 2vw;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.form2{
  text-align: center;
  position:fixed;
  margin-left: 2vw;
  padding:2vw;
  border-radius: 10px;
  background-color: rgb(187, 166, 138, 0.5);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

}

.form2>input,
.form2>button{
  width:100%
}

li{
  list-style: none;
  border: 1px solid black;
  padding:2vw;
  margin-bottom: 2vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  background-color: rgba(200, 180, 154, 0.5);
}


ul{
  padding:0;
  padding-top: 10px;
}
input{
  display:block;
  margin: 0 auto;
  width: 60%;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}

button{
  display:block;
  margin: 0 auto;
  width: 60%;
  background-color: rgb(158, 146, 130);
  color:white;
  border: 1px solid black;
  border-radius: 5px ;
  font-family: 'Courier New', Courier, monospace;
  
}
button:hover{
  background-color: rgb(70, 76, 77);
}

.buttons2{
  display:flex;

}

div>span{
  font-weight: bold;
}

div>p{
  font-family: 'Courier New', Courier, monospace;
}
div>p>span{
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  font-size: 120%;
}

.buttons{
  display:flex;
  flex-direction: column;
  margin-bottom: 1vw;
  margin-left: 6vw;
}


img{
  float:right;
  display:block;
  position: relative;
  top: -4vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.searchResults{
    font-family: 'Courier New', Courier, monospace;
    text-align:center;
}

a{
  color:black;
}




@media screen and (max-width:500px) and (min-width: 400px){
  .form{
    min-width: 95%;
  }

  button{
    margin-bottom: 2vw;
  }

  .form2{
    background-color: rgba(108, 109, 114);
    margin-top: 62vh;
    width:96%;
    z-index: 1;
  }

  .form2>p{
    color:white;
  }
}

@media screen and (max-width: 1200px) and (min-width: 700px) {
  .form{
    min-width: 95%;
    
  }

  .form2{
    background-color: rgba(108, 109, 114);
    margin-top: 62vh;
    width:96%;
    z-index: 1;
  }

  .form2>p{
    color:white;
  }
  .buttons{
    margin-left: 10vw;
  }
}
</style>