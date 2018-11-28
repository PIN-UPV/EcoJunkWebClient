<template>
  <div class="about">
    <md-toolbar class="md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button @click="openDrawer" class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
        <h3>Información</h3>
      </div>
    </md-toolbar>

    <p style="margin-left: 10px">
      Proyecto para la asignatura PIN en la UPV
    </p>
    <p style="margin-left: 20px">
      <b>Equipo:</b> <br/>
      Armando Maya Gomis <br/>
      Arturo Valiente Lerma <br/>
      Chisco Mayol Alonso <br/>
      David Flor Barrio <br/>
      Ivan Martin Garcia <br/>
      Lorenzo Lorenzo Vaccaro <br/>
    <p>
    <p style="margin-left: 30px">
      <i>Apoyanos en github:</i> <a href="https://github.com/PIN-UPV" target="_blank" rel="noopener noreferrer">link</a>
    </p>
  </div>
</template>


<script>

export default {
  name: "about",
  methods: {
    openDrawer() {
      this.$emit("input", true);
    }
  }
};
</script>

