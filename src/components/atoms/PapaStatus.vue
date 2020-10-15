<template>
  <div class="ribbon-svg">
    <div class="front-status-text" v-text="text"></div>
    <div class="status-text" v-text="text"></div>
  </div>
</template>

<script>
export default {
  name: 'PapaStatus',
  props: {
    text: {
      type: String,
      default: 'ポチャパパ',
    },
  },
}
</script>

<style scoped>
.ribbon-svg {
  background-image: url('../../assets/svg/ribbon.svg');
  min-width: 200px;
  max-width: 200px;
  margin-top: -10px;
  margin-left: -20px;
}
.status-text {
  /* ポチャパパ */

  position: absolute;
  width: 80px;
  height: 16px;
  left: 120px;
  top: 30px;

  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  color: #f9fcff;
}
.front-status-text {
  position: absolute;
  width: 80px;
  height: 16px;
  left: 120px;
  top: 30px;

  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 100%;
  /* identical to box height, or 16px */

  -webkit-text-stroke: 5px #ee87a7;
}
</style>
