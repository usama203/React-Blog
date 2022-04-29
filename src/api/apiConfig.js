import axios from "axios";
import { toast } from "react-toastify";



const instance = axios.create({
    baseURL: `https://61791a83aa7f3400174047a6.mockapi.io`,
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
    },
  });
  
 
  
  instance.interceptors.response.use(
    (response) => {
      if (response.data.message) {
        toast.success(response.data.message);
      }
      return response;
    },
    (error) => {
      if (error.response?.status === 401) {
        localStorage.removeItem("user");
      }
  
      if (error.response?.data?.message) {
        toast.error(error.response.data.message);
      } else if (error.message) {
        toast.error(error.message);
      } else if (error.response?.data?.error) {
        toast.error(error.response.data.error);
      }
      return error;
    }
  );
  
  export default instance;