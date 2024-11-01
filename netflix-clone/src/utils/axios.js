import axios from "axios";
 const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
 })

 export default instance;

//  import axios from "axios";
// const instance = axios.create({
//     baseURL: "https://api.themoviedb.org/3"  // Ensure this URL is correct and HTTPS
// });
// export default instance;
// https://api.themoviedb.org/3/account/{account_id}