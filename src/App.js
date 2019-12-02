import React , {Component} from 'react';
import Todoitems from './components/Todoitems/Todoitems';
import Additems from './components/Additems/Additems';
class App extends Component {
  state={
    items:[
      {id:1 , name:"omar anwar" , age:23},
      {id:2 , name:"ahmed" , age:28},
      {id:3 , name:"mostafa" , age:27},
      {id:4 , name:"magdy" , age:29}
    ]
  }
  deleteitem=(id)=>{
    /* another way to delete
      let items=this.state.items.filter(item=>{   filter de btfltrly btshel item el msh bysawy id el hwa (false)
        return item.id !==id   hna k2ny b2olo hal el id el gylk mn el fun msh bysawey el id el fl state fa hwa byweh
      })                       fa hyrg3 false fa hyshel el id da lma ados 3leh enma lw 3mlt === hyrg3 true w msh hytshal
      this.setStat({items})    => de b3ml update 3ady ll state w {items:items} hya hya {items} bs.
      ========================================================================================================
      let items=this.state.items
        let i=items.findIndex(item=>item.id===id)
        items.splice(i,1)
        this.setState({items:items})
      }
   */
    let items=this.state.items.filter(item=>{
      return item.id !==id  
    })
    this.setState({items})
    }
    addItem=(item)=>{
      item.id=Math.random();
      let items = this.state.items;
      items.push(item);
      this.setState({items});
    }
  render(){
  return (
    <div className="App container">  
    <h1 className="text-center">Todo list</h1>
    <Todoitems items={this.state.items} deleteitem={this.deleteitem}/>    
    <Additems addItem = {this.addItem} />
    </div>
  );
  }
}

export default App;
