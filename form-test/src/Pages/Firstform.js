import React from 'react'
import { Form, Input, Button, Checkbox,ConfigProvider } from 'antd';
import Size from '../Components/Size';

export default function Firstform() {
    
const [componentSize, setComponentSize] = React.useState('large');
      
const onFormLayoutChange = ({ sizes }) => {
    // console.log(size);
    
    setComponentSize(sizes);
};
React.useEffect(() => {
    // Update the document title using the browser API
    console.log(componentSize);
    
   
  },[componentSize]);

  const validateMessages = {
    required: "india is required!",
    // ...
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };
  

    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };


    return (
        <div style={{margin:'30px' }}>
            {/* <Size componentSize={componentSize} 
            onFormLayoutChange={onFormLayoutChange} 
            /> */}
        <ConfigProvider form={{ validateMessages }}>
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </ConfigProvider>

        </div>
    )
}
