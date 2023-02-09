import  axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class  PostService {
    //Get posts
    static async getPosts(){

            try{
                const res = await  axios.get(url);
                const data = res.data;

                data.map(post => ({
                        ...post,
                        date: new Date(post.date)
                })
                );


            } catch(err){
                return (err) ;
            }



        }



    //create Post
    static insertPost(text){
        return axios.post(url,{
            text
        });

    }


    // Delete Post

    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;