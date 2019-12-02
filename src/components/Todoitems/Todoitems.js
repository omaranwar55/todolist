import React from 'react';
import './Todoitems.css';
const Todoitems=(props)=>{
    const {items , deleteitem}=props;
    let length=items.length;
    const listitems=length ? (
        items.map(res=>{
            return(
            <div key={res.id}>
                <span className="name">{res.name}</span>
                <span className="age">{res.age}</span> 
                <span className="action icon" onClick={(fordelete)=>deleteitem(res.id)}> &times; </span>
             </div>
            )
        })
    ) :(<p> there is no item to show</p>)

       
        return(
            <div className="ListItems">
                <div>
                    <span className="name title">Name</span>
                    <span className="age title">Age</span>
                    <span className="action title">Action</span>
                </div>
                {listitems}
            </div>
        )
    }
export default Todoitems;