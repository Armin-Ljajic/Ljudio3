<template>
    <body>
        <Header/>
        <div class="artists">
            <section>
                <input type="text" placeholder="Search artists.." v-model="keyword">
                <button @click.prevent="searchArtists"><i class="fas fa-search"></i></button>
                <p class="searchParam">Search artists to see the artist name and who the artist features</p>
                <ul>
                    <li v-for="(artist, index) in artists" :key="index">
                        <p><i class="fas fa-user"></i>{{artist.name}}</p>
                        <img :src="artist.thumbnails[1].url">
                        <p><i class="fas fa-link"></i> <router-link :to="'/artists/'+ artist.browseId">Click to see artist</router-link></p>
                    </li>
                </ul>
            </section>
        </div>
        <Footer/>
    </body>
</template>

<script>

import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
    components:{
        Header,
        Footer
    },

    data(){
        return{
            //keyword: "",
            //artists: []
        }
    },

    computed:{
      artists(){
        return this.$store.state.artists
      },
      keyword: {
        get(){
          return this.$store.state.artistKeyword
        },
        set(value){
          this.$store.commit('updateInput', value)
        }
      },
    },

    methods:{
      searchArtists(){
        this.$store.dispatch('searchArtists')
      },

    },
    
}
</script>

<style scoped>
.artists{
    background-color: rgb(187, 166, 138, 0.5);
    min-height:40vh;
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

section{
    text-align: center;
}

li{
    list-style: none;
    border:1px solid black;
    padding:2vw;
    margin-bottom: 2vw;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    background-color: rgba(200, 180, 154, 0.5);
}
ul{
    padding:0;
    padding-top: 2vw;
    
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

p{
    font-family: 'Courier New', Courier, monospace;
}

a{
    color:black;
    
}

img{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
@media screen and (max-width:500px) and (min-width: 400px){
  .artists{
    min-width: 95%;
  }
  
}

@media screen and (max-width: 1000px) and (min-width: 700px) {
  .artists{
    min-width: 95%;
  }
  
}

</style>