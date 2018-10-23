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
          Description: {{id.junk.name}}
          Date: {{id.date}}
          Price: {{id.price}}
          Location: {{id.location}}
        </md-card-content>

        <md-card-actions>
        <md-button v-if="showAccept" @click="aceptAgreement(),date()">Aceptar Acuerdo</md-button>
        <md-button v-if="showCancel" @click="rejectAgreement">Rechazar Acuerdo</md-button>
      </md-card-actions>
      </md-ripple>
      <timer v-if="showTimer" v-bind:deadline="deadline"></timer>
    </md-card>

    
  </div>
</template>




<script>
import { mapMutations } from "vuex";
import TIMER from "@/components/CountDown";

export default {
  name: "info",
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
    date() {
      var now = new Date();
      now.setTime(now.getTime() + 1000 * 60 * 60 * 24);

      this.deadline =
        now.getFullYear() +
        "-" +
        (now.getMonth() + 1) +
        "-" +
        now.getDate() +
        " " +
        now.getHours() +
        ":" +
        now.getMinutes() +
        ":" +
        now.getSeconds();

      this.showTimer = true;
      this.showAccept = false;
      this.showCancel = false;
    },
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