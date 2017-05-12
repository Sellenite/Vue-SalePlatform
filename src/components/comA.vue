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
    </div>
</template>

<script>
    export default {
        props: ['valueForComA']
    };
</script>

<style>

</style>