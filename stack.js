// TODO


// * create the context menu
browser.contextMenus.create({
    id: "stack",
    title: "Search stackoverflow for '%s'",
    contexts: ["selection"],

    icons: {
        "16": "icons/stack16.png",
        "32": "icons/stack32.png"
    }
});


// * onclick event
browser.contextMenus.onClicked.addListener(function (info, tab) {
    let selectedText = info.selectionText.toString();
    // Turn the highlight into format: "this+is+our+search" 
    let delimText = selectedText.trim().split(" ").join("+");
    let searchURL = `https://stackoverflow.com/search?q=${delimText}`;
    // new tab with our search term
    browser.tabs.create({
        url: searchURL
    });
});


// extension logs will appear in about:debugging -> 'inspect'
// console.log("online");