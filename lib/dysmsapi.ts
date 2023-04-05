import { Application } from 'egg';
import { EggAppConfig, PowerPartial } from 'egg';
import Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import { Config } from '@alicloud/openapi-client';
import assert from 'assert';

export default (app: Application) => {
  app.addSingleton('dysmsapi', createClient);
};

function createClient(config: PowerPartial<EggAppConfig>, app: Application) {
  const { accessKeyId, accessKeySecret, endpoint } = config;
  assert(
    accessKeyId && accessKeySecret,
    '[egg-dysmsapi] Must set `accessKeyId` and `accessKeySecret` in dysmsapi\'s config',
  );

  const dysmsapiConfig = new Config({
    accessKeyId,
    accessKeySecret,
    endpoint,
  });

  app.beforeStart(() => {
    app.coreLogger.info(
      '[egg-dysmsapi] init instance success',
    );
  });

  return new Dysmsapi20170525(dysmsapiConfig);
}
