import { Form, useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";


const CreatePost = () => {
  



  return (
    <Form method="POST"
    className="createPost" >
      <div className="mb-3">
        <label htmlFor="Userid" className="form-label">
          User Id
        </label>
        <input
          type="text"
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter your user Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="psotTitle" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          name="title"      className="form-control"
          id="postTitle"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea rows="4"
          type="text"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactionsElement" className="form-label">
          Number of reactionsElement
        </label>
        <input
          type="text"
          name="reactions"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      
      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Enter you Tags
        </label>
        <input
          type="text"
         name="tags"
          className="form-control"
          id="tagsElement"
          placeholder="Please enter your tagsElement here using space"
        />
      </div>
      
      
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function  createPostAction(data){
   const formData= await data.request.formData()
   const postData=Object.fromEntries(formData);
   postData.tags=postData.tags.split(" ");
   console.log(postData)

  
  fetch("https://dummyjson.com/posts/add", {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(
      postData
    ),
  })
  .then((res)=>res.json())
  .then((post)=>{
    console.log(post);
  });
  return redirect("/"); 
};
export default CreatePost;
