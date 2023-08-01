import { Button, ConfigProvider } from 'antd';
import { useRef, useState } from 'react';
import { compile, stringify, serialize } from 'stylis';

function normalizeCSS(css: string, selector: string) {
  if (!selector) return css;
  const compiled = compile(`${selector} {${css}}`);
  return serialize(compiled, stringify);
}

function insertRules(id: string, rules: string, selector = document.head) {
  if (document.getElementById(id)) {
    const style = document.getElementById(id);
    style!.innerHTML = rules;
  } else {
    const style = document.createElement('style');
    style.id = id;
    (selector ?? document.head).appendChild(style);
    style.innerHTML = rules;
  }
}

export default () => {
  const [count, setCount] = useState(0);
  const [isRed, setIsRed] = useState(false);
  const [show, setShow] = useState(true);
  const ref = useRef();
  return (
    <ConfigProvider>
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
          const css = `.ant-btn-primary {
            border-color: red;
            background: red;
            .ant-btn-primary1 {
              border-color: red;
              background: red;
            }
            .ant-btn-primary2 {
              border-color: red;
              background: red;
            }
          }
          
          `;
          const a = normalizeCSS(css, '#purple-theme');
          console.log(a);
          insertRules('12312', a, ref.current);
        }}
      >
        注入(模拟预览，只有部分生效)
      </Button>
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
          const css = `.ant-btn-primary {
            border-color: green;
            background: green;
          }`;
          const a = normalizeCSS(css, '.purple-theme');
          insertRules('12312', a, ref.current);
        }}
      >
        重复注入，覆盖，指定 class 有效
      </Button>
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
          setIsRed(!isRed);
        }}
      >
        切换
      </Button>
      <Button
        type="primary"
        block
        size="large"
        onClick={() => {
          setShow(!show);
        }}
      >
        隐藏
      </Button>
      <div>
        <h1 className="title">antd</h1>
        <div className={isRed ? 'purple-theme' : ''}>
          {Math.random()}
          <Button
            type="primary"
            block
            size="large"
            onClick={() => setCount(count + 1)}
          >
            点我计数加1134 {count}
          </Button>
          {show && (
            <div id="purple-theme" ref={ref}>
              <Button
                type="primary"
                block
                size="large"
                onClick={() => setCount(count + 1)}
              >
                点我计数加1134 {count}
              </Button>
            </div>
          )}
        </div>
      </div>
    </ConfigProvider>
  );
};
