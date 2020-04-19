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
          content: process.env.VUE_APP_ROOT_ADDRESS
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
          content: process.env.VUE_APP_ROOT_ADDRESS+'img/test.jpg'
        },
        {
          property: 'fb:app_id',
          content: 'アプリID'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    },
    data () {
      return {
        title: '体温測定',
        description: '体温測定結果をグラフ表示します',
        datacollection: {},
        taion: templature.data,
        options: templature.options,
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
              label: templature.label,
              backgroundColor: templature.backgroundColor,
              borderColor:templature.borderColor,
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