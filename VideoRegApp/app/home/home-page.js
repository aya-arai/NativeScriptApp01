
const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onTap(args) {
    //const button = args.object;
    //button.text = `文字が変わったね`;
    alert({
        title:"タイトルはここ",
        message:"メッセージ",
        okButtonText:"閉じる"
    }).then(function(){
        console.log("test");
    });
}
exports.onTap = onTap;

exports.onNavigatingTo = onNavigatingTo;
