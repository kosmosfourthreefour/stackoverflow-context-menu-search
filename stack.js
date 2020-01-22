// TODO
//// On right mouse click event
//// Read highlighted text
//// Save into a variable
//// Create context menu item
//// interpolate stackoverflow.com/search + highlightedWords
//// save into searchURL
//// context title changes to "Search stackoverflow for 'highlightedWords'"
//// On click, opens new tab at searchURL
// ! Figure out %s


// * create the context menu
browser.contextMenus.create({
    id: "stack",
    title: "Search stackoverflow",
    contexts: ["all"],

    icons: {
        "16": "icons/stack16.png",
        "32": "icons/stack32.png"
    }
});

// * on shown
// browser.contextMenus.onShown.addListener(function(info, tab) {
//     console.log(info);
//     // ! if %s ??
//     let updating = browser.contextMenus.update("stack", {
//         title: "Search stackoverflow for '%s'"
//     });
// });

// * onclick event
browser.contextMenus.onClicked.addListener(function (info, tab) {
    let selectedText = info.selectionText.toString();
    // Turn the highlight into format: "this+is+our+search" 
    let delimText = selectedText.split(" ").join("+");
    let searchURL = `https://stackoverflow.com/search?q=${delimText}`;
    // new tab with our search term
    browser.tabs.create({
        url: searchURL
    });
});







// extension logs will appear in about:debugging -> 'inspect'
// console.log("online");