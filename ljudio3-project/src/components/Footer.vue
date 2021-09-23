<template>
    <body>
        <div class="container">
            <div class="footer">
                <div class="icons">
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-youtube-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
                <div class="footerNav">
                    <nav>
                        <a href="#">Contact us</a> |
                        <a href="#">About us</a> |
                        <a href="#">FAQ</a>
                    </nav>
                </div>
            </div>
        </div>
    </body>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container{
        margin: 0 0 100px;
}
.footer{
    background-color: rgba(108, 109, 114, 0.9);
    bottom: 0;
    left:0;
    width: 100%;
    min-height:100px;
    position:fixed;
}
.icons>i{
    font-size: 350%;
    margin-right: 2vw;
    position: relative;
    left:3vw;
    top:1vw;
    
}

.footerNav{
    text-align: center;
}
a{
    padding: 2vw;
    color:white;
    text-decoration: none;
}

@media screen and (max-width:500px) and (min-width: 320px){
  .icons{
      text-align: center;
      position:relative;
      right:1vw;   
  }
  
}

@media screen and (max-width: 1200px) and (min-width: 700px) {
  .icons{
      text-align:center;
      position:relative;
      right:2vw;
      
  }
  
}
</style>