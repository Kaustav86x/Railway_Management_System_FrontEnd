import API from "./Config";
import { useCookies } from 'react-cookie';

const SUrl = "Users/";

// 1.Login Page ---POST
const UserLoginAPI = () => {
  const [Cookies,setCookies] = useCookies(['UserLoginDetail']);
  const Response = {
      Massage: "hello",
      StatusCode: 404
    };
  const loginAPI = async (loginDetail) => {
    try {
      const res = await API.post(`${SUrl}Login`, loginDetail);
      const { token, massage } = res.data;
      Response.Massage = massage;
      Response.StatusCode = res.status;
      setCookies('AccessCode', token);
    } catch (error) {
      const { massage } = error.response.data;      
      Response.Massage = massage;
      Response.StatusCode = error.response.status;
    }
    return Response;
  };
  return loginAPI;
};
export default UserLoginAPI;