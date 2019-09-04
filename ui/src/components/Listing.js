import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { getListing } from '../store/actions/listing';

const Listing = props => {
  const data = [];
  const { history } = props;
  const dispatch = useDispatch();
  const listData = useSelector(state => state.listing.data);

  useEffect(() => {
    dispatch(getListing());
  }, []);

  return (
    <>
      {listData.length ? (
        listData.map(l => (
          <div style={{ paddingLeft: '50px' }}>
            <p>{l.id}</p>
            <p>Title: {l.title}</p>
            <p>Content: {l.body}</p>
          </div>
        ))
      ) : (
        <div>No data</div>
      )}
    </>
  );
};

Listing.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default withRouter(Listing);
