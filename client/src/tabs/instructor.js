import React from 'react'
import { Table, Button } from 'antd'

const columns = [
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
]

class Instructor extends React.Component {

    state = {
        instructors: []
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
            );
    }

    render() {
        console.log(this.state.instructors)
        return (
            <div>
                <Button onClick={this.getStudents}>Get Instructors</Button>
                <Table rowKey={instructor => instructor.InstructorId} columns={columns} dataSource={this.state.instructors[0]} pagination={false} />
            </div>
        )
    }
}

export default Instructor