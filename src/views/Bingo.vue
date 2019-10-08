<template>
  <div class="bingo">
    <h1>This is a bingo page</h1>
    <BingoCard></BingoCard>
    <MC></MC>
    <BingoModal>
      <h3 slot="header">BINGO!</h3>
      <span slot="body">景品をもらいに行きましょう！</span>
    </BingoModal>
  </div>
</template>
<script>
// @ is an alias to /src
import MC from "@/components/MC.vue";
import BingoCard from "@/components/BingoCard.vue";
import BingoModal from "@/components/BingoModal.vue";

export default {
  name: "bingo",
  components: {
    MC,
    BingoCard,
    BingoModal
  }
};
</script>
