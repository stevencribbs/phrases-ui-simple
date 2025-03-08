import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import { phrases } from './constants';
import { List } from './pages/List';
import Summary from './pages/summary';

function App() {
  const [page, setPage] = useState('all');

  const handlePageChange = (page: string) => {
    setPage(page);
  };

  const renderPage = () => {
    switch(page) {
      case 'phrases': {
        return (<List />);
      }
      case 'home':
      default:
        return (<Summary phrases={phrases} />);
    }
  };

  return (
    <>
      <Header title="Welcome to Phrases"
        menuItems={['home', 'phrases']} 
        menuClick={handlePageChange} 
        selected={page} 
      />
      {renderPage()}
    </>
  )
}

export default App
