<template>
    <div v-if="posts.length > 0">
        <h2>Post List</h2>
        <TransitionGroup name="post-list">
            <post v-for="post in posts" :key="post.id" :post="post" @remove="$emit('remove', post)" />
        </TransitionGroup>
    </div>
    <h2 v-else>Post List is Empty</h2>
</template>

<script>
import post from "@/components/post";
export default {
    name: 'postlist',
    components: {
        post
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
h2 {
    margin-top: 15px;
}

.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.3s ease;
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.post-list-move {
    transition: transform 0.6s ease;
}
</style>