<template>
  <div class="wrapper">
  <button v-on:click="setTodos" class="button button-blue">Set Todos</button>
  </div>
</template>

<script>
  export default {
    methods: {
      setTodos() {
        const todos = [
          {
            id: 1,
            title: 'Купить молока',
            done: false,
          },
          {
            id: 2,
            title: 'Сделать ревью',
            done: false,
          },
          {
            id: 3,
            title: 'Провести workshop по Vue',
            done: false,
          },
        ];
        this.$store.dispatch('setTodos', todos);
      },
    },
  };
</script>

<style>
  .wrapper {
    width: 600px;
    margin: 0 auto;
  }
  .button {
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      cursor: pointer;
  }
  .button-blue {
    background-color: blue;
    color: white;
  }
</style>