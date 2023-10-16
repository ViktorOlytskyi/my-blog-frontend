<template>
    <div class="container">
        <div class="row">
            <div v-for="article in articles" :key="article.id">
                <div v-for="a in article" :key="a.id" class="col-md-8 offset-md-2">
                    <h1>{{ a.title }}</h1>
                    <p>Дата створення: {{ a.created_at }}</p>
                    <p>Author: {{ a.user_name }}</p>
                    <hr>
                    <p>{{ a.content }}</p>
                    <hr>
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-primary" @click="likeArticle">Лайк</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-danger" @click="dislikeArticle">Дизлайк</button>
                        </div>
                    </div>
                    <hr>
                    <router-link :to="{ name: 'editArticle', params: { id: a.id } }">
                        <button class="btn btn-primary">Редагувати статтю</button>
                    </router-link>
                    <hr>
                    <h3>Коментарі</h3>
                    <div class="media" v-for="comment in article.comments" :key="comment.id">

                        <div class="media-body">
                            <h5 class="mt-0">Ім'я користувача</h5>
                            {{ comment.text }}
                        </div>
                    </div>

                    <hr>
                    <h3>Додати коментар</h3>
                    <form @submit.prevent="addComment">
                        <textarea v-model="newComment" placeholder="Ваш коментар"></textarea>
                        <button type="submit">Додати коментар</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</template>

  
<script>
export default {
    data() {
        return {
            articles: [],
            newCommentText: '',

        };
    },
    created() {        
        this.$axios
            .get('/api/articles') 
            .then((response) => {
                this.articles = response.data;
            })
            .catch((error) => {
                console.error('Помилка завантаження списку статей:', error);
            });
    },
    methods: {
        addComment() {
            const articleId = this.$route.params.id; 

            if (this.newComment.trim() === '') {
                return;
            }

            this.$axios
                .post(`/articles/${articleId}/comments`, {
                    content: this.newComment,
                    articleId: articleId, 
                })
                .then((response) => {

                    console.log('Коментар успішно доданий:', response.data);

                    this.newComment = '';
                })
                .catch((error) => {

                    console.error('Помилка додавання коментаря:', error);
                });
        },
    },

};
</script>
  