import logo from './logo.svg';
import { List, Space } from 'antd';
import React from 'react';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Switch } from 'antd';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    const id = 'antd-staubli-toggle';
    this.state = {
      loading: true,
      id: id,
      taskIdRequestData: `${id}-requestData`,
      data: [],
    };
    window.addEventListener("message", this.onMessageReceived, false);
    this.requestData();
  }

  onMessageReceived = event => {
    if (event.data.taskId === this.state.taskIdRequestData) this.update(event);
  };

  requestData = () => {
    window.parent.postMessage({
      iframe: this.state.id,
      taskId: this.state.taskIdRequestData,
      query: [{
        api: '/api/rd/v1/Configurator',
        function: 'getModel',
        arguments: [{
          'fakekey': 'fakevalue'
        }]
      }],
      response: [],
      status: 'request'
    }, "https://eusb.webcomcpq.com/");
  };

  update = event => {
    // prepare data
    let model = event.data.response.find(r => r.api === '/api/rd/v1/Configurator' && r.function === 'getModel');

    // update state if data available
    this.setState({
      loading: false,
      data: model.data
    });
  };

  changeHandler = (checked, item, innerItem) => {
    // innerItem.Selected = checked;
    this.state.data.Attributes.find(a => a == item).Values.find(v => v == innerItem).Selected = checked;
    this.setState({
      loading: false,
      data: this.state.data
    });
    window.parent.postMessage({
      runScript: true,
      script: `cpq.models.configurator.attributes().find(a => a.id() == ${item.PA_ID}).values().find(v => v.pavId == ${innerItem.PAV_ID}).selected(${checked});`
    }, "https://eusb.webcomcpq.com/");
    // this.requestData();
  }

  render() {
    return (

      // this.state.data.Attributes[].Values[].ValueDisplay

      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={{'height': '100px'}}/>
        </header> */}
        <div className="App-content">
          {this.state.loading &&
            <span>loading data...</span>
          }
          {!this.state.loading &&
            <List dataSource={this.state.data.Attributes} grid={{ gutter: 0, column: 1 }}
              renderItem={item => (
                <List dataSource={item.Values} grid={{ gutter: 0, column: 4 }} header={item.Label}
                  renderItem={inneritem => (
                    <List.Item>
                      <Switch checkedChildren={inneritem.ValueDisplay} unCheckedChildren={inneritem.ValueDisplay} checked={inneritem.Selected} onChange={checked => { this.changeHandler(checked, item, inneritem) }} />
                    </List.Item>
                  )}
                />
              )}
            />
          }
          {/* { !this.state.loading && 
            <List dataSource={[...this.state.data.Attributes[0].Values, ...this.state.data.Attributes[1].Values, ...this.state.data.Attributes[2].Values]} 
            grid={{ gutter: 0, column: 3 }} renderItem={item => (
                <List.Item>
                  <Switch checkedChildren={item.ValueDisplay} unCheckedChildren={item.ValueDisplay} className={this.state.data.Attributes.find(x => x.Values.includes(item)).Name.replace(/ /g, '')}/>
                </List.Item>
              )}
            />
          } */}
        </div>
      </div>
    );
  }
}

export default App;
