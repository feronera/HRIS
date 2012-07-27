dojo.declare("Page_ADM_Main", wm.Page, {
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
    picBtn_ADM_USERClick: function(inSender) {
        try {
            this.picBtn_ADM_USER.setSource("resources/images/buttons/BTN_ADM_USER_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ADM_USERClick: ' + e);
        }
    },
    picBtn_ADM_USERMouseOut: function(inSender, event) {
        try {
            this.picBtn_ADM_USER.setSource("resources/images/buttons/BTN_ADM_USER.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ADM_USERMouseOut: ' + e);
        }
    },
    picBtn_ADM_USERMouseOver: function(inSender, event) {
        try {
            this.picBtn_ADM_USER.setSource("resources/images/buttons/BTN_ADM_USER_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ADM_USERMouseOver: ' + e);
        }
    },
    picBtn_ADM_ROLEMouseOut: function(inSender, event) {
        try {
            this.picBtn_ADM_ROLE.setSource("resources/images/buttons/BTN_ADM_ROLE.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ADM_ROLEMouseOut: ' + e);
        }
    },
    picBtn_ADM_ROLEMouseOver: function(inSender, event) {
        try {
            this.picBtn_ADM_ROLE.setSource("resources/images/buttons/BTN_ADM_ROLE_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ADM_ROLEMouseOver: ' + e);
        }
    },
    picBtn_ADM_ROLEClick: function(inSender) {
        try {
            this.picBtn_ADM_ROLE.setSource("resources/images/buttons/BTN_ADM_ROLE_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_ADM_ROLEClick: ' + e);
        }
    },
    _end: 0
});