import { API } from "./apiUrl";
import MD5 from "crypto-js/md5";

interface IData {
  key: string;
  secret: string;
}

type Auth = (
  data: IData,
  query: string,
  method?: string,
) => Promise<any>;

const fetchAuth: Auth = async (data, query, method = "GET") => {
  try {
    const url = query;
    
    const md5 = MD5(`${method}${url}${data.secret}`);
    let response = await fetch(`${API}${url}`, {
      method: method,
      headers: {
        Key: data.key,
        Sign: md5.toString(),
      },
    });

    return await await response.json();
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default fetchAuth;
