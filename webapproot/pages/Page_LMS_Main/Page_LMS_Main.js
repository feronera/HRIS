dojo.declare("Page_LMS_Main", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },
    picBtn_MAIN_MENUMouseOut: function(inSender, event) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUMouseOut: ' + e);
        }
    },
    picBtn_MAIN_MENUMouseOver: function(inSender, event) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUMouseOver: ' + e);
        }
    },
    picBtn_MAIN_MENUClick: function(inSender) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU_down.gif");
        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUClick: ' + e);
        }
    },
    picBtn_ITS_MainMouseOver: function(inSender, event) {
        try {
            this.picBtn_ITS_Main.setSource("resources/images/buttons/BTN_ITS_over.gif");
        } catch (e) {
            console.error('ERROR IN picBtn_ITS_MainMouseOver: ' + e);
        }
    },
    picBtn_ITS_MainMouseOut: function(inSender, event) {
        try {
            this.picBtn_ITS_Main.setSource("resources/images/buttons/BTN_ITS.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_MainMouseOut: ' + e);
        }
    },
    picBtn_ITS_MainClick: function(inSender) {
        try {
            this.picBtn_ITS_Main.setSource("resources/images/buttons/BTN_ITS_down.gif");
        } catch (e) {
            console.error('ERROR IN picBtn_ITS_MainClick: ' + e);
        }
    },
    picBtn_PIM_CONFIGClick: function(inSender) {
        try {
            this.picBtn_PIM_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_CONFIGClick: ' + e);
        }
    },
    picBtn_PIM_CONFIGMouseOut: function(inSender, event) {
        try {
            this.picBtn_PIM_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_CONFIGMouseOut: ' + e);
        }
    },
    picBtn_PIM_CONFIGMouseOver: function(inSender, event) {
        try {
            this.picBtn_PIM_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_CONFIGMouseOver: ' + e);
        }
    },
    picBtn_PLANMouseOut: function(inSender, event) {
        try {
            this.picBtn_PLAN.setSource("resources/images/buttons/BTN_PLAN.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PLANMouseOut: ' + e);
        }
    },
    picBtn_PLANMouseOver: function(inSender, event) {
        try {
            this.picBtn_PLAN.setSource("resources/images/buttons/BTN_PLAN_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PLANMouseOver: ' + e);
        }
    },
    picBtn_PLANClick: function(inSender) {
        try {
            this.picBtn_PLAN.setSource("resources/images/buttons/BTN_PLAN_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PLANClick: ' + e);
        }
    },
    _end: 0
});