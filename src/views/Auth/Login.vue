<style scoped>
.login {
    background-color: white;
}
form {
    padding: 10px;
}
.submit {
    float: right;
}
</style>
<template>
    <div class="login">
        <md-toolbar class="md-dense md-primary">
        <div class="md-toolbar-row">
            <div class="md-toolbar-section-start">
                <md-button @click="goBack" class="md-icon-button">
                    <md-icon>arrow_back</md-icon>
                </md-button>
            </div>
            <h3 class="title">Iniciar Sesión</h3>
        </div>
        </md-toolbar>

        <form novalidate @submit.prevent="login">
            <md-field>
                <label>Email</label>
                <md-input type="email" v-model="email" md-counter="30"></md-input>
            </md-field>

            <md-field>
                <label>Password</label>
                <md-input type="password" v-model="password" md-counter="30"></md-input>
            </md-field>

            <md-button type="submit" class="md-primary right" :disabled="sending">Iniciar Sesion</md-button>
        </form>

    </div>
</template>
<script>
export default {
  name: "Login",
  data: function() {
    return {
      email: null,
      password: null,
      sending: false
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    login: function() {
      this.sending = true;
      const { email, password } = this;
      this.$store.dispatch("auth/AUTH_LOGIN", { email, password }).then(() => {
        this.sending = false;
        this.$router.go(-1);
      });
    },
    register: function() {
      if (this.validateRegisterForm()) {
        const { username, password, email } = this.registerForm;
        this.$store
          .dispatch("auth/AUTH_REGISTER", { username, password, email })
          .then(() => {
            this.clearForm(this.registerForm);
            alert("See your inbox!");
            //this.$router.push("/intranet");
          });
      }
    }
  }
};
</script>
