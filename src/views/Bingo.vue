<template>
  <div class="bingo">
    <h1>This is an bingo page</h1>
    <MC></MC>
  </div>
</template>
<script>
// @ is an alias to /src
import MC from "@/components/MC.vue";

export default {
  name: "bingo",
  components: {
    MC
  }
};
</script>
