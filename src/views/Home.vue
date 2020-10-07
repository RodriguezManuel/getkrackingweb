<template>
  <div class="home">
    <TopBar msg="Hola mundo"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'

export default {
  name: 'Home',
  components: {
    TopBar
  }
}
</script>
