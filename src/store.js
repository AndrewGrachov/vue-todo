import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    todos: [],
  },
  actions: {
    setTodos(context, todos) {
      context.commit('setTodos', todos);
    },
    completeTodo(context, todoId) {
      context.commit('completeTodo', todoId);
    },
    completeAll(context) {
      context.commit('completeAll');
    },
    uncompleteAll(context) {
      context.commit('uncompleteAll');
    },
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos; // eslint-disable-line no-param-reassign
    },
    completeTodo(state, todoId) {
      const todoItem = state.todos.find(todo => todo.id === todoId);
      todoItem.done = !todoItem.done;
    },
    completeAll(state) {
      state.todos.forEach((todo) => {
        todo.done = true; // eslint-disable-line no-param-reassign
      });
    },
    uncompleteAll(state) {
      state.todos.forEach((todo) => {
        todo.done = false; // eslint-disable-line no-param-reassign
      });
    },
  },
});
