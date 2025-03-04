import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import PhraseList from './components/phraseList/PhraseList';
import { phrases } from './constants';

function App() {
  const [page, setPage] = useState('phrases');

  const handlePageChange = (page: string) => {
    setPage(page);
  };

  const renderPhraseList = () => {
    if(page === 'phrases') {
      return <PhraseList phrases={phrases} />
    }
  }

  return (
    <>
      <Header title="What Is Your Phrase?"
        menuItems={['phrases', 'authors', 'phraseType',]} 
        menuClick={handlePageChange} 
        selected={page} 
      />
     {renderPhraseList()} 
    </>
  )
}

export default App
