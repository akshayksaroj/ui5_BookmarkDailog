sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ushell/ui/BookmarkDialog"
], (Controller,BookmarkDailog) => {
    "use strict";

    return Controller.extend("com.akshayksaroj.learnings.bookmark.controller.bookmark", {
        onInit() {
        },

        onOpenBookMarkDailog (){
            BookmarkDailog.show({
                title: "Sample Bookmark",
                subtitle: "Sample title",
                info:"Sample Information",
                icon:"sap-icon://add-favorite",
                numberUnit: "USD",
                serviceUrl: "sap/opu/odata/MY_SERVICE/$count"
            })
        }
    });
});