import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'pc',
  // 这个值在 appts 中被 getKeepAlive 修改
  keepalive: [/./],
  theme: {},
  antd: {},
});
