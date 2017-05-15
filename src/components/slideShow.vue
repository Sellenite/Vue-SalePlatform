<template>
  <div class="slide-show" @mouseover="clearInv" @mouseout="runInv">
    <div class="slide-img">
      <div class="slide-img-content clearfix" :style="slideStyle">
        <a v-for="(slide, index) in slides" :href="slide.href">
          <img :src="slide.src">
        </a>
      </div>
    </div>
    <h2>{{ slides[nowIndex - 1].title }}</h2>
    <ul class="slide-pages">
      <li @click="goto(-1, true)">&lt;</li>
      <li v-for="(slide, index) in slides">
        <a :class="{on: index + 1 === nowIndex}" @click="goto(index + 1, false)">{{ index + 1 }}</a>
      </li>
      <li @click="goto(1, true)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    slides: {
      type: Array,
      default: []
    },
    invTime: {
      type: Number,
      default: 1000
    }
  },
  data() {
    return {
      slideStyle: {
        width: this.slides.length * 100 + '%',
        left: '0'
      },
      nowIndex: 1
    };
  },
  methods: {
    goto(page, flag) {
      if (page === -1 && flag) {
        this.nowIndex === 1 ? this.nowIndex = this.slides.length : this.nowIndex = this.nowIndex - 1;
      } else if (page === 1 && flag) {
        this.nowIndex === this.slides.length ? this.nowIndex = 1 : this.nowIndex = this.nowIndex + 1;
      } else {
        this.nowIndex = page;
      };
      this.slideStyle.left = (this.nowIndex - 1) * (-100) + '%';
    },
    runInv() {
      this.inv = setInterval(() => {
        this.goto(1, true);
      }, this.invTime);
    },
    clearInv() {
      clearInterval(this.inv);
    }
  },
  mounted() {
    this.runInv();
  }
};
</script>

<style scoped>
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.clearfix {
  zoom: 1;
}

.slide-show {
  position: relative;
  margin: 15px 15px 15px 0;
  width: 900px;
  height: 500px;
  overflow: hidden;
}

.slide-show h2 {
  position: absolute;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: left;
  padding-left: 15px;
}

.slide-img {
  width: 100%;
  height: 506px;
  overflow: hidden;
  position: relative;
}

.slide-img-content {
  min-width: 100%;
  position: absolute;
  transition: left 0.5s ease-in-out;
}

.slide-img-content a {
  display: block;
  width: 900px;
  height: 506px;
  float: left;
}

.slide-img img {
  width: 900px;
}

.slide-pages {
  position: absolute;
  bottom: 10px;
  right: 15px;
}

.slide-pages li {
  display: inline-block;
  padding: 0 10px;
  cursor: pointer;
  color: #fff;
}

.slide-pages li .on {
  text-decoration: underline;
}
</style>
