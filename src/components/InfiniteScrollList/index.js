import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Box, Typography } from '@material-ui/core';
import useStyles from './styles';

function InfiniteScrollList({
  subheader,
  items,
  dense,
  loading,
  renderItem,
  onLoadData,
}) {
  const classes = useStyles();
  const listRef = React.useRef();
  const lastItemRef = React.createRef();

  React.useEffect(() => {
    if (!lastItemRef.current) return () => {};

    const options = {
      root: listRef.current,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(entries => {
      if (!loading && entries[0].isIntersecting) onLoadData();
    }, options);

    observer.observe(lastItemRef.current);

    return () => observer.disconnect();
  }, [listRef, lastItemRef]);

  return (
    <List dense={dense} subheader={subheader}>
      <div className={classes.subjectsListContent} ref={listRef}>
        {items.map((item, i) => {
          return (
            <ListItem
              key={item.key}
              button
              ref={i === items.length - 1 ? lastItemRef : null}
            >
              {renderItem(item)}
            </ListItem>
          );
        })}
        {loading && (
          <ListItem>
            <Box display="flex" width="100%" justifyContent="center">
              <Typography variant="caption">Loading...</Typography>
            </Box>
          </ListItem>
        )}
      </div>
    </List>
  );
}

InfiniteScrollList.propTypes = {
  items: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  // MUI List propTypes
  subheader: PropTypes.node,
  dense: PropTypes.bool,

  renderItem: PropTypes.func.isRequired,
  onLoadData: PropTypes.func,
};

InfiniteScrollList.defaultProps = {
  loading: false,
  subheader: null,
  dense: false,

  onLoadData: () => {},
};

export default InfiniteScrollList;
