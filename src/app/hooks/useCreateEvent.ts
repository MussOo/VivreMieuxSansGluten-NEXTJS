import { useState } from 'react';

export default function useCreateEvent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function createUser(
     title  ,
      description,
      date_start,
      date_end,
      adress,
      zip,
      city,
      country,
      userId,
      image
  ) {
    setLoading(true);
    setError(null);

    try {
      const data = fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          title,
          description,
          date_start,
          date_end,
          adress,
          zip,
          city,
          country,
          userId,
          image,
        }),
      })
      .then((res) => res.json());

      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }
  return { createUser, loading, error };
}
