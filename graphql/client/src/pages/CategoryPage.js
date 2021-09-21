import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, gql } from '@apollo/client';

const FETCH_CATEGORY = gql`
  query ($slug: String!) {
    category(slug: $slug) {
      id
      image
      category
      slug
      animals {
        title
        image
      }
    }
  }
`;

function CategoryPage() {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(FETCH_CATEGORY, {
    variables: { slug: slug },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-capitalize">
          {data.category.slug}
          <CardDisplay animals={data.category.animals} />
        </h1>
      </Container>
    </div>
  );
}

export default CategoryPage;
