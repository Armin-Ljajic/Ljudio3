import { createStore } from "vuex" 
import axios from 'axios'

const store = createStore({
   state:{
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
    //    updateInput(state, keyword){
    //       state.properties.keyword = keyword
    //    }
   },
   actions:{
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