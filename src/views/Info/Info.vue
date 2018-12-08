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
          <div class="md-subhead">Rider: {{deal.customer.email}}</div>
        </md-card-header>

        <md-card-content>
          <p>Precio: {{deal.price}}</p>
          <!--<p>Ubicación: {{id.junk_point.location.coordinates}}</p>-->
          <!--<a target="_blank" :href="getUrl(id.junk_point.location.coordinates)">¿Cómo llegar?</a>-->
        </md-card-content>

        <timer v-if="showTimer" v-bind:deadline="deadline"></timer>

        <md-card-actions>
          <md-button v-if="showAccept && $store.getters['auth/isRider'] && deal.customer.email=='' 
          && deal.state == 'P'"
          @click="aceptDeal()">Aceptar Acuerdo</md-button>
          <md-button v-if="$store.getters['auth/isRider'] && deal.customer.email == $store.state.auth.profile.email 
          && deal.state == 'A'" 
          @click="declineDeal()">Rechazar Acuerdo</md-button>
          <md-button v-if="deal.state == 'A'"
          @click="finalizeDeal()">Finalizar Acuerdo</md-button>
        </md-card-actions>

      </md-ripple>
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
      showAccept: true
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
      this.id.countDown = this.deadline;
    },
    goBack() {
      this.$router.go(-1);
    },
    ...mapMutations(["ACEPT_AGREEMENT", "REJECT_AGREEMENT"]),
    aceptDeal(){
      const {id} = this.deal
      this.$store.dispatch("agreement/DEAL_ACCEPT" ,{id}).then(() => {
        this.$router.go(-1);
      });
    },
    declineDeal(){
      const {id} = this.deal
      this.$store.dispatch("agreement/DEAL_DECLINE" ,{id}).then(() => {
        this.$router.go(-1);
      });
    },
    finalizeDeal(){
      const {id} = this.deal
      this.$store.dispatch("agreement/DEAL_FINALIZE" ,{id}).then(() => {
        this.$router.go(-1);
      });
    },
    getUrl(coordinates) {
      var coords = coordinates[0]+","+coordinates[1]
      return "https://www.google.es/maps/dir/current+location/" + coords;
    }
  }
};
</script>