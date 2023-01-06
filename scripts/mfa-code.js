import { generateToken } from "authenticator";
import * as dotenv from "dotenv";

dotenv.config();

const otpCode = generateToken(process.env.MFA_SECRET_KEY);
console.log(`generated code: ${otpCode}`);
