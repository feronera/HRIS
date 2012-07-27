dojo.declare("LMS_DP_Main", wm.Page, {
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
    picBtn_DPClick: function(inSender) {
        try {
            this.picBtn_DP.setSource("resources/images/buttons/BTN_DP_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DPClick: ' + e);
        }
    },
    picBtn_DPMouseOut: function(inSender, event) {
        try {
            this.picBtn_DP.setSource("resources/images/buttons/BTN_DP.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DPMouseOut: ' + e);
        }
    },
    picBtn_DPMouseOver: function(inSender, event) {
        try {
            this.picBtn_DP.setSource("resources/images/buttons/BTN_DP_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DPMouseOver: ' + e);
        }
    },
    picBtn_DP_ConfigClick: function(inSender) {
        try {
            this.picBtn_DP_Config.setSource("resources/images/buttons/BTN_ITS_Config_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_DP_ConfigClick: ' + e);
        }
    },
    picBtn_DP_ConfigMouseOut: function(inSender, event) {
        try {
            this.picBtn_DP_Config.setSource("resources/images/buttons/BTN_ITS_Config.png");

        } catch (e) {
            console.error('ERROR IN picBtn_DP_ConfigMouseOut: ' + e);
        }
    },
    picBtn_DP_ConfigMouseOver: function(inSender, event) {
        try {
            this.picBtn_DP_Config.setSource("resources/images/buttons/BTN_ITS_Config_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_DP_ConfigMouseOver: ' + e);
        }
    },
    _end: 0
});