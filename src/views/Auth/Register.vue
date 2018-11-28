<style scoped>
.register {
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
  <div class="register">
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button @click="goBack" class="md-icon-button">
            <md-icon>arrow_back</md-icon>
          </md-button>
        </div>
        <h3 class="title">Registro</h3>
      </div>
    </md-toolbar>

    <form novalidate @submit.prevent="validateForm('form', register)">
      <md-field :class="getValidationClass('form','email')">
        <label>Email</label>
        <md-input :disabled="ifLoading" type="email" v-model="form.email" md-counter="30"></md-input>
        <span class="md-error" v-if="!$v.form.email.required">Se requiere email</span>
        <span class="md-error" v-else-if="!$v.form.email.email">Email invalido</span>
      </md-field>

      <md-field :class="getValidationClass('form','password')">
        <label>Password</label>
        <md-input :disabled="ifLoading" type="password" v-model="form.password" md-counter="30"></md-input>
        <span class="md-error" v-if="!$v.form.password.required">Se requiere contraseña</span>
        <span
          class="md-error"
          v-else-if="!$v.form.password.minlength"
        >Contraseña debe tener minimo 8 carácteres</span>
      </md-field>

      <md-field :class="getValidationClass('form','passwordRepeat')">
        <label>Repita el Password</label>
        <md-input :disabled="ifLoading" type="password" v-model="form.passwordRepeat" md-counter="30"></md-input>
        <span class="md-error" v-if="!$v.form.passwordRepeat.required">Se requiere que repita la contraseña</span>
        <span
          class="md-error"
          v-else-if="!$v.form.passwordRepeat.sameAsPassword"
        >Las contraseñas no coinciden</span>
      </md-field>

      <md-button :disabled="ifLoading" type="submit" class="md-primary right">Registrar</md-button>
    </form>
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { required, minLength, sameAs, email } from "vuelidate/lib/validators";

export default {
  name: "Register",
  mixins: [validationMixin],
  data: function() {
    return {
      form: {
        email: null,
        password: null,
        passwordRepeat: null
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
      },
      passwordRepeat: {
        required,
        sameAsPassword: sameAs("password")
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
    register: function() {
      const { email, password } = this.form;
      this.$store
        .dispatch("auth/AUTH_REGISTER", { "email": email, "password": password })
        .then(() => {
          this.$router.go(-1);
        });
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
