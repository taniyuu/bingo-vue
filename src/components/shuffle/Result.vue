<template>
  <div class="shuffle-result">
    <div v-if="isShuffle" class="now-shuffle">シャッフル中->{{resultNumber}}</div>
    <div v-else class="result-number">結果の数字->{{resultNumber}}</div>
  </div>
</template>
<script>
export default {
  computed: {
    resultNumber() {
      return this.$store.state.resultNumber;
    },
    isShuffle() {
      return this.$store.state.isShuffle;
    }
  }
};
</script>