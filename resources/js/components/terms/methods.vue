<template>
    <div>
        <p>Number is : {{ views }}</p>
        <button @click="updateCounter(1)">Increase</button>
        <button @click="updateCounter(-1)">Decrease</button>
        <br>
        <div v-for="(blog, index) in blogs" :key="index" v-if="blogs.length">
            <h1>{{blog.title}}</h1>
            <p>{{ blog.post }}</p>
        </div>
        <br>
        <div>
            <div v-if="showPost">Blog is Live</div>
            <div v-else>Blog is Sleeping</div>
            <button @click="changeV()">change visibility</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            views: 0,
            blogs:[
                {
                    id: 1,
                    title: 'blog title',
                    post: 'blog post',
                },
                {
                    id: 2,
                    title: 'blog title',
                    post: 'blog post',
                },
                {
                    id: 3,
                    title: 'blog title',
                    post: 'blog post',
                },
            ],
            showPost: true,
        }
    },
    methods: {
        updateCounter(n){
            this.views += n
        },
        changeV(){
            this.showPost = !this.showPost
        }
    },
    created() {
        this.views = 100
    },
}
</script>
