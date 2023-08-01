import '@/modified.css';
import { Button, ConfigProvider } from 'antd';

import { useState } from 'react';
function insertRules(id, rules) {
  const style = document.createElement('style');
  style.id = id;
  document.head.appendChild(style);
  style.innerHTML = rules;
  return style;
}
export default () => {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(true);
  return (
    <ConfigProvider prefixCls="pcfactory">
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
          insertRules(
            '12312',
            `.purple-theme
              {
               --pcfactory-primary-color: #a062d4;
               --pcfactory-primary-color-hover: #c89deb;
             }
             .purple-theme1
              {
               --pcfactory-primary-color: red;
               --pcfactory-primary-color-hover: red;
             }
             .title{
              color: blue
             }`,
          );
        }}
      >
        注入
      </Button>
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
         setIsRed(!isRed)
        }}
      >
        切换
      </Button>
      <div >
        <h1 className='title'>antd</h1>
        <div>
          {Math.random()}
          <Button
            type="primary"
            className=
            {isRed?"purple-theme":"purple-theme1"}
            block
            size="large"
            onClick={() => setCount(count + 1)}
          >
            点我计数加1134 {count}
          </Button>
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
