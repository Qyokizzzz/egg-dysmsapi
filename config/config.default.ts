import { EggAppConfig, PowerPartial } from 'egg';

export default () => {
  const config = {} as PowerPartial<EggAppConfig>;

  config.dysmsapi = {
    app: true,
    agent: false,
  };
  return {
    ...config,
  };
};
