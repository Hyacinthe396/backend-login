import usersRoute from './usersRoute';
import express from 'express';

const app = express();

app.use('/user', usersRoute);

export default app;
