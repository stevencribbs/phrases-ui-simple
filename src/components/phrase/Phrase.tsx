import { Card } from 'react-bootstrap';
import { PhraseObjectType } from '../../constants';
import { capitalizeString } from '../../utlities';

interface PhraseProps {
  phrase: PhraseObjectType;
  index?: number
}

const Phrase = ({phrase, index=0}: PhraseProps) => {
  const footerText = phrase.source ? `Source: ${phrase.source}` : `Author: ${phrase.author}`;
  return (
    <Card key={index} style={{ margin: '10px'}}>
      <Card.Header className='text-muted'>{capitalizeString(phrase.phraseType)}</Card.Header>
      <Card.Body>
        <Card.Text>{phrase.text}</Card.Text>
      </Card.Body>
      <Card.Footer className='text-muted'>{footerText}</Card.Footer>
    </Card>
  )
};

export default Phrase;
