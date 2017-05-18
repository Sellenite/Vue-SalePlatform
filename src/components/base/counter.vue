<template>
  <div class="counter-component">
    <div class="counter-btn" @click="minus"> - </div>
    <div class="counter-show">
      <input type="text" v-model="number" @keyup="numberLimit">
    </div>
    <div class="counter-btn" @click="add"> + </div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      type: Number,
      default: 5
    },
    min: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      number: this.min
    }
  },
  watch: {
    number() {
      this.$emit('on-change', this.number)
    }
  },
  methods: {
    minus() {
      if (this.number <= this.min)
        this.number = this.min
      else
        this.number--
    },
    add() {
      if (this.number >= this.max)
        this.number = this.max
      else
        this.number++
    },
    numberLimit() {
      let fix
      if (typeof this.number === 'string') {
        // \d表示匹配0-9数字，大写是有区别的，\D表示匹配非0-9数字的字符
        fix = Number(this.number.replace(/\D/g, ''))
      }
      else {
        fix = this.number
      }
      if( fix >= this.max) {
        fix = this.max
      } else if ( fix <= this.min) {
        fix = this.min
      }
      this.number = fix
    }
  }
}
</script>

<style scoped>
.counter-component {
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
}

.counter-show {
  float: left;
}

.counter-show input {
  border: none;
  border-top: 1px solid #e3e3e3;
  border-bottom: 1px solid #e3e3e3;
  height: 23px;
  line-height: 23px;
  width: 30px;
  outline: none;
  text-indent: 4px;
}

.counter-btn {
  border: 1px solid #e3e3e3;
  float: left;
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  cursor: pointer;
}

.counter-btn:hover {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
