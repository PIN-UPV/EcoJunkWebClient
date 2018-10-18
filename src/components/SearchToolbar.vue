<style lang="scss" scoped>
.md-toolbar.search-toolbar {
  width: 90%;
  min-height: 50px;
  margin: 5%;
  padding: 0;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  input {
    width: 70%;
    border: 0;
    outline: none;
    font-family: inherit;
    font-size: 16px;
    line-height: 32px;

    &::placeholder {
      color: lightgrey;
    }
  }
  .md-icon {
    color: grey;
  }
}
</style>

<template>
    <md-toolbar class="search-toolbar">
        <md-button class="md-icon-button" @click="openDrawer">
            <md-icon>menu</md-icon>
        </md-button>

        <input type="text" v-bind:placeholder="msg" v-model="filter"/>

        <md-button class="md-icon-button">
            <md-icon>search</md-icon>
        </md-button>    
    </md-toolbar>
</template>

<script>
export default {
  name: "SearchToolbar",
  props: {
    msg: String
  },
  methods: {
    openDrawer() {
      this.$emit("openDrawer");
    }
  },
  data() {
    return { filter: '' };
  }
};
</script>
