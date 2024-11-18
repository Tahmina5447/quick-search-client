import axios from 'axios';

export const postMethod = async (url, body, refetch = () => {}, setLoading = () => {}, reset = () => {}) => {
    setLoading(true);
    try {
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = response.data;

        if (data.status === "success") {
            alert(data?.message);
            refetch();
            reset();
        } else if (data.status === "fail") {
            alert(data?.message || data?.error);
        }
    } catch (error) {
        alert(error.message);
    } finally {
        setLoading(false);
    }
};


export const postMethodAll = async (url, body,setSuccess,setError,setLoading,token="") => {
    setLoading(true);
    const config = {
        headers: {
          Authorization: `${token}`,
        },
      }

    try {
        const response = await axios.post(url, body, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = response.data;

        if (data.status === "success") {
            alert(data?.message);
            refetch();
            reset();
        } else if (data.status === "fail") {
            alert(data?.message || data?.error);
        }
    } catch (error) {
        alert(error.message);
    } finally {
        setLoading(false);
    }
};
