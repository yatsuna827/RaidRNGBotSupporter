import React, { Component } from 'react';
import IVsList from '../components/IVsList';
import FlawlessSelect from '../components/FlawlessSelect';

class SecondEntry extends Component{
    onClick = () => {
        const cont = [0,1,2,3,4,5].filter(_=>this.props.fix[_]===-1).map(_=>this.props.ivs[_]);
        this.props.onClick({"ivs": cont});
    }
    render(){
        return (
            <div>
                <p key={"anounce"}>{`${this.props.flawless===2 ? 1 : 4}日目の個体(2体目)を入力してください`}</p>
                <FlawlessSelect flawless={this.props.flawless} items={this.props.items} onChange={(e)=>{ this.props.onFlawlessChanged(e.target.value*1, e.target.selectedIndex); }} />
                <IVsList ivs={this.props.ivs} fix={this.props.fix} onChange={this.props.onIVsChanged} />
                <button key={"checker"} onClick={this.onClick}> 確認する </button>
            </div>
        );
    }
}

export default SecondEntry;