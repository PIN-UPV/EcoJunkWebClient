<template>
  <div>
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button @click="goBack" class="md-icon-button">
            <md-icon>arrow_back</md-icon>
          </md-button>
        </div>
      </div>
    </md-toolbar>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{id.id}}</div>
          <div class="md-subhead">User: {{id.user.name}}</div>
        </md-card-header>
        <md-card-content>
          <p>Descripción: {{id.junk.name}}</p>
          <p>Fecha: {{id.date}}</p>
          <p>Precio: {{id.price}}</p>
          <p>Ubicación: {{id.location}}</p>
        </md-card-content>
      </md-ripple>
      <timer v-if="showTimer" v-bind:deadline="deadline"></timer>
    </md-card>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TIMER from "@/components/CountDown";

export default {
  name: "infoR",
  data() {
    return {
      store: this.$store.state.agreement,
      id: 0,
      showTimer: false,
      showAccept: true,
      showCancel: true
    };
  },
  components: {
    timer: TIMER
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    ...mapMutations(["ACEPT_AGREEMENT", "REJECT_AGREEMENT"]),
    aceptAgreement: function() {
      this.ACEPT_AGREEMENT(this.id);
      this.showTimer = true;
      this.showAccept = false;
      this.showCancel = false;
    },
    rejectAgreement: function() {
      this.REJECT_AGREEMENT(this.id);
      this.showAccept = false;
      this.showCancel = false;
    }
  }
};
</script>