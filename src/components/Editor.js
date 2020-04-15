import React,{Component} from 'react'

export default class Editor extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <textarea id="editor"
            value={this.props.markdown}
            onChange={this.props.onChange}
            type="text"/>
        );
    }
}