import React ,{Component} from 'react';
import './Additems.css';

class Additems extends Component{
    state ={
        name:"",
        age:""
    }
    handlechange =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handlesubmit=(e)=>{
        e.preventDefault();
        if(e.target.name.value ===""){
            return alert("please check your data")

        }
        else {
            this.props.addItem(this.state);
            this.setState({
            name:"",
            age:""
        })
        }
    } 

    render(){
        return(
            <div>
                <form onSubmit={this.handlesubmit}>
                <input type="text" placeholder="enter your name...." onChange={this.handlechange} id="name" value={this.state.name}/>
                <input type="number" placeholder="enter your age...." onChange={this.handlechange} id="age" value={this.state.age}/>
                <input type="submit" value="add"/>
                </form>
            </div>
        )
    }
}
export default Additems; 