import { createContext,useCallback,useState,useReducer,useEffect } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {}, 
  Fetching:false,
  addInitialPosts: () => {}, 
  deletePost: () => {},
});

const postListReducer = (currpostList, action) => {
  
  let newPostList=currpostList;
  if(action.type==="DELETE_POST"){
      newPostList=currpostList.filter(post=> post.id !==action.payload.postId)
  }
  else if(action.type==="AddInitialPosts"){
    newPostList=action.payload.posts;
  }
  else if(action.type==="Add_Post"){
    newPostList=[action.payload,...currpostList]
  }
    return newPostList;
};

const PostListProvider = ({ children }) => {
  
const [postList, dispatchPostList] = useReducer(postListReducer,[]);
  const [ Fetching, setFetching ] = useState(false);
  const addPost = () => {
   dispatchPostList({
    type:"Add_Post",
    payload:{
    posts,
   }});
  };
  const addInitialPosts = (posts) => {
   dispatchPostList({
    type:"AddInitialPosts",
    payload:{
    posts
   }})
  };
  const deletePost =useCallback( (postId) => {
    dispatchPostList({
      type:"DELETE_POST",
      payload:
      {postId,},
    });
    },[dispatchPostList]
  );
  useEffect(() => {
    setFetching(true);
    const controller=new AbortController();
    const signal=controller.signal;
    
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });
      return()=>{controller.abort

      }
  }, []);


  
 
  return (
    <PostList.Provider
      value={{
        postList,
        Fetching,
        addPost,
        
        deletePost,

      }}
    >
      {children}
    </PostList.Provider>
  );
};
 
  
export default PostListProvider;
