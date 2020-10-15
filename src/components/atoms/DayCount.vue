<template>
  <div class="day-count-svg">
    <div class="dayText" v-text="day"></div>
  </div>
</template>

<script>
export default {
  name: 'DayCount',
  data: () => ({
    day: 3,
  }),
}
</script>

<style scoped>
.day-count-svg {
  background-image: url('../../assets/svg/day-count.svg');
  min-width: 100px;
  max-width: 100px;
  min-height: 100px;
  margin-left: 20px;
}
.dayText {
  font-weight: 600;
  font-size: 24px;
  padding-top: 12px;
  padding-left: 10px;
  color: #ffe44f;
}
</style>
