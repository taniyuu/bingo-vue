<template>
  <div v-if="isOver" class="controller">
    <button v-if="isShuffle" @click="stop" type="button">STOP</button>
    <button v-else @click="start" type="button">START</button>
    <button @click="init" type="button">INIT</button>
  </div>
</template>
<script>
export default {
  methods: {
    init() {
      if (confirm("カードと出目をリセットします")) {
        this.$store.commit("init");
      }
    },
    start() {
      this.$store.commit("start");
    },
    stop() {
      this.$store.commit("stop");
    }
  },
  computed: {
    isShuffle() {
      // シャッフル中は０になるので、０の時true
      return this.$store.state.isShuffle;
    },
    isOver() {
      return this.$store.state.remainingNumber.length > 0;
    }
  }
};
</script>