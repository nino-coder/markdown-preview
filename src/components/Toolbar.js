import React,{Component} from 'react'
import './styles.scss'
export default class ToolBar extends Component{
    render(){
        return(
            <div className="toolbar">
                <i title="no-stack-dub-sack" className="fa fa-free-code-camp"/>      
                {this.props.name}
                <i onClick={this.props.onClick} className={this.props.icon}></i>
            </div>
        );
    }
} 