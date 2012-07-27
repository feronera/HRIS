Page_PMS_MEMBER.widgets = {
	pms_project_memberDialog: ["wm.DesignableDialog", {"height":"520px","modal":false,"title":"PMS - Member Setting","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			pms_project_memberLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"406px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"pms_project_memberLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_memberDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.REL_PMS_MEMBER_STATUS"}, {}]
				}],
				PJ_MEMBER_IDEditor1: ["wm.Number", {"caption":"PROJECT MEMBER ID.","captionSize":"200px","emptyValue":"zero","formField":"PJ_MEMBER_ID","height":"26px","required":true,"width":"100%"}, {}],
				EMP_IDEditor1: ["wm.Number", {"caption":"EMPLOYEE ID.","captionSize":"200px","emptyValue":"zero","formField":"EMP_ID","height":"26px","required":true,"width":"100%"}, {}],
				REL_PROJECTLookup1: ["wm.Lookup", {"caption":"PROJECT ID.","captionSize":"200px","displayField":"PROJECT_NAME","formField":"REL_PROJECT","required":true,"width":"100%"}, {}],
				PROJECTROLEEditor1: ["wm.Text", {"caption":"PROJECT ROLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PROJECTROLE","height":"26px","width":"100%"}, {}],
				COST_MANDAYEditor1: ["wm.Text", {"caption":"COST MANDAY (BAHT)","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"COST_MANDAY","height":"26px","required":true,"width":"100%"}, {}],
				JOINTSEditor1: ["wm.DateTime", {"caption":"JOIN MEMBER TIME","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"JOINTS","height":"26px","width":"100%"}, {}],
				DISJOINTSEditor1: ["wm.DateTime", {"caption":"DISJOIN MEMBER TIME","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"DISJOINTS","height":"26px","width":"100%"}, {}],
				NOTEEditor1: ["wm.Text", {"caption":"NOTE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NOTE","height":"88px","singleLine":false,"width":"100%"}, {}],
				CREATEBYIDEditor1: ["wm.Number", {"caption":"CREATE BY ID","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","width":"100%"}, {}],
				CREATETSEditor1: ["wm.DateTime", {"caption":"CREATE TIME","captionSize":"200px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","width":"100%"}, {}],
				MODIFYBYIDEditor1: ["wm.Number", {"caption":"MODIFY BY ID.","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","width":"100%"}, {}],
				MODIFYTSEditor1: ["wm.DateTime", {"caption":"MODIFY TIME","captionSize":"200px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","width":"100%"}, {}],
				ISACTIVEEditor1: ["wm.Checkbox", {"caption":"IS ACTIVE","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"ISACTIVE","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pms_project_memberSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pms_project_memberLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"pms_project_memberLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			pms_project_memberCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"pms_project_memberDialog.hide","onclick1":"pms_project_memberLiveForm1.cancelEdit"}]
		}]
	}],
	pms_project_memberLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pms_project_memberLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"PMS Member Management"}, {}, {
			panel1: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}],
			panel2: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				pms_project_memberLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"source":"pms_project_memberDialog","targetId":null,"targetProperty":"dialog"}, {}],
						wire1: ["wm.Wire", {"source":"pms_project_memberLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
						wire2: ["wm.Wire", {"source":"pms_project_memberDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
						wire3: ["wm.Wire", {"source":"pms_project_memberSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
					}],
					pms_project_memberDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"PJ_MEMBER_ID","title":"MEMBER ID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"EMP_ID","title":"EMPLOYEE ID","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"JOINTS","title":"JOINTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"DISJOINTS","title":"DISJOINTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"ISACTIVE","title":"ISACTIVE","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"COST_MANDAY","title":"COST_MANDAY","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"NOTE","title":"NOTE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"PROJECTROLE","title":"PROJECT ROLE","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_PROJECT.PROJECT_ID","title":"PROJECT ID.","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_PROJECT.PROJECT_NAME","title":"PROJECT NAME","width":"45%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_PROJECT.PROJECT_GOAL","title":"REL_PROJECT.PROJECT_GOAL","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PROJECT.OWNER_EMPNO","title":"REL_PROJECT.OWNER_EMPNO","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PROJECT.STARTDATE","title":"REL_PROJECT.STARTDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_PROJECT.FINISHDATE","title":"REL_PROJECT.FINISHDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_PROJECT.PROGRESS","title":"REL_PROJECT.PROGRESS","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PROJECT.OTHER_DETAILS","title":"REL_PROJECT.OTHER_DETAILS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PROJECT.CREATEBYID","title":"REL_PROJECT.CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PROJECT.CREATETS","title":"REL_PROJECT.CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_PROJECT.MODIFYBYID","title":"REL_PROJECT.MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PROJECT.MODIFYTS","title":"REL_PROJECT.MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_PROJECT.BUDGET","title":"REL_PROJECT.BUDGET","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PROJECT.PM","title":"REL_PROJECT.PM","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PROJECT.PROJECT_SITE","title":"REL_PROJECT.PROJECT_SITE","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PROJECT.ISACTIVE","title":"REL_PROJECT.ISACTIVE","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PMS_MEMBER_STATUS.PMS_MEMBER_STATUS_ID","title":"REL_PMS_MEMBER_STATUS.PMS_MEMBER_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PMS_MEMBER_STATUS.MEMBER_STATUS_NAME","title":"REL_PMS_MEMBER_STATUS.MEMBER_STATUS_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PMS_MEMBER_STATUS.DESC","title":"REL_PMS_MEMBER_STATUS.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {"onCellDblClick":"pms_project_memberLivePanel1.popupLivePanelEdit"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_memberLiveVariable1","targetProperty":"dataSet"}, {}]
						}]
					}],
					pms_project_memberGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						pms_project_memberNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pms_project_memberLivePanel1.popupLivePanelInsert"}],
						pms_project_memberUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"pms_project_memberLivePanel1.popupLivePanelEdit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"pms_project_memberDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
							}]
						}],
						pms_project_memberDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pms_project_memberLiveForm1.deleteData"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"pms_project_memberDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
							}]
						}]
					}]
				}]
			}],
			panel3: ["wm.Panel", {"height":"50%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}]
		}]
	}]
}