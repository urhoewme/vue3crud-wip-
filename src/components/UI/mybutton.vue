<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'mybutton'
}
</script>

<style scoped>
button {
    align-self: flex-end;
    border-radius: 3px;
    border: 2px solid teal;
    color: teal;
    padding: 5px 10px;
    height: 35px;
}
</style>