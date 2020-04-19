<template>
    <div>
        <h1>体温測定</h1>
        <div class="small"><line-chart :chart-data="datacollection" :options="options"></line-chart></div>
    </div>
</template>
<script>
  import LineChart from '@/plugin/LineChart';
  import templature from '@/assets/data.json';
  export default {
    components: {
      LineChart,
    },
    metaInfo: {
      meta: [
        {
          property: 'og:site_name',
          content: 'bingo-vue'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:url',
          content: 'https://bingo-vue-1ff3e6.netlify.app/'
        },
        {
          property: 'og:title',
          content: '体温測定'
        },
        {
          property: 'og:description',
          content: '測定結果をグラフ表示します'
        },
        {
          property: 'og:image',
          content: 'https://sample.netlify.com/sample.jpg'
        },
        {
          property: 'fb:app_id',
          content: 'アプリID'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        }
      ]
    },
    data () {
      return {
        title: '体温測定',
        description: '体温測定結果をグラフ表示します',
        datacollection: {},
        taion: templature,
        options:{
            scales: {
                yAxes: [{
                    ticks: {
                        max: 37
                    }
                }],
                xAxes: [{
                    ticks: {
                        minRotation: 0,   // ┐表示角度水平
                        maxRotation: 0,   // ┘
                        // autoSkip: true,  なくてもよい
                        maxTicksLimit: 6  // 最大表示数
                    }
                }]
            }
        }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: Object.keys(this.taion),
          datasets: [
            {
              label: '体温',
              backgroundColor: '#f87979',
              data: Object.values(this.taion),
              fill: false
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>
<style>
  .small {
    max-width: 600px;
    margin: auto;
  }
</style>