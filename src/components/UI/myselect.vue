<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled value="">Choose from list</option>
        <option v-for="option in options" :key="option.value" :value="option.value"> {{ option.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'myselect',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style scoped>
select {
    padding: 10px;
    border-radius: 3px;
    border: 2px solid teal;
    color: teal;
}
</style>