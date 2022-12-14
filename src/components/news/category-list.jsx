import * as React from 'react';
import List from '@mui/material/List';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded';
import WebhookRoundedIcon from '@mui/icons-material/WebhookRounded';
import NewsCategoryListItem from './category-list-item';

const NewsCategoryList = ({ selected, onChange }) => {
  const handleClick = (value) => onChange(value);

  const categories = [
    {
      label: 'Metaverse',
      query: 'metaverse',
      icon: ApiRoundedIcon,
    },
    {
      label: 'Crypto',
      query: 'crypto',
      icon: CurrencyBitcoinRoundedIcon,
    },
    {
      label: 'NFTs',
      query: 'nft',
      icon: FitbitRoundedIcon,
    },
    {
      label: 'Web 3.0',
      query: 'metaverse crypto',
      icon: WebhookRoundedIcon,
    },
  ];

  return (
    <List>
      {categories.map((category) => (
        <NewsCategoryListItem
          key={category.query}
          icon={category.icon}
          label={category.label}
          value={category.query}
          onClick={handleClick}
          active={category.query === selected}
        />
      ))}
    </List>
  );
};
export default NewsCategoryList;
