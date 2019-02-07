import React from 'react';
import Card from './Card';
import './List.css';
import STORE from './store';

function List(props){
  
  console.log(Object.keys(STORE.allCards));
  
  return(
    <div className="List">
      <header>
      {props.header}
      </header>

      <div>
        {props.card.map(card =>
          <Card key={Object.keys(STORE.allCards)} title={card.title} content={card.content} />
          )}
      </div>
    </div>
  );
}


export default List;
