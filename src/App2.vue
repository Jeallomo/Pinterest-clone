<template>
  <div class="">
    <TopNav />
    <div class="px-20 w-full flex flex-wrap">
      <div v-for="(arr, index) in subArrays" :key="index" class="w-1/5">
        <div v-for="(card, i) in arr" :key="i" class="w-full">
          <div class="w-full p-2">
            <Card :src="`${card.src}`" :board="`${card.recommended}`" class="w-full h-full"/>
            <div class="text-sm leading-tight pt-2">
              <p class="font-bold"> {{ card.title }} </p>
              <p> {{ card.user }} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopNav from './TopNav.vue';
import Card from './Card.vue';

export default {
  name: 'App',
  components: {
    TopNav,
    Card
  },
  computed: {
    subArrays() {
      var length = Math.ceil(this.cards.length / 2);

      const result = new Array(length)
        .fill()
        .map((i) => {
          console.log(i)
          return this.cards.splice(0, length)
        })

        return result
    }
  },
  data() {
    return {
      cards: [
        {
          src: '1.jpg',
          title: 'Lamborghini',
          user: 'Usuario',
          recommended: 'Cars'
        },
        {
          src: '2.jpg',
          title: 'De Barrio',
          user: 'Usuario',
          recommended: 'Meme :v'
        },
        {
          src: '3.jpg',
          title: 'El bugs bunny',
          user: 'Usuario',
          recommended: 'Cartoon'
        },
        {
          src: '4.jpg',
          title: 'Lambo',
          user: 'Usuario',
          recommended: 'Cars'
        },
        {
          src: '5.jpg',
          title: 'Night',
          user: 'Usuario',
          recommended: 'Cars'
        },
        {
          src: '6.jpg',
          title: 'Set up Uwu',
          user: 'Usuario',
          recommended: 'Pc gamer'
        },
        {
          src: '7.jpg',
          title: 'Black Lamborghini',
          user: 'Usuario',
          recommended: 'Cars'
        },
        {
          src: '8.jpg',
          title: 'AAAAAAA',
          user: 'Usuario',
          recommended: 'Meme :v'
        },
        {
          src: '9.jpg',
          title: 'Mario Bros',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '10.jpg',
          title: 'Halo',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '11.jpg',
          title: 'Final Fantasy',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '12.jpg',
          title: 'COD',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '13.png',
          title: 'The witcher',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '14.jpg',
          title: 'Geralt of Rivia',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '15.jpg',
          title: 'Wallpaper',
          user: 'Usuario',
          recommended: 'Wallpaper'
        },
        {
          src: '16.jpg',
          title: 'Spiderman',
          user: 'Usuario',
          recommended: 'Wallpaper'
        },
        {
          src: '17.jpg',
          title: 'F*ck tha police',
          user: 'Usuario',
          recommended: 'Wallpaper'
        },
        {
          src: '18.jpg',
          title: 'Alv',
          user: 'Usuario',
          recommended: 'Meme :v'
        },
        {
          src: '19.jpg',
          title: 'Setup Gamer',
          user: 'Usuario',
          recommended: 'Pc gamer'
        },
        {
          src: '20.jpg',
          title: 'Cj chikito',
          user: 'Usuario',
          recommended: 'Meme :v'
        },
        {
          src: '21.jpg',
          title: 'GTA V',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '22.jpg',
          title: 'Chop',
          user: 'Usuario',
          recommended: 'Games'
        },
        {
          src: '1.jpg',
          title: 'Lambo',
          user: 'Usuario',
          recommended: 'Cars'
        },
        {
          src: '24.jpg',
          title: 'Porsche',
          user: 'Usuario',
          recommended: 'Cars'
        },
        {
          src: '25.jpg',
          title: 'Spiderman',
          user: 'Usuario',
          recommended: 'Wallpaper'
        },
      ]
    }
  }
}
</script>

<style src="./assets/tailwind.css" />
