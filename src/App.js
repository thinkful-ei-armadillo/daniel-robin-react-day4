import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  render() {
    const {store} = this.props;
      return(
    <main>
      <header>
        <h1>Trello</h1>
      </header>
      <div className='App-list'>
         {store.lists.map(list =>(
           <List
              key = {list.id}
              header = {list.header}
              card = {list.cardIds.map(id => store.allCards[id])}
           />
        ) )} 
      </div>
    </main>
  );
  }
}

export default App;