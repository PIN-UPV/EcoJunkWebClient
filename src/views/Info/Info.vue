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
          <div class="md-title">{{deal.id}}</div>
          <div class="md-subhead">User: {{deal.customer.email}}</div>
        </md-card-header>

        <md-card-content>
          <p>Precio: {{deal.price}}</p>
          <p>Ubicación: {{deal.junk_point.location.coordinates}}</p>
        </md-card-content>

        <md-card-actions>
        <md-button v-if="showAccept" @click="aceptDeal(),date()">Aceptar Acuerdo</md-button>
        <md-button v-if="showCancel" @click="declineDeal()">Rechazar Acuerdo</md-button>
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
      deal: null,
      showTimer: false,
      showAccept: true,
      showCancel: true
    };
  },
  components: {
    timer: TIMER
  },
  created() {
    this.deal = this.$route.params.id;
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
      this.id.countDown = this.deadline;
    },
    goBack() {
      this.$router.go(-1);
    },
    ...mapMutations(["ACEPT_AGREEMENT", "REJECT_AGREEMENT"]),
    /*aceptAgreement: function() {
      this.ACEPT_AGREEMENT(this.id);
      this.showTimer = true;
      this.showAccept = false;
      this.showCancel = false;
    },
    rejectAgreement: function() {
      this.REJECT_AGREEMENT(this.id);
      this.showAccept = false;
      this.showCancel = false;
    },*/
    aceptDeal(){
      const {deal} = this.deal
      this.$store.dispatch("agreement/DEAL_ACCEPT" ,{deal}).then(() => {
        this.$router.go(-1);
      });
    },
    declineDeal(){
      const {deal} = this.deal
      this.$store.dispatch("agreement/DEAL_DECLINE" ,{deal}).then(() => {
        this.$router.go(-1);
      });
    }
  }
};
</script>