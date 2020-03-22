const Fn = require('../src/modules/fn');


class JDSMART {
    constructor() {
      this.io = null;
      this.JSBridge = null;
      this.readyCallback = null;
    }
    init(config) {
      this.JSBridge = config.bridge;
      this.JSBridge.init(function(msg,callback){
      });
      this.newAllModule(config.bridge);
      document.getElementById('smartInit').innerHTML = "1234";

      if (this.readyCallback) {
        document.getElementById('smartInit').innerHTML = "1234---";
        this.readyCallback();
      }  
    //   document.getElementById('smartInit').innerHTML = JSON.stringify(config)+ "567899"
    }
    newAllModule(jsb) {
      this.io = new Fn(jsb);
      document.getElementById('smartInit').innerHTML = JSON.stringify(this.io)+ "---===="
    }
    ready(fn) {
      this.readyCallback = fn;
    }

}

window.JDSMART = new JDSMART();
document.addEventListener('JDSmartBridgeReady', function onReady(ev) {
    document.getElementById('brg').innerHTML = '桥文件'+JSON.stringify(ev.bridge);

    window.JDSMART.init({'bridge':ev.bridge});

});

module.exports = window.JDSMART