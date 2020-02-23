import React from 'react';
import ReactDOM from 'react-dom';
import './app.css'
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Items: [],
        };
    }
addList = (e) => {
        e.preventDefault();
        const newItem  = this.newItem.value;
    this.setState({Items: [...this.state.Items,newItem]});
};
    removeItem = (index,e) => {
        const Items = Object.assign([],this.state.Items);
        Items.splice(index,1);
        this.setState({Items:Items});
    };

    render() {
        return(
            <div id='app'>
            <div>
                <h1>Manage your Tasks !!</h1>
                <form onSubmit={(e) => {this.addList(e)}}>
                    <h2>Number of tasks :: {this.state.Items.length}</h2>
                    <label>Add Task </label><br />
                    <input ref={input => this.newItem = input} />
                    <button type="submit">Add</button>
                </form>
            </div>
                <div>
                    <ul className="list-group">
                        {this.state.Items.map((items,index) =>
                            <li key={index}>{items}<button id="removeButton" onClick={this.removeItem.bind(this,index)}>Remove</button></li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)
