import React,{Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
class App extends Component{
  constructor(props)
    {super(props);
      this.state={
        a:0,
        b:0,
        c:0,
      }
    }
    hn=()=>
    {
      var m=document.getElementById('a').value;
      this.setState({a:m});
    }
    hm=()=>
    {var m=document.getElementById('b').value;
      this.setState({b:m});
    }
    a=(event)=>
    {var am=event.target.value;
      if(am==='+')
      {var a= (this.state.a).toString();
        var b=(this.state.b).toString();
        var bm=eval(a+b);
this.setState({c:bm});
console.log(bm);
      }
       if(am==='-')
      {
        var bm=this.state.a-this.state.b;
this.setState({c:bm});
      }
       if(am==='*')
      {
        var bm=this.state.a*this.state.b;
this.setState({c:bm});
      }
       if(am==='/')
      {
        var bm=this.state.a/this.state.b;
this.setState({c:bm});
      }
       if(am==='mod')
      {
        var bm=this.state.a%this.state.b;
this.setState({c:bm});
      }
    }
  render()
  {
    return(
      <div>
    }
<AppBar variant="contained" color="secondary" style={{
background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)"}}><h2>CALCULATOR</h2></AppBar><br/>
    <br/>
<br/><br/><Container fixed style={{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)" ,position:"absolute",border:"solid",paddingTop:"50px",paddingLeft:"50px",paddingRight:"100px",width:"350px"}}>

<TextField label="Enter here"  variant="outlined" id='a' type="number"  value={this.state.a} onChange={this.hn}></TextField>
 <br/><br/>
 <TextField label="Enter here"  variant="outlined" id='b' type="number"  value={this.state.b} onChange={this.hm}></TextField>
<div>
    <Button variant="contained" color="primary" onClick={this.a} value='+'>+</Button><t/>
    <Button variant="contained" color="primary"  onClick={this.a} value='-'>-</Button><t/><br/>
    <Button variant="contained" color="primary"  onClick={this.a} value='/'>/</Button><t/>
    <Button variant="contained" color="primary"  onClick={this.a} value='*'>X</Button><t/>
    <Button variant="contained" color="primary"  onClick={this.a} value='mod'>mod</Button><t/>
    </div>
 <p>{this.state.c}</p>
 </Container>
 </div>
  )
  }
}
export default App;