import React from 'react'
import './App.css'
import { Tabs } from 'antd'
import PHDStudents from './tabs/phdstudents'
import Instructor from './tabs/instructor'


class App extends React.Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="PHD Students" key="1">
          <PHDStudents />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Instructors" key="2">
          <Instructor />
        </Tabs.TabPane>
      </Tabs>
    )
  }
}

export default App