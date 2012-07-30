dojo.declare("Page_PIM_MT", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());

        }
    },
    //PIM_LIST ------------------------------------------------------------------
    sVar_PIMLISTResult: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResult.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
        } catch (e) {
            console.error('ERROR IN sVar_PIMLISTResult: ' + e);
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
    //Set default hide layer
    layer_PIM01Show: function(inSender) {
        try {
            //this.layer_PIM02.setShowing(false);
        } catch (e) {
            console.error('ERROR IN layer_PIM01Show: ' + e);
        }
    },
    REL_PERSONALTYPELookup1Change: function(inSender) {
        try {
            //In case employee type
            var perType = inSender.selectedItem.data.PERSONTYPE_ID;
            if (perType == 1) {
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
            var selectedUID = this.UIDEditor1.getDataValue();
            //alert(selectedUID);
            this.UIDEditor2.setValue("UID", selectedUID);
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
    //PIM02 --------------------------------------------------------------------
    pim_02_employeeLiveForm1BeginInsert: function(inSender) {
        try {
            var selectedUID = this.UIDEditor1.getDataValue();
            this.UIDEditor2.setDataValue(selectedUID);

        } catch (e) {
            console.error('ERROR IN pim_02_employeeLiveForm1BeginInsert: ' + e);
        }
    },

    _end: 0
});