import { Button, ConfigProvider } from 'antd';

import { useState } from 'react';
let lessNodesAppended = false;

export default () => {
  const [count, setCount] = useState(0);
  return (
    <ConfigProvider>
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
          function buildIt() {
            if (!window.less) {
              return;
            }
            setTimeout(() => {
              window.less.modifyVars({
                '@primary-color': 'red',
              });
            }, 200);
          }
          if (!lessNodesAppended) {
            // insert less.js and color.less
            const lessStyleNode = document.createElement('link');
            const lessConfigNode = document.createElement('script');
            const lessScriptNode = document.createElement('script');
            lessStyleNode.setAttribute('rel', 'stylesheet/less');
            lessStyleNode.setAttribute('href', '/color.less');
            lessConfigNode.innerHTML = `
              window.less = {
                async: true,
                env: 'production',
                javascriptEnabled: true
              };
            `;
            lessScriptNode.src =
              'https://gw.alipayobjects.com/os/lib/less.js/3.8.1/less.min.js';
            lessScriptNode.async = true;
            lessScriptNode.onload = () => {
              buildIt();
              lessScriptNode.onload = null;
            };
            document.body.appendChild(lessStyleNode);
            document.body.appendChild(lessConfigNode);
            document.body.appendChild(lessScriptNode);
            lessNodesAppended = true;
          } else {
            buildIt();
          }
        }}
      >
        切换
      </Button>
      <div>
        <h1>antd</h1>
        <div>
          {Math.random()}
          <Button
            type="primary"
            className="purple-theme"
            block
            size="large"
            onClick={() => setCount(count + 1)}
          >
            点我计数加1134 {count}
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
};
