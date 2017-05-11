<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
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
    <a v-bind:href="website.link" :title="website.title" target="_blank" v-bind:class="['target1', 'target2', { 'target3': flag }]">这是一个通过v-bind得到的a标签</a>
    <ul>
      <li v-for="(item, index) in classList" v-bind:class="classList[index]" v-bind:style="{ 'color': item }">
        {{ item }}
      </li>
    </ul>
    <div class="testjQuery">this content will be rewrote by jQuery</div>
    <button v-on:click="testjQuery">use jQuery</button>
    <div>
      <input type="text" placeholder="利用修饰符的别名来指定按键（Space）" v-on:keydown.space="testKeyDown">
      <input type="text" placeholder="利用修饰符的keycode来指定按键（Enter）" v-on:keydown.13="testKeyDown">
      <input type="text" placeholder="利用传入event里的keycode来指定按键（Enter）" v-on:keydown="testKeyDownUseEvent($event)">
    </div>
    <div>
      <input type="text" placeholder="测试.lazy修饰符" v-model.lazy="testModelLazy"> {{ testModelLazy }}
    </div>
    <div>
      <input type="text" placeholder="测试.number修饰符" v-model.number="testModelNumber"> {{ typeof testModelNumber }}
    </div>
    <div>
      <input type="text" placeholder="测试.trim修饰符" v-model.trim="testModelTrim"> {{ testModelTrim }}
    </div>
    <div>
      多选
      <input type="checkbox" value="apple" v-model="checkboxVal">
      <label>苹果</label>
      <input type="checkbox" value="banana" v-model="checkboxVal">
      <label>香蕉</label>
      <input type="checkbox" value="pear" v-model="checkboxVal">
      <label>梨</label>
      {{ checkboxVal }}
    </div>、
    <div>
      单选
      <input type="radio" value="apple" v-model="radioVal">
      <label>苹果</label>
      <input type="radio" value="banana" v-model="radioVal">
      <label>香蕉</label>
      <input type="radio" value="pear" v-model="radioVal">
      <label>梨</label>
      {{ radioVal }}
    </div>
    <div>
      下拉列表
      <select v-model="selectVal">
        <option value="1">第一个选项显示</option>
        <option value="2">第二个选项显示</option>
        <option value="3">第三个选项显示</option>
      </select>
      {{ selectVal }}
    </div>
    <div>
      利用v-for的下拉列表
      <select v-model="selectValPlus">
        <option v-for="option in options" v-bind:value="option.value">{{ option.label }}</option>
      </select>
      {{ selectValPlus }}
    </div>
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
      flag: false,
      website: {
        link: 'http://www.baidu.com',
        title: '百度'
      },
      classList: [
        'red',
        'yellow',
        'blue',
        'green',
        'purple'
      ],
      testModelLazy: '',
      testModelNumber: '',
      testModelTrim: '',
      checkboxVal: [],
      radioVal: '',
      selectVal: 1,
      selectValPlus: 1,
      options: [
        {
          label: '选项一',
          value: 1
        },
        {
          label: '选项二',
          value: 2
        },
        {
          label: '选项三',
          value: 3
        }
      ]
    };
  },
  methods: {
    testArrayRender() {
      Vue.set(this.arrayList, 1, { name: 'test', price: 220 });
      this.arrayList.splice(2, 1, { name: 'test2', price: 504 });
      this.styleTemplate.color = 'blue';
    },
    flagToggle() {
      this.flag = !this.flag;
    },
    pagechange(p) {
      console.log(p);
    },
    testjQuery() {
      $('.testjQuery').html('success');
    },
    testKeyDown() {
      console.log('keyDown!');
    },
    testKeyDownUseEvent(event) {
      if (event.keyCode === 13) {
        alert('你按的是Enter键！');
      }
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

.target3 {
  color: #666666;
}
</style>
