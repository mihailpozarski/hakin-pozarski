import { useState } from 'react';
import { Form, Input, Button } from 'antd';


// Form That recieves the data of the buyer, such as name, email, address, etc.
const CartForm = ({ onSubmit }) => {
    const [form] = Form.useForm();
    const [checkoutEnabled, setCheckoutEnabled] = useState(true);

    const onCheckout = () => {
        onSubmit(form.getFieldsValue());
        form.resetFields();
    };

    const disableCheckoutButton = () => {
        setCheckoutEnabled(
            form.getFieldsError().some(field => field.errors.length)
        );
    };



    return (
        <>
            <h1>Delivery information</h1>
            <Form
                form={form}
                layout="vertical"
                name="form"
                onFinish={onCheckout}
                onFieldsChange={disableCheckoutButton}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[{ required: true, message: 'Please input your name!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[{ required: true, message: 'Please input your e-mail!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="email2"
                    label="E-mail confirmation"
                    dependencies={['email']}
                    rules={[
                        { required: true, message: 'Please input your e-mail!' },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('email') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two e-mails do not match!');
                            },
                        })]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="address"
                    label="Address"
                    rules={[{ required: true, message: 'Please input your address!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" disabled={checkoutEnabled}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
}

export default CartForm
