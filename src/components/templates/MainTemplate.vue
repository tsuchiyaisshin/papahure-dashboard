<template>
  <div class="background-svg">
    <app-bar :text="headerText"></app-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import AppBar from '../molcules/AppBar'

export default {
  name: 'MainTemplate',
  components: { AppBar },
  data: () => ({
    headerText: '',
  }),
}
</script>

<style scoped></style>
