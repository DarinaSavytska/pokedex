import { globalConstants } from '../constants';

export const getLoginApi = async (password: string) => {
  try {
    const res = await fetch(`${globalConstants.mainUrl}/api/login`, {
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
