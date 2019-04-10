// Global registration
Vue.component("example-component", {
  template: "<div><slot></slot>example component</div>"
})

let app = new Vue({
  el: "#component-example"
})

// Local registration

let secondComponent = {
  template: '<span>2nd component</span>'
}

let app2 = new Vue({
  el: "#another-component-example",
  components: {
    'second-component': secondComponent
  }
})

// Global registration
Vue.component("third-component", {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function() {
    return {    
      counter: 0
    }
  }
})

let appThird = new Vue({
  el: "#third-component-example"
})

// Global registration
Vue.component("fourth-component", {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>',
  data: function() {
    return {    
      counter: 0
    }
  }
})

let appFourth = new Vue({
  el: "#fourth-component-example",
  data: {
    todolist: [
      {id: 1, text: "eat"},
      {id: 2, text: "drink"},
      {id: 3, text: "play"},
      {id: 4, text: "sleep"},
    ]
  }
})
