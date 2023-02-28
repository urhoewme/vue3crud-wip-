<template>
    <div>
        <h1>Post Page</h1>
        <myinput v-focus placeholder="Search..." v-model="searchQuery" />
        <div class="app_btns">
            <mybutton class="post_btn" @click="showDialog">Create Post</mybutton>
            <span style="font-weight: bold; margin-left: auto; margin-right: 10px;">Sort by:</span>
            <myselect v-model="selectedSort" :options="sortOptions" />
        </div>
        <mydialog v-model:show="dialogVisible">
            <postform @create="createPost" />
        </mydialog>
        <postlist @remove="removePost" :posts="sortedAndSearched" v-if="!isPostsLoading" />
        <div style="margin-top: 20px;" v-else>
            Loading...
        </div>
        <div v-intersection="loadPosts" class="observer"></div>
        <!-- <div class="page_wrapper">
            <div v-for="pageNumber in totalPages" :key="pageNumber" class="page" :class="{
                'current-page': page === pageNumber
            }" @click="changePage(pageNumber)">{{ pageNumber }}</div>
        </div> -->
    </div>
</template>

<script>


import axios from 'axios';
export default {
    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false,
            selectedSort: '',
            searchQuery: '',
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                { value: 'title', name: 'By Name' },
                { value: 'body', name: 'By Description' },
            ]
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
        // changePage(pageNumber) {
        //     this.page = pageNumber
        // },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
            } catch (e) {
                alert('Error')
            } finally {
                this.isPostsLoading = false;
            }

        },
        async loadPosts() {
            try {
                this.page += 1;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: this.page,
                        _limit: this.limit,
                    }
                });
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert('Error')
            } finally {
            }

        },
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
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
        },
        sortedAndSearched() {
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
        }
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