import Client from '@alicloud/dysmsapi20170525';

interface GlobalParameters {
  headers?: {
    [key: string]: string;
  };
  queries?: {
      [key: string]: string;
  };
}

interface Config {
  accessKeyId?: string;
  accessKeySecret?: string;
  securityToken?: string;
  protocol?: string;
  method?: string;
  regionId?: string;
  readTimeout?: number;
  connectTimeout?: number;
  httpProxy?: string;
  httpsProxy?: string;
  credential?: Credential;
  endpoint?: string;
  noProxy?: string;
  maxIdleConns?: number;
  network?: string;
  userAgent?: string;
  suffix?: string;
  socks5Proxy?: string;
  socks5NetWork?: string;
  endpointType?: string;
  openPlatformEndpoint?: string;
  type?: string;
  signatureVersion?: string;
  signatureAlgorithm?: string;
  globalParameters?: GlobalParameters;
  key?: string;
  cert?: string;
  ca?: string;
}

interface DysmspiOptions extends Config {
  signName: string;
  templateCode: string;
}

type Singleton<T> = {};

type Dysmspi = Client;

interface EggDysmspiOptions {
  default?: object;
  app?: boolean;
  agent?: boolean;
  client: DysmspiOptions;
  clients?: Record<string, DysmspiOptions>;
}

declare module 'egg' {
  interface Application {
    dysmsapi: Dysmspi & Singleton<Dysmspi>;
  }

  interface EggAppConfig {
    dysmsapi: EggDysmspiOptions;
  }
}
