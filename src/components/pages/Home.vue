<template>
  <div style="text-align: center">
    <img src="../../assets/png/logo.png" class="logo" />
    <img src="../../assets/svg/papa.svg" class="papa" />
    <img src="../../assets/svg/btn.svg" class="btn" @click="toRegister" />
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toRegister() {
      this.$router.push({ name: 'Register' })
    },
  },
}
</script>

<style scoped>
.logo {
  width: 250px;
  margin-top: 20px;
}

.papa {
  width: 150px;
  margin-left: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
}

.btn {
  width: 250px;
  margin: 10px;
}
</style>
