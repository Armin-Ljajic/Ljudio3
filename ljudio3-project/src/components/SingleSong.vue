<template>
    <body>
        <Header/>
        <div class="form">
            <button @click="copyUrl">Copy to link Clipboard</button>
            <ul class="singleSongUL">
                <li v-for="(singleSong, index) in singleSongs" :key="index">
                    <p><i class="fas fa-user"></i> <span>Artist:</span> {{singleSong.artist.name}}</p>
                    <p><i class="fab fa-itunes-note"></i> <span>Song: </span>{{singleSong.name}}</p>
                    <img :src="singleSong.thumbnails[1].url"/>
                    <div class="buttons">
                        <button @click="play(singleSong.videoId)"><i class="fas fa-play"></i></button>
                        <button @click="pause"><i class="fas fa-pause"></i></button>
                    </div>
                    <p>{{text}}</p>
                    
                </li>
            </ul>
        </div> 
        <Footer/> 
    </body>
</template>



<script>
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {

    components:{
        Header,
        Footer
    },

    data(){
        return{
            singleSongs: [],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sapien odio, sodales sed volutpat sodales, aliquet vel risus. Sed tempus tempus metus. Integer feugiat aliquam nisl, et ultrices diam ornare sed. Nullam quis magna vitae ex euismod laoreet non id lacus. Fusce eget arcu sed felis congue molestie. Vivamus et ante lectus. "


        }
    },
    methods:{
    copyUrl(){
        var dummy = document.createElement('input'),
        text = window.location.href;

        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);
    },
        
    play(id){
      // calling global variable
      
      window.player.loadVideoById(id)
      window.player.playVideo()
    },
    pause(){
      window.player.pauseVideo()
    },
    },
    mounted() {
            axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/songs/:${this.$route.params.id}`, {
                params: {
                    search: this.$route.params.id
                }
                
            })
            .then(res => {
              console.log(res.data.content)
              this.singleSongs = res.data.content;
            })
            .catch(err => {
                console.log(err)
            })
        
    }
    
}
</script>

<style scoped>
.form{
    background-color: rgb(187, 166, 138, 0.5);
    /* min-height:40vh; */
    width:50%;
    margin: auto;
    margin-top: 5vh;
    padding-bottom: 2vw;
    padding-top: 2vw;
    padding-right: 40px;
    padding-left: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
}

.singleSongUL{
    padding:0;

}

.singleSongUL>li{
    list-style: none;
    display:flex;
    flex-direction: column;
    align-items: center;
    border:1px solid black;
    margin-bottom: 2vw;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    padding:2vw;

    
}

.singleSongUL>li>p>span{
    font-weight: bold;
    font-family: 'Courier New', Courier, monospace;
    font-size: 120%;
}

.singleSongUL>li>p{
    font-family: 'Courier New', Courier, monospace;
}

button{
  
  margin: 0 auto;
  min-width: 60%;
  background-color: rgb(158, 146, 130);
  color:white;
  border: 1px solid black;
  border-radius: 5px ;
  font-family: 'Courier New', Courier, monospace;
  margin-bottom: 2vw;
  display:block;
  
}

.buttons{
    width:50%;
    padding:1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    
}

.buttons>button>i{
    display:block;
}
button:hover{
  background-color: rgb(70, 76, 77);
}

img{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

@media screen and (max-width:500px) and (min-width: 400px){
    .form{
        width:95%;
    }
    img{
        width:35vw;
    }
    button{
        margin-top: 2vw;
        padding-left: 6.5vw;
    }

@media screen and (max-width: 1200px) and (min-width: 700px) {


}

}
</style>