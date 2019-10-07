import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let roulette
const maxNumber = 75;
const rowNum = 5;

export default new Vuex.Store({
  state: {
    remainingNumber: allRange(),
    resultNumber: null,
    history: [],
    isShuffle: false,
    bingoCard: {
      cardValues: createCardValues(),
      waitingLines: 0,
      bingoLines: 0,
    }

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
      // カードに番号があったらtrueに色を変える
      state.bingoCard.cardValues.map((i) => {
        let filteredCard = i.filter((j) => { return state.resultNumber === j.number });
        filteredCard.forEach((j) => { j.checked = true })
      });
      // リーチとビンゴの数を計算する
      [state.bingoCard.waitingLines, state.bingoCard.bingoLines] = calcStats(state.bingoCard.cardValues);
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

function calcStats(cardValues) {
  const cardLength = cardValues.length;
  // 縦
  let targetLines = Object.assign([], cardValues);
  // 横とななめ
  let diagonal = [...Array(rowNum)]
  let diagonalR = [...Array(rowNum)]
  for (let i = 0; i < cardLength; i++) {
    let row = []
    cardValues.map((_, j) => { row.push(cardValues[j][i]) })
    targetLines.push(row)
    diagonal[i] = cardValues[i][i]
    diagonalR[i] = cardValues[cardValues.length - i - 1][cardValues.length - i - 1]
  }
  targetLines.push(diagonal, diagonalR)

  // 集計
  let totalWatingLines = 0
  let totalBingoLines = 0
  targetLines.map((i) => {
    let calc = i.reduce((calc, j) => { return j.checked ? calc + 1 : calc }, 0)
    if (calc === i.length - 1) {
      totalWatingLines++
    } else if (calc === i.length) {
      totalBingoLines++
    }
  });
  return [totalWatingLines, totalBingoLines]
}