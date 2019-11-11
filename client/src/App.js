import React from 'react'
import './App.css'
import { Tabs } from 'antd'
import PHDStudents from './tabs/phdstudents'



class App extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="PHD Students" key="1">
          <PHDStudents />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Instructors" key="2">
          Content of Tab Pane 2
      </Tabs.TabPane>
        <Tabs.TabPane tab="Courses" key="3">
          Content of Tab Pane 3
      </Tabs.TabPane>
      </Tabs>
    )
  }
}

export default App