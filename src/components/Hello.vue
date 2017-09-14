<template>
  <div class="wrapper">
    <ul class="todo-list">
      <li v-for="item in items" v-on:click="completeTodo(item.id)" v-bind:class="{done: item.done}">
        {{item.title}}
      </li>
    </ul>

    <div class="buttons" v-if="!noTodos">
      <button class="button complete" v-on:click="completeAll">Complete All</button>
      <button class="button uncomplete" v-on:click="uncompleteAll">Uncomplete</button>
    </div>
    <div v-if="allCompleted && !noTodos">
      <h1> You are hero! Go take a rest</h1>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: {
      ...mapState({
        items: state => state.todos,
      }),
      allCompleted() {
        return this.items.every(item => item.done);
      },
      noTodos() {
        return !this.items.length;
      },
    },
    methods: {
      completeTodo(id) {
        this.$store.dispatch('completeTodo', id);
      },
      completeAll() {
        this.$store.dispatch('completeAll');
      },
      uncompleteAll() {
        this.$store.dispatch('uncompleteAll');
      },
    },
    mounted() {
      console.log('this store: ', this.$store) // eslint-disable-line
      console.log('MOUNTED!!'); // eslint-disable-line
    },
  };
</script>

<style scoped>
  .wrapper {
    width: 600px;
    margin: 0 auto;
  }
  .todo-list {
    list-style: none;
    text-align: left;
  }
  .todo-list > li {
    padding: 20px;
    font-size: 36px;
  }
  .todo-list > li:hover {
    background-color: whitesmoke;
    cursor: pointer;
  }
  .todo-list > li.done {
    text-decoration: line-through;
    font-style: italic;
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
  .button.complete {
    background-color: #4CAF50; /* Green */
  }
  .button.uncomplete {
    background-color: #f44336; /* Red */
  }
</style>
