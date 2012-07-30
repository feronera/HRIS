dojo.declare("Page_PIM_MT", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());

        }
    },
    //PIM_LIST ------------------------------------------------------------------
    buttonSearchClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearch.dataValue;
            var searchValue = this.textSearchKey.getDataValue();
            var searchField = "";

            switch (selectIndex.dataValue) {
                //Search by ID.
            case "0":
                searchField = "uid";
                break;
            case "1":
                searchField = "name";
                break;
            case "2":
                searchField = "surname";
                break;
            case "3":
                searchField = "personalType";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.sVar_PIMLIST.input.setValue(searchField, searchValue);
            this.sVar_PIMLIST.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchClick: ' + e);
        }
    },
    textSearchKeyEnterKeyPress: function(inSender) {
        try {
            this.buttonSearch.click();

        } catch (e) {
            console.error('ERROR IN textSearchKeyEnterKeyPress: ' + e);
        }
    },
    buttonClearClick: function(inSender) {
        try {
            //Set filter
            this.sVar_PIMLIST.input.setValue("uid", "");
            this.sVar_PIMLIST.update();

        } catch (e) {
            console.error('ERROR IN buttonClearClick: ' + e);
        }
    },
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
    textSearchKeyChange: function(inSender) {
        try {
            this.pim_01_generalLiveVariable1.filter.setValue("UID", this.textUIDSearch.getDataValue());
            this.pim_02_employeeLiveVariable1.filter.setValue("UID", this.textUIDSearch.getDataValue());
            this.pim_01_generalLiveVariable1.update();
            this.pim_02_employeeLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN textSearchKeyChange: ' + e);
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