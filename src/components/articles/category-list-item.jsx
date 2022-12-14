import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import * as React from 'react';

const ArticlesCategoryListItem = ({
  icon: Icon,
  label,
  value,
  onClick,
  active,
}) => {
  return (
    <ListItem
      className={active ? 'MuiListItem-Active' : ''}
      disablePadding
      sx={{
        '& .MuiListItemIcon-root': {
          minWidth: 40,
        },
        '& .MuiListItemButton-root': {
          backgroundColor: active ? 'dark.lighter' : 'transparent',
          borderRadius: 2,
          '&:hover': {
            backgroundColor: 'transparent',
            '& .MuiSvgIcon-root': {
              color: '#4DAAF1',
            },
            '& .MuiTypography-root': {
              color: '#4DAAF1',
            },
          },
        },
      }}
    >
      <ListItemButton onClick={() => onClick(value)}>
        <ListItemIcon>
          <Icon sx={{ color: active ? 'text.primary' : '#7E8995' }} />
        </ListItemIcon>
        <ListItemText
          primary={label}
          sx={{
            '& .MuiTypography-root': {
              fontWeight: active ? 700 : 500,
              color: active ? 'text.primary' : '#7E8995',
            },
          }}
        />
      </ListItemButton>
    </ListItem>
  );
};

export default ArticlesCategoryListItem;
