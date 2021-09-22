import { createStore } from "vuex" 
import axios from 'axios'

const store = createStore({
   state:{
      artists: [],
      artistKeyword: ""
        // properties:{
        //  keyword: "",
        //  showContent: false

        // },
        // arrayOfLists:{
        //     songs: [],
        //     playlist: [],
        // }
            
           
   },
   getters:{
      
   },
   mutations:{
       updateInput(state, keyword){
          state.artistKeyword = keyword
       }
   },
   actions:{
      searchArtists(){
         axios
         .get(`https://yt-music-api.herokuapp.com/api/yt/artists/:${this.state.artistKeyword}`, {
           
         })
         .then(res => {
           console.log(res.data.content)
           this.state.artists = res.data.content
           console.log(this.state.artists)
         })
         .catch(err => {
             console.log(err)
         })
     }


    //   searchSongs(){
    //      axios
    //      .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.state.properties.keyword}`)
         
    //      .then(res => {
    //        console.log(res.data.content)
    //        this.state.arrayOfLists.songs = res.data.content;
    //        this.state.arrayOfLists.playlist.length = 0;
    //        for(const val of this.songs){
    //          this.state.arrayOfLists.playlist.push(val.videoId);
    //          console.log(state.playlist);
    //          }
    //          this.state.showContent = true;
    //      })
    //      .catch(err => {
    //          console.log(err)
    //      })
    //  },
   
   }
})

export default store