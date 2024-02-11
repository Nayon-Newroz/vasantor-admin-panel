// import jwt from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";
import axios from "axios";

const RefreshToken = (fib_remit_admin_auth, logout, login) => {
  const refresh = async () => {
    let token = fib_remit_admin_auth.access_token;
    // console.log('token function', fib_remit_admin_auth);
    // let decodedToken = jwt.decode(token, { complete: true });
    // let decodedTokenTime = decodedToken.payload.exp * 1000;
    const decodedToken = jwtDecode(token)
    // let decodedTokenTime = fib_remit_admin_auth.expires_in * 1000;
    let decodedTokenTime = decodedToken.exp * 1000;
    let dateNow = new Date();
    let NumaricDate = dateNow.getTime();
   
    try {
      if (decodedTokenTime > NumaricDate) {
        // console.log('my access token:', token);

        return token;
      } else {
        let data = {
          grant_type: "refresh_token",
          client_id: process.env.REACT_APP_CLIENT_ID,
          client_secret: process.env.REACT_APP_CLIENT_SECRECT,
          refresh_token: fib_remit_admin_auth.refresh_token,
        };
        let res = await axios({
          url: "/api/v1/public/auth/refresh-token",
          method: "POST",
          data: data,
          headers: {
            "Content-Type": "application/json",
          },
        });

        login(res?.data.data);
        // console.log("refresh token", res.data.data.access_token);
        return res.data.data.access_token;
      }
    } catch (error) {
      logout();
    }
  };
  return refresh();
};

export default RefreshToken;
