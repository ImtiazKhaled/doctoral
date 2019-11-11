import React from 'react'
import { Form, Input, Select, Button, DatePicker } from 'antd';
const { MonthPicker } = DatePicker;
const Option = { Select }

class StudentForm extends React.Component {
    state = {
        teachers: []
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {

                const student = {
                    FName: values.FName,
                    LName: values.LName,
                    Type: values.Type,
                    Supervisor: values.Supervisor,
                    StYear: values.Start.format('YYYY'),
                    StSem: values.Start.format('MMM')
                }

                fetch('http://hughboy.com:9875/student', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(student)
                }).then(response => {
                    console.log(response)
                })
                    .catch(error => {
                        console.log(error)
                    })
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
                <Form.Item label="First Name">
                    {getFieldDecorator('FName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your First Name!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Last Name">
                    {getFieldDecorator('LName', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Last Name!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Type">
                    {getFieldDecorator('Type', {
                        rules: [{ required: true, message: 'Please select your Instructor!' }],
                    })(
                        <Select
                            onChange={this.handleSelectChange}
                        >
                            <Select.Option value="SELFSUPPORT">Self-Support</Select.Option>
                            <Select.Option value="GTA">GTA</Select.Option>
                            <Select.Option value="GRA">GRA</Select.Option>
                            <Select.Option value="SCHOLARSHIPSUPPORT">Scholarship-Support</Select.Option>
                        </Select>
                    )}
                </Form.Item>
                <Form.Item label="Start Date">
                    {getFieldDecorator('Start', {
                        rules: [{ type: 'object', required: true, message: 'Please select time!' }],
                    })(<MonthPicker />)}
                </Form.Item>
                <Form.Item label="Supervisor">
                    {getFieldDecorator('Supervisor', {
                        rules: [{ required: true, message: 'Please select your Instructor!' }],
                    })(
                        <Select
                            onChange={this.handleSelectChange}
                        >
                            <Select.Option value="AD4267"> Andrea Delgado </Select.Option>
                            <Select.Option value="AO1290"> Asu Ozdaglar </Select.Option>
                            <Select.Option value="AO5671"> Adegoke Olubummo </Select.Option>
                            <Select.Option value="AS2348"> Ahmed Sarhan </Select.Option>
                            <Select.Option value="BL9856"> Barbara Liskov </Select.Option>
                            <Select.Option value="CA2876"> Corey Ashley </Select.Option>
                            <Select.Option value="CC8908"> Carlos Castillo </Select.Option>
                            <Select.Option value="DP6712"> David Patterson </Select.Option>
                            <Select.Option value="HY1945"> Henry Yuen </Select.Option>
                            <Select.Option value="RB1897"> Ravindran Balaraman </Select.Option>
                            <Select.Option value="SB2561"> Sanghamitra Bandyopadhyay </Select.Option>
                            <Select.Option value="XZ3456"> Xia Zhou </Select.Option>
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

const FormStudent = Form.create({ name: 'register' })(StudentForm)
export default FormStudent