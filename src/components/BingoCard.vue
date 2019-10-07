<template>
  <div id="bingo-card">
    <h1>This is a Bingo Card component</h1>
    <table align="center">
      <tr>
        <th v-for="n in heads" :key="n">{{ n }}</th>
      </tr>
      <tr v-for="(m, i) in cardValues" :key="i">
        <td
          :class="{ 'bingo-checked' : cardValues[j][i].checked }"
          v-for="(n, j) in m"
          :key="j"
        >{{cardValues[j][i].number}}</td>
      </tr>
    </table>
    <div id="bingo-card-stats">
      <p>リーチの数：{{waitingLines}}</p>
      <p>ビンゴの数：{{bingoLines}}</p>
    </div>
  </div>
</template>
<script>
// ビンゴカードは、5*5
// 真ん中は開けられる
// B 列：1～15 のうち、いずれか 5 つの数字が入る。
// I 列：16～30 のうち、いずれか 5 つの数字が入る。
// N 列：31～45 ﾌうち、いずれか 4 つの数字が入る。（中央はフリー）
// G 列：46～60 のうち、いずれか 5 つの数字が入る。
// O 列：61～75 のうち、いずれか 5 つの数字が入る。
export default {
  data() {
    return {
      heads: ["B", "I", "N", "G", "O"]
    };
  },
  created() {},
  methods: {},
  computed: {
    cardValues() {
      return this.$store.state.bingoCard.cardValues;
    },
    waitingLines() {
      return this.$store.state.bingoCard.waitingLines;
    },
    bingoLines() {
      return this.$store.state.bingoCard.bingoLines;
    }
  }
};
</script>
<style>
.bingo-checked {
  background-color: #ffb6c1;
}
</style>
