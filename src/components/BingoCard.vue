<template>
  <div id="bingo-card">
    <h1>This is a Bingo Card component</h1>
    <table align="center">
      <tr>
        <th v-for="n in heads" :key="n">{{ n }}</th>
      </tr>
      <tr v-for="(m, i) in values" :key="i">
        <td
          :class="{ 'bingo-checked' : values[j][i].checked }"
          v-for="(n, j) in m"
          :key="j"
        >{{values[j][i].number}}</td>
      </tr>
    </table>
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
      heads: ["B", "I", "N", "G", "O"],
      values: []
    };
  },
  created() {
    this.values = this.createCardValues();
  },
  methods: {
    createCardValues() {
      // 5×5の配列作成
      const maxNum = 75;
      const rowNum = 5;
      let result = [];
      for (let i = 0; i < rowNum; i++) {
        // 候補配列
        let all = [];
        for (let j = 1; j <= maxNum / rowNum; j++) {
          all.push(j + i * (maxNum / rowNum));
        }
        // 各列の数値を決める
        let column = [];
        for (let j = 0; j < rowNum; j++) {
          let index = Math.floor(Math.random() * all.length);
          column.push({ number: all[index], checked: false });
          all.splice(index, 1);
        }
        result.push(column);
      }
      // FIXME result[2][2]だけ特別扱いする
      result[2][2] = { number: "X", checked: true };
      return result;
    }
  }
};
</script>
<style>
.bingo-checked {
  background-color: #ffb6c1;
}
</style>
