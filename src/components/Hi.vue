<template>
    <div class="Hi">
        <h2>I am Hi component, use children router to show vuex example!</h2>
        <div>your totalPrice is {{ totalPrice }}</div>
        <vuex1></vuex1>
        <vuex2></vuex2>
    </div>
</template>

<script>
    import vuex1 from './vuex1';
    import vuex2 from './vuex2';
    export default{
        components: {
            vuex1,
            vuex2
        },
        computed: {
            totalPrice() {
                return this.$store.getters.getTotal;
            }
        }
    };
</script>

<style>
    h2 {
        color: red;
    }
</style>