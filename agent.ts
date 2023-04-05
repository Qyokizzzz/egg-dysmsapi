import { Application } from 'egg';
import dysmsapi from './lib/dysmsapi';

export default (agent: Application) => {
  if (agent.config.dysmsapi.agent) dysmsapi(agent);
};
