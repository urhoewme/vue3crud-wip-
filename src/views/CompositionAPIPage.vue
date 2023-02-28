<template>
    <div>
        <h1>Страница с постами</h1>
        <myinput v-model="searchQuery" placeholder="Поиск...." v-focus />
        <div class="app__btns">
            <mybutton>
                Создать пользователя
            </mybutton>
            <myselect v-model="selectedSort" :options="sortOptions" />
        </div>
        <mydialog v-model:show="dialogVisible">
            <postform />
        </mydialog>
        <postlist :posts="sortedAndSearchedPosts" v-if="!isPostsLoading" />
        <div v-else>Идет загрузка...</div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'
import { usePosts } from "@/hooks/usePosts";
import useSorted from "@/hooks/usePosts";
import useSearched from "@/hooks/useSearched";
export default {
    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'body', name: 'По содержимому' },
            ]
        }
    },
    setup(props) {
        const { posts, totalPages, isPostsLoading } = usePosts(10);
        const { sortedPosts, selectedSort } = useSorted(posts);
        const { searchQuery, sortedAndSearchedPosts } = useSearched(sortedPosts)
        return {
            posts,
            totalPages,
            isPostsLoading,
            sortedPosts,
            selectedSort,
            searchQuery,
            sortedAndSearchedPosts,
        }
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