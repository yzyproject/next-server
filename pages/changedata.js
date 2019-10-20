import React from 'react';
export default class changdata extends React.Component {
    constructor(){
        super();
        this.state = {
            name:"yzy"
        };
    }
    changedata(){
        this.setState({name:"yzyclickchange"})
    }
    render (){
        return (
            <div>
                <div>{this.state.name}</div>
                <div onClick={()=>{this.changedata()}}>change</div>
            </div>
        )
    }
}