<template>
  <div class="container">
  <h1>Latest Posts</h1>
  <div class="create-post">
    <label for="create-post" >Say Some thing...</label>
    <input type="text" id="create-post" v-model="text"  placeholder="create a post">
    <button v-on:click="createPost">Post!</button>
  </div>
  <p class="error" v-if="error">{{ error }}</p>
  <div class="posts-container">
  <div class="post"   v-bind:itemid="posts"  v-bind:key="posts._id">
    <h1>the post is</h1>
    <p class="date"> {{`${ posts.date.getDate()}/${posts.date.getMonth()}/${posts.date.getFullYear()}`}} </p>
    <p class="text"> {{ posts.text }} </p>
  </div>
  </div>
  </div>

</template>

<script>
import PostService  from '../PostService';
export default {
  name: 'PostComponent',
  data() {
    return {
    posts: [],
    error:'',
    text: ''
  }
  },
  async created(){
  try{
  this.posts = await PostService.getPosts();

  } catch(err){
  this.error= err.message;
  }
  },
  methods: {
    async createPost(){
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
}
p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding: 10px;
  margin-bottom: 15px;
}
.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
  padding: 10px 10px 5px 15px;
  margin-bottom:15px;
}
div.created-at {
  position: absolute;
  top:0;
  left:0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color:white;
  font-size:13px;
}
p.text {
  font-size : 22px;
  font-weight: 700;
  margin-bottom:0;
}

</style>
