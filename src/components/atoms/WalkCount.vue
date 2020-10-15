<template>
  <div class="box">
    <div class="front-count-text" v-text="walkCount"></div>
    <div class="count" v-text="walkCount"></div>
    <div class="front-walk">歩</div>
    <div class="walk">歩</div>
  </div>
</template>

<script>
export default {
  name: 'WalkCount',
  props: {
    walkCount: {
      type: Number,
      default: 1645,
    },
  },
}
</script>

<style scoped>
.box {
  display: -webkit-box;
  display: -moz-box;
}
.count {
  position: absolute;
  width: 175px;
  height: 98px;
  left: 85px;
  top: 45px;
  color: #f9fcff;

  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 150%;
  /* identical to box height, or 99px */
  letter-spacing: -0.1em;
  text-stroke: 1px #969bff;
  -webkit-text-stroke: 3px #8099ff;
}
.walk {
  position: absolute;
  width: 17px;
  height: 25px;
  left: 225px;
  top: 85px;

  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 26px */
  letter-spacing: -0.1em;
  color: #f9fcff;
  text-stroke: 1px #969bff;
  -webkit-text-stroke: 1px #969bff;
}
.front-count-text {
  position: absolute;
  width: 175px;
  height: 98px;
  left: 85px;
  top: 45px;

  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 55px;
  line-height: 150%;
  /* identical to box height, or 99px */
  letter-spacing: -0.1em;
  -webkit-text-stroke: 10px #8099ff;
}
.front-walk {
  position: absolute;
  width: 17px;
  height: 25px;
  left: 225px;
  top: 85px;

  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
  /* identical to box height, or 26px */
  letter-spacing: -0.1em;
  color: #f9fcff;
  -webkit-text-stroke: 5px #969bff;
}
</style>
