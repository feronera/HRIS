dojo.declare("LMS_ITS_Main", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    //MAIN_MENU ----------------------------------------------------------------
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
    //APPLICATION --------------------------------------------------------------
    picBtn_ITS_ApplicantMouseOut: function(inSender, event) {
        try {
            this.picBtn_ITS_Applicant.setSource("resources/images/buttons/BTN_ITS.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ApplicantMouseOut: ' + e);
        }
    },
    picBtn_ITS_ApplicantMouseOver: function(inSender, event) {
        try {
            this.picBtn_ITS_Applicant.setSource("resources/images/buttons/BTN_ITS_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ApplicantMouseOver: ' + e);
        }
    },
    picBtn_ITS_ApplicantClick: function(inSender) {
        try {
            this.picBtn_ITS_Applicant.setSource("resources/images/buttons/BTN_ITS_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ApplicantClick: ' + e);
        }
    },
    
    //CONFIG -------------------------------------------------------------------
    picBtn_ITS_ConfigClick: function(inSender) {
        try {
            this.picBtn_ITS_Config.setSource("resources/images/buttons/BTN_ITS_CONFIG_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ConfigClick: ' + e);
        }
    },
    picBtn_ITS_ConfigMouseOut: function(inSender, event) {
        try {
            this.picBtn_ITS_Config.setSource("resources/images/buttons/BTN_ITS_CONFIG.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ConfigMouseOut: ' + e);
        }
    },
    picBtn_ITS_ConfigMouseOver: function(inSender, event) {
        try {
            this.picBtn_ITS_Config.setSource("resources/images/buttons/BTN_ITS_CONFIG_Over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ConfigMouseOver: ' + e);
        }
    },
    
    //REQUEST -------------------------------------------------------------------
    picBtn_ITS_ReqMouseOut: function(inSender, event) {
    
    try {
            this.picBtn_ITS_Req.setSource("resources/images/buttons/BTN_ITS_REQ.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ReqMouseOut: ' + e);
        }
    },
    picBtn_ITS_ReqMouseOver: function(inSender, event) {
        try {
            this.picBtn_ITS_Req.setSource("resources/images/buttons/BTN_ITS_REQ_Over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ReqMouseOver: ' + e);
        }
    },
    picBtn_ITS_ReqClick: function(inSender) {
        try {
            this.picBtn_ITS_Req.setSource("resources/images/buttons/BTN_ITS_REQ_Down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ReqClick: ' + e);
        }
    },
    _end: 0
});