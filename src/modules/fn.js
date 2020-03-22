class Fn {
   constructor(JSBridge) {
       this.JSBridge = JSBridge;
      document.getElementById('brg').innerHTML = 'fn'+JSON.stringify(JSBridge);

   }
   getSnapshot(suc,faild) {
    document.getElementById('getSnapshot').innerHTML = "进入快照";
    document.getElementById('brg').innerHTML = '快照'+JSON.stringify(this.JSBridge);
    this.JSBridge.send({type:'getSnapshot'},function(result){
        document.getElementById('getSnapshot').innerHTML = "快照返回"+JSON.stringify(result);
        if (result.status != 0) {
            if (faild)
            faild(result.error);
        } else {
            suc(result.result);
        }
    });
   }
}

module.exports = Fn;