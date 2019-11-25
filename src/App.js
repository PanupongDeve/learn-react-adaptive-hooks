import React from 'react';
import NetworkStatus from './components/NetworkStatus';
import SaveData from './components/SaveData';
import Panel from './components/Panel';
import CPUCores from './components/CPUCores';
import MemoryStatus from './components/MemoryStatus';
import Header from './components/Header';
import { Row, Col } from 'antd';
import './App.css';

function App() {
	return (
		<div className="App">
      <Row>
        <Col>
          <Header header="Device's User Status" />
        </Col>
      </Row>
			<Row>
				<Col span={12}>
					<Panel header="NetworkStatus">
						<NetworkStatus />
					</Panel>
				</Col>
				<Col span={12}>
					<Panel header="SaveData">
						<SaveData />
					</Panel>
				</Col>
        <Col span={12}>
					<Panel header="CpuCore">
						<CPUCores />
					</Panel>
				</Col>
        <Col span={12}>
					<Panel header="CpuCore">
						<MemoryStatus />
					</Panel>
				</Col>
			</Row>
		</div>
	);
}

export default App;
