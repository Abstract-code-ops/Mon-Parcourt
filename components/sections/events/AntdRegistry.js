'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider } from 'antd';

export default function AntdRegistry({ children }) {
  return (
    <StyleProvider hashPriority="high">
      <ConfigProvider
        theme={{
          token: {
            // You can customize Ant Design theme here
            colorPrimary: 'var(--main-color)', // Match the main theme color
            borderRadius: 8,
            fontSize: 16,
          },
        }}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  );
}
