<template>
  <div id = "formulario">

    <form novalidate @submit.prevent="validateForm('form')">
    <!--<md-field :class="getValidationClass('form','id')">
      <label>Nombre</label>
      <md-input v-model="form.id" md-counter="30"></md-input>
      <span class="md-error" v-if="!$v.form.id.required">Se requiere nombre para el acuerdo</span>
      <span class="md-error" v-else-if="!$v.form.id.maxlength">Exceso de carácteres</span>
    </md-field>-->

    <md-field>
      <label>Usuario</label>
      <md-input v-model="form.customer" md-counter="30"></md-input>
    </md-field>

    <md-field>
      <label>Rider</label>
      <md-input v-model="form.rider" md-counter="30"></md-input>
    </md-field>

    <!--<md-field :class="getValidationClass('form','junks')">
      <label>Residuo</label>
      <md-input v-model="form.junk.name" md-counter="30"></md-input>
      <span class="md-error" v-if="!$v.form.junks.required">Se requiere nombre del residuo</span>
      <span class="md-error" v-else-if="!$v.form.junks.maxlength">Exceso de carácteres</span>
    </md-field>

    <md-field :class="getValidationClass('form','date')">
      <label>Fecha</label>
      <md-input v-model="form.date" md-counter="10"></md-input>
      <span class="md-error" v-if="!$v.form.date.required">Se requiere fecha</span>
      <span class="md-error" v-else-if="!$v.form.date.maxlength">Exceso de carácteres</span>
    </md-field>

    <md-field :class="getValidationClass('form','price')" :md-counter="false">
      <label>Precio (€)</label>
      <md-input v-model="form.price" maxlength="10"></md-input>
      <span class="md-error" v-if="!$v.form.price.required">Se requiere establecer un precio</span>
      <span class="md-error" v-else-if="!$v.form.price.decimal">Se requiere un número decimal</span>
    </md-field>-->

     <md-field :class="getValidationClass('form','junk_point')">
      <label>Ubicación</label>
      <md-input v-model="form.junk_point" md-counter="60"></md-input>
      <span class="md-error" v-if="!$v.form.junk_point.required">Se requiere una localización</span>
      <span class="md-error" v-else-if="!$v.form.junk_point.maxlength">Exceso de carácteres</span>
    </md-field>


    <md-button type="submit" class="md-raised md-primary" @click="addAgreement">Aceptar</md-button>
    <md-button to ='/agreements' class="md-raised md-accent">Cancelar</md-button>

    
</form>
  </div>
</template>




<script>
import { mapMutations } from "vuex";
import { validationMixin } from "vuelidate";
import { required, maxLength, decimal } from "vuelidate/lib/validators";

export default {
  name: "Counters",
  mixins: [validationMixin],
  data: () => ({
    form: {
      customer: "",
      rider: "",
      junk_point: ""
    },
    textarea: "",
    deadline: ""
  }),
  validations: {
    form: {
      id: {
        required,
        maxLength: maxLength(30)
      },
      junks: {
        required,
        maxLength: maxLength(30)
      },
      date: {
        required,
        maxLength: maxLength(10)
      },
      price: {
        required,
        decimal
      },
      junk_point: {
        required,
        maxLength: maxLength(40)
      }
    }
  },
  methods: {
    ...mapMutations(["ADD_AGREEMENT"]),
    addAgreement: function() {
      if (
        this.form.customer == "" ||
        this.form.rider == "" ||
        this.form.junk_point == ""
      ) {
        return;
      }
      const { customer, rider, junk_point } = this.form;
      const agreement = {
        "customer": customer,
        "rider": rider,
        "junk_point": junk_point
      };
      this.$store.dispatch("agreement/AGREE_ADD", agreement).then(() => {
        this.$router.push("agreements");
      });
    },
    clearForm: function() {
      this.form.customer = "";
      this.form.rider = "";
      this.form.junk_point = "";
    },
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
    }
  }
};
</script>

<style>
#formulario {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid rgba(#000, 0.12);
  padding: 15px;
}
</style>