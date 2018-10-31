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

        <form novalidate @submit.prevent="validateForm('form', login)">
            <md-field :class="getValidationClass('form','email')">
                <label>Email</label>
                <md-input :disabled="ifLoading" type="email" v-model="form.email" md-counter="30"></md-input>
                <span class="md-error" v-if="!$v.form.email.required">Se requiere email</span>
                <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            </md-field>

            <md-field :class="getValidationClass('form','password')">
                <label>Password</label>
                <md-input :disabled="ifLoading" type="password" v-model="form.password" md-counter="30"></md-input>
                <span class="md-error" v-if="!$v.form.password.required">Se requiere contraseña</span>
                <span class="md-error" v-else-if="!$v.form.password.minlength">Contraseña debe tener minimo 8 carácteres</span>
            </md-field>

            <md-button :disabled="ifLoading" type="submit" class="md-primary right" >Iniciar Sesion</md-button>
        </form>

    </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  name: "Login",
  mixins: [validationMixin],
  data: function() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(8)
      }
    }
  },
  computed: {
    ifLoading: function() {
      return this.$store.state.status == "loading";
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    login: function() {
      const { email, password } = this.form;
      this.$store.dispatch("auth/AUTH_LOGIN", { email, password }).then(() => {
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
    },
    // New Actions
    getValidationClass(form, fieldName) {
      const field = this.$v[form][fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },
    validateForm(form, callback) {
      this.$v.$touch();
      if (!this.$v[form].$invalid) {
        callback();
      }
    },
    clearForm(form) {
      for (var key in form) {
        form[key] = "";
      }
    }
  }
};
</script>
