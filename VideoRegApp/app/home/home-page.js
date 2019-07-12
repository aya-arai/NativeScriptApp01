
const HomeViewModel = require("./home-view-model");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

function onTap(args) {
    const button = args.object;
    button.text = `文字が変わったね`;
}
exports.onTap = onTap;

exports.onNavigatingTo = onNavigatingTo;
