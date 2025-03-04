import Phrase from '../phrase/Phrase';
import { PhraseObjectType } from '../../constants';

interface PhraseListProps {
  phrases: PhraseObjectType[];
}

const PhraseList = ({ phrases }: PhraseListProps) => {
  const sortedPhrases = [...phrases].sort((a, b) => a.text.localeCompare(b.text));

  return (
    <div>
      {sortedPhrases.map((phrase, index) => (
        <Phrase phrase={phrase} index={index} />
      ))}
    </div>
  );
};

export default PhraseList;