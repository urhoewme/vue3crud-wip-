<template>
    <div>
        <form @submit.prevent>
            <h3>Post creation</h3>
            <myinput v-focus v-model="post.title" type="text" placeholder="Name" />
            <myinput v-model="post.body" type="text" placeholder="Description" />
            <mybutton @click="createPost" class="submit">Submit New Post</mybutton>
        </form>
    </div>
</template>

<script>
export default {
    name: 'postform',
    data() {
        return {
            post: {
                title: '',
                body: '',
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now();
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: '',
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}



.submit {
    margin-top: 10px;
}
</style>