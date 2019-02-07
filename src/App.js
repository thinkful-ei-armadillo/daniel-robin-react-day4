import React, {Component} from 'react';
import './App.css';
import List from './List';
import STORE from './store';

class App extends Component {

  // add store to a new state storage here so that all details can be passed down to children

  static defaultProps = {
    store: {
      lists: [],
      allCards: {}
    }
  };

  state = {
    state: STORE,
  };

  // handle delete button click function
  // button event handlers should be methods, and use setState({})
  // each list and each card should be selected by using their id
  // from instructions - how to remove key value pairs from an object

  // function omit(obj, keyToOmit) {
  //   return Object.entries(obj).reduce(
  //     (newObj, [key, value]) =>
  //         key === keyToOmit ? newObj : {...newObj, [key]: value},
  //     {}
  //   );
  // }
  

  onDeleteClick = (cardId) => {
    console.log('deleting....')
    console.log(cardId);

    // const { lists, allCards } = this.props;



  

  }
  

  // handle random card button click function
  // must add new card to both allCards object as well as insert the id into lists.cardIds
  // from assignment instructions
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
              id = {list.id}
              header = {list.header}
              card = {list.cardIds.map(id => store.allCards[id])}
              onDeleteClick = {this.onDeleteClick}
           />
        ) )} 
      </div>
    </main>
  );
  }
}

export default App;