const crypto = require('crypto');

// 1. Hashing a String (SHA-256)

const data = "Hello, World!";
const hash = crypto.createHash('sha256').update(data).digest('hex');

console.log(`SHA-256 Hash: ${hash}`);

// createHash: Creates a hash object.
// update: Adds data to hash.
// digest('hex'): Outputs the hash in hexadecimal format.

// 2. HMAC (Hash-based Message Authentication Code)

const secretKey = 'my_secret_key';
const data1 = "Message to hash";

const hmac = crypto.createHmac('sha256', secretKey).update(data1).digest('hex');
console.log(`HMAC: ${hmac}`);

// 3. Generating Random Bytes

crypto.randomBytes(16, (err, buffer) => {
  if (err) throw err;
  console.log(`Random Bytes: ${buffer.toString('hex')}`);
});

// 4. Password Encryption (Using crypto.pbkdf2)

const password = 'my_password';
const salt = crypto.randomBytes(16).toString('hex');

crypto.pbkdf2(password, salt, 1000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(`Salt: ${salt}`);
  console.log(`Encrypted Password: ${derivedKey.toString('hex')}`);
});

