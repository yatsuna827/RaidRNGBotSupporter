import React, { Component } from 'react';
import FirstEntry from '../containers/FirstEntry';
import SecondEntry from '../containers/SecondEntry';
import AdditionalEntry from '../containers/AdditionalEntry';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            IVs: { "first": [4,27,0,31,16,31], "second": [], "third": [31,0,0,0,0,0], "fourth": [31,0,0,0,0,0] },
            Flawless: { "first": 2, "second": 1, "third": 1, "fourth": 1 },
            IVsSeries:[],
            firstflaw: [],
            seconditems:[],
            secondFix:[], 
            selectedSecondFix: [],
            command: "",
            message: "",
            inputSecond: false,
            currentFlawless: 2,
        }
    }
    getresult = () => {
        return "連続する個体値列: " + this.state.IVsSeries.join(" ");
    }
    getcommand = () => {
        if(!this.checkThird()) return "5日目の個体値が不正です";
        if(!this.checkFourth()) return "6日目の個体値が不正です";
        const command = [];
        command.push("!seed");
        command.push(this.state.IVs.first.join(" "));
        if(this.state.Flawless.first !== 1 || this.state.inputSecond){
            command.push(this.state.IVs.second.join(" "));
            command.push(this.state.Flawless.second);
        }
        command.push(this.state.IVs.third.join(" "));
        command.push(this.state.Flawless.third);
        command.push(this.state.IVs.fourth.join(" "));
        command.push(this.state.Flawless.fourth);
        return command.join(" ");
    }
    checkFirst = (res) => {
        this.setState({message: res.message, IVsSeries: res.flawivs, currentFlawless: this.state.Flawless.first, firstflaw: res.flawivs, command: "", inputSecond: this.state.Flawless.first===1&&(res.options[0]===false) });

        const fix = res.options.map(_=>_.ivs);
        const selected = fix[0] || Array(6).fill(-1);
        this.updateIVs("second", selected.map(_=>_===-1 ? 0 : _));

        const items = res.options.map(_=>_.flawless);
        this.updateFlawless("second", items[0] || 1);

        this.setState({seconditems: items, secondFix: fix, selectedSecondFix: selected});
    }
    checkSecond = (res) => {
        const series = this.state.firstflaw.slice().concat(res.ivs);
        this.setState({IVsSeries: series, command: ""});
        this.updateFlawless("third", this.state.Flawless.first===1 ? 1 : 2);
        this.updateFlawless("fourth", this.state.Flawless.first===1 ? 1 : 2);
    }
    checkThird = () => { return this.state.IVs.third.filter(_=>_===31).length >= this.state.Flawless.third; }
    checkFourth = () => { return this.state.IVs.fourth.filter(_=>_===31).length >= this.state.Flawless.fourth; }
    updateIVs = (key, ivs) =>{
        const x = this.state.IVs;
        x[key] = ivs;
        this.setState({IVs: x});
    }
    updateFlawless = (key, flawless) =>{
        const x = this.state.Flawless;
        x[key] = flawless;
        this.setState({Flawless: x});
    }
    onIVsChanged = (key) => (ivs) => { this.updateIVs(key, ivs); };
    onFlawlessChanged = (key) => (n) => { this.updateFlawless(key, n); };
    onFixUpdate = (i) => {
        const fix = this.state.secondFix[i];
        this.updateIVs("second", fix.map(_=>_===-1 ? 0 : _));
        this.setState({selectedSecondFix: fix});
    }
    render(){
        let renderItems = [];
        renderItems.push(<FirstEntry key="first" ivs={this.state.IVs.first} flawless={this.state.Flawless.first} items={[1,2,3]} onClick={this.checkFirst} onIVsChanged={this.onIVsChanged("first")} onFlawlessChanged={this.onFlawlessChanged("first")} />);
        renderItems.push(<p style={{whiteSpace: 'pre-line'}} key="message">{this.state.message}</p>);
        if(this.state.currentFlawless===1 && this.state.IVsSeries.length>=5 && this.state.seconditems[0]){
            renderItems.push(<input key="a" type="radio" checked={this.state.inputSecond} onChange={()=>this.setState({inputSecond: true})} />);
            renderItems.push(<label key="b" onClick={()=>this.setState({inputSecond: true})} >2体目を入力する</label>);
            renderItems.push(<input key="c" type="radio" checked={!this.state.inputSecond} onChange={()=>this.setState({inputSecond: false})} />);
            renderItems.push(<label key="d" onClick={()=>this.setState({inputSecond: false})} >2体目を入力しない</label>);
        }
        if(this.state.seconditems.length>0 && (this.state.currentFlawless!==1 || this.state.inputSecond)){
            renderItems.push(<SecondEntry 
                key={"second"} 
                ivs={this.state.IVs.second} 
                flawless={this.state.Flawless.second} 
                items={this.state.seconditems} 
                fix={this.state.selectedSecondFix} 
                onClick={this.checkSecond} 
                onIVsChanged={this.onIVsChanged("second")} 
                onFlawlessChanged={(f,i)=>{ this.onFlawlessChanged("second")(f); this.onFixUpdate(i); }}
            />);
        }
        if(this.state.IVsSeries.length>=(this.state.inputSecond ? 6 : 5)){
            renderItems.push(<p key={"resmessage"}>{this.getresult()}</p>);
            renderItems.push(<AdditionalEntry key={"third"} anounce={"5日目の個体を入力してください"} items={[1,2,3,4,5]} ivs={this.state.IVs.third} flawless={this.state.Flawless.third} onIVsChanged={this.onIVsChanged("third")} onFlawlessChanged={this.onFlawlessChanged("third")} />);
            renderItems.push(<AdditionalEntry key={"fourth"} anounce={"6日目の個体を入力してください"} items={[1,2,3,4,5]} ivs={this.state.IVs.fourth} flawless={this.state.Flawless.fourth} onIVsChanged={this.onIVsChanged("fourth")} onFlawlessChanged={this.onFlawlessChanged("fourth")} />);
            renderItems.push(<button key={"getcommand"} onClick={()=>{this.setState({command: this.getcommand()})}}> コマンドを出力 </button>); 
            if(this.state.command !== ""){
                renderItems.push(<p key={"command"}>{this.state.command}</p>)
                if(this.state.command[0]==="!")
                    renderItems.push(
                        <CopyToClipboard key={"result"} text={this.state.command}>
                            <button> 結果をコピー  </button>
                        </CopyToClipboard>
                    );
            }
        }
        
        return (
            <div>
                {renderItems}
            </div>
        );
    }
}

export default Home;