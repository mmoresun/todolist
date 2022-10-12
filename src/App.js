import './App.css';

import { useState } from 'react';

import Footer from './/components/Footer/Footer';
import Header from './/components/Header/Header';
import SearchPanel from './components/SearchPanel/SearchPanel';
import TodoItemList from './components/TodoItemsList/TodoItemList';
import TodoAddForm from './components/TodoAddForm/TodoAddForm';

function App() {

  // live search

  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (searchValue) => {

    setSearchValue(searchValue)
  }

    // show/hide favorites

    const [favChecked, setFavChecked] = useState(false);

    const handleFavChange = () => {
  
      setFavChecked(!favChecked);  
    }
  
    // Show/hide incomplete items
  
    const [doneChecked, setDoneChecked] = useState(true);
  
    const handleDoneChange = () => {
  
      setDoneChecked(!doneChecked);
    }

  return (

    <div className="App">

      <Header

        headerText='&lt;MyTodoList + Redux&gt;'
      />

      <SearchPanel

        onChange={handleSearchChange}
        handleFavChange={handleFavChange}
        handleDoneChange={handleDoneChange}
        favChecked={favChecked}
        doneChecked={doneChecked}
      />

      <TodoItemList

        searchValue={searchValue}
        favChecked={favChecked}
        doneChecked={doneChecked}
      />

      <TodoAddForm />

      <Footer

        footerText='&lt;/MyTodoList + Redux&gt;'
      />

      <div
        style={{ width: '100%', maxWidth: '700px', textAlign: 'right', fontSize: '.7rem', margin: '1rem' }}>
        Fully handmade, powered by React.js functional components, hooks and Redux
      </div>

    </div>
  );
}

export default App;
