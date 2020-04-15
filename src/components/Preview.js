import React,{Component}from 'react'
import marked from 'marked'
export default class Preview extends Component{
    render(){
        return(
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(this.props.markdown, { renderer: renderer })}}/>
        );
    }
}
marked.setOptions({
    breaks: true,
  });
  
  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}` + '</a>';
  }
  