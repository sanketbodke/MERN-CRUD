import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Spinner = () => (
    <Spin
        indicator={
            <LoadingOutlined
                style={{
                    fontSize: 18,
                    color: '#ffffff',
                    marginLeft: '10px'
                }}
                spin
            />
        }
    />
);
export default Spinner;