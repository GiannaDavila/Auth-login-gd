import { Button, Form, Input, Layout } from 'antd'
const { Item } = Form
const { Password } = Input

export default function Login() {
    const handleFormSubmit =(values) => {
        console.log("Success:", values)
    }
    return (
        <Layout.Content style={{ padding: '50px' }}>
            <h1>Login</h1>
            <Form OnFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{pan:18}}>
                <Item label="Email" name="email" rules={[{
                    required: true,
                    message: '* Email Required *'
                }]}>
                    <Input/>
                </Item>
                <Item label="Password" name="password" rules={[{
                    required: true,
                    message: '* Password Required *'
                }]}>
                    <Password></Password>
                </Item>
                <Item wrapperCol={{ span: 16, offset: 8 }}>
                    <Button type="primary" htmlType="submit">Login</Button>
                </Item>
                </Form>
        </Layout.Content>
    )
}