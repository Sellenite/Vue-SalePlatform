<template>
    <div class="vuex2">
        <h2>I am vuex2 banana</h2>
        <button v-on:click="addOne">add one</button>
        <button v-on:click="minusOne">minus one</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                price: 10
            };
        },
        methods: {
            addOne() {
                this.$store.dispatch('increase', this.price);
            },
            minusOne() {
                this.$store.dispatch('decrease', this.price);
            }
        }
    };
</script>

<style>

</style>