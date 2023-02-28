<template>
    <div class="post">
        <div>
            <div><strong>Name:</strong> {{ post.title }}</div>
            <div class="desc"><strong>Description:</strong> {{ post.body }}</div>
        </div>
        <div class="post_btns">
            <mybutton class="delete" @click="$emit('remove', post)">Delete</mybutton>
            <mybutton @click="$router.push(`/posts/${post.id}`)">Open</mybutton>
        </div>
    </div>
</template>

<script>
export default {
    name: 'post',
    props: {
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
.post:first-of-type {
    margin-top: 40px;
}

.post {
    padding: 20px;
    border: 4px solid teal;
    margin-top: 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.delete {
    margin-right: 10px;
}

.desc {
    width: 90%;
}

.post_btns {
    display: flex;
}
</style>