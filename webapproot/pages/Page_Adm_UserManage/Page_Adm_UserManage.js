dojo.declare("Page_Adm_UserManage", wm.Page, {
    start: function() {
        try {

/*
            // This returns the current date including time
            var currentTime = new Date();
            console.log("Current time : " + currentTime);
            // This returns the date formatted as mm/dd/yyyy 
            // Note that the getMonth() function returns 0..11
            var dateStr = (currentTime.getMonth() + 1) + "/";
            console.log("Date : " + dateStr);
            dateStr += currentTime.getDate() + "/" + currentTime.getFullYear();
            console.log(currentTime.getDate() + " " + currentTime.getFullYear() + "=" + dateStr);
            console.log("Get time : " + currentTime.getTime());

            var startDate = new Date("26/4/2012");
            console.log("Startdate : " + startDate);
            // A day in milliseconds
            var aDay = 24 * 60 * 60 * 1000;
            console.log("Aday" + aDay);
            var endDate = new Date(startDate.getTime() + (aDay * 15));
            console.log("Enddate : " + endDate);
            */
        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    lms_basic_userLiveForm1BeginInsert: function(inSender) {
        try {
            //var rt = hex_sha1(this.PASSWORDEditor1.getDataValue());
            //this.PASSWORDENCEditor1.setValue("dataValue", rt);
            this.CREATEBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());
        } catch (e) {
            console.error('ERROR IN lms_basic_userLiveForm1BeginInsert: ' + e);
        }
    },
    
    lms_basic_userLiveForm1BeginUpdate: function(inSender) {
        try {
            //var rt = hex_sha1(this.PASSWORDEditor1.getDataValue());
            //this.PASSWORDENCEditor1.setValue("dataValue", rt);
            this.MODIFYBYIDEditor1.setValue("dataValue", app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());
        } catch (e) {
            console.error('ERROR IN lms_basic_userLiveForm1BeginUpdate: ' + e);
        }
    },

    lms_basic_userLiveForm1InsertData: function(inSender) {
        try {
            this.CREATEBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());
        } catch (e) {
            console.error('ERROR IN lms_basic_userLiveForm1InsertData: ' + e);
        }
    },
 
    lms_basic_userLiveForm1UpdateData: function(inSender) {
        try {
            //var rt = hex_sha1(this.PASSWORDEditor1.getDataValue());
            //this.PASSWORDEditor1.setValue("dataValue", rt);
            //this.lms_basic_userLiveForm1.updateData();
        } catch (e) {
            console.error('ERROR IN lms_basic_userLiveForm1UpdateData: ' + e);
        }
    },

    _end: 0
});