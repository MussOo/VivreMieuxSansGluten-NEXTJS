import { useState } from 'react';

export default function useCreateEvent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function createUser(
    title,
      description,
      date_start,
      date_end,
      adress,
      zip,
      city,
      country,
      image
  ) {
    setLoading(true);
    setError(null);

    try {
      const data = fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
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
