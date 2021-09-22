import { createRouter, createWebHistory } from 'vue-router'


import Home from '/src/components/Home.vue'
import Albums from '/src/components/Albums.vue'
import Artists from '/src/components/Artists.vue'
import SingleArtist from '/src/components/SingleArtist.vue'
import SingleSong from '/src/components/SingleSong.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/albums',
        name: 'Albums',
        component: Albums
    },
    {
        path: '/artists',
        name: 'Artists',
        component: Artists
    },
    {
        path: '/artists/:id',
        name: 'SingleResult',
        component: SingleArtist
    },
    {
        path: '/songs/:id',
        name: 'SingleSong',
        component: SingleSong
    }
   
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
