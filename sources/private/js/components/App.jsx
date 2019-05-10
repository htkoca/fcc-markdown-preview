// libraries
import React from '~/react';
import ReactMarkdown from '~/react-markdown';

// components
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

// variables
let defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)`

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
    function BlockQuote(props) {
      return <blockquote className="blockquote">{props.children}</blockquote>
    }
    function Table(props) {
      return <table className="table">{props.children}</table>
    }
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
                <ReactMarkdown id="preview" className="p-4" source={this.state.text} renderers={{table: Table, blockquote: BlockQuote}}/>
              </div>
            </div>
          </Card>
        </div>
      </main>
    );
  }
}