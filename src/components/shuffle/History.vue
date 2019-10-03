<template>
  <ul>
    <ul>
      <li v-for="(number,index) in history" :key="index">{{ number }}</li>
    </ul>
  </ul>
</template>
<script>
export default {
  computed: {
    history() {
      return this.$store.state.history.slice().reverse();
    }
  }
};
</script>