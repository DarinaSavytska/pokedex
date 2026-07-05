export const getLoginApi = async (password: string) => {
  try {
    const res = await fetch('https://pokedex-back-cyan.vercel.app/api/login', {
      // const res = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Error fetching:', err);
  }

  return null;
};
