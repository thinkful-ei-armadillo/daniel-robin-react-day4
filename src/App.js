import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {

  // add store to a new state storage here so that all details can be passed down to children

  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  // handle delete button click function
  // from instructions - how to remove key value pairs from an object

  // function omit(obj, keyToOmit) {
  //   return Object.entries(obj).reduce(
  //     (newObj, [key, value]) =>
  //         key === keyToOmit ? newObj : {...newObj, [key]: value},
  //     {}
  //   );
  // }
  

  // handle random card button click function - from assignment instructions
  // const newRandomCard = () => {
  //   const id = Math.random().toString(36).substring(2, 4)
  //     + Math.random().toString(36).substring(2, 4);
  //   return {
  //     id,
  //     title: `Random Card ${id}`,
  //     content: 'lorem ipsum',
  //   }
  // }

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