import { Application } from 'egg';
import dysmsapi from './lib/dysmsapi';

export default (app: Application) => {
  if (app.config.dysmsapi.app) dysmsapi(app);
};
