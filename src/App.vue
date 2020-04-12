<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/bingo">Bingo</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  mounted () {
      const {meta} = this.$route;
      this.createPageTitle(meta);
  },
  computed: {
    badgeCount() {
      return this.$store.getters.getBadgeCount;
    },
  },
  watch: {
    badgeCount: {
      immediate: true,
      handler(val){
        navigator.setAppBadge(val);
      }
    },
    '$route' (to, from) {
      this.createPageTitle(to.meta);
    }
  },
  methods: {
    createPageTitle (meta) {
      const {title,desc} = meta;
      // タイトルを設定
      if(title) document.title = title;
      // メタタグdescription設定
      if(desc) document.querySelector("meta[name='description']").setAttribute('content', desc);
  	} 
  }
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
