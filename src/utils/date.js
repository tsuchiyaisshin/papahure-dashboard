export const dateUtils = {
  getTime() {
    const nowTime = new Date()
    const nowHour = nowTime.getHours()
    let nowMin = nowTime.getMinutes()
    if (nowMin < 10) {
      nowMin = '0' + nowMin
    }
    const msg = nowHour + ':' + nowMin
    return msg
  },
}
