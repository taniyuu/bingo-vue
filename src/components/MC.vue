<template>
  <div id="bingo-mc">
    <h1>This is a MC component</h1>
    <shuffleResult></shuffleResult>
    <shuffleController></shuffleController>
    <shuffleHistory></shuffleHistory>
  </div>
</template>
<script>
// @ is an alias to /src
import shuffleResult from "@/components/shuffle/Result.vue";
import shuffleController from "@/components/shuffle/Controller.vue";
import shuffleHistory from "@/components/shuffle/History.vue";

export default {
  name: "mc",
  components: {
    shuffleResult,
    shuffleController,
    shuffleHistory
  }
};
</script>
<style>
#bingo-mc {
  background-color: #ffb6c1;
}
</style>