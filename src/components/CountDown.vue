<template>
  <div>
      <flip-countdown deadline="2018-10-11 00:00:00"></flip-countdown>
  </div>
</template>


<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  name: "CountDown",
  components: { FlipCountdown }
};
</script>



<style scoped>
small {
  display: block;
}
</style>

