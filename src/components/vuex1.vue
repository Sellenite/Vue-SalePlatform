<template>
    <div class="vuex1">
        <h2>I am vuex1 apple</h2>
        <button v-on:click="addOne">add one</button>
        <button v-on:click="minusOne">minus one</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 5
            };
        },
        methods: {
            addOne() {
                this.$store.commit('increment', this.price);
            },
            minusOne() {
                this.$store.commit('decrement', this.price);
            }
        }
    };
</script>

<style>

</style>

