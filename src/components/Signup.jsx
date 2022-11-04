import { Button, Form, Input, Layout } from 'antd'
const { Item } = Form
const { Password } = Input

export default function Signup({ setUser }) {
    const handleFormSubmit =(values) => {
        console.log("Success:", values)
        fetch('http://localhost:3030/users', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify(values)
        })
        .then(response => response.json())
        .then(setUser)
        .catch(alert)
    }
    return (
        <Layout.Content style={{ padding: '50px' }}>
            <h1>Signup</h1>
            <Form onFinish={handleFormSubmit} labelCol={{ span: 8 }} wrapperCol={{pan:18}}>
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
                    <Button type="primary" htmlType="submit">Signup</Button>
                </Item>
                </Form>
        </Layout.Content>
    )
}