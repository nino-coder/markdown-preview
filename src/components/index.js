import React,{Component} from 'react'
import Editor from './Editor'
import ToolBar from './Toolbar'
import Preview from './Preview'
import marked from 'marked'
export default class Markdown extends Component{
    
    constructor(props) {
        super(props);
        this.state =  {
          markdown: placeholder,
          editorMax: false,
          previewMax: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleEditorMax = this.handleEditorMax.bind(this);
        this.handlePreviewMax = this.handlePreviewMax.bind(this);
      }
    
      handleChange(e) {
        this.setState({
          markdown: e.target.value
        });
      }
      handleEditorMax() {
        this.setState({
          editorMax: !this.state.editorMax
        });
      }
      handlePreviewMax() {
        this.setState({
          previewMax: !this.state.previewMax
        });
      }
      
    render(){
        const icon=this.state.editorMax?'fa fa-compress': 'fa fa-arrows-alt'
        const icon1=this.state.previewMax?'fa fa-compress': 'fa fa-arrows-alt'
        return(
            <div class="container">
                <div id="editorContainer">
                <ToolBar icon={icon} onClick={this.handleEditorMax} name="Editor"></ToolBar>
                <Editor  
                    markdown={this.state.markdown} 
                    onChange={this.handleChange}>
                </Editor>
            </div>
            <div id="previewContainer">
                <ToolBar icon={icon1} onClick={this.handlePreviewMax} name="Previewer"></ToolBar>
                <Preview  markdown={this.state.markdown} >
                </Preview>
            </div>
        </div>
        );
    }
}

  const placeholder=
  `# Welcome to my React Markdown Previewer!

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
  
  ![React Logo w/ Text](https://goo.gl/Umyytc)
  `
