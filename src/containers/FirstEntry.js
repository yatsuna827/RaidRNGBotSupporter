import React, { Component } from 'react';
import IVsList from '../components/IVsList';
import FlawlessSelect from '../components/FlawlessSelect';
import IVPuzzleChecker from '../components/IVPuzzleChecker';

class FirstEntry extends Component{
    onClick = () => {
        const ic = new IVPuzzleChecker(this.props.ivs);
        const res = ic.check(this.props.flawless);
        
        this.props.onClick(res);
    }
    render(){
        return (
            <div>
                <p key={"anounce1"}>{`${this.props.flawless===1 ? 1 : 4}日目の個体(1体目)を入力してください`}</p>
                <FlawlessSelect flawless={this.props.flawless} items={this.props.items} onChange={(e)=>{this.props.onFlawlessChanged(e.target.value*1)}} />
                <IVsList ivs={this.props.ivs} onChange={this.props.onIVsChanged} />
                <button key={"checker"} onClick={this.onClick}> 確認する </button>
            </div>
        );
    }
}

export default FirstEntry;