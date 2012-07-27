Page_Adm_UserRole.widgets = {
	lms_basic_roleDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":186,"title":"ปรับแต่งสิทธิการใช้งาน","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_roleLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"112px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"lms_basic_roleLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_roleDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				ROLEIDEditor1: ["wm.Number", {"caption":"Role ID.","captionSize":"200px","emptyValue":"zero","formField":"ROLEID","height":"26px","required":true,"width":"100%"}, {}],
				ROLETITLEEditor1: ["wm.Text", {"caption":"สิทธิการใช้งาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ROLETITLE","height":"26px","required":true,"width":"100%"}, {}],
				ROLECODEEditor1: ["wm.Text", {"caption":"รหัสกำหนดสิทธิ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ROLECODE","height":"26px","required":true,"width":"100%"}, {}],
				DESCEditor1: ["wm.Text", {"caption":"รายละเอียด/คำอธิบาย","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_roleSaveButton: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_roleLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_basic_roleLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_basic_roleCancelButton: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_roleDialog.hide","onclick1":"lms_basic_roleLiveForm1.cancelEdit"}]
		}]
	}],
	lms_basic_roleLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_basic_roleLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"ปรับแต่งสิทธิการใช้งานระบบ"}, {}, {
			lms_basic_roleLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_basic_roleDialog","targetId":null,"targetProperty":"dialog"}, {}],
					wire1: ["wm.Wire", {"source":"lms_basic_roleLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
					wire2: ["wm.Wire", {"source":"lms_basic_roleDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
					wire3: ["wm.Wire", {"source":"lms_basic_roleSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
				}],
				lms_basic_roleDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"ROLEID","title":"Role ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"ROLETITLE","title":"สิทธิการใช้งาน","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"ROLECODE","title":"รหัสกำหนดสิทธิ","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"รายละเอียด/คำอธิบาย","width":"45%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"lms_basic_roleLivePanel1.popupLivePanelEdit"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_roleLiveVariable1","targetProperty":"dataSet"}, {}]
					}]
				}],
				lms_basic_roleGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","roles":["SCA"],"verticalAlign":"top","width":"100%"}, {}, {
					lms_basic_roleNewButton: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_roleLivePanel1.popupLivePanelInsert"}],
					lms_basic_roleUpdateButton: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_roleLivePanel1.popupLivePanelEdit"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_basic_roleDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}],
					lms_basic_roleDeleteButton: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_roleLiveForm1.deleteData"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_basic_roleDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}