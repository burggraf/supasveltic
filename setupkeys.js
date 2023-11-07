import dotenv from 'dotenv';
import fs from 'fs';

const env = dotenv.config().parsed;
const url = env.VITE_SUPABASE_URL;
const key = env.VITE_SUPABASE_KEY;

// create a random string of 256 characters
const randomString = () => {
  return [...Array(256)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
}
const RAND = randomString();
console.log('RAND', RAND);
const encrypt = (s) => {
    let result = '';
    for (let i=0; i<s.length; i++) {
        const x = String.fromCharCode(s.charCodeAt(i) ^ RAND.charCodeAt(i));
        // get hex value of character, zero pad to 2 characters
        const hex = x.charCodeAt(0).toString(16).padStart(2, '0');
        result += hex;
    }
    return result;
}

const encrypted_url = encrypt(url);
const encrypted_key = encrypt(key);
const hex = RAND.split('').map(c=>c.charCodeAt(0).toString(16).padStart(2, '0')).join('');
const composite = hex + encrypted_url + 'FF' + encrypted_key;
console.log(composite);
env.VITE_SUPABASE = composite;

const envString = Object.keys(env).map(key=>`${key}=${env[key]}`).join('\n');
fs.writeFileSync('./.env', envString);


