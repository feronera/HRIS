dojo.declare("LMS_ITS_APP", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    liveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN liveForm1BeginInsert: ' + e);
        }

    },
    liveForm1BeginUpdate: function(inSender) {
        try {
            //this.CREATEBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            //this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());
        } catch (e) {
            console.error('ERROR IN liveForm1BeginUpdate: ' + e);
        }
    },
    dojoGrid_ITSClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            //Selected row
            var index = this.dojoGrid_ITS.getSelectedIndex();
            var value = this.dojoGrid_ITS.getRow(index)['ITSID'];
            this.lms_itsLiveVariable1.filter.setValue("ITSID", value);
            this.lms_itsLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN dojoGrid_ITSClick: ' + e);
        }
    },
    buttonSearchClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearch.dataValue;
            var searchValue = this.txt_searchKey.getDataValue();
            var searchField = "";

            switch (selectIndex.dataValue) {
                //Search by ID.
            case "0":
                searchField = "ITSID";
                break;
            case "1":
                searchField = "FIRSTNAME";
                break;
            case "2":
                searchField = "LASTNAME";
                break;
            case "3":
                searchField = "REL_ACADEMIC.NAME";
                break;
            case "4":
                searchField = "REL_MAJOR.NAME";
                break;
            case "5":
                searchField = "REL_EDU_LEVEL.NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.LVar_ITS_Grid.filter.clearData();
            this.LVar_ITS_Grid.filter.setValue(searchField, searchValue);
            this.LVar_ITS_Grid.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchClick: ' + e);
        }
    },
    buttonClearClick: function(inSender) {
        try {
            this.LVar_ITS_Grid.filter.clearData();
            this.LVar_ITS_Grid.update();
        } catch (e) {
            console.error('ERROR IN buttonClearClick: ' + e);
        }
    },
    txt_searchKeyEnterKeyPress: function(inSender) {
        try {
            this.buttonSearch.click();

        } catch (e) {
            console.error('ERROR IN txt_searchKeyEnterKeyPress: ' + e);
        }
    },
    buttonSearch_ReqClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearch_Req.dataValue;
            var searchValue = this.txt_searchKey_Req.getDataValue();
            var searchField = "";

            switch (selectIndex.dataValue) {
                //Search by ID.
            case "0":
                searchField = "REQUESTOR_ID";
                break;
            case "1":
                searchField = "REL_UNIT.UNIT_NAME";
                break;
            case "2":
                searchField = "REL_ITS_ABILITY.ABILITY_NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.LVar_ITS_Req_Grid.filter.clearData();
            this.LVar_ITS_Req_Grid.filter.setValue(searchField, searchValue);
            this.LVar_ITS_Req_Grid.update();

        } catch (e) {
            console.error('ERROR IN buttonSearch_ReqClick: ' + e);
        }
    },
    buttonClear_ReqClick: function(inSender) {
        try {
            this.LVar_ITS_Req_Grid.filter.clearData();
            this.LVar_ITS_Req_Grid.update();

        } catch (e) {
            console.error('ERROR IN buttonClear_ReqClick: ' + e);
        }
    },
    dojoGrid_ITS_ReqClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            this.dojoGrid_ITSClick(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode);

        } catch (e) {
            console.error('ERROR IN dojoGrid_ITS_ReqClick: ' + e);
        }
    },
    lms_its_reqLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYID_Editor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETS_Editor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYID_Editor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTS_Editor1.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN lms_its_reqLiveForm1BeginInsert: ' + e);
        }
    },
    lms_its_reqLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYID_Editor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTS_Editor1.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN lms_its_reqLiveForm1BeginUpdate: ' + e);
        }
    },
    txt_searchKey_ReqEnterKeyPress: function(inSender) {
        try {
            this.buttonSearch_Req.click();

        } catch (e) {
            console.error('ERROR IN txt_searchKey_ReqEnterKeyPress: ' + e);
        }
    },

    LVar_ITS_GridResult: function(inSender, inDeprecated) {
        try {
            //var i;
            //var rtnString = '';
            var numRows = inSender.getCount();
/*
            console.log('Number of rows returned from HQL query = ' + numRows);
            if (numRows > 0) {
                for (i = 0; i < numRows; i++) {
                    var aRow = inSender.getItem(0);
                    rtnString += 'Row ' + (i + 1) + ' ' + aRow.data.contactlastname + '\n';
                    alert('Contact is ' + aRow.data.contactlastname);
                }
            }
            */
            this.txtSearchResult.setDataValue("ผลการค้นหา : " + numRows + " รายการ");

        } catch (e) {
            console.error('ERROR IN LVar_ITS_GridResult: ' + e);
        }
    },
    LVar_ITS_Req_GridResult: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.txtSearchReqResult.setDataValue("ผลการค้นหา : " + numRows + " รายการ");

        } catch (e) {
            console.error('ERROR IN LVar_ITS_Req_GridResult: ' + e);
        }
    },
    _end: 0
});