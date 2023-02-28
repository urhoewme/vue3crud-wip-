<template>
    <nav>
        <div class="logo" @click="$router.push('/')">VUE 3</div>
        <div class="navbar_btns">
            <mybutton @click="$router.push('/posts')">Posts</mybutton>
            <mybutton @click="$router.push('/about')" style="margin-left: 20px;">About</mybutton>
            <mybutton @click="$router.push('/store')" style="margin-left: 20px;">Posts (vuex) (WIP)</mybutton>
            <mybutton @click="$router.push('/compapi')" style="margin-left: 20px;">Posts (Composition API) (WIP)</mybutton>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'mybar'
}
</script>

<style scoped>
nav {
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    padding: 20px;
    align-items: center;
}

.logo {
    color: white;
    font-weight: bold;
}

.navbar_btns {
    margin-left: auto;
}
</style>