import React from 'react'
import { Table, Button, Modal } from 'antd'
import Formstudent from '../forms/studentForm'

class PHDStudents extends React.Component {
    state = {
        students: [],
        visible: false
    }

    columns = [
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
        {
            title:'Action', dataIndex: '', key:'operation', width:'32 % ', render: (text, record, index) =>
                {return <Button onClick={this.onDelete.bind(this, record)} icon='delete'/>}
        }
    ]


    showModal = () => {
        this.setState({
            visible: true,
        })
    }

    handleCancel = e => {
        console.log(e)
        this.setState({
            visible: false,
        })
    }

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
            )
    }

    onDelete(index){
        console.log(index)
    }

    render() {
        return (
            <div>
                <Button onClick={this.getStudents}>Get Students</Button>
                <Button onClick={this.showModal}>Add Student</Button>
                <Table 
                    columns={this.columns}
                    dataSource={this.state.students[0]}
                    pagination={false} />
                <Modal
                    title="Add Student"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <Formstudent />
                </Modal>
            </div>
        )
    }
}

export default PHDStudents