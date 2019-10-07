<template>
  <div class="shuffle-result">
    <div v-if="isNohistory">STARTボタンを押して始めましょう！</div>
    <div v-else-if="isShuffle" class="now-shuffle">シャッフル中({{getTimes}}回目)->{{resultNumber}}</div>
    <div v-else class="result-number">結果の数字({{getTimes}}回目)->{{resultNumber}}</div>
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
    },
    isNohistory() {
      return (
        this.$store.state.history.length === 0 &&
        !this.$store.state.resultNumber
      );
    },
    getTimes() {
      return this.$store.state.history.length + 1;
    }
  }
};
</script>