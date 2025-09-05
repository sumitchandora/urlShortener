import axios from "axios"

const axiosInstance = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:10000,
    withCredentials:true
})



axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // You can log errors or show toast messages here
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error('Error Response:', error.response.data);
  
        // Example: You can customize messages here
        const status = error.response.status;
        if (status === 401) {
          alert('Unauthorized! Please log in again.');
        } else if (status === 404) {
          alert('Not Found!');
        } else if (status >= 500) {
          alert('Server error, try again later.');
        }
      } else if (error.request) {
        // No response from server
        console.error('No response from server:', error.request);
        alert('Network issue or server not responding.');
      } else {
        // Other unknown errors
        console.error('Error:', error.message);
        alert('Unexpected error occurred.');
      }
  
      // Always reject the error for use in `catch` blocks
      return Promise.reject({
        message : error.response?.data?.message,
        data : error.response?.data,
        status : error.response?.status
        });
    }
  );
  
export default axiosInstance