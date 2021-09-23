import { createStore } from "vuex" 
import axios from 'axios'

const store = createStore({
   state:{
      artists: [],
      artistKeyword: "",
      // songsKeyword: "",
      // songs: [],
      // playlist: [],     
   },
   getters:{
      
   },
   mutations:{
       updateArtistInput(state, keyword){
          state.artistKeyword = keyword
       },
      //  updateSongsInput(state, keyword){
      //     state.songsKeyword = keyword
      //  }
   },
   actions:{
      searchArtists(){
         axios
         .get(`https://yt-music-api.herokuapp.com/api/yt/artists/:${this.state.artistKeyword}`, {
           
         })
         .then(res => {
           this.state.artists = res.data.content
           console.log(this.state.artists)
         })
         .catch(err => {
             console.log(err)
         })
     },


   //    searchSongs(){
   //       axios
   //       .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.state.songsKeyword}`)
         
   //       .then(res => {
   //         console.log(res.data.content)
   //         this.state.songs = res.data.content;
   //         this.state.playlist.length = 0;
   //         for(const val of this.songs){
   //           this.state.playlist.push(val.videoId);
   //           console.log(this.state.playlist);
   //           }
   //       })
   //       .catch(err => {
   //           console.log(err)
   //       })
   //   },
   
   }
})

export default store