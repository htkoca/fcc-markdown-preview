// libraries
import React from '~/react';
import marked from '~/marked';

// components
import Card from '~/react-bootstrap/Card';
import Form from '~/react-bootstrap/Form';

// variables
import { defaultText } from '@/js/defaultState.js';
marked.setOptions({
  breaks: true
});

// export
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: defaultText
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (evt) {
    this.setState({ 
      text: evt.target.value,
    });
  }
  render() {
    return (
      <main id='main' className='py-4'>
        <div className='container'>
          <Card>
            <Card.Header>Markdown Previewer</Card.Header>
            <div className="row no-gutters">
              <div className="col col-12 col-md-6 col-input">
                <Form.Control id="editor" className="p-4" as="textarea" value={this.state.text} onChange={this.handleChange}/>
              </div>
              <div className="col col-12 col-md-6 col-preview">
                <div id="preview" className="p-4" dangerouslySetInnerHTML={{__html: marked(this.state.text)}}/>
              </div>
            </div>
          </Card>
        </div>
      </main>
    );
  }
}