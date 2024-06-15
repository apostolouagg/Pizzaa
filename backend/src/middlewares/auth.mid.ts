import { verify } from "jsonwebtoken";
import { HTTP_UNAUTHORIZED } from "../constants/http_status";

export default (req: any, res: any, next: any) => {
  const token = req.headers['access_token'] as string;

  //auth th stigmh to const token eixei th domh antikeimenou epomenws to kanw split gia na mporesw na parw mono to kommati pou einai to token etsi wste na
  // mhn exw error " JsonWebTokenError: jwt malformed"
  let arraystr = token.split(',')[4];
  let stringToken = arraystr.split('"')[3];

  if (!stringToken) {
    console.log('Token not provided');
    return res.status(HTTP_UNAUTHORIZED).send('Token not provided');
  }

  try {
    console.log('Token received:', stringToken);
    const decodedUser = verify(stringToken, process.env.JWT_SECRET!);
    req.user = decodedUser;
    next();
  } catch (error) {
    console.log('Token error:', error);
    return res.status(HTTP_UNAUTHORIZED).send('Token is invalid or expired');
  }
};