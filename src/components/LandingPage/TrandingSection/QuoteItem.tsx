import { FC, useEffect, useState } from 'react';

const QuoteItem: FC = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const quotes = ['Good books don’t give up all their secrets at once.'];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex] ?? '');
  }, []);

  return (
    <p className="my-8 w-full text-center opacity-80 text-base-content">
      {quote}
    </p>
  );
};

export default QuoteItem;
