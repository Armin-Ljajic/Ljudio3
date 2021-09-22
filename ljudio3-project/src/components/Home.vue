<template>
    <div>
        <Header/>
        <Player/>
        <Footer/>
    </div>
</template>
<script>

import Footer from './Footer.vue'
import Header from './Header.vue'
import Player from './Player.vue'
import axios from 'axios';

export default {
    components: {
        Header,
        Footer,
        Player,
        axios
        
    },
    
    methods:{
        
    }
    
}

</script>

<style scoped>

    
</style>