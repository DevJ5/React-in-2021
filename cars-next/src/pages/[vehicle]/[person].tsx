import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPageContext } from 'next';

// types
import { Owner } from '../../types/api';

export interface PersonProps {
  initialOwners: Owner[] | undefined;
}

const Person = ({ initialOwners }: PersonProps) => {
  const [owners, setOwners] = useState(initialOwners);
  const router = useRouter();
  const { person: personQuery, vehicle: vehicleQuery } = router.query;

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          `http://localhost:4001/vehicles?ownerName=${personQuery}&vehicle=${vehicleQuery}`
        );
        if (!response.ok) throw new Error('Something went wrong');
        const data: Owner[] | undefined = await response.json();
        setOwners(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (initialOwners && initialOwners.length === 0) sendRequest();
  }, [initialOwners, personQuery, vehicleQuery]);

  const renderPersonDetails = () => {
    if (!owners?.[0]) return <div>Loading...</div>;
    return (
      <>
        <pre>{JSON.stringify(owners[0], null, 4)}</pre>
        <p>{router.query.vehicle}</p>
        <p>{router.query.person}</p>
      </>
    );
  };

  return <div>{renderPersonDetails()}</div>;
};

export default Person;

export interface PersonNextPageContext extends NextPageContext {
  query: {
    person: string;
    vehicle: string;
  };
}

Person.getInitialProps = async ({ query, req, res }: PersonNextPageContext) => {
  if (!req) return { initialOwners: [] };
  try {
    const response = await fetch(
      `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
    );
    if (!response.ok) throw new Error('Something went wrong');
    const data: Owner[] | undefined = await response.json();
    return { initialOwners: data };
  } catch (error) {
    console.log(error);
  }
};

// export const getServerSideProps = async (ctx) => {
//   console.log(ctx.query);
//   if (!ctx.req) return { props: { initialOwners: [] } };
//   const { query } = ctx;
//   try {
//     const response = await fetch(
//       `http://localhost:4001/vehicles?ownerName=${query.person}&vehicle=${query.vehicle}`
//     );
//     if (!response.ok) throw new Error('Something went wrong');
//     const data = await response.json();
//     return { props: { initialOwners: data } };
//   } catch (error) {
//     console.log(error);
//   }
// };
