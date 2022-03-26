import express from 'express';
import mongoose from 'mongoose';
import MongooseAdapter from '@admin-bro/mongoose';

import AdminBro from 'admin-bro';
import AdminBroExpress from '@admin-bro/express';
import '@admin-bro/mongoose';

import path from 'path';
import './mongoose/article-model';
import './mongoose/admin-model';
import './mongoose/point-model';
import init from './init';
import routers from './routers';

AdminBro.registerAdapter(MongooseAdapter);

const start = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost:27017/test', {});
  // Remove comment to first start
  // init();

  const app = express();

  const adminBro = new AdminBro({
    databases: [connection],
    rootPath: '/admin'
  });
  const router = AdminBroExpress.buildRouter(adminBro);

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../views'));
  app.use(adminBro.options.rootPath, router);

  app.use(express.static(path.join(__dirname, '../public')));

  app.use('/', routers);

  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`AdminBro is under localhost:${port}/admin`));
};

start();
