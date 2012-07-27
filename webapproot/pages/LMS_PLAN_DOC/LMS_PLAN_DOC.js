dojo.declare("LMS_PLAN_DOC", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
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
                searchField = "DOCID";
                break;
            case "1":
                searchField = "FILENAME";
                break;
            case "2":
                searchField = "REL_DOC_PLAN.PLANID";
                break;
            case "3":
                searchField = "CREATEBYID";
                break;
            case "4":
                searchField = "FILETYPE";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.lms_plan_docLiveVariable1.filter.clearData();
            this.lms_plan_docLiveVariable1.filter.setValue(searchField, searchValue);
            this.lms_plan_docLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchClick: ' + e);
        }
    },
    txt_searchKeyEnterKeyPress: function(inSender) {
        try {
            this.buttonSearch.click();

        } catch (e) {
            console.error('ERROR IN txt_searchKeyEnterKeyPress: ' + e);
        }
    },
    buttonClearClick: function(inSender) {
        try {
            this.lms_plan_docLiveVariable1.filter.clearData();
            this.lms_plan_docLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearClick: ' + e);
        }
    },
    lms_plan_docLiveVariable1Result: function(inSender, inDeprecated) {
        try {

            var numRows = inSender.getCount();
            this.txtSearchReqResult.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
        } catch (e) {
            console.error('ERROR IN lms_plan_docLiveVariable1Result: ' + e);
        }
    },
    _end: 0
});