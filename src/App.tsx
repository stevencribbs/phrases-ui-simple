import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import PhraseList from './components/phraseList/PhraseList';
import { phrases } from './constants';
import { getPhrasesByType } from './utlities';

function App() {
  const [page, setPage] = useState('all');

  const handlePageChange = (page: string) => {
    setPage(page);
  };

  const renderPhraseList = () => {
    console.log('page:', page);
    switch(page) {
      case 'quotes': {
        const quotePhrases = getPhrasesByType(phrases, 'quote');
        console.log('quotePhrases:', quotePhrases);
        return (<PhraseList phrases={quotePhrases} />);
      }
      case 'facts': {
        const factPhrases = getPhrasesByType(phrases, 'fact');
        console.log('factPhrases:', factPhrases);
        return (<PhraseList phrases={factPhrases} />);
      }
      case 'verses': {
        const versesPhrases = getPhrasesByType(phrases, 'verse');
        console.log('versesPhrases:', versesPhrases);
        return (<PhraseList phrases={versesPhrases} />);
      }
      case 'all':
      default:
        return (<PhraseList phrases={phrases} />);
    }
  };

  return (
    <>
      <Header title="What Is Your Phrase?"
        menuItems={['all', 'quotes', 'facts', 'verses',]} 
        menuClick={handlePageChange} 
        selected={page} 
      />
     {renderPhraseList()} 
    </>
  )
}

export default App
