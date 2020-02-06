import React, { Component } from 'react';
import IVsList from '../components/IVsList';
import FlawlessSelect from '../components/FlawlessSelect';

class SecondEntry extends Component{
    constructor(props){
        super(props);
        this.state = {
            flawless: this.props.items[0],
            fix: this.props.fix[0],
            ivs: this.props.fix[0].map(_=>!_ ? 0 : _),
        };
        this.items = this.props.items;
        this.onClick=this.onClick.bind(this);
    }
    onClick(){
        const cont = [0,1,2,3,4,5].filter(_=>this.state.fix[_]===false).map(_=>this.state.ivs[_]);
        this.props.onClick({"ivs": cont});
    }
    render(){
        return (
            <div>
                <p key={"anounce"}>{`${this.state.flawless===2 ? 1 : 4}日目の個体(2体目)を入力してください`}</p>
                <FlawlessSelect flawless={this.state.flawless} items={this.items} onChange={(e)=>{this.setState({flawless: e.target.value*1, fix: this.props.fix[e.target.selectedIndex]})}} />
                <IVsList ivs={this.state.ivs} fix={this.state.fix} onChange={(ivs)=>{this.setState({ivs: ivs})}} />
                <button key={"checker"} onClick={this.onClick}> 確認する </button>
            </div>
        );
    }
}

export default SecondEntry;