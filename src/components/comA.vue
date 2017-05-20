<template>
    <div class="comA">
        <h2>这是子组件comA</h2>
        <div>父组件传入参数：{{ valueForComA }}</div>
        <div class="slotArea">
            <slot name="header"></slot>
            <main>
                <slot>每个子组件仍然可以有一个匿名slot：如果父组件没有内容，这里则显示</slot>
            </main>
            <slot name="footer"></slot>
        </div>
        <button v-on:click="clickAAA">测试父元素传入的值是否带有全部内容</button>
        <button v-on:click="clickBBB">测试watch里的对象data</button>
    </div>
</template>

<script>
    export default {
        props: ['valueForComA', 'testComAFunc'],
        data() {
            return {
                testWatch: {
                    value1: 1,
                    value2: 2,
                    value3: 3
                }
            }
        },
        computed: {
            testWatchHook() {
                return this.testWatch.value1;
            }
        },
        watch: {
            testWatchHook(val, oldVal) {
                console.log(val, oldVal);
            } 
        },
        methods: {
            clickAAA() {
                this.testComAFunc[0].showHref();
                console.log(this.testComAFunc);
            },
            clickBBB() {
                this.testWatch.value1++;
            }
        }
    };
</script>

<style>

</style>