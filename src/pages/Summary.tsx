import { PhraseObjectType } from '../constants';
import { capitalizeString } from '../utlities';

interface SummaryProps {
  phrases: PhraseObjectType[];
}

export const Summary = ({ phrases }: SummaryProps) => {
  const categoryCounts = phrases.reduce((acc, phrase) => {
    acc[phrase.category] = (acc[phrase.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const totalPhrases = phrases.length;

  return (
    <div className='container border border-primary-subtle p-3'>
      {/* <h2>Phrase Summary</h2> */}
      <h4>Total Phrases: {totalPhrases}</h4>
      <div style={{ width: '200px', marginTop: '20px' }} >
      <h4>Category Counts</h4>
      <ul className='list-group'>
        {Object.entries(categoryCounts).map(([category, count]) => (
          <li className='list-group-item d-flex justify-content-between align-items-start' key={category}>
            {capitalizeString(category)}: <span className="badge text-bg-primary rounded-pill">{count}</span>
          </li>
        ))}
      </ul>
      </div>
    </div>
    
      // <div className='vstack gap-3'>
      //   {Object.entries(categoryCounts).map(([category, count]) => (
      //     <div className='p-2' key={category}>
      //       {category}: {count}
      //     </div>
      //   ))}
      // </div>
  );
};

export default Summary;