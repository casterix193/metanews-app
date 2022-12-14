import { useEffect, useRef } from 'react';

const Ticker = () => {
  const ticker = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js';
    script.async = false;
    script.innerHTML = JSON.stringify({
      symbols: [
        {
          proName: 'FOREXCOM:SPXUSD',
          title: 'S&P 500',
        },
        {
          proName: 'FOREXCOM:NSXUSD',
          title: 'US 100',
        },
        {
          proName: 'BITSTAMP:BTCUSD',
          title: 'Bitcoin',
        },
        {
          proName: 'BITSTAMP:ETHUSD',
          title: 'Ethereum',
        },
        {
          description: 'Polygon',
          proName: 'CRYPTOCAP:MATIC',
        },
      ],
      colorTheme: 'dark',
      isTransparent: true,
      showSymbolLogo: true,
      locale: 'in',
    });
    ticker.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container" ref={ticker}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default Ticker;
