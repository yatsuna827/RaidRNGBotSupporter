import React, { Component } from 'react';
import IVPuzzleChecker from '../components/IVPuzzleChecker';
import IVsCheckContainer from '../containers/IVsCheckContainer'

class FirstEntry extends Component{
    constructor(props){
        super(props);
        this.state = {
            flawless: 2,
            ivs: [4,27,0,31,16,31],
        };
        this.onClick=this.onClick.bind(this);
        this.onIVsChanged=this.onIVsChanged.bind(this);
    }
    onIVsChanged(ivs,flawless){
        this.setState({ivs: ivs, flawless: flawless});
    }
    onClick(){
        const ic = new IVPuzzleChecker(this.state.ivs);
        const res = ic.check(this.state.flawless);
        
        this.props.onClick(res);
    }
    render(){
        return (
            <div>
                <p key={"anounce1"}>{`${this.state.flawless===1 ? 1 : 4}日目の個体(1体目)を入力してください`}</p>
                <IVsCheckContainer key={"first"} items={[1,2,3]} ivs={this.state.ivs} flawless={this.state.flawless} onChange={this.onIVsChanged} />
                <button key={"checker"} onClick={this.onClick}> 確認する </button>
                <p style={{whiteSpace: 'pre-line'}} key={"message"}>{this.props.message}</p>
            </div>
        );
    }
}

export default FirstEntry;