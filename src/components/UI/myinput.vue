<template>
    <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    props: {
        modelValue: [String, Number]
    },
    name: 'myinput',
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.input {
    border-radius: 3px;
    border: 2px solid teal;
    color: teal;
    padding: 10px 15px;
    height: 35px;
    width: 100%;
    margin-top: 15px;
    margin-right: 10px;
}
</style>