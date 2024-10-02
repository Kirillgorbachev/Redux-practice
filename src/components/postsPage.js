import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { downloadPostsActionApi } from "../store/PostsReducer";


function Posts () {
    const dispatch = useDispatch();
    const posts = useSelector( state => state.postsReducer.posts);
    const postsLoading = useSelector(state => state.postsReducer.loading);
 

    return (
        <div>
            <button onClick={() => dispatch(downloadPostsActionApi())}>Получить posts с сервера</button>
            <div>
                {postsLoading ? (
                <p>Загрузка постов...</p>
                ) : posts.map ( post => 
                <div key={post.id}>
                    {post.body}
                </div>
                )}  
            </div>
        </div>
    )
}

export default Posts;