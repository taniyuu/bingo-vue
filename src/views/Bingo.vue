<template>
  <div class="bingo">
    <h1>This is a bingo page</h1>
    <BingoCard></BingoCard>
    <MC></MC>
  </div>
</template>
<script>
// @ is an alias to /src
import MC from "@/components/MC.vue";
import BingoCard from "@/components/BingoCard.vue";

export default {
  name: "bingo",
  components: {
    MC,
    BingoCard
  }
};
</script>
