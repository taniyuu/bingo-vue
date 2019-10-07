import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let roulette
const maxNumber = 75;

export default new Vuex.Store({
  state: {
    remainingNumber: allRange(),
    resultNumber: null,
    history: [],
    isShuffle: false,
    cardValues: createCardValues()
  },
  mutations: {
    start(state) {
      // start押したときに、前回の結果を履歴に移し替える
      if (state.resultNumber) {
        state.remainingNumber = state.remainingNumber.filter((each) => { return each !== state.resultNumber; });
        state.history.push(state.resultNumber);
      }
      // ルーレットスタート
      state.isShuffle = true;
      const length = state.remainingNumber.length;
      roulette = setInterval(() => {
        let i = Math.floor(Math.random() * length);
        state.resultNumber = state.remainingNumber[i];
      }, 100);
    },
    stop(state) {
      // ルーレットストップ
      clearInterval(roulette)
      state.isShuffle = false;
      // カードに番号があったらtrueにして色を変える
      const hoge = state.cardValues.map((i) => {
        let filteredCard = i.filter((j) => { return state.resultNumber === j.number });
        filteredCard.forEach((j) => { j.checked = true })
        return filteredCard;
      });
    },
    init(state) {
      // 初期化する
      state.remainingNumber = allRange(maxNumber);
      state.resultNumber = null;
      state.history = [];
    }
  },
  actions: {

  }
})

/**
 * 1から引数に与えた数までの連番を格納した配列を返す
 * @param {number} num
 * @returns {[number]}
 */
function allRange() {
  if (typeof maxNumber !== 'number') {
    return null;
  }
  const args = [];
  for (let i = 1; i <= maxNumber; i++) {
    args.push(i);
  }
  return args;
}

function createCardValues() {
  // 5×5の配列作成
  const rowNum = 5;
  let result = [];
  for (let i = 0; i < rowNum; i++) {
    // 候補配列
    let all = [];
    for (let j = 1; j <= maxNumber / rowNum; j++) {
      all.push(j + i * (maxNumber / rowNum));
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