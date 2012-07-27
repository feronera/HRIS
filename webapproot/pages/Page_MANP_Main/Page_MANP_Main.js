dojo.declare("Page_MANP_Main", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    picBtn_MANP_GOVClick: function(inSender) {
        try {
            this.picBtn_MANP_GOV.setSource("resources/images/buttons/BTN_MANP_GOV_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_GOVClick: ' + e);
        }
    },
    picBtn_MANP_GOVMouseOut: function(inSender, event) {
        try {
            this.picBtn_MANP_GOV.setSource("resources/images/buttons/BTN_MANP_GOV.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_GOVMouseOut: ' + e);
        }
    },
    picBtn_MANP_GOVMouseOver: function(inSender, event) {
        try {
            this.picBtn_MANP_GOV.setSource("resources/images/buttons/BTN_MANP_GOV_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_GOVMouseOver: ' + e);
        }
    },
    picBtn_MANP_ORGClick: function(inSender) {
        try {
            this.picBtn_MANP_ORG.setSource("resources/images/buttons/BTN_MANP_ORG_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_ORGClick: ' + e);
        }
    },
    picBtn_MANP_ORGMouseOut: function(inSender, event) {
        try {
            this.picBtn_MANP_ORG.setSource("resources/images/buttons/BTN_MANP_ORG.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_ORGMouseOut: ' + e);
        }
    },
    picBtn_MANP_ORGMouseOver: function(inSender, event) {
        try {
            this.picBtn_MANP_ORG.setSource("resources/images/buttons/BTN_MANP_ORG_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_ORGMouseOver: ' + e);
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
    picBtn_MAIN_MENUMouseOver: function(inSender, event) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUMouseOver: ' + e);
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
    picBtn_MANP_EMP_PERMouseOut: function(inSender, event) {
        try {
            this.picBtn_MANP_EMP_PER.setSource("resources/images/buttons/BTN_MANP_PER.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_PERMouseOut: ' + e);
        }
    },
    picBtn_MANP_EMP_PERMouseOver: function(inSender, event) {
        try {
            this.picBtn_MANP_EMP_PER.setSource("resources/images/buttons/BTN_MANP_PER_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_PERMouseOver: ' + e);
        }
    },
    picBtn_MANP_EMP_PERClick: function(inSender) {
        try {
            this.picBtn_MANP_EMP_PER.setSource("resources/images/buttons/BTN_MANP_PER_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_PERClick: ' + e);
        }
    },
    picBtn_MANP_EMP_GOVMouseOut: function(inSender, event) {
        try {
            this.picBtn_MANP_EMP_GOV.setSource("resources/images/buttons/BTN_MANP_EMPGOV.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_GOVMouseOut: ' + e);
        }
    },
    picBtn_MANP_EMP_GOVMouseOver: function(inSender, event) {
        try {
            this.picBtn_MANP_EMP_GOV.setSource("resources/images/buttons/BTN_MANP_EMPGOV_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_GOVMouseOver: ' + e);
        }
    },
    picBtn_MANP_EMP_GOVClick: function(inSender) {
        try {
            this.picBtn_MANP_EMP_GOV.setSource("resources/images/buttons/BTN_MANP_EMPGOV_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_GOVClick: ' + e);
        }
    },
    picBtn_MANP_EMP_TMPMouseOut: function(inSender, event) {
        try {
            this.picBtn_MANP_EMP_TMP.setSource("resources/images/buttons/BTN_MANP_TMP.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_TMPMouseOut: ' + e);
        }
    },
    picBtn_MANP_EMP_TMPMouseOver: function(inSender, event) {
        try {
            this.picBtn_MANP_EMP_TMP.setSource("resources/images/buttons/BTN_MANP_TMP_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_TMPMouseOver: ' + e);
        }
    },
    picBtn_MANP_EMP_TMPClick: function(inSender) {
        try {
            this.picBtn_MANP_EMP_TMP.setSource("resources/images/buttons/BTN_MANP_TMP_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_MANP_EMP_TMPClick: ' + e);
        }
    },
    _end: 0
});