import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  // .sign method takes in an Obj{payload}, SECRET, options. -> in this case it's expiration for the token.
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
