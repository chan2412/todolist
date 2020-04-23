import React,{Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Post from'./post.js';
class App extends Component{
 constructor(props) {
  super(props);
  this.PostId=0;
  this.state={
    postArray:[ ],
    Body:"",id:"",
  };
}
deleteEvent=(index)=>
{const copyPostArray=Object.assign([],this.state.postArray);
  copyPostArray.splice(index,1);
  this.setState({postArray:copyPostArray});
  this.PostId=this.PostId-1;
}
setPost=(element)=>{
  var b= element.target.value;
  this.setState({Body:b});
}
addPost=()=>
{
  this.PostId=this.PostId+1;
  const copyPostArray=Object.assign([],this.state.postArray);
  copyPostArray.push({
    id:this.PostId,
    body: this.state.Body,
  });
  if(this.state.Body !== ""){
  this.setState({postArray:copyPostArray});
  document.getElementById('i').value="";
}

}
  render()
  {
    return(
      <div
      ><AppBar variant="contained" color="secondary" style={{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)"}}>
      <h2>TO-DO APP!</h2>
      </AppBar>
      <br/><br/><br/><br/>
      <Container fixed style={{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)" ,position:"absolute",border:"solid",paddingTop:"50px",paddingLeft:"50px",paddingRight:"100px",width:"320px"}}>
      <TextField  label="Enter the new task" id="i" style={{color:"white"}}  variant="outlined" type="text" onChange={this.setPost}/><Button variant="contained" color="primary" onClick={this.addPost}>Add</Button>
        <ul>{
            this.state.postArray.map((post,index)=>{
            return (
              <Post key={post.id} id={post.id} body={post.body} delete={this.deleteEvent.bind(this,index)} />
            )
            }
          )
        }
</ul></Container>
    </div>
    )
  }
}
export default App;