dojo.declare("Page_PMS_Main", wm.Page, {
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
    picBtn_PMS_LISTMouseOut: function(inSender, event) {
        try {
            this.picBtn_PMS_LIST.setSource("resources/images/buttons/BTN_PMS_LIST.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_LISTMouseOut: ' + e);
        }
    },
    picBtn_PMS_LISTMouseOver: function(inSender, event) {
        try {
            this.picBtn_PMS_LIST.setSource("resources/images/buttons/BTN_PMS_LIST_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_LISTMouseOver: ' + e);
        }
    },
    picBtn_PMS_LISTClick: function(inSender) {
        try {
            this.picBtn_PMS_LIST.setSource("resources/images/buttons/BTN_PMS_LIST_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_LISTClick: ' + e);
        }
    },
    picBtn_PMS_CONFIGMouseOut: function(inSender, event) {
        try {
            this.picBtn_PMS_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_CONFIGMouseOut: ' + e);
        }
    },
    picBtn_PMS_CONFIGMouseOver: function(inSender, event) {
        try {
            this.picBtn_PMS_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_CONFIGMouseOver: ' + e);
        }
    },
    picBtn_PMS_CONFIGClick: function(inSender) {
        try {
            this.picBtn_PMS_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_CONFIGClick: ' + e);
        }
    },
    picBtn_PMS_MEMBERMouseOut: function(inSender, event) {
        try {
            this.picBtn_PMS_MEMBER.setSource("resources/images/buttons/BTN_PMS_MEMBER.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_MEMBERMouseOut: ' + e);
        }
    },
    picBtn_PMS_MEMBERMouseOver: function(inSender, event) {
        try {
            this.picBtn_PMS_MEMBER.setSource("resources/images/buttons/BTN_PMS_MEMBER_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_MEMBERMouseOver: ' + e);
        }
    },
    picBtn_PMS_MEMBERClick: function(inSender) {
        try {
            this.picBtn_PMS_MEMBER.setSource("resources/images/buttons/BTN_PMS_MEMBER_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_PMS_MEMBERClick: ' + e);
        }
    },
    _end: 0
});