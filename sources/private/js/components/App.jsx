// libraries
import React from '~/react';
import ReactMarkdown from '~/react-markdown';

// components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// export
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      text: "Edit me!",
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
                <Form.Control className="p-4" as="textarea" onChange={this.handleChange}/>
              </div>
              <div className="col col-12 col-md-6 col-preview">
                <ReactMarkdown className="p-4" source={this.state.text} />
              </div>
            </div>
          </Card>
        </div>
      </main>
    );
  }
}