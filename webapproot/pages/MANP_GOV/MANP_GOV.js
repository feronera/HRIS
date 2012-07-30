dojo.declare("MANP_GOV", wm.Page, {
    start: function() {
        try {

        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    //1.6 UNIT ------------------------------------------------------------------
    buttonSearchUnitClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchUnit.getSelectedIndex();
            var searchValue = this.textSearchUnit.getDataValue();
            var searchField = "";
            switch (selectIndex) {

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
            console.error('ERROR IN buttonSearch1Click: ' + e);
        }
    },
    buttonClearUnitClick: function(inSender) {
        try {
            this.r_unitLiveVariable1.filter.clearData();
            this.r_unitLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClear1Click: ' + e);
        }
    },
    r_unitLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultUnit.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
            this.position_chairLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_unitLiveVariable1Result: ' + e);
        }
    },
    textSearchUnitEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchUnit.click();

        } catch (e) {
            console.error('ERROR IN textSearch1EnterKeyPress: ' + e);
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
    r_unitLiveForm2BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor2.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor2.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor2.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor2.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_unitLiveForm2BeginInsert: ' + e);
        }
    },
    r_unitLiveForm2BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor2.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor2.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_unitLiveForm2BeginUpdate: ' + e);
        }
    },
    dojoGrid_UnitClick: function(inSender, evt, selectedItem, rowId, fieldId, rowNode, cellNode) {
        try {
            this.LVar_Unit_MT.filter.clearData();
            var searchValue = selectedItem.getData().UNIT_ID;
            this.LVar_Unit_MT.filter.setValue("UNIT_ID", searchValue);
            this.LVar_Unit_MT.update();
            this.buttonPreview.click();

        } catch (e) {
            console.error('ERROR IN dojoGrid_UnitClick: ' + e);
        }
    },
    buttonListClick: function(inSender) {
        try {
            this.r_unitLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonListClick: ' + e);
        }
    },
    //1.2 Position Type ---------------------------------------------------------
    textSearchPosTypeEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchPosType.click();

        } catch (e) {
            console.error('ERROR IN textSearchPosTypeEnterKeyPress: ' + e);
        }
    },
    buttonSearchPosTypeClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchPosType.getSelectedIndex();
            var searchValue = this.textSearchPosType.getDataValue();
            var searchField = "";
            switch (selectIndex) {

                //Search by ID.
            case 0:
                searchField = "POSITION_TYPE_ID";
                break;
            case 1:
                searchField = "NAME";
                break;
            case 2:
                searchField = "REL_POSITION_TYPE_STATUS.NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.r_position_typeLiveVariable1.filter.clearData();
            this.r_position_typeLiveVariable1.filter.setValue(searchField, searchValue);
            this.r_position_typeLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchPosTypeClick: ' + e);
        }
    },
    buttonListPosTypeClick: function(inSender) {
        try {
            this.r_position_typeLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonListPosTypeClick: ' + e);
        }
    },
    r_position_typeLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultPosType.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
            this.position_chairLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_position_typeLiveVariable1Result: ' + e);
        }
    },
    buttonClearPosTypeClick: function(inSender) {
        try {
            this.r_position_typeLiveVariable1.filter.clearData();
            this.r_position_typeLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearPosTypeClick: ' + e);
        }
    },
    r_position_typeLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor4.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor4.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor4.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor4.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_position_typeLiveForm1BeginInsert: ' + e);
        }
    },
    r_position_typeLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor4.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor4.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_position_typeLiveForm1BeginUpdate: ' + e);
        }
    },

    // R_POSITION_MANAGEMENT ----------------------------------------------------
    textSearchPosManageEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchPosManage.click();

        } catch (e) {
            console.error('ERROR IN textSearchPosManageEnterKeyPress: ' + e);
        }
    },
    buttonSearchPosManageClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchPosManage.getSelectedIndex();
            var searchValue = this.textSearchPosManage.getDataValue();
            var searchField = "";
            switch (selectIndex) {

                //Search by ID.
            case 0:
                searchField = "POSITION_MANAGEMENT_ID";
                break;
            case 1:
                searchField = "NAME";
                break;
            case 2:
                searchField = "REL_POS_MNMT_STAT.STATUS_NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.r_position_managementLiveVariable1.filter.clearData();
            this.r_position_managementLiveVariable1.filter.setValue(searchField, searchValue);
            this.r_position_managementLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchPosManageClick: ' + e);
        }
    },
    buttonClearPosManageClick: function(inSender) {
        try {
            this.r_position_managementLiveVariable1.filter.clearData();
            this.r_position_managementLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearPosManageClick: ' + e);
        }
    },
    r_position_managementLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultPosManage.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
            this.position_chairLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_position_managementLiveVariable1Result: ' + e);
        }
    },
    r_position_management_statusLiveVariable1Success: function(inSender, inDeprecated) {
        try {
            //Update LVar when add new information complete
            this.r_position_managementLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_position_management_statusLiveVariable1Success: ' + e);
        }
    },
    r_position_managementLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor3.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor3.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor3.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor3.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_position_managementLiveForm1BeginInsert: ' + e);
        }
    },
    r_position_managementLiveForm1BeginUpdate: function(inSender) {
        try {

            this.MODIFYBYIDEditor3.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor3.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_position_managementLiveForm1BeginUpdate: ' + e);
        }
    },

    //R_POSITION_WORK ----------------------------------------------------------
    textSearchPosWorkEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchPosWork.click();

        } catch (e) {
            console.error('ERROR IN textSearchPosWorkEnterKeyPress: ' + e);
        }
    },
    buttonSearchPosWorkClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchPosWork.getSelectedIndex();
            var searchValue = this.textSearchPosWork.getDataValue();
            var searchField = "";
            switch (selectIndex) {

                //Search by ID.
            case 0:
                searchField = "POSITION_WORK_ID";
                break;
            case 1:
                searchField = "POS_GOV_WORK_ID";
                break;
            case 2:
                searchField = "NAME";
                break;
            case 3:
                searchField = "REL_POS_WORK_STATUS.STATUS_NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.r_position_workLiveVariable1.filter.clearData();
            this.r_position_workLiveVariable1.filter.setValue(searchField, searchValue);
            this.r_position_workLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchPosWorkClick: ' + e);
        }
    },
    buttonClearPosWorkClick: function(inSender) {
        try {
            this.r_position_workLiveVariable1.filter.clearData();
            this.r_position_workLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearPosWorkClick: ' + e);
        }
    },
    r_position_workLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultPosWork.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
            this.position_chairLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_position_workLiveVariable1Result: ' + e);
        }
    },
    r_position_workLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor5.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor5.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor5.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor5.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_position_workLiveForm1BeginInsert: ' + e);
        }
    },
    r_position_workLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor5.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor5.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_position_workLiveForm1BeginUpdate: ' + e);
        }
    },
    r_position_work_statusLiveVariable1Success: function(inSender, inDeprecated) {
        try {
            this.r_position_workLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_position_work_statusLiveVariable1Success: ' + e);
        }
    },
    //R_LEVEL -------------------------------------------------------------------
    textSearchPosLevelEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchPosLevel.click();

        } catch (e) {
            console.error('ERROR IN textSearchPosLevelEnterKeyPress: ' + e);
        }
    },
    buttonSearchPosLevelClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchPosLevel.getSelectedIndex();
            var searchValue = this.textSearchPosLevel.getDataValue();
            var searchField = "";
            switch (selectIndex) {

                //Search by ID.
            case 0:
                searchField = "LEVEL_ID";
                break;
            case 1:
                searchField = "NAME";
                break;
            case 2:
                searchField = "REL_POSITION_TYPE.NAME";
                break;
            case 3:
                searchField = "REL_LEVEL_STATUS.STATUS_NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.r_levelLiveVariable1.filter.clearData();
            this.r_levelLiveVariable1.filter.setValue(searchField, searchValue);
            this.r_levelLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchPosLevelClick: ' + e);
        }
    },
    buttonClearPosLevelClick: function(inSender) {
        try {
            this.r_levelLiveVariable1.filter.clearData();
            this.r_levelLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearPosLevelClick: ' + e);
        }
    },
    r_levelLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultPosLevel.setDataValue("ผลการค้นหา : " + numRows + " รายการ");
            this.position_chairLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_levelLiveVariable1Result: ' + e);
        }
    },
    r_level_statusLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            this.r_level_statusLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN r_level_statusLiveVariable1Result: ' + e);
        }
    },
    r_levelLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor6.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor6.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor6.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor6.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_levelLiveForm1BeginInsert: ' + e);
        }
    },
    r_levelLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor6.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor6.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN r_levelLiveForm1BeginUpdate: ' + e);
        }
    },
    //POSITION_CHAIR ------------------------------------------------------------
    textSearchPosChairEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchPosChair.click();

        } catch (e) {
            console.error('ERROR IN textSearchPosChairEnterKeyPress: ' + e);
        }
    },
    buttonSearchPosChairClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchPosChair.getSelectedIndex();
            var searchValue = this.textSearchPosChair.getDataValue();
            var searchField = "";
            switch (selectIndex) {

                //Search by ID.
            case 0:
                searchField = "CHAIR_ID";
                break;
            case 1:
                searchField = "POSITIONID";
                break;
            case 2:
                searchField = "REL_UNIT.UNIT_NAME";
                break;
            case 3:
                searchField = "REL_POS_MANAGE.NAME";
                break;
            case 4:
                searchField = "REL_POS_WORK.NAME";
                break;
            case 5:
                searchField = "REL_POSITION_TYPE.NAME";
                break;
            case 6:
                searchField = "REL_POS_LEVEL.NAME";
                break;
            case 7:
                searchField = "REL_POSITIONSTATUS.NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.position_chairLiveVariable1.filter.clearData();
            this.position_chairLiveVariable1.filter.setValue(searchField, searchValue);
            this.position_chairLiveVariable1.update();
        } catch (e) {
            console.error('ERROR IN buttonSearchPosChairClick: ' + e);
        }
    },
    buttonClearPosChairClick: function(inSender) {
        try {
            this.position_chairLiveVariable1.filter.clearData();
            this.position_chairLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearPosChairClick: ' + e);
        }
    },
    position_chairLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultPosChair.setDataValue("ผลการค้นหา : " + numRows + " รายการ");

        } catch (e) {
            console.error('ERROR IN position_chairLiveVariable1Result: ' + e);
        }
    },
    //Generate System Chair_id
    POSITIONIDEditor1Change: function(inSender) {
        try {
            var chairID = inSender.getDataValue() + 100000;
            this.CHAIR_IDEditor1.setDataValue(chairID);

        } catch (e) {
            console.error('ERROR IN POSITIONIDEditor1Change: ' + e);
        }
    },
    position_chairLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor7.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor7.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor7.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor7.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN position_chairLiveForm1BeginInsert: ' + e);
        }
    },
    position_chairLiveForm1BeginUpdate: function(inSender) {
        try {
            this.MODIFYBYIDEditor7.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor7.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN position_chairLiveForm1BeginUpdate: ' + e);
        }
    },
    //WI------------------------------------------------------------------------
    textSearchWIEnterKeyPress: function(inSender) {
        try {
            this.buttonSearchWI.click();

        } catch (e) {
            console.error('ERROR IN textSearchWIEnterKeyPress: ' + e);
        }
    },
    buttonSearchWIClick: function(inSender) {
        try {
            var selectIndex = this.selectMenuSearchWI.getSelectedIndex();
            var searchValue = this.textSearchWI.getDataValue();
            var searchField = "";
            switch (selectIndex) {

                //Search by ID.
            case 0:
                searchField = "CHAIR_ID";
                break;
            case 1:
                searchField = "POSITIONID";
                break;
            case 2:
                searchField = "REL_UNIT.UNIT_NAME";
                break;
            case 3:
                searchField = "REL_POS_MANAGE.NAME";
                break;
            case 4:
                searchField = "REL_POS_WORK.NAME";
                break;
            case 5:
                searchField = "REL_POSITION_TYPE.NAME";
                break;
            case 6:
                searchField = "REL_POS_LEVEL.NAME";
                break;
            case 7:
                searchField = "REL_POSITIONSTATUS.NAME";
                break;
            default:
                alert("พบข้อผิดพลาด: ไม่สามารถทำการค้นหาได้!");
                break;
            }

            //Set filter
            this.position_chair_govLiveVariable1.filter.clearData();
            this.position_chair_govLiveVariable1.filter.setValue(searchField, searchValue);
            this.position_chair_govLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonSearchWIClick: ' + e);
        }
    },
    buttonClearWIClick: function(inSender) {
        try {
            this.position_chair_govLiveVariable1.filter.clearData();
            this.position_chair_govLiveVariable1.update();

        } catch (e) {
            console.error('ERROR IN buttonClearWIClick: ' + e);
        }
    },
    position_chair_govLiveVariable1Result: function(inSender, inDeprecated) {
        try {
            var numRows = inSender.getCount();
            this.textSearchResultWI.setDataValue("ผลการค้นหา : " + numRows + " รายการ");

        } catch (e) {
            console.error('ERROR IN position_chair_govLiveVariable1Result: ' + e);
        }
    },
    layer_WI_INFOShow: function(inSender) {
        try {

        } catch (e) {
            console.error('ERROR IN layer_WI_INFOShow: ' + e);
        }
    },
    position_chair_govLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor8.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.CREATETSEditor8.setValue("dataValue", new Date().valueOf());
            this.MODIFYBYIDEditor8.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor8.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN position_chair_govLiveForm1BeginInsert: ' + e);
        }
    },
    position_chair_govLiveForm1BeginUpdate: function(inSender) {
        try {

            this.MODIFYBYIDEditor8.setDataValue(app.svarSecurity.getValue("dataValue"));
            this.MODIFYTSEditor8.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN position_chair_govLiveForm1BeginUpdate: ' + e);
        }
    },
    _end: 0
});