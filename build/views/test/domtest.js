window.onload = function () {
    model.init();
}

var model = {
    getbyid: function (id) {
        return document.getElementById(id);
    },
    setsomething:function(){
        this.node11.innerHTML="qiaonima";
    },
    testlet:function(){
        let myname="zsp";
        return function(){
            console.log(myname);
        }
    },
    jiegou:function(){
        var p={x:["zsp",{name:"赵四平"}]};
        let {x:[enname,{name:cnname}]}=p;
        var model={
            enname:enname,
            cnname:cnname
        }
        console.log(model);
    },
    init: function () {
        this.node1 = document.getElementById("node1");
        this.node2 = document.getElementById("node2");
        this.node3 = document.getElementById("node3");
        this.node11 = this.node1.childNodes[1]
        this.node21 = this.node2.childNodes[1];
        this.span1= document.getElementById("span1");
        this.jiegou();
    }
}