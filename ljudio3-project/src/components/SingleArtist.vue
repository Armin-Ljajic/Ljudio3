<template>
    <body>
        <Header/>
        <div>
            <div class="form">
                <ul class="singleArtistUL">
                    <li v-for="(singleArtist, index) in singleArtists" :key="index">
                        <h2><i class="fas fa-user"></i> {{singleArtist.name}}</h2>
                        <img :src="singleArtist.thumbnails[1].url">
                        <p class="description">{{singleArtist.description}}</p>
                        <button @click="copyUrl">Copy link to clipboard</button>
                    </li>
                </ul>
                <ul class="songsUL">
                    <li v-for="(song, index) in songs" :key="index">
                        <h1>Songs</h1>
                        <p>{{song[0].name}}</p>
                        <p>{{song[1].name}}</p>
                        <p>{{song[2].name}}</p>
                        <p>{{song[3].name}}</p>
                        <p>{{song[4].name}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <Footer/>
    </body>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {

        components: {
            Header,
            Footer
        },
        data(){
            return{
                singleArtists: [],
                songs: [],
            }
        },
        methods: {
            copyUrl(){
                var dummy = document.createElement('input'),
                text = window.location.href;

                document.body.appendChild(dummy);
                dummy.value = text;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
            }
        },

    mounted(){  
        

        axios
            .get(`https://yt-music-api.herokuapp.com/api/yt/artist/${this.$route.params.id}`, {
                
            })
            .then(res => {
              console.log(res.data)
              this.singleArtists.push(res.data);
              this.songs.push(res.data.products.songs.content)
              console.log(this.songs)
            })
            .catch(err => {
                console.log(err)
            })
        
        
    },
    created(){
        
    }      
}
</script>

<style scoped>
.form{
  background-color: rgb(187, 166, 138, 0.5);
  /* min-height:40vh; */
  min-width: 50%;   
  margin: auto;
  margin-top: 5vh;
  padding-bottom: 2vw;
  padding-top: 2vw;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.singleArtistUL{
    padding: 0;
}

.singleArtistUL>li{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:5vw;
}

.singleArtistUL>li>h2{
    margin-right: 2vw;
    margin-top: 3vw;
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
}

.songsUL{
    padding:0;
}

.songsUL>li{
    list-style: none;
    padding:5vw;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.songsUL>li>h1,
.songsUL>li>p{
    font-family: 'Courier New', Courier, monospace;
}

.description{
    font-family: 'Courier New', Courier, monospace;
}

button{
  margin:0 auto;
  width: 60%;
  background-color: rgb(158, 146, 130);
  color:white;
  border: 1px solid black;
  border-radius: 5px ;
  font-family: 'Courier New', Courier, monospace;
  
  
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
    width:80vw;
    margin-bottom: 2vw;
}

.description{
    margin-left: 2vw;
}

@media screen and (max-width:600px) and (min-width: 320px){
    .form{
        width:95%;
        margin-top: 10vw;
    }
    .singleArtistUL>li{
        display:flex;
        flex-direction: column;
    }
    
    img{
        height:50vw;
    }


    h2{
        text-align: center;
    }
    

@media screen and (max-width: 1200px) and (min-width: 700px) {
    .form{
        width:80%;
    }

    .singleArtistUL>li{
        display:flex;
        flex-direction: column;
    }

}

}
</style>