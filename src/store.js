import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let roulette
const maxNumber = 75;

export default new Vuex.Store({
  state: {
    remainingNumber: allRange(maxNumber),
    resultNumber: null,
    history: [],
    isShuffle: false
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
function allRange(num) {
  if (typeof num !== 'number') {
    return null;
  }

  const args = [];
  for (let i = 1; i <= num; i++) {
    args.push(i);
  }

  return args;
}