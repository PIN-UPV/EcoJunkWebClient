<style lang="scss" scoped>
.md-toolbar.search-toolbar {
  width: 90%;
  min-width: 310px;
  min-height: 50px;
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

        <input type="text" :value="value" :placeholder="msg" @input="updateText" ref="mytext"/>

        <md-button class="md-icon-button">
            <md-icon>search</md-icon>
        </md-button>    
    </md-toolbar>
</template>

<script>
export default {
  name: "SearchToolbar",
  props: {
    value: String,
    msg: String
  },
  methods: {
    updateText: function() {
      this.$emit("input", this.$refs.mytext.value);
    }
  }
};
</script>