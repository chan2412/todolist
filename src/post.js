import React,{Component} from 'react';
import Button from "@material-ui/core/Button";
export default class Post extends Component{
	render()
	{
		return(
			<div><li>
	{this.props.body}<br/>
   <Button variant="contained" color="primary" onClick={this.props.delete}>Delete</Button>
   </li></div>)
	}
}