<template>
    <div>
        <h1>Post Page</h1>
        <!-- <myinput v-focus placeholder="Search..." v-model="searchQuery" /> -->
        <div class="app_btns">
            <mybutton class="post_btn" @click="showDialog">Create Post</mybutton>
            <span style="font-weight: bold; margin-left: auto; margin-right: 10px;">Sort by:</span>
            <!-- <myselect v-model="selectedSort" :options="sortOptions" /> -->
        </div>
        <mydialog v-model:show="dialogVisible">
            <postform @create="createPost" />
        </mydialog>
        <postlist @remove="removePost" :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
        <div style="margin-top: 20px;" v-else>
            Loading...
        </div>
        <div v-intersection="loadPosts" class="observer"></div>
        <div class="page_wrapper">
            <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
                'current-page': page === pageNumber
            }" @click="changePage(pageNumber)">{{ pageNumber }}</div>
        </div>
    </div>
</template>

<script>


import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post),
                this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        changePage(pageNumber) {
            this.page = pageNumber
        },
        ...mapMutations({
            setPage: 'post/setPage'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        })

    },
    mounted() {
        this.fetchPosts();
        console.log(this.$refs.observer);
        // const options = {
        //     rootMargin: '0px',
        //     threshold: 1.0
        // }
        // const callback = (entries, observer) => {
        //     if (entries[0].isIntersecting) {
        //         this.loadPosts()
        //     }
        // };
        // const observer = new IntersectionObserver(callback, options);
        // observer.observe(this.$refs.observer)

    },
    computed: {
        ...mapState({
            posts: state => state.posts.posts,
            isPostsLoading: state => state.posts.isPostsLoading,
            selectedSort: state => state.posts.selectedSort,
            searchQuery: state => state.posts.searchQuery,
            page: state => state.post.pagesposts,
            limit: state => state.posts.limit,
            totalPages: state => state.posts.totalPages,
            sortOptions: state => state.posts.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },
    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    }
}
</script>

<style>
.app_btns {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    align-items: center;
}

.page_wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    border: 1px solid teal;
    padding: 10px;
    margin-right: 10px;
}

.current-page {
    border: 2px solid black;
}
</style>