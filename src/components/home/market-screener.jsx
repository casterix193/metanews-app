import { useEffect, useRef } from 'react';
import Box from '@mui/material/Box';

const MarketScreener = () => {
  const screener = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
    script.async = false;
    script.innerHTML = JSON.stringify({
      width: '100%',
      height: '100%',
      defaultColumn: 'overview',
      screener_type: 'crypto_mkt',
      displayCurrency: 'USD',
      colorTheme: 'dark',
      locale: 'in',
      isTransparent: true,
    });
    screener.current.appendChild(script);
  }, []);

  return (
    <Box
      sx={{
        my: 4,
        height: 512,
        backgroundColor: 'color.lighter',
        borderRadius: 2,
        overflow: 'hidden',
        borderColor: 'divider',
        borderWidth: 1,
        borderStyle: 'solid',
      }}
    >
      <div class="tradingview-widget-container" ref={screener}>
        <div class="tradingview-widget-container__widget"></div>
      </div>
    </Box>
  );
};

export default MarketScreener;
