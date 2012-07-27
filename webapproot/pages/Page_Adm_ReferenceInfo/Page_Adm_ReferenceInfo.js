dojo.declare("Page_Adm_ReferenceInfo", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    //For tab R_UNIT
    buttonSearchClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearch.getSelectedIndex();
            var searchValue = this.textSearch.getDataValue();
            var searchField = "";

            switch (selectIndex) {
                //Search by ID.
            case 0:
                searchField = "UNIT_ID";
                break;
            case 1:
                searchField = "UNIT_NAME";
                break;
            case 2:
                searchField = "UNIT_CODE";
                break;
            case 3:
                searchField = "REL_UNITTYPE.NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.r_unitLiveVariable1.filter.clearData();
            this.r_unitLiveVariable1.filter.setValue(searchField, searchValue);
            this.r_unitLiveVariable1.update();


        } catch (e) {
            console.error('ERROR IN buttonSearchClick: ' + e);
        }
    },
    textSearchEnterKeyPress: function(inSender) {
        try {
            this.buttonSearch.click();

        } catch (e) {
            console.error('ERROR IN textSearchEnterKeyPress: ' + e);
        }
    },
    buttonClearClick: function(inSender) {
        try {
            this.r_unitLiveVariable1.filter.clearData();
            this.r_unitLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearClick: ' + e);
        }
    },
    r_unitLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResult.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
        } catch (e) {
            console.error('ERROR IN r_unitLiveVariable1Result: ' + e);
        }
    },
    r_unitLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_unitLiveForm1BeginInsert: ' + e);
        }
    },
    r_unitLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());


        } catch (e) {
            console.error('ERROR IN r_unitLiveForm1BeginUpdate: ' + e);
        }
    },
    dojoGrid_UnitClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            this.LVar_Unit_MT.filter.clearData();
            searchValue = selectedItem.getData().UNIT_ID;
            this.LVar_Unit_MT.filter.setValue("UNIT_ID", searchValue);
            this.LVar_Unit_MT.update();
            this.buttonPreview_Unit.click();

        } catch (e) {
            console.error('ERROR IN dojoGrid_UnitClick: ' + e);
        }
    },
    _end: 0
});