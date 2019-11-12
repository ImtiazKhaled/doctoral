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

    getInstructors = e => {
        fetch('http://hughboy.com:9875/instructors')
            .then(response => response.json())
            .then(data =>
                this.setState({
                    instructors: data
                })
            )
    }

    render() {
        return (
            <div>
                <Button onClick={this.getInstructors}>Get Instructors</Button>
                <Table
                    rowKey={instructor => instructor.InstructorId}
                    columns={this.columns}
                    dataSource={this.state.instructors}
                    pagination={false} />
                <Modal
                    title="Edit Instructor"
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                >
                    <FormInstructor
                        info={this.state.instructor_to_edit}
                        editInstructor={(props) => {
                            const body = {
                                ToType: props.NewType,
                                InstructorId: this.state.instructor_to_edit.InstructorId,
                                FromType: this.state.instructor_to_edit.Type
                            }
                            fetch('http://hughboy.com:9875/instructor', {
                                method: 'PATCH',
                                headers: {
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(body)
                            }).then(response => {
                                fetch('http://hughboy.com:9875/instructors')
                                    .then(response => response.json())
                                    .then(data =>
                                        this.setState({
                                            instructors: data,
                                            visible: false
                                        })
                                    )
                            })
                                .catch(error => {
                                    console.log(error)
                            })
                        }}
                    />
                </Modal>
            </div>
        )
    }
}

export default Instructor