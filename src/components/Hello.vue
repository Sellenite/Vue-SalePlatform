<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org"
           target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org"
           target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue"
           target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs"
           target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/"
           target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/"
           target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/"
           target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/"
           target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue"
           target="_blank">awesome-vue</a></li>
    </ul>
    <ul>
      <li v-for="(item, key) in objList">{{ key }}:{{ item }}</li>
    </ul>
    <ul>
      <li v-for="(item, index) in arrayList">{{ index }}:{{ item.name }}</li>
    </ul>
    <button v-on:click="testArrayRender">Plus</button>
    <div v-bind:style="styleTemplate">测试绑定style</div>
    <div v-if="ifFlag === 'A'">ifFlag为A</div>
    <div v-else-if="ifFlag === 'B'">ifFlag为B</div>
    <div v-else>no-data A/B</div>
    <div class="animated" :class="{'bounceOutRight': flag}">test animate.css</div>
    <button v-on:click="flagToggle">123</button>
    <pagination :total="total" :display="display" :current="current" :pagegroup="pagegroup" v-on:pagechange="pagechange"></pagination>
  </div>
</template>

<script>
import Vue from 'vue';
import pagination from './pagination';

export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      total: 91,
      display: 5,
      current: 1,
      pagegroup: 7,
      arrayList: [
        {
          name: 'apple',
          price: 55
        },
        {
          name: 'pear',
          price: 110
        },
        {
          name: 'banana',
          price: 60
        }
      ],
      objList: {
        name: 'apple',
        price: 34,
        color: 'red',
        weight: 14
      },
      styleTemplate: {
        color: 'red',
        fontSize: '18px',
        margin: '10px 0'
      },
      ifFlag: 'C',
      flag: false
    };
  },
  methods: {
    testArrayRender() {
      Vue.set(this.arrayList, 1, {name: 'test', price: 220});
      this.arrayList.splice(2, 1, {name: 'test2', price: 504});
      this.styleTemplate.color = 'blue';
    },
    flagToggle() {
      this.flag = !this.flag;
    },
    pagechange(p) {
      console.log(p);
    }
  },
  components: {
    pagination
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
