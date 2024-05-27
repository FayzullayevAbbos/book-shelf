import { API } from "./apiUrl";
import MD5 from "crypto-js/md5";

interface IData {
  key: string;
  secret: string;
}

type Update = (
  method: string,
  body: object,
  data: IData,
  query: string,
) => Promise<any>;

const postUpdate: Update = async (method, body, data, query) => {
  try {
    const url = query;
    const json = JSON.stringify(body);
    const md5 = MD5(`${method}${url}${json}${data.secret}`);
    let response = await fetch(`${API}${url}`, {
      method: method,
      headers: {
        Key: data.key,
        Sign: md5.toString(),
      },
      body: json,
    });
    const res = await response.json();

    return await res;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default postUpdate;
