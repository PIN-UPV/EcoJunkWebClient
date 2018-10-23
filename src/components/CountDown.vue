<template>
  <div>
      <flip-countdown :deadline="deadline"></flip-countdown>
  </div>
</template>


<script>
import FlipCountdown from "vue2-flip-countdown";

export default {
  name: "CountDown",
  components: { FlipCountdown },
  props: {
      deadline: String
  }
};
</script>



<style scoped>
small {
  display: block;
}
</style>

