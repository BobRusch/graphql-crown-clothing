import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import CollectionOverview from './collections-overview.component';
import Spinner from '../spinner/spinner.component';

const GET_COLLECTIONS = gql`
  {
    collections{
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionOverviewContainer = () => (
  <Query query={GET_COLLECTIONS}>
    {
      ({ loading, data }) => {
        if (loading) return <Spinner />
        const { collections } = data;
        return <CollectionOverview collections={collections} />
      }
    }
  </Query>
);

export default CollectionOverviewContainer;
