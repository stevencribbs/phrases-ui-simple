import { Card } from 'react-bootstrap';
import { PhraseObjectType } from '../../constants';
import { capitalizeString } from '../../utlities';

interface PhraseProps {
  phrase: PhraseObjectType;
  index?: number
}

const getFooter = (phrase: PhraseObjectType): string => {
  switch(phrase.phraseType) {
    case 'quote':
      return phrase.author ? `Author: ${phrase.author}` : '';
    case 'verse':
      return phrase.source ? `Source: ${phrase.source}` : '';
    case 'fact':
    default:
      return '';
  }
};

const Phrase = ({phrase, index=0}: PhraseProps) => {
  const footerText = getFooter(phrase);
  return (
    <Card key={index} style={{ margin: '10px'}}>
      <Card.Header className='text-white bg-primary'>{capitalizeString(phrase.phraseType)}</Card.Header>
      <Card.Body>
        <Card.Text>{phrase.text}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>{footerText}</Card.Footer>
    </Card>
  )
};

export default Phrase;
