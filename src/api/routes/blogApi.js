import axios from '../apiConfig'


class Routes {
    
  
    getBlog() {
      return axios.get("/v1/GetBLogs/");
    }
    getSingleBlog(id) {
      return axios.get(`v1/GetBLogs/${id}`)
    }
}

export default new Routes();