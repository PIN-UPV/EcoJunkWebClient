<style lang="scss">
#app {
  .page-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, 0.12);
  }
  .md-drawer {
    width: 25%;
    max-width: calc(100vw - 125px);
    z-index: 1001;

    .img-logo {
      height: 150px;
      margin: 0 auto;
    }

    .md-divider.md-inset {
      margin-left: 0px;
    }
    .auth {
      background-color: #6b7752;
      .login,
      .register {
        text-align: center;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        color: white;
      }
      .logout {
        text-align: center;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        color: white;
        i {
          color: white;
          width: 40%;
        }
      }
      .md-list-item-content {
        color: white;
      }
    }
  }
  .page-container .md-overlay {
    z-index: 1000;
  }
  .md-content {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 35%;
    height: 100vh;
    min-width: 340px;

    overflow: auto;
    z-index: 999;
    background-color: whitesmoke;
  }
}
body .md-snackbar {
  z-index: 1001;
}
.md-progress-bar {
  width: 100%;
  z-index: 1001;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.5, 0.5, 0.5, 0.5);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <md-progress-bar 
      v-if="ifLoading" 
      md-mode="indeterminate" 
    />
      
    <div class="page-container md-layout-column">

      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <!-- <span class="md-title">EcoJunk</span> -->
          <img class="img-logo" src="/ecojunk-logo.jpeg" alt="logo">
        </md-toolbar>

        <md-divider class="md-inset"></md-divider>

        <md-list @click="showNavigation=false">
          
          <md-list-item v-if="!$store.getters['auth/isAuthenticated']" class="auth">
              <router-link class="md-list-item-text login" to="/login">
                <span>Iniciar sesión</span>
              </router-link> |
              <router-link class="md-list-item-text register" to="/register">
                <span>Registro</span>
              </router-link>
          </md-list-item>

          <md-list-item v-else class="auth">
              <div class="md-list-item-text logout" @click="logout">
                <span>{{ $store.state.auth.profile.email }}</span>
                <md-icon>power_settings_new</md-icon>
              </div>
          </md-list-item>

          <md-list-item to="/">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inicio</span>
          </md-list-item>

          <md-list-item v-if="$store.getters['auth/isAuthenticated']" to="/agreements">
            <md-icon>assignment</md-icon>
            <span class="md-list-item-text">Acuerdos</span>
          </md-list-item>

          <md-list-item to="/about">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Info</span>
          </md-list-item>

        </md-list>

        <md-divider class="md-inset"></md-divider>
      </md-drawer>

      <md-content class="md-scrollbar md-elevation-8">
        <transition name="slide-fade">
          <router-view v-model="showNavigation" />
        </transition>
      </md-content>
      
      <l-map >
        <l-mark v-for="item in store.markers" :key="item.id" :value="item"></l-mark>
      </l-map>

      <md-snackbar 
      md-position="center" 
      :md-duration="snack.duration" 
      :md-active.sync="ifError && snack.showSnackbar" 
      md-persistent>
        <span>{{ $store.state.errorMsg || "Error" }}</span>
        <md-button class="md-primary" @click="snack.showSnackbar = false">Retry</md-button>
      </md-snackbar>

    </div>
  </div>
</template>

<script>
import LMAP from "@/components/LMap";
import LMARKER from "@/components/LMarker";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      snack: {
        showSnackbar: false,
        duration: 6000
      },
      showNavigation: false,
      store: this.$store.state.marker
    };
  },
  components: {
    "l-map": LMAP,
    "l-mark": LMARKER
  },
  computed: {
    ifLoading: function() {
      // computed properties reevaluate result when vars change
      return this.$store.state.status == "loading";
    },
    ifError: function() {
      // eslint-disable-next-line
      this.snack.showSnackbar = true;
      return this.$store.state.status == "error";
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/AUTH_LOGOUT");
    }
  },
  created: function() {
    const token = localStorage.getItem("user-token");
    if (token) {
      // Save Authorization header for all futur request
      axios.defaults.headers.common["Authorization"] = token;
    }
  }
};
</script>

