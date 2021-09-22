<template>
    <div class="nav">
        <nav>
            <h1>LJUDIO</h1>
             <router-link to="/">Home</router-link> |
             <router-link to="/albums">Albums</router-link> |
             <router-link to="/artists">Artists</router-link>
        </nav>
    </div>
</template>
<script>
export default {
    mounted(){
        
    },
    
}
</script>

<style scoped>
nav{
    background-color: rgba(108, 109, 114, 0.9);
    border:1px solid black;
    height: 10vh;
    width:100%;
    text-align: center;
    /* position:fixed; */
    z-index: 1;
    
}
a{
    color:white;
    text-decoration: none;
    font-size:130%;
    padding:2vw;
    font-family: 'Courier New', Courier, monospace;
}

h1{
    color:White;
    font-size:250%;
    font-family: 'Courier New', Courier, monospace;
    
}


</style>