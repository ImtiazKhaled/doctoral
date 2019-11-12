import React from 'react'
import { Form, Input, Select, Button, DatePicker } from 'antd';

class InstructorForm extends React.Component {
    state = {
        teachers: []
    }

    handleSubmit = e => {
        e.preventDefault();
        
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                
                console.log(this.props)
                
                // fetch('http://hughboy.com:9875/student', {
                //     method: 'POST',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify(student)
                // }).then(response => {
                //     console.log(response)
                // })
                //     .catch(error => {
                //         console.log(error)
                //     })
            }
        });
    };

    render() {


        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };


        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Instructor ID">
                    {getFieldDecorator('InstructorId', {}
                    )(<Input disabled placeholder={this.props.info.InstructorId} />)}
                </Form.Item>
                <Form.Item label="First Name">
                    {getFieldDecorator('FName', {}
                    )(<Input disabled placeholder={this.props.info.FName} />)}
                </Form.Item>
                <Form.Item label="Last Name">
                    {getFieldDecorator('LName', {}
                    )(<Input disabled placeholder={this.props.info.LName} />)}
                </Form.Item>
                <Form.Item label="Rank">
                    {getFieldDecorator('Rnk', {}
                    )(<Input disabled placeholder={this.props.info.Rnk} />)}
                </Form.Item>
                <Form.Item label="Degree">
                    {getFieldDecorator('Degree', {}
                    )(<Input disabled placeholder={this.props.info.Degree} />)}
                </Form.Item>
                <Form.Item label="Start Date">
                    {getFieldDecorator('StartDate', {}
                    )(<Input disabled placeholder={this.props.info.StartDate} />)}
                </Form.Item>
                <Form.Item label="Type">
                    {getFieldDecorator('NewType', {
                        rules: [{ required: true, message: 'Please select your new Type!' }],
                    })(
                        <Select
                            onChange={this.handleSelectChange}
                            initialValue="TT"
                        >
                            <Select.Option value="NTT">NTT</Select.Option>
                            <Select.Option value="TT">TT</Select.Option>
                            <Select.Option value="Adjunct">Adjunct</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}

const FormInstructor = Form.create({ name: 'register' })(InstructorForm)
export default FormInstructor