import React from 'react';
import MainHero from '../components/MainHero/MainHero';
import CategoryDisplay from '../components/CategoryDisplay/CategoryDisplay';
import CardDisplay from '../components/CardDisplay/CardDisplay';
import { useQuery, useMutation, gql } from '@apollo/client';

const FETCH_ANIMALS = gql`
  {
    animals {
      id
      image
      price
      slug
      image
    }
  }
`;

const ADD_ANIMAL_MUTATION = gql`
  mutation (
    $image: String!
    $category: String!
    $title: String!
    $price: String!
    $description: [String!]!
    $rating: Float
    $slug: String!
  ) {
    addAnimal(
      image: $image
      category: $category
      title: $title
      price: $price
      description: $description
      rating: $rating
      slug: $slug
    ) {
      id
    }
  }
`;

function LandingPage() {
  const { loading, error, data } = useQuery(FETCH_ANIMALS);
  const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error...</div>;

  const addOstrichHandler = () => {
    addAnimal({
      variables: {
        image: 'ostrich',
        category: '1',
        title: 'This is a really cool ostrich',
        price: '32,333',
        description: ['das'],
        rating: 3.5,
        slug: 'ostrich',
      },
    });
  };

  return (
    <div>
      <MainHero />
      <CategoryDisplay />
      <CardDisplay animals={data.animals} />
      <button onClick={addOstrichHandler}>Add an Ostrich</button>
    </div>
  );
}

export default LandingPage;
