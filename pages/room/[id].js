import React from 'react';
import { useRouter } from 'next/router';

const RoomPage = () => {
  const { query } = useRouter();

  return (
    <div>
      
      { query.id }
    </div>
  );
}

export default RoomPage;
