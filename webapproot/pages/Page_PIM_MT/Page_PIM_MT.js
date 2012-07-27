dojo.declare("Page_PIM_MT", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    layer_PIM_ListShow: function(inSender) {
        try {
            var value = app.staticVar_SelectUID.getValue("dataValue");
            if (value !== "") {
                this.pim_01_generalLiveVariable1.filter.setValue("UID", value);
            } else {
                this.pim_01_generalLiveVariable1.filter.setValue("UID", this.textUIDSearch.getDataValue());
            }
            this.pim_01_generalLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN layer_PIM_ListShow: ' + e);
        }
    },
    textUIDSearchChange: function(inSender) {
        try {
            this.pim_01_generalLiveVariable1.filter.setValue("UID", this.textUIDSearch.getDataValue());
            this.pim_02_employeeLiveVariable1.filter.setValue("UID", this.textUIDSearch.getDataValue());
            this.pim_01_generalLiveVariable1.update();
            this.pim_02_employeeLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN textUIDSearchChange: ' + e);
        }
    },
    layer_PIM_EmployeeShow: function(inSender) {
        try {
            var value = app.staticVar_SelectUID.getValue("dataValue");
            if (value !== "") {
                this.pim_02_employeeLiveVariable1.filter.setValue("UID", value);
            } else {
                this.pim_02_employeeLiveVariable1.filter.setValue("UID", this.textUIDSearch.getDataValue());
            }
            this.pim_02_employeeLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN layer_PIM_EmployeeShow: ' + e);
        }
    },
    REL_PERSONALTYPELookup1Change: function(inSender) {
        try {
            //In case employee type
            if (inSender.selectedItem.data.PERSONTYPE_ID == 1) {
                this.layer_PIM02.setShowing(true);
            } else {
                this.layer_PIM02.setShowing(false);
            }

        } catch (e) {
            console.error('ERROR IN REL_PERSONALTYPELookup1Change: ' + e);
        }
    },
    //Set initial value:
    //1. Map the selected UID from tab PIM01 to this tab
    layer_PIM02Show: function(inSender) {
        try {
            alert("Haloooo!");

        } catch (e) {
            console.error('ERROR IN layer_PIM02Show: ' + e);
        }
    },
    //Set intial parameter described as:
    // 1. Hide/Show PIM02.. tab layer in case PersonalType is not equal normal people
    layer_PIM_InfoShow: function(inSender) {
        try {


        } catch (e) {
            console.error('ERROR IN layer_PIM_InfoShow: ' + e);
        }
    },
    _end: 0
});