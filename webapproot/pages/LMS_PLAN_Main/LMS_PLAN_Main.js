dojo.declare("LMS_PLAN_Main", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
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
    picBtn_MAIN_MENUMouseOut: function(inSender, event) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUMouseOut: ' + e);
        }
    },
    picBtn_PLANClick: function(inSender) {
        try {
            this.picBtn_PLAN.setSource("resources/images/buttons/BTN_PLAN_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DPClick: ' + e);
        }
    },
    picBtn_PLANMouseOut: function(inSender, event) {
        try {
            this.picBtn_PLAN.setSource("resources/images/buttons/BTN_PLAN.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DPMouseOut: ' + e);
        }
    },
    picBtn_PLANMouseOver: function(inSender, event) {
        try {
            this.picBtn_PLAN.setSource("resources/images/buttons/BTN_PLAN_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DPMouseOver: ' + e);
        }
    },
    picBtn_PLAN_ConfigClick: function(inSender) {
        try {
            this.picBtn_PLAN_Config.setSource("resources/images/buttons/BTN_ITS_Config_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_DP_ConfigClick: ' + e);
        }
    },
    picBtn_PLAN_ConfigMouseOut: function(inSender, event) {
        try {
            this.picBtn_PLAN_Config.setSource("resources/images/buttons/BTN_ITS_Config.png");

        } catch (e) {
            console.error('ERROR IN picBtn_DP_ConfigMouseOut: ' + e);
        }
    },
    picBtn_PLAN_ConfigMouseOver: function(inSender, event) {
        try {
            this.picBtn_PLAN_Config.setSource("resources/images/buttons/BTN_ITS_Config_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_DP_ConfigMouseOver: ' + e);
        }
    },
    picBtn_DOCMouseOut: function(inSender, event) {
        try {
            this.picBtn_DOC.setSource("resources/images/buttons/BTN_DOC.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DOCMouseOut: ' + e);
        }
    },
    picBtn_DOCMouseOver: function(inSender, event) {
        try {
            this.picBtn_DOC.setSource("resources/images/buttons/BTN_DOC_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DOCMouseOver: ' + e);
        }
    },
    picBtn_DOCClick: function(inSender) {
        try {
            this.picBtn_DOC.setSource("resources/images/buttons/BTN_DOC_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_DOCClick: ' + e);
        }
    },

    _end: 0
});