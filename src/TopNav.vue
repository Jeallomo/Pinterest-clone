<template lang="html">
  <div class="px-3 py-4 flex items-center justify-between w-full">
    <div class="flex items-center">
      <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button" name="button">
        <img src="logo.png" alt="logo" class="h-6 w-6">
      </button>
      <button v-for="(item, i) in tabItems" :key="i" @click="selectedTab = item.key" :class="`${selectedTab === item.key ? 'bg-dark text-white' : 'text-dark hover:bg-light'} rounded-full py-3 px-4 font-semibold text-sm lg:text-base`" type="button" name="button">
        {{ item.name }}
      </button>
    </div>
    <div class="flex-grow relative">
      <span class="material-icons absolute mt-3 ml-3 text-muted">search</span>
      <input class="text-muted w-full hover:bg-lightHover rounded-full bg-light py-3 pr-3 pl-10" placeholder="Buscar" type="text" name="" value="">
    </div>
    <div class="flex items-center">
      <button type="button" name="button" class="relative rounded-full hover:bg-light flex items-center justify-center p-3">
        <span class="material-icons text-3xl text-muted">notifications</span>
      </button>
      <button type="button" name="button" class="relative rounded-full hover:bg-light flex items-center justify-center p-3">
        <span class="material-icons text-3xl text-muted">textsms</span>
      </button>
      <button class="rounded-full hover:bg-light p-3 flex items-center justify-center" type="button" name="button">
        <div class="w-6 h-6 bg-cover bg-center rounded-full" style="background-image: url(profile.jpg)"></div>
      </button>
      <button type="button" name="button" class="w-6 h-6 hover:bg-light rounded-full flex items-center justify-center">
        <span class="material-icons text-muted">expand_more</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabItems: [
        {name: 'Inicio', key: 'home'},
        {name: 'Hoy', key: 'today'}
      ],
      selectedTab: 'home'
    }
  }
}
</script>

<style lang="css" scoped>
</style>
