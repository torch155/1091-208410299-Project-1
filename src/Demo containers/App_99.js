import React, { Component } from 'react';
import DemoList from '../Demo components/DemoList_99';
import { demo } from '../Demo_99';
import SearchBox from '../Demo components/SearchBox_99';
import Scroll from '../Demo components/Scroll_99';
import './App_99.css';

class App extends Component{
    constructor(){
        super();
        this.state={
            demo:demo,
            searchfield:''
        }
    }

    onSearchChange = event =>{
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filteredDemo =  this.state.demo.filter(demo=>{
            return demo.name
            .toLowerCase()
            .includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.demo.length === 0) {
            return <h1>Loading</h1>;
        } else {
        return(
        <div className='tc'>
            <h1>Demos</h1>
            <SearchBox searchChange={this.onSearchChange} />
            <Scroll>
                <DemoList demo={filteredDemo} />
            </Scroll>
        </div>
    ) 
    }
}
}



export default App;