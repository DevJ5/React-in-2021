import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Owner } from '../types/api';

export interface ListProps {
  owners: Owner[] | undefined;
}

const List = ({ owners }: ListProps) => {
  return (
    <div>
      {owners &&
        owners.map((owner, index) => (
          <div key={index}>
            <Link
              as={`/${owner.vehicle}/${owner.ownerName}`}
              href="/[vehicle]/[person]">
              <a>Navigate to {owner.ownerName}&apos; vehicle</a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default List;

List.getInitialProps = async () => {
  try {
    const response = await fetch('http://localhost:4001/vehicles');
    if (!response.ok) throw new Error('Something went wrong');
    const data: Owner[] | undefined = await response.json();
    return { owners: data };
  } catch (error) {
    console.log(error);
  }
};
