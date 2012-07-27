Page_Adm_UserManage.widgets = {
	lms_basic_userDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","title":"[ADM_UM_002] ปรับแต่งผู้ใช้งานระบบ","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_userLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"318px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"lms_basic_userLiveForm1BeginInsert","onBeginUpdate":"lms_basic_userLiveForm1BeginUpdate","onSuccess":"lms_basic_userLivePanel1.popupLiveFormSuccess","onUpdateData":"lms_basic_userLiveForm1UpdateData"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_userDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				USERIDEditor1: ["wm.Number", {"caption":"User ID.","captionSize":"200px","emptyValue":"zero","formField":"USERID","height":"26px","required":true,"width":"100%"}, {}],
				USERNAMEEditor1: ["wm.Text", {"caption":"ชื่อผู้ใช้งาน (Username)","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"USERNAME","height":"26px","required":true,"width":"100%"}, {}],
				TENANTIDEditor1: ["wm.Number", {"caption":"TENANTID","captionSize":"200px","defaultInsert":"1","emptyValue":"zero","formField":"TENANTID","height":"26px","required":true,"showing":false,"width":"100%"}, {}],
				PASSWORDEditor1: ["wm.Text", {"caption":"รหัสผ่าน (Password)","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PASSWORD","height":"26px","password":true,"required":true,"roles":["SCA"],"width":"100%"}, {}],
				relLookup1: ["wm.Lookup", {"caption":"รหัสกำหนดสิทธิ (Role Code)","captionSize":"200px","displayField":"ROLECODE","formField":"rel","required":true,"width":"100%"}, {}],
				ROLECODEEditor1: ["wm.Text", {"caption":"ROLE CODE","captionSize":"200px","emptyValue":"emptyString","formField":"ROLECODE","height":"26px","required":true,"showing":false,"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"relLookup1.selectedItem.ROLECODE","targetProperty":"dataValue"}, {}]
					}]
				}],
				ISACTIVEEditor1: ["wm.Checkbox", {"caption":"สถานะ","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"ISACTIVE","height":"26px","startChecked":true,"width":"100%"}, {}],
				EMPLOYEENOEditor1: ["wm.Text", {"caption":"รหัส/เลขที่ บุคลากร","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"EMPLOYEENO","height":"26px","width":"100%"}, {}],
				EMAILEditor1: ["wm.Text", {"caption":"อีเมล์ (Email)","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"EMAIL","height":"26px","regExp":"^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","required":true,"width":"100%"}, {}],
				FOREGETPASSWORDNOEditor1: ["wm.Number", {"caption":"จำนวนครั้งที่กรอกรหัสผิด","captionSize":"200px","defaultInsert":"0","formField":"FOREGETPASSWORDNO","height":"26px","roles":["SCA"],"width":"100%"}, {}],
				CREATEBYIDEditor1: ["wm.Number", {"caption":"กำหนดรหัสโดย","captionSize":"200px","disabled":true,"formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
				CREATETSEditor1: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
				MODIFYBYIDEditor1: ["wm.Number", {"caption":"ปรับปรุงล่าสุดโดย","captionSize":"200px","disabled":true,"formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
				MODIFYTSEditor1: ["wm.DateTime", {"caption":"ปรับปรุงเมื่อ","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_userSaveButton: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_userLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_basic_userLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_basic_userCancelButton: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_userDialog.hide","onclick1":"lms_basic_userLiveForm1.cancelEdit"}]
		}]
	}],
	lms_basic_userLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.lms_basic_userLiveView2"}, {}],
	lms_basic_userLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_basic_userLiveView1"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_userLiveVariable2","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[ADM_UM_001] ปรับแต่งผู้ใช้งานระบบ"}, {}, {
			lms_basic_userLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_basic_userDialog","targetId":null,"targetProperty":"dialog"}, {}],
					wire1: ["wm.Wire", {"source":"lms_basic_userLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
					wire2: ["wm.Wire", {"source":"lms_basic_userDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
					wire3: ["wm.Wire", {"source":"lms_basic_userSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
				}],
				lms_basic_userDojoGrid: ["wm.DojoGrid", {"columns":[{"show":false,"id":"USERID","title":"รหัส","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"USERNAME","title":"ชื่อผู้ใช้งาน (Username)","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"TENANTID","title":"TENANTID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"ROLECODE","title":"ROLECODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"EMPLOYEENO","title":"รหัสบุคลากร","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"rel.ROLECODE","title":"รหัสสิทธิการใช้งาน","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"ISACTIVE","title":"สถานะ","width":"10%","displayType":"CheckBox","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"FOREGETPASSWORDNO","title":"FOREGETPASSWORDNO","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"PASSWORD","title":"PASSWORD","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"rel.ROLEID","title":"Rel.ROLEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"rel.ROLETITLE","title":"Rel.ROLETITLE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"rel.DESC","title":"Rel.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"EMAIL","title":"อีเมล์ (EMAIL)","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"lms_basic_userLivePanel1.popupLivePanelEdit"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_userLiveVariable2","targetProperty":"dataSet"}, {}]
					}]
				}],
				lms_basic_userGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","roles":["SCA"],"verticalAlign":"top","width":"100%"}, {}, {
					lms_basic_userNewButton: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_basic_userLivePanel1.popupLivePanelInsert"}],
					lms_basic_userUpdateButton: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":4,"imageList":"app.silkIconList","margin":"4","width":"98px"}, {"onclick":"lms_basic_userLivePanel1.popupLivePanelEdit"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_basic_userDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}],
					lms_basic_userDeleteButton: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4","width":"93px"}, {"onclick":"lms_basic_userLiveForm1.deleteData"}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_basic_userDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
						}]
					}]
				}]
			}]
		}]
	}]
}