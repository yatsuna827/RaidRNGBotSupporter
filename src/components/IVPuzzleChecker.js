class IVPuzzleChecker{
    constructor(ivs){
        this.ivs = ivs;
        this.flawless = ivs.filter(_=>_===31);
        this.flaw = ivs.filter(_=>_!==31).map(_=>_%8).map(_=>_<6 && ivs[_]!== 31);
        this.flawivs = ivs.filter(_=>_!==31);
        this.fxxk = { "options": [], "flawivs": [], "message": "アホしね" };
    }
    check(vfix = 2){
        if(this.flawless.length !== vfix || vfix > 3) 
            return this.fxxk;

        let res;
        if(vfix === 1)
            res = this.check1V();
        if(vfix === 2)
            res = this.check2V();
        if(vfix === 3)
            res = this.check3V();
        
        if(res.message !== "アホしね") 
            res["flawivs"] = this.flawivs;
        return res;
    }
    getNextIVs(ivs, cont){
        const next = ivs.slice();
        for(let i=0; i<6 && cont.length>0; i++){
            if(next[i]!==31) next[i] = cont.shift()*1;
        }
        return next;
    }
    check1V(){
        const next = this.ivs.map(_=>_===31 ? 31 : false);
        if(!this.flaw[0] && !this.flaw[1] && !this.flaw[2] && !this.flaw[3] && this.flaw[4]){
            next[this.flaw[4]%8] = 31;
            return { "options": [{"flawless": 2, "ivs": next }], "message": "2V個体と合わせれば個体値情報×9が得られます\r\n(2体目無しでも個体値情報×5が得られています)" };
        }
        if(!this.flaw[0] && !this.flaw[1] && !this.flaw[2] && this.flaw[3]){
            next[this.flaw[3]%8]=31;
            return { "options": [{"flawless": 2, "ivs": this.getNextIVs(next, [this.flawivs[4]]) }], "message": "2V個体と合わせれば個体値情報×8が得られます\r\n(2体目無しでも個体値情報×5が得られています)" };
        }
        if(!this.flaw[0] && !this.flaw[1] && this.flaw[2]) {
            next[this.flaw[2]%8]=31;
            return { "options": [{"flawless": 2, "ivs": this.getNextIVs(next, [this.flawivs[3], this.flawivs[4]]) }], "message": "2V個体と合わせれば個体値情報×7が得られます\r\n(2体目無しでも個体値情報×5が得られています)" };
        }
        if(!this.flaw[0] && this.flaw[1]) {
            next[this.flaw[1]%8]=31;
            return { "options": [{"flawless": 2, "ivs": this.getNextIVs(next, [this.flawivs[2], this.flawivs[3], this.flawivs[4]]) }], "message": "2V個体と合わせれば個体値情報×6が得られます\r\n(2体目無しでも個体値情報×5が得られています)" };
        }
        return { "options": [], "message": "個体値情報×5が得られました" };
    }
    check2V(){
        const res = [];
        const mes = [];
        
        const next = this.ivs.map(_=>_===31 ? 31 : false);
        if(!this.flaw[0] && !this.flaw[1] && !this.flaw[2] && this.flaw[3]) {
            next[this.flaw[3]%8] = 31;
            res.push({"flawless": 3, "ivs": next});
            mes.push("3V個体と合わせれば個体値情報×7が得られます");
        }
        else if(!this.flaw[0] && !this.flaw[1] && this.flaw[2]) {
            next[this.flaw[2]%8] = 31;
            res.push({ "flawless": 3, "ivs": this.getNextIVs(next, [this.flawivs[3]]) });
            mes.push("3V個体と合わせれば個体値情報×6が得られます");
        }
        else if(!this.flaw[0] && this.flaw[1]) {
            next[this.flaw[1]%8] = 31;
            res.push({ "flawless": 3, "ivs": this.getNextIVs(next, [this.flawivs[2], this.flawivs[3]]) });
            mes.push("3V個体と合わせれば個体値情報×5が得られます");
        }
        
        if(this.flaw.slice(0,3).filter(_=>_).length === 1 && this.flaw[3]) {
            next[(this.flaw.slice(0,3).filter(_=>_)[0])%8] = 31;
            next[this.flawivs[3]%8] = 31;
            res.push( {"flawless": 4, "ivs": []} );
            mes.push("4V個体と合わせれば個体値情報×6が得られます");
        }
        else if(this.flaw.slice(0,2).filter(_=>_).length === 1 && this.flaw[2]) {
            next[(this.flaw.slice(0,1).filter(_=>_)[0])%8] = 31;
            next[this.flawivs[2]%8] = 31;
            res.push( {"flawless": 4, "ivs": this.getNextIVs(next, [this.flawivs[3]])} );
            mes.push("4V個体と合わせれば個体値情報×5が得られます");
        }
        
        if(res.length===0)
            return this.fxxk;
        
        return  { "options": res, "message": mes.filter(_=>_!=="アホしね").join("\r\n") };
    }
    check3V(){
        if(!this.flaw[0] && !this.flaw[1] && this.flaw[2]) 
            return { "options": [{"flawless" : 4, "ivs": this.ivs.map(_=>_===31 ? 31 : false)}], "message": "4V個体と合わせれば個体値情報×5が得られます" };
            
        return this.fxxk;
    }
    
}

export default IVPuzzleChecker;