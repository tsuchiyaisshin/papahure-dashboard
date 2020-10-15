<template>
  <div class="background-svg">
    <v-container>
      <v-row dense class="mt-n5">
        <v-col cols="9">
          <div class="date-text" v-text="date"></div>
        </v-col>
        <v-col class="text-right" cols="3">
          <img src="../../assets/svg/icons.svg" class="logo" />
        </v-col>
      </v-row>
      <v-row v-if="$route.name !== 'Main'">
        <v-col cols="12">
          <div class="app-bar-text" v-text="text"></div>
        </v-col>
      </v-row>
      <v-row v-if="$route.name === 'Main'">
        <day-count></day-count>
        <papa-status></papa-status>
        <walk-count></walk-count>
        <coin-count class="coin-count"></coin-count>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { dateUtils } from '../../utils/date'
import DayCount from '../atoms/DayCount'
import PapaStatus from '../atoms/PapaStatus'
import WalkCount from '../atoms/WalkCount'
import CoinCount from '../atoms/CoinCount'

export default {
  name: 'AppBar',
  components: { CoinCount, WalkCount, PapaStatus, DayCount },
  props: {
    text: {
      type: String,
      default: '目標を決めよう！',
    },
  },
  data: () => ({
    date: undefined,
  }),
  mounted() {
    setInterval(this.showClock1)
  },
  methods: {
    showClock1() {
      this.date = dateUtils.getTime()
    },
  },
}
</script>

<style scoped>
.background-svg {
  background-image: url('../../assets/svg/header.svg');
  max-width: 320px;
  min-height: 149px;
}

.date-text {
  color: white;
  font-size: 13px;
  font-weight: 600;
}

.app-bar-text {
  color: white;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
}

.coin-count {
  position: absolute;
  top: 50px;
  left: 230px;
}
</style>
