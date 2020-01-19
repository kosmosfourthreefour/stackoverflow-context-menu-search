// TODO
//
//// On right mouse click event
//// Read highlighted text
//// Save into a variable
//// Create context menu item
//// interpolate stackoverflow.com/search + highlightedWords
//// save into searchURL
// ? context title changes to "Search stackoverflow for 'highlightedWords'"
//// On click, opens new tab at searchURL
 // ? menus.update() for updating the id?



// * create the context menu
browser.contextMenus.create({
    id: "stack",
    title: "Search stackoverflow",

    icons: {
        "16": "icons/stack16.png",
        "32": "icons/stack32.png"
    }
});

// * on shown
// browser.contextMenus.onShown.addListener(function(info, tab) {
//     let newTitle = `search for ${(info.selectionText).slice(0, 9)} + ...`;
//     browser.contextMenus.update("stack",
//         {title: "suh dude"});
// });

// * onclick event
browser.contextMenus.onClicked.addListener(function (info, tab) {
    let selectedText = info.selectionText.toString();
    // console.log(selectedText);
    let delimText = selectedText.split(" ").join("+")
    // console.log(delimText);
    let searchURL = `https://stackoverflow.com/search?q=${delimText}`
    // console.log(searchURL);

    // new tab with our search term
    browser.tabs.create({
        url:searchURL
    });
});





// console logging will appear in the web browser console (Ctrl Shift J)
// console.log("online");