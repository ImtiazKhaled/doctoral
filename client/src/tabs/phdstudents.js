import React from 'react'
import { Table, Button, Modal } from 'antd'
import StudentForm from '../forms/studentForm'

const columns = [
    {
        title: 'Student ID',
        dataIndex: 'StudentId',
    },
    {
        title: 'First Name',
        dataIndex: 'FName',
    },
    {
        title: 'Last Name',
        dataIndex: 'LName',
    },
    {
        title: 'Start Semester',
        dataIndex: 'StSem',
    },
    {
        title: 'Start Year',
        dataIndex: 'StYear',
    },
    {
        title: 'Milestone ID',
        dataIndex: 'MId',
    },
    {
        title: 'Pass Date',
        dataIndex: 'PassDate',
    },
]

class PHDStudents extends React.Component {

    state = {
        students: [],
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    getStudents = e => {
        fetch('http://hughboy.com:9875/students')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    students: [
                        ...this.state.students,
                        data,
                    ]
                })
            );
    }

    addStudent = e => {

    }

    render() {
        return (
            <div>
                <Button onClick={this.getStudents}>Get Students</Button>
                <Button onClick={this.showModal}>Add Student</Button>
                <Table columns={columns} dataSource={this.state.students[0]} pagination={false} />
                <Modal
                    title="Add Student"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                <StudentForm />       
                </Modal>
            </div>
        )
    }
}

export default PHDStudents