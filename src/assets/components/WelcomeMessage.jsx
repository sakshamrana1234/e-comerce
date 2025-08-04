const WelcomeMessage=({onGetPostClick})=>{
 return ( <center className="welcomeMsg">
<h1 >There are no posts</h1>
<button onClick={onGetPostClick} type="button" className="btn btn-primary">Get Post from server </button>
  </center>);
};
export default WelcomeMessage;