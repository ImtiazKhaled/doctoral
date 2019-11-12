import React from 'react'
import { Table, Button, Modal } from 'antd'
import FormInstructor from '../forms/instructorForm'

class Instructor extends React.Component {

    columns = [
        {
            title: 'Instructor ID',
            dataIndex: 'InstructorId',
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
            title: 'Rank',
            dataIndex: 'Rnk',
        },
        {
            title: 'Degree',
            dataIndex: 'Degree',
        },
        {
            title: 'Type',
            dataIndex: 'Type',
        },
        {
            title: 'Start Date',
            dataIndex: 'StartDate',
        },
        {
            title: 'Action', dataIndex: '', key: 'operation', width: '32 % ', render: (text, record, index) => { return <Button onClick={this.onEdit.bind(this, record)} icon='edit' /> }
        }
    ]

    state = {
        instructors: [],
        instructor_to_edit: {},
        visible: false
    }

    showModal = () => {
        this.setState({
            visible: true,
        })
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        })
    }
    onEdit = e => {
        this.showModal()
        this.setState({
            instructor_to_edit: e
        })
    }

    getStudents = e => {
        fetch('http://hughboy.com:9875/instructors')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    instructors: [
                        ...this.state.instructors,
                        data,
                    ]
                })
            )
    }

    render() {
        return (
            <div>
                <Button onClick={this.getStudents}>Get Instructors</Button>
                <Table
                    rowKey={instructor => instructor.InstructorId}
                    columns={this.columns}
                    dataSource={this.state.instructors[0]}
                    pagination={false} />
                <Modal
                    title="Edit Instructor"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <FormInstructor info={this.state.instructor_to_edit} />
                </Modal>
            </div>
        )
    }
}

export default Instructor