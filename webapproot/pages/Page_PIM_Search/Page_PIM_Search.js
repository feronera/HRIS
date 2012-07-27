dojo.declare("Page_PIM_Search", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    wizardLayers1Canchange: function(inSender, inChangeInfo) {
        try {
            var searchField;
            switch (this.radBtn_UserID.groupValue) {
            case "uid":
                searchField = "UID";
                break;
            case "empNo":
                searchField = "PERSONALID";
                break;
            case "name":
                searchField = "NAMETH";
                break;
            case "surname":
                searchField = "SURNAMETH";
                break;
            case "cid":
                searchField = "CITIZENID";
                break;
            default:

            }
            var searchValue = this.textKeyword.getDataValue();

            //For Local Live variable
            this.lVar_PIM01_List.filter.clearData();
            this.lVar_PIM01_List.filter.setValue(searchField, searchValue);
            //this.loadingDialog1.show();
            this.lVar_PIM01_List.update();
            //this.loadingDialog1.hide();
            
            //For Global Live variable "pim_01_generalLiveVariable1"
            //app.pim_01_generalLiveVariable1.filter.clearData();
            //app.pim_01_generalLiveVariable1.filter.setValue(searchField, searchValue);
            ///app.pim_01_generalLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN wizardLayers1Canchange: ' + e);
        }
    },
    layer1Show: function(inSender) {
        try {
            this.radBtn_UserID.setChecked(true);

        } catch (e) {
            console.error('ERROR IN layer1Show: ' + e);
        }
    },
    wizardLayers1DoneClick: function(inSender) {
        try {
            var dat = this.dojoGrid1.dataSet.getItem(0).getValue("UID");
            app.staticVar_SelectUID.setValue("dataValue", dat);
            //wm.Page.getPage("page_PIM_MT").pim_01_generalLiveVariable1.filter.setValue("UID", dat);
        } catch (e) {
            console.error('ERROR IN wizardLayers1DoneClick: ' + e);
        }
    },

    dojoGrid1CellDblClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            var dat = this.dojoGrid1.dataSet.getItem(0).getValue("UID");
            app.staticVar_SelectUID.setValue("dataValue", dat);
        } catch (e) {
            console.error('ERROR IN dojoGrid1CellDblClick: ' + e);
        }
    },
    dojoGrid1Click: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            //var dat = this.dojoGrid1.dataSet.getItem(0).getValue("UID");
            //alert(dat);
        } catch (e) {
            console.error('ERROR IN dojoGrid1Click: ' + e);

        }

    },
    _end: 0

});