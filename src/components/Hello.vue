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
    <div>
      测试computed+正则返回
      <input type="text" v-model="testComputedInput"> {{ testComputedShow }} | {{ testComputedShowByMethods() }}
    </div>
    <div>
      测试watch返回的值
      <input type="text" v-model="testWatchVal">
    </div>
    <component v-bind:is="useIsToBindComA" v-bind:valueForComA="valueForComA" v-bind:testComAFunc="testComAFunc">
      <p slot="header">这是name为header的内容</p>
      <p>测试slot，代替子组件匿名slot的内容</p>
      <p slot="footer">这是name为footer的内容</p>
    </component>
    <keep-alive>
      <p v-bind:is="useIsToBindComB"></p>
    </keep-alive>
    <button @click="testTransition = !testTransition">testTransition</button>
    <transition name="fade">
      <div v-show="testTransition">testTransitionObject</div>
    </transition>
    <div>
      <button @click="toggleComponent">toggleComponent</button>
      <transition name="fade2" mode="out-in">
        <component v-bind:is="componentToToggle"></component>
      </transition>
    </div>
    <button @click="testTransition2 = !testTransition2">testTransition2</button>
    <transition name="fade3" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
      <div v-show="testTransition2">使用animate.css结合transition的testTransitionObject2</div>
    </transition>
    <div id="example-4">
      <button @click="showTransitionByJs = !showTransitionByJs">
        Toggle
      </button>
      <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
        <p v-if="showTransitionByJs">
          Demo
        </p>
      </transition>
    </div>
    <div>
      <p v-focus:test.a.b="testDirective"></p>
    </div>
    <div>
      <router-link :to="{ path: '/Hello/Hi' }">click here to show children router！</router-link>
      <router-link :to="{ path: '/Hello' }" tag="li">click here to hide children router！</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import pagination from './pagination';
import comA from './comA';

var comB = {
  template: '<h2>这是子组件comB</h2>'
};

export default {
  name: 'hello',
  directives: {
    focus: {
      bind(el, binding, vnode) {
        var s = JSON.stringify;
        el.innerHTML =
          'name:' + s(binding.name) + '</br>' +
          'value:' + s(binding.value) + '</br>' +
          'expression:' + s(binding.expression) + '</br>' +
          'argument:' + s(binding.arg) + '</br>' +
          'modifiers:' + s(binding.modifiers) + '</br>' +
          'vnode keys:' + Object.keys(vnode).join(', ');
      }
    }
  },
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
      testComputedInput: '',
      testWatchVal: '',
      useIsToBindComA: 'comA',
      useIsToBindComB: comB,
      componentToToggle: 'comA',
      testTransition: false,
      testTransition2: false,
      showTransitionByJs: false,
      testDirective: 'Hello',
      testComAFunc: [
        {
          name: 'test',
          path: 'http://www.baidu.com',
          showHref() {
            console.log(window.location.href);
          }
        }
      ],
      valueForComA: '这是来自父组件的值，通过v-bind传值，props收取',
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
    },
    testComputedShowByMethods() {
      return this.testComputedInput.replace(/\d/g, '');
    },
    toggleComponent() {
      if (this.componentToToggle === 'comA') {
        this.componentToToggle = comB;
      } else {
        this.componentToToggle = 'comA';
      }
    },
    beforeEnter: function (el) {
      el.style.opacity = 0;
      el.style.transformOrigin = 'left';
    },
    enter: function (el, done) {
      $(el).animate({ opacity: 1, fontSize: '1.4em' }, { duration: 300 });
      $(el).animate({ fontSize: '1em' }, { complete: done });
    },
    leave: function (el, done) {
      $(el).animate({
        opacity: 0
      }, { complete: done });
    }
  },
  computed: {
    testComputedShow() {
      // 下面正则的意思是。全局匹配数字，然后用空字符取代，即删去数字
      return this.testComputedInput.replace(/\d/g, '');
    }
  },
  watch: {
    testWatchVal(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  components: {
    pagination,
    comA
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

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s ease;
}

.fade-enter {
  transform: translateX(20px);
  opacity: 0;
}

.fade-leave-active {
  transform: translateX(-20px);
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: 0.5s ease;
}

.fade2-enter,
.fade2-leave-active {
  opacity: 0;
}
</style>
