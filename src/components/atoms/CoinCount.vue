<template>
  <div class="coin-count-svg">
    <div class="coin-text" @click="addCoin" v-text="coinCount"></div>
  </div>
</template>

<script>
export default {
  name: 'CoinCount',
  props: {
    coinCount: {
      type: Number,
      default: 600,
    },
  },
  methods: {
    addCoin() {
      this.coinCount = this.coinCount + 100
    },
  },
}
</script>

<style scoped>
.coin-count-svg {
  background-image: url('../../assets/svg/coin-count.svg');
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
}

.coin-text {
  margin-top: 13px;
  margin-left: 30px;
  font-family: Heisei Maru Gothic Std;
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 150%;
  /* identical to box height, or 22px */
  letter-spacing: -0.03em;

  color: #f2faff;
}
</style>
