dojo.declare("Main", wm.Page, {
    "i18n": true,
    start: function() {
        dojo.subscribe("session-expiration", this, "mySessionExpiredMethod");
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    mySessionExpiredMethod: function() {
        //Log out and redirect page to Login page
        alert("Alert, Session timeout.");
        this.svVar_InvalidateSession.update();
        this.svVar_Logout.update();
        //this.navCall_Login.update();
    },

    svVar_LogoutResult: function(inSender, inDeprecated) {
        try {
            //Set to default page
            var url = window.location.protocol + '//' + window.location.host + window.location.pathname.replace("index.html", "");
            location.href = url;
        } catch (e) {
            console.error('ERROR IN svVar_LogoutResult: ' + e);
        }
    },
    _end: 0
});