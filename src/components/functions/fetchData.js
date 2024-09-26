import axios from 'axios';

export const fetchData = async (setData, setLoading, setError) => {
  try {
    const response = await axios.get('https://v2.api.noroff.dev/online-shop');
    setData(response.data.data);
    setLoading(false);
  } catch (err) {
    setError(err.message);
    setLoading(false);
  }
};
