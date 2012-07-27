dojo.declare("LMS_PLAN_App", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },
    lms_planLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());
        } catch (e) {
            console.error('ERROR IN lms_planLiveForm1BeginInsert: ' + e);
        }
    },
    lms_planLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor1.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor1.setValue("dataValue", new Date().valueOf());
        } catch (e) {
            console.error('ERROR IN lms_planLiveForm1BeginUpdate: ' + e);
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
                searchField = "PLANID";
                break;
            case "1":
                searchField = "YEAROFPLAN";
                break;
            case "2":
                searchField = "PLANTITLE";
                break;
            case "3":
                searchField = "CREATEBYID";
                break;
            case "4":
                searchField = "APPROVEDBYID";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.LVar_Plan_Main.filter.clearData();
            this.LVar_Plan_Main.filter.setValue(searchField, searchValue);
            this.LVar_Plan_Main.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchClick: ' + e);
        }

    },
    buttonClearClick: function(inSender) {
        try {
            this.LVar_Plan_Main.filter.clearData();
            this.LVar_Plan_Main.update();
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
    LVar_Plan_MainResult: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.txtSearchReqResult.setDataValue("ผลการค้นหา : " + numRows + " รายการ")

        } catch (e) {
            console.error('ERROR IN LVar_Plan_MainResult: ' + e);
        }
    },
    dojoGrid_PLANClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            //Selected row
            var index = this.dojoGrid_PLAN.getSelectedIndex();
            var value = this.dojoGrid_PLAN.getRow(index)['PLANID'];
            this.LVar_Plan_Info.filter.setValue("PLANID", value);
            this.LVar_Plan_Info.update();
            this.lms_plan_docLiveVariable2.filter.setValue("PLANID", value);
            this.lms_plan_docLiveVariable2.update();

        } catch (e) {
            console.error('ERROR IN dojoGrid_PLANClick: ' + e);
        }
    },
    //--------------------------------------------------------------------------
    // For Attachment Management
    //--------------------------------------------------------------------------
    lms_plan_docLiveForm1BeginInsert: function(inSender) {
        try {
            //this.lookup_PLANID.setValue("dataValue", );
            this.CREATEBYIDEditor3.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor3.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor3.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor3.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN lms_plan_docLiveForm1BeginInsert: ' + e);
        }
    },

    lms_plan_docSaveButtonClick1: function(inSender) {
        try {
            this.dojoFlashFileUpload1.upload();

        } catch (e) {
            console.error('ERROR IN lms_plan_docSaveButtonClick1: ' + e);
        }
    },
    lms_plan_docUpdateButtonClick1: function(inSender) {
        try {
            this.dojoFlashFileUpload1.setShowing(false);

        } catch (e) {
            console.error('ERROR IN lms_plan_docUpdateButtonClick1: ' + e);
        }
    },

    dojoFlashFileUpload1Success: function(inSender, fileList) {
        try {
            alert(fileList[0].name);
            alert(fileList[0].size);
            alert(fileList[0].type);

        } catch (e) {
            console.error('ERROR IN dojoFlashFileUpload1Success: ' + e);
        }
    },
    _end: 0

});