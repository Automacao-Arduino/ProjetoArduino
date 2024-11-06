import React from 'react';
import { Button, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';

// Criando estilos personalizados para o botão com gradiente
const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      border-width: 0;
      > span {
        position: relative;
      }
      &::before {
        content: '';
        background: linear-gradient(135deg, #6253e1, #04befe);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }
      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const AntButton: React.FC = () => {

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#6253e1' } }}>
      <Space>
        <Button type="primary" className='bg-gradient-to-r from-cyan-500 to-blue-500' >
          botão com cor degrade
        </Button>
      </Space>
    </ConfigProvider>
  );
};

export default AntButton;
