MANP_GOV.widgets = {
	r_positionstatusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_positionstatusLiveView1"}, {}],
	r_unitDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":"460px","modal":false,"title":"ปรับแต่งข้อมูลสังกัด","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			r_unitLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"confirmDelete":"กรุณายืนยันการลบข้อมูลอีกครั้ง","fitToContentHeight":true,"height":"406px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"r_unitLiveForm1BeginInsert","onBeginUpdate":"r_unitLiveForm1BeginUpdate","onSuccess":"r_unitLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"r_unitDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.REL_UNITTYPE"}, {}],
					wire2: ["wm.Wire", {"expression":undefined,"source":"relatedEditor2.dataOutput","targetProperty":"dataOutput.lms_its_reqs"}, {}]
				}],
				UNIT_IDEditor1: ["wm.Number", {"caption":"รหัสสังกัด (Unit ID.)","captionSize":"200px","emptyValue":"zero","formField":"UNIT_ID","height":"26px","required":true,"width":"100%"}, {}],
				UNIT_NAMEEditor1: ["wm.Text", {"caption":"ชื่อสังกัด","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"UNIT_NAME","height":"26px","width":"100%"}, {}],
				lookup1: ["wm.Lookup", {"caption":"หน่วยเรียกสังกัด","captionSize":"200px","displayExpression":"${UNITTYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_UNITTYPE","height":"26px","width":"100%"}, {}],
				UNIT_CODEEditor1: ["wm.Text", {"caption":"รหัสสังกัด/ตัวย่อสังกัด","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"UNIT_CODE","height":"26px","width":"100%"}, {}],
				lookup2: ["wm.Lookup", {"caption":"ประเภทสังกัด","captionSize":"200px","displayExpression":"${UNIT_REGION_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_UNIT_REGION","height":"26px","width":"100%"}, {}],
				lookup3: ["wm.Lookup", {"caption":"สถานะการใช้งานสังกัด","captionSize":"200px","displayExpression":"${UNIT_STATUS_ID} + \" - \" + ${NAME}","displayField":"DESC","formField":"REL_UNIT_STATUS","height":"26px","width":"100%"}, {}],
				filteringLookup1: ["wm.FilteringLookup", {"caption":"ต้นสังกัด","captionSize":"200px","displayField":"UNIT_NAME","formField":"REL_UNIT_PARENT","height":"26px","placeHolder":"พิมพ์ชื่อสังกัดที่ต้องการตรวจหา","width":"100%"}, {}],
				tabLayers3: ["wm.TabLayers", {"fitToContentHeight":true,"height":"216px","transition":"fade"}, {}, {
					layer_UNIT_Ref: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						APPROVE_DATEEditor1: ["wm.DateTime", {"caption":"วันที่อนุมัติ","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"APPROVE_DATE","height":"26px","width":"100%"}, {}],
						ORDER_NOEditor1: ["wm.Text", {"caption":"คำสั่งเลขที่","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ORDER_NO","height":"26px","width":"100%"}, {}],
						ORDER_DATEEditor1: ["wm.DateTime", {"caption":"คำสั่งวันที่","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDER_DATE","height":"26px","width":"100%"}, {}],
						AFFECTIVE_DATEEditor1: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"AFFECTIVE_DATE","height":"26px","width":"100%"}, {}],
						CANCEL_DATEEditor1: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCEL_DATE","height":"26px","width":"100%"}, {}],
						COMMENTEditor1: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"COMMENT","height":"52px","singleLine":false,"width":"100%"}, {}]
					}],
					layer_UNIT_Attach: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
					layer_UNIT_System: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						CREATEBYIDEditor1: ["wm.Text", {"caption":"รหัสผู้กำหนด","captionSize":"200px","dataValue":"","disabled":true,"emptyValue":"emptyString","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
						CREATETSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่กำหนด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
						MODIFYBYIDEditor1: ["wm.Text", {"caption":"รหัสผู้ปรับปรุงล่าสุด","captionSize":"200px","dataValue":"","disabled":true,"emptyValue":"emptyString","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
						MODIFYTSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่ปรับปรุงล่าสุด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
					}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			r_unitSaveButton: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unitLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"r_unitLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			r_unitCancelButton: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unitDialog.hide","onclick1":"r_unitLiveForm1.cancelEdit"}]
		}]
	}],
	r_unit_regionLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unit_regionLiveView1"}, {}],
	r_unit_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unit_statusLiveView1"}, {"onCanUpdate":"r_unit_statusLiveVariable1CanUpdate","onResult":"r_unit_statusLiveVariable1Result"}],
	loadingDialog16: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	r_unittypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unittypeLiveView1"}, {}],
	binding: ["wm.Binding", {}, {}, {
		wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"dataSet"}, {}]
	}],
	r_unit_refdocLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unit_refdocLiveView1"}, {}],
	r_unitLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unitLiveView","matchMode":"anywhere"}, {"onResult":"r_unitLiveVariable1Result"}],
	LVar_Unit_MT: ["wm.LiveVariable", {"liveSource":"app.r_unitLiveView"}, {}],
	navCall_Unit_Info: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"layer_UNIT_Info","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"true","targetProperty":"showOnlyParentLayer"}, {}]
			}]
		}]
	}],
	navCall_UNIT_List: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer_UNIT_List","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"true","targetProperty":"showOnlyParentLayer"}, {}]
			}]
		}]
	}],
	r_position_type_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_position_type_statusLiveView1"}, {}],
	r_position_typeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_position_typeLiveView","matchMode":"anywhere"}, {"onResult":"r_position_typeLiveVariable1Result"}],
	navCall_PosType_List: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer_POSTYPE_LIST","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"true","targetProperty":"showOnlyParentLayer"}, {}]
			}]
		}]
	}],
	navCall_PosType_Info: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer_POSTYPE_INFO","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"true","targetProperty":"showOnlyParentLayer"}, {}]
			}]
		}]
	}],
	LVar_PosType_MT: ["wm.LiveVariable", {"liveSource":"app.r_position_typeLiveView"}, {}],
	r_position_management_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_position_management_statusLiveView1"}, {"onSuccess":"r_position_management_statusLiveVariable1Success"}],
	r_position_managementLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_position_managementLiveView1","matchMode":"anywhere"}, {"onResult":"r_position_managementLiveVariable1Result"}],
	r_position_work_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_position_work_statusLiveView1"}, {"onSuccess":"r_position_work_statusLiveVariable1Success"}],
	r_position_workLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_position_workLiveView1","matchMode":"anywhere"}, {"onResult":"r_position_workLiveVariable1Result"}],
	r_level_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_level_statusLiveView1"}, {"onResult":"r_level_statusLiveVariable1Result"}],
	r_levelLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_levelLiveView1","matchMode":"anywhere"}, {"onResult":"r_levelLiveVariable1Result"}],
	position_chairLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.position_chairLiveView1","matchMode":"anywhere"}, {"onResult":"position_chairLiveVariable1Result"}],
	LVar_PersonalType: ["wm.LiveVariable", {"liveSource":"com.LMS.data.R_PERSONALTYPE"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"1","targetProperty":"filter.PERSONTYPE_ID"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"autoScroll":false,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[MANP_GOV] 1. การจัดการข้อมูลข้าราชการ"}, {}, {
			tabLayers1: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_GOV_PosNumber: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.1 เลขที่ตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers15: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_Chair_MT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.1.1 จัดการเลขที่ตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							layers_Chair: ["wm.Layers", {}, {}, {
								layer_Chair_List: ["wm.Layer", {"borderColor":"","caption":"layer11","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									position_chairLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										position_chairGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[CHAIR_GOV_LIST]  รายการข้อมูลเลขที่ตำแหน่ง"}, {}, {
											panel19: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												selectMenuSearchPosChair: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - Chair ID.,1 - เลขที่ตำแหน่ง,2 - ชื่อหน่วยงาน,3 - ตำแหน่งในการบริหาร,,4 - ตำแหน่งในสายงาน,5 - ประเภทตำแหน่ง,6 - ระดับตำแหน่ง,7 - สถานะ","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
												textSearchPosChair: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchPosChairEnterKeyPress"}],
												buttonSearchPosChair: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchPosChairClick"}],
												buttonClearPosChair: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearPosChairClick"}]
											}],
											position_chairDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":false,"id":"CHAIR_ID","title":"CHAIR_ID","width":"5%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"STEP_SALARY","title":"STEP_SALARY","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"POSITION_SALARY","title":"POSITION_SALARY","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"EFFECTIVEDATE","title":"EFFECTIVEDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"SALARY_TYPE","title":"SALARY_TYPE","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"COMMENT","title":"COMMENT","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"SALARY","title":"SALARY","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MINISTRY_CMD_NUMBER","title":"MINISTRY_CMD_NUMBER","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MINISTRY_CMD_YEAR","title":"MINISTRY_CMD_YEAR","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MINISTRY_CMD_DATE","title":"MINISTRY_CMD_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MINISTRY_BOOK_NUMBER","title":"MINISTRY_BOOK_NUMBER","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MINISTRY_BOOK_DATE","title":"MINISTRY_BOOK_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MINISTRY_COMMENT","title":"MINISTRY_COMMENT","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"STATUS_MINISTRY","title":"STATUS_MINISTRY","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"POSITIONID","title":"เลขที่ตำแหน่ง","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_POSITION_TYPE.POSITION_TYPE_ID","title":"REL_POSITION_TYPE.POSITION_TYPE_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_UNIT.UNIT_NAME","title":"ชื่อหน่วยงาน","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_POS_MANAGE.NAME","title":"ตำแหน่งในการบริหาร","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_POS_WORK.NAME","title":"ตำแหน่งในสายงาน","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_POSITION_TYPE.NAME","title":"ประเภทตำแหน่ง","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_UNIT.UNIT_ID","title":"REL_UNIT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT.UNIT_CODE","title":"REL_UNIT.UNIT_CODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"REL_POS_LEVEL.NAME","title":"ระดับตำแหน่ง","width":"10%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_POS_MANAGE.POSITION_MANAGEMENT_ID","title":"REL_POS_MANAGE.POSITION_MANAGEMENT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POS_WORK.POSITION_WORK_ID","title":"REL_POS_WORK.POSITION_WORK_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POS_LEVEL.LEVEL_ID","title":"REL_POS_LEVEL.LEVEL_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSONAL_TYPE.PERSONTYPE_ID","title":"REL_POSONAL_TYPE.PERSONTYPE_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSONAL_TYPE.NAME","title":"REL_POSONAL_TYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITIONSTATUS.POSITIONSTATUS_ID","title":"REL_POSITIONSTATUS.POSITIONSTATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_POSITIONSTATUS.NAME","title":"สถานะ","width":"10%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"position_chairLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											Layer_UNIT_Info5: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												textSearchResultPosChair: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
												spacer15: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
												buttonPreviewPosChair: ["wm.Button", {"caption":"เลือก","imageIndex":17,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_Chair_Info"}]
											}]
										}]
									}]
								}],
								layer_Chair_Info: ["wm.Layer", {"borderColor":"","caption":"layer11","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									position_chairDetailsPanel: ["wm.FancyPanel", {"title":"[CHAIR_GOV_INFO] จัดการข้อมูลเลขที่ตำแหน่ง"}, {}, {
										position_chairLiveForm1: ["wm.LiveForm", {"autoScroll":true,"captionSize":"140px","confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"position_chairLiveForm1BeginInsert","onBeginUpdate":"position_chairLiveForm1BeginUpdate","onSuccess":"position_chairLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"position_chairDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
											}],
											CHAIR_IDEditor1: ["wm.Text", {"caption":"CHAIR ID.","captionSize":"140px","dataValue":"","disabled":true,"emptyValue":"emptyString","formField":"CHAIR_ID","height":"26px","readonly":true,"showing":false,"width":"100%"}, {}],
											POSITIONIDEditor1: ["wm.Number", {"caption":"เลขที่ตำแหน่ง","captionSize":"140px","emptyValue":"zero","formField":"POSITIONID","height":"26px","readonly":true,"width":"100%"}, {"onchange":"POSITIONIDEditor1Change"}],
											lookup15: ["wm.Lookup", {"caption":"ประเภทบุคลากร","captionSize":"140px","disabled":true,"displayExpression":"${PERSONTYPE_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_POSONAL_TYPE","height":"26px","readonly":true,"width":"100%"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"LVar_PersonalType","targetProperty":"defaultInsert"}, {}]
												}]
											}],
											panel24: ["wm.Panel", {"fitToContentHeight":true,"height":"78px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel25: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													lookup11: ["wm.Lookup", {"caption":"ประเภทหน่วยงาน/ สังกัด","captionSize":"140px","displayExpression":"${UNIT_ID} + \" - \" + ${UNIT_NAME}","displayField":"UNIT_CODE","formField":"REL_UNIT","height":"26px","readonly":true,"width":"100%"}, {}],
													lookup12: ["wm.Lookup", {"caption":"ตำแหน่งในการบริหาร","captionSize":"140px","displayExpression":"${POSITION_MANAGEMENT_ID} + \" - \" + ${NAME}","displayField":"MEMO","formField":"REL_POS_MANAGE","height":"26px","readonly":true,"width":"100%"}, {}],
													lookup10: ["wm.Lookup", {"caption":"ประเภทตำแหน่ง","captionSize":"140px","displayExpression":"${POSITION_TYPE_ID} + \" - \" + ${NAME}","displayField":"MEMO","formField":"REL_POSITION_TYPE","height":"26px","readonly":true,"width":"100%"}, {}]
												}],
												panel26: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													spacer17: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													lookup13: ["wm.Lookup", {"caption":"ตำแหน่งในสายงาน","captionSize":"140px","displayExpression":"${POSITION_WORK_ID} + \" - \" + ${NAME}","displayField":"MEMO","formField":"REL_POS_WORK","height":"26px","readonly":true,"width":"100%"}, {}],
													lookup14: ["wm.Lookup", {"caption":"ระดับตำแหน่ง","captionSize":"140px","displayExpression":"${LEVEL_ID} + \" - \" + ${NAME}","displayField":"MEMO","formField":"REL_POS_LEVEL","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}],
											EFFECTIVEDATEEditor5: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้อัตราใหม่","captionSize":"140px","dateMode":"Date","emptyValue":"emptyString","formField":"EFFECTIVEDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											lookup16: ["wm.Lookup", {"caption":"สถานะเลขที่ตำแหน่ง","captionSize":"140px","displayExpression":"${POSITIONSTATUS_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_POSITIONSTATUS","height":"26px","readonly":true,"width":"100%"}, {}],
											SALARY_TYPEEditor1: ["wm.Number", {"caption":"ประเภทเงินเดือน","captionSize":"140px","emptyValue":"zero","formField":"SALARY_TYPE","height":"26px","readonly":true,"width":"100%"}, {}],
											POSITION_SALARYEditor1: ["wm.Number", {"caption":"เงินประจำตำแหน่ง (บาท)","captionSize":"140px","emptyValue":"zero","formField":"POSITION_SALARY","height":"26px","readonly":true,"width":"100%"}, {}],
											STEP_SALARYEditor1: ["wm.Number", {"caption":"ขั้นเงินเดือน (บาท)","captionSize":"140px","emptyValue":"zero","formField":"STEP_SALARY","height":"26px","readonly":true,"width":"100%"}, {}],
											COMMENTEditor3: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"140px","dataValue":"","emptyValue":"emptyString","formField":"COMMENT","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											SALARYEditor1: ["wm.Number", {"caption":"อัตราเงินเดือนถือจ่าย (บาท)","captionSize":"140px","emptyValue":"zero","formField":"SALARY","height":"26px","readonly":true,"width":"100%"}, {}],
											panel20: ["wm.Panel", {"fitToContentHeight":true,"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel21: ["wm.Panel", {"fitToContentHeight":true,"height":"52px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													panel23: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														MINISTRY_CMD_NUMBEREditor1: ["wm.Number", {"caption":"มติ อ.ก.พ. กระทรวงครั้งที่","captionSize":"140px","emptyValue":"zero","formField":"MINISTRY_CMD_NUMBER","height":"26px","readonly":true,"width":"70%"}, {}],
														MINISTRY_CMD_YEAREditor1: ["wm.Number", {"caption":"/","captionSize":"15px","emptyValue":"zero","formField":"MINISTRY_CMD_YEAR","height":"26px","readonly":true,"width":"30%"}, {}]
													}],
													MINISTRY_BOOK_NUMBEREditor1: ["wm.Number", {"caption":"ตามหนังสือเลขที่","captionSize":"140px","emptyValue":"zero","formField":"MINISTRY_BOOK_NUMBER","height":"26px","readonly":true,"width":"100%"}, {}]
												}],
												panel22: ["wm.Panel", {"height":"48px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													MINISTRY_CMD_DATEEditor1: ["wm.DateTime", {"caption":"วันที่","captionSize":"140px","dateMode":"Date","emptyValue":"emptyString","formField":"MINISTRY_CMD_DATE","height":"26px","readonly":true,"width":"100%"}, {}],
													MINISTRY_BOOK_DATEEditor1: ["wm.DateTime", {"caption":"ลงวันที่","captionSize":"140px","dateMode":"Date","emptyValue":"emptyString","formField":"MINISTRY_BOOK_DATE","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}],
											MINISTRY_COMMENTEditor1: ["wm.Text", {"caption":"หมายเหตุ (มติ อ.ก.พ.)","captionSize":"140px","dataValue":"","emptyValue":"emptyString","formField":"MINISTRY_COMMENT","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											STATUS_MINISTRYEditor1: ["wm.Text", {"caption":"สถานะตำแหน่งจากมติ อ.ก.พ. กระทรวงฯ/ คปร","captionAlign":"left","captionSize":"140px","dataValue":"","emptyValue":"emptyString","formField":"STATUS_MINISTRY","readonly":true,"width":"100%"}, {}],
											tabLayers2: ["wm.TabLayers", {"fitToContentHeight":true,"height":"138px","transition":"fade"}, {}, {
												layer11: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
												layer12: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													CREATEBYIDEditor7: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"140px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													CREATETSEditor7: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"140px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYBYIDEditor7: ["wm.Number", {"caption":"รหัสผู้ปรับแต่ง","captionSize":"140px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYTSEditor7: ["wm.DateTime", {"caption":"ปรับแต่งล่าสุดเมื่อ","captionSize":"140px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}]
										}],
										position_chairLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"position_chairLiveForm1","lock":false,"operationPanel":"operationPanel13","savePanel":"savePanel13"}, {}, {
											savePanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton13: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"position_chairLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"position_chairLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton13: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"position_chairLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												buttonChairList: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_Chair_List"}],
												spacer16: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
												newButton13: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"position_chairLiveForm1EditPanel.beginDataInsert"}],
												updateButton13: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"position_chairLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"position_chairLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton13: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"position_chairLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"position_chairLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_Chair_Config: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.1.2 ปรับแต่งข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							tabLayers16: ["wm.TabLayers", {}, {}, {
								layer_Chair_PosStatus: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.1.2.1 ประเภทของกรอบอัตรากำลัง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_positionstatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_positionstatusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_POSITIONSTATUS] ประเภทของกรอบอัตรากำลังปรับแต่ง"}, {}, {
											r_positionstatusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"POSITIONSTATUS_ID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ประเภทของกรอบอัตรากำลัง","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_positionstatusLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_positionstatusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียดปรับแต่ง"}, {}, {
											r_positionstatusLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_positionstatusLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_positionstatusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												POSITIONSTATUS_IDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"POSITIONSTATUS_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												NAMEEditor1: ["wm.Text", {"caption":"ประเภทของกรอบอัตรากำลัง","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
												r_positionstatusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_positionstatusLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
													savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton1: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_positionstatusLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_positionstatusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton1: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_positionstatusLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton1: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_positionstatusLiveForm1EditPanel.beginDataInsert"}],
														updateButton1: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_positionstatusLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_positionstatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton1: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_positionstatusLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_positionstatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_GOV_PosCategories: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.2 ประเภทตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers6: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_R_PosType: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.2.1 จัดการประเภทตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							layers_POSTYPE_MT: ["wm.Layers", {"transition":"fade"}, {}, {
								layer_POSTYPE_LIST: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									fancyPanel4: ["wm.FancyPanel", {"title":"[R_POSTYPE_LIST] รายการข้อมูลประเภทตำแหน่ง"}, {}, {
										panel5: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
											selectMenuSearchPosType: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - รหัสประเภทตำแหน่ง,1 - ประเภทตำแหน่ง,2 - สถานะ","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
											textSearchPosType: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchPosTypeEnterKeyPress"}],
											buttonSearchPosType: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchPosTypeClick"}],
											buttonClearPosType: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearPosTypeClick"}]
										}],
										dojoGrid_PosType: ["wm.DojoGrid", {"columns":[{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"POSITION_TYPE_ID","title":"รหัสประเภทตำแหน่ง","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ประเภทตำแหน่ง","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"ORDERSOURCE","title":"ORDERSOURCE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDERDATE","title":"ORDERDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"ORDERNO","title":"ORDERNO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"EFFECTIVEDATE","title":"EFFECTIVEDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CANCELDATE","title":"CANCELDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MEMO","title":"MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_TYPE_STATUS.POSITION_TYPE_STAT_ID","title":"REL_POSITION_TYPE_STATUS.POSITION_TYPE_STAT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_POSITION_TYPE_STATUS.NAME","title":"สถานะ","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dojoGrid_PosTypeClick"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"r_position_typeLiveVariable1","targetProperty":"dataSet"}, {}]
											}]
										}],
										Layer_UNIT_Info1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
											textSearchResultPosType: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
											spacer7: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
											buttonPreviewPosType: ["wm.Button", {"caption":"เลือก","imageIndex":17,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navCall_PosType_Info"}]
										}]
									}]
								}],
								layer_POSTYPE_INFO: ["wm.Layer", {"borderColor":"","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_position_typeDetailsPanel: ["wm.FancyPanel", {"innerHorizontalAlign":"center","innerVerticalAlign":"middle","title":"[R_POSTYPE_INFO] ข้อมูลประเภทตำแหน่ง"}, {}, {
										panel11: ["wm.Panel", {"fitToContentHeight":true,"height":"251px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
											r_position_typeLiveForm1: ["wm.LiveForm", {"captionSize":"120px","confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"r_position_typeLiveForm1BeginInsert","onBeginUpdate":"r_position_typeLiveForm1BeginUpdate","onSuccess":"LVar_PosType_MT"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid_PosType.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												POSITION_TYPE_IDEditor1: ["wm.Number", {"caption":"รหัสประเภทตำแหน่ง","captionSize":"120px","emptyValue":"zero","formField":"POSITION_TYPE_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												NAMEEditor5: ["wm.Text", {"caption":"ประเภทตำแหน่ง","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
												lookup7: ["wm.Lookup", {"caption":"สถานะ","captionSize":"120px","displayExpression":"${POSITION_TYPE_STAT_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_POSITION_TYPE_STATUS","height":"26px","readonly":true,"width":"100%"}, {}],
												panel10: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													ORDERSOURCEEditor1: ["wm.Text", {"caption":"อ้างอิงจาก","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"ORDERSOURCE","height":"26px","readonly":true,"width":"100%"}, {}],
													ORDERNOEditor1: ["wm.Text", {"caption":"เลขที่","captionSize":"50px","dataValue":"","emptyValue":"emptyString","formField":"ORDERNO","height":"26px","readonly":true,"width":"100%"}, {}],
													ORDERDATEEditor1: ["wm.DateTime", {"caption":"วันที่","captionSize":"50px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDERDATE","height":"26px","readonly":true,"width":"100%"}, {}]
												}],
												EFFECTIVEDATEEditor1: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"120px","dateMode":"Date","emptyValue":"emptyString","formField":"EFFECTIVEDATE","height":"26px","readonly":true,"width":"100%"}, {}],
												CANCELDATEEditor1: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"120px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCELDATE","height":"26px","readonly":true,"width":"100%"}, {}],
												MEMOEditor1: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
												tabLayers8: ["wm.TabLayers", {"fitToContentHeight":true,"height":"43px","transition":"fade"}, {}, {
													layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารแนบ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
													layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
														CREATEBYIDEditor4: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"120px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
														CREATETSEditor4: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"120px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"28px","readonly":true,"width":"100%"}, {}],
														MODIFYBYIDEditor4: ["wm.Number", {"caption":"ปรับปรุงล่าสุดโดย","captionSize":"120px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
														MODIFYTSEditor4: ["wm.DateTime", {"caption":"ปรับปรุงล่าสุดเมื่อ","captionSize":"120px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
													}]
												}]
											}]
										}],
										r_position_typeLiveForm1EditPanel: ["wm.EditPanel", {"height":"36px","horizontalAlign":"center","isCustomized":true,"liveForm":"r_position_typeLiveForm1","lock":false,"operationPanel":"operationPanel7","savePanel":"savePanel7","verticalAlign":"middle"}, {}, {
											savePanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton7: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_typeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_typeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton7: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_typeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel7: ["wm.Panel", {"height":"36px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												buttonListPosType: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonListPosTypeClick","onclick1":"navCall_PosType_List"}],
												spacer8: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
												newButton7: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_typeLiveForm1EditPanel.beginDataInsert"}],
												updateButton7: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_typeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_typeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton7: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_typeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_typeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_PosType_Config: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.2.2 ปรับแต่งข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							tabLayers7: ["wm.TabLayers", {"transition":"fade"}, {}, {
								layer_POSTYPE_STATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.2.2.1 สถานะประเภทตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_position_type_statusLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_position_type_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_POSTYPE_STAT] ปรับแต่งสถานะประเภทตำแหน่ง"}, {}, {
											panel12: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												r_position_type_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"POSITION_TYPE_STAT_ID","title":"รหัสสถานะประเภทตำแหน่ง","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"สถานะประเภทตำแหน่ง","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_type_statusLiveVariable1","targetProperty":"dataSet"}, {}]
													}]
												}]
											}],
											r_position_type_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
												r_position_type_statusLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_position_type_statusLiveVariable1"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_type_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
													}],
													POSITION_TYPE_STAT_IDEditor1: ["wm.Number", {"caption":"รหัสสถานะประเภทตำแหน่ง","captionSize":"200px","emptyValue":"zero","formField":"POSITION_TYPE_STAT_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
													NAMEEditor4: ["wm.Text", {"caption":"สถานะประเภทตำแหน่ง","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
													r_position_type_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_position_type_statusLiveForm1","lock":false,"operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
														savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
															saveButton5: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_type_statusLiveForm1EditPanel.saveData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"r_position_type_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
																}]
															}],
															cancelButton5: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_type_statusLiveForm1EditPanel.cancelEdit"}]
														}],
														operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
															newButton5: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_type_statusLiveForm1EditPanel.beginDataInsert"}],
															updateButton5: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_type_statusLiveForm1EditPanel.beginDataUpdate"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"r_position_type_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}],
															deleteButton5: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_type_statusLiveForm1EditPanel.deleteData"}, {
																binding: ["wm.Binding", {}, {}, {
																	wire: ["wm.Wire", {"expression":undefined,"source":"r_position_type_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
																}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_GOV_PosManTitle: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.3 จัดการชื่อตำแหน่งในการบริหาร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					layer_R_PosManage: ["wm.TabLayers", {}, {}, {
						layer_R_PosManage_MT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.3.1 จัดการข้อมูลชื่อตำแหน่งในการบริหาร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							layers_R_POS_MANAGE: ["wm.Layers", {"transition":"fade"}, {}, {
								layer_R_POS_MANAGE_MT: ["wm.Layer", {"borderColor":"","caption":"layer5","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_position_managementLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_position_managementGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_POS_MANAGE_STAT_LIST] รายการข้อมูลชื่อตำแหน่งในการบริหาร"}, {}, {
											panel13: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												selectMenuSearchPosManage: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - รหัส,1 - ชื่อตำแหน่งในการบริหาร,2 - สถานะ","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
												textSearchPosManage: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchPosManageEnterKeyPress"}],
												buttonSearchPosManage: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchPosManageClick"}],
												buttonClearPosManage: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearPosManageClick"}]
											}],
											r_position_managementDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"POSITION_MANAGEMENT_ID","title":"รหัสชื่อตำแหน่งในการบริหาร","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ชื่อตำแหน่งในการบริหาร","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"ORDERDOCREF","title":"ORDERDOCREF","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"EFFECTIVEDATE","title":"EFFECTIVEDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"ORDERNO","title":"ORDERNO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDERDATE","title":"ORDERDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CANCELDATE","title":"CANCELDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MEMO","title":"MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_POS_MNMT_STAT.POS_MANAGE_STATUS_ID","title":"REL_POS_MNMT_STAT.POS_MANAGE_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_POS_MNMT_STAT.STATUS_NAME","title":"สถานะ","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_position_managementLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											Layer_UNIT_Info2: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												textSearchResultPosManage: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
												spacer9: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
												buttonPreviewPosManage: ["wm.Button", {"caption":"เลือก","imageIndex":17,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_R_POS_MANAGE_INFO"}]
											}]
										}]
									}]
								}],
								layer_R_POS_MANAGE_INFO: ["wm.Layer", {"borderColor":"","caption":"layer5","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_position_managementDetailsPanel: ["wm.FancyPanel", {"freeze":false,"title":"[R_POS_MANAGE_STAT_INFO] รายละเอียดข้อมูลชื่อตำแหน่งในการบริหาร"}, {}, {
										r_position_managementLiveForm1: ["wm.LiveForm", {"autoScroll":true,"captionSize":"130px","confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"r_position_managementLiveForm1BeginInsert","onBeginUpdate":"r_position_managementLiveForm1BeginUpdate","onSuccess":"r_position_managementLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"r_position_managementDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
											}],
											POSITION_MANAGEMENT_IDEditor1: ["wm.Number", {"caption":"รหัสชื่อตำแหน่ง","captionSize":"130px","emptyValue":"zero","formField":"POSITION_MANAGEMENT_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
											NAMEEditor6: ["wm.Text", {"caption":"ชื่อตำแหน่งทางการบริหาร","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
											lookup5: ["wm.Lookup", {"caption":"สถานะ","captionSize":"130px","displayExpression":"${POS_MANAGE_STATUS_ID} + \" - \" + ${STATUS_NAME}","displayField":"STATUS_NAME","formField":"REL_POS_MNMT_STAT","height":"26px","readonly":true,"width":"100%"}, {}],
											panel14: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												ORDERDOCREFEditor1: ["wm.Text", {"caption":"อ้างอิงจาก","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"ORDERDOCREF","height":"26px","readonly":true,"width":"50%"}, {}],
												ORDERNOEditor2: ["wm.Text", {"caption":"เลขที่","captionSize":"50px","dataValue":"","emptyValue":"emptyString","formField":"ORDERNO","height":"26px","readonly":true,"width":"25%"}, {}],
												ORDERDATEEditor2: ["wm.DateTime", {"caption":"วันที่","captionSize":"50px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDERDATE","height":"26px","readonly":true,"width":"25%"}, {}]
											}],
											EFFECTIVEDATEEditor2: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"EFFECTIVEDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											CANCELDATEEditor2: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCELDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											MEMOEditor2: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											tabLayers10: ["wm.TabLayers", {"transition":"fade"}, {}, {
												layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
												layer6: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													CREATEBYIDEditor3: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													CREATETSEditor3: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"130px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYBYIDEditor3: ["wm.Number", {"caption":"รหัสผู้ปรับแต่งล่าสุด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYTSEditor3: ["wm.DateTime", {"caption":"ปรับแต่งล่าสุดเมื่อ","captionSize":"130px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}]
										}],
										r_position_managementLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_position_managementLiveForm1","lock":false,"operationPanel":"operationPanel8","savePanel":"savePanel8"}, {}, {
											savePanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton8: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_managementLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_managementLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton8: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_managementLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												buttonListPOSManage: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_R_POS_MANAGE_MT"}],
												spacer10: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
												newButton8: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_managementLiveForm1EditPanel.beginDataInsert"}],
												updateButton8: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_managementLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_managementLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton8: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_managementLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_managementLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_PosManage_Config: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.3.2 ปรับแต่งข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							tabLayers9: ["wm.TabLayers", {}, {}, {
								layer_R_PosManage_Status: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.3.2.1 สถานะตำแหน่งในการบริหาร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_position_management_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_position_management_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_POS_MANAGE_STAT] ปรับแต่งสถานะตำแหน่งในการบริหาร"}, {}, {
											r_position_management_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"POS_MANAGE_STATUS_ID","title":"รหัสสถานะตำแหน่ง","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUS_NAME","title":"สถานะตำแหน่งในการบริหาร","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_position_management_statusLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_position_management_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
											r_position_management_statusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_position_management_statusLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_position_management_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												POS_MANAGE_STATUS_IDEditor1: ["wm.Number", {"caption":"รหัสสถานะตำแหน่งในการบริหาร","captionSize":"200px","emptyValue":"zero","formField":"POS_MANAGE_STATUS_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												STATUS_NAMEEditor1: ["wm.Text", {"caption":"สถานะตำแหน่งในการบริหาร","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUS_NAME","height":"26px","readonly":true,"width":"100%"}, {}],
												r_position_management_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_position_management_statusLiveForm1","lock":false,"operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
													savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton6: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_management_statusLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_position_management_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton6: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_management_statusLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton6: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_management_statusLiveForm1EditPanel.beginDataInsert"}],
														updateButton6: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_management_statusLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_position_management_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton6: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_management_statusLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_position_management_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_PosWork: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.4 ชื่อตำแหน่งในสายงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					layer_R_PosWork: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_R_PosWork_MT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.4.1 จัดการข้อมูลชื่อตำแหน่งในสายงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							layers_R_PosWork: ["wm.Layers", {}, {}, {
								layer_R_PosWork_List: ["wm.Layer", {"borderColor":"","caption":"layer7","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_position_workLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_position_workGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_POS_WORK_LIST] รายการข้อมูลชื่อตำแหน่งในสายงาน"}, {}, {
											panel15: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												selectMenuSearchPosWork: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - รหัส,1 - ชื่อตำแหน่งในสายงาน,2 - สถานะ","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
												textSearchPosWork: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchPosWorkEnterKeyPress"}],
												buttonSearchPosWork: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchPosWorkClick"}],
												buttonClearPosWork: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearPosWorkClick"}]
											}],
											r_position_workDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"POSITION_WORK_ID","title":"รหัสชื่อตำแหน่งในสายงาน","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ชื่อตำแหน่งในสายงาน","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"ORDERDOCREF","title":"ORDERDOCREF","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDERNO","title":"ORDERNO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDERDATE","title":"ORDERDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"EFFECTIVEDATE","title":"EFFECTIVEDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CANCELDATE","title":"CANCELDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MEMO","title":"MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_POS_WORK_STATUS.POSITION_WORK_STAT_ID","title":"REL_POS_WORK_STATUS.POSITION_WORK_STAT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_POS_WORK_STATUS.STATUS_NAME","title":"สถานะ","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_position_workLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											Layer_UNIT_Info3: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												textSearchResultPosWork: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
												spacer11: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
												buttonPreviewWork: ["wm.Button", {"caption":"เลือก","imageIndex":17,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_R_PosWork_Info"}]
											}]
										}]
									}]
								}],
								layer_R_PosWork_Info: ["wm.Layer", {"borderColor":"","caption":"layer7","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_position_workDetailsPanel: ["wm.FancyPanel", {"freeze":false,"title":"[R_POS_WORK_INFO] รายละเอียดข้อมูลชื่อตำแหน่งในสายงาน"}, {}, {
										r_position_workLiveForm1: ["wm.LiveForm", {"captionSize":"120px","confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"320px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"r_position_workLiveForm1BeginInsert","onBeginUpdate":"r_position_workLiveForm1BeginUpdate","onSuccess":"r_position_workLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"r_position_workDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
											}],
											POSITION_WORK_IDEditor1: ["wm.Number", {"caption":"รหัสชื่อตำแหน่งในสายงาน","captionSize":"120px","emptyValue":"zero","formField":"POSITION_WORK_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
											NAMEEditor7: ["wm.Text", {"caption":"ชื่อตำแหน่งในสายงาน","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
											lookup6: ["wm.Lookup", {"caption":"สถานะ","captionSize":"120px","displayExpression":"${POSITION_WORK_STAT_ID} + \" - \" + ${STATUS_NAME}","displayField":"STATUS_NAME","formField":"REL_POS_WORK_STATUS","height":"26px","readonly":true,"width":"100%"}, {}],
											panel16: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												ORDERDOCREFEditor2: ["wm.Text", {"caption":"อ้างอิงจาก","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"ORDERDOCREF","height":"26px","readonly":true,"width":"50%"}, {}],
												ORDERNOEditor3: ["wm.Text", {"caption":"เลขที่","captionSize":"50px","dataValue":"","emptyValue":"emptyString","formField":"ORDERNO","height":"26px","readonly":true,"width":"25%"}, {}],
												ORDERDATEEditor3: ["wm.DateTime", {"caption":"วันที่","captionSize":"50px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDERDATE","height":"26px","readonly":true,"width":"25%"}, {}]
											}],
											EFFECTIVEDATEEditor3: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"120px","dateMode":"Date","emptyValue":"emptyString","formField":"EFFECTIVEDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											CANCELDATEEditor3: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"120px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCELDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											MEMOEditor3: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"26px","readonly":true,"width":"100%"}, {}],
											tabLayers12: ["wm.TabLayers", {"fitToContentHeight":true,"height":"138px","transition":"fade"}, {}, {
												layer7: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
												layer8: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													CREATEBYIDEditor5: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"120px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													CREATETSEditor5: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"120px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYBYIDEditor5: ["wm.Number", {"caption":"รหัสผู้ปรับปรุงล่าสุด","captionSize":"120px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYTSEditor5: ["wm.DateTime", {"caption":"ปรับปรงล่าสุดเมื่อ","captionSize":"120px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}]
										}],
										r_position_workLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_position_workLiveForm1","lock":false,"operationPanel":"operationPanel10","savePanel":"savePanel10"}, {}, {
											savePanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton10: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_workLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_workLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton10: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_workLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												buttonWorkList: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_R_PosWork_List"}],
												spacer12: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
												newButton10: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_workLiveForm1EditPanel.beginDataInsert"}],
												updateButton10: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_workLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_workLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton10: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_workLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_position_workLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_PosWork_Config: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.4.2 ปรับแต่งข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							tabLayers11: ["wm.TabLayers", {"transition":"fade"}, {}, {
								layer_R_PosWork_Status: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.4.2.1 สถานะตำแหน่งในสายงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_position_work_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_position_work_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_POS_WORK_STAT] ปรับแต่งสถานะตำแหน่งในสายงาน"}, {}, {
											r_position_work_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"POSITION_WORK_STAT_ID","title":"รหัสสถานะตำแหน่งในสายงาน","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUS_NAME","title":"สถานะตำแหน่งในสายงาน","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_position_work_statusLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_position_work_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
											r_position_work_statusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_position_work_statusLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_position_work_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												POSITION_WORK_STAT_IDEditor1: ["wm.Number", {"caption":"รหัสสถานะตำแหน่งในสายงาน","captionSize":"200px","emptyValue":"zero","formField":"POSITION_WORK_STAT_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												STATUS_NAMEEditor2: ["wm.Text", {"caption":"สถานะตำแหน่งในสายงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUS_NAME","height":"26px","readonly":true,"width":"100%"}, {}],
												r_position_work_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_position_work_statusLiveForm1","lock":false,"operationPanel":"operationPanel9","savePanel":"savePanel9"}, {}, {
													savePanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton9: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_work_statusLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_position_work_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton9: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_work_statusLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton9: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_work_statusLiveForm1EditPanel.beginDataInsert"}],
														updateButton9: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_work_statusLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_position_work_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton9: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_position_work_statusLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_position_work_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_PosLevel: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.5 ระดับตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers_R_Level: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_R_LEVEL_MT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.5.1 จัดการข้อมูลระดับตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							layers_R_Level: ["wm.Layers", {"transition":"fade"}, {}, {
								layer_R_Level_List: ["wm.Layer", {"borderColor":"","caption":"layer9","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_levelLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_levelGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_LEVEL_LIST] รายการข้อมูลระดับตำแหน่ง"}, {}, {
											panel17: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												selectMenuSearchPosLevel: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - รหัส,1 - ชื่อระดับตำแหน่ง,2 - ประเภทตำแหน่ง,3 - สถานะ","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
												textSearchPosLevel: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchPosLevelEnterKeyPress"}],
												buttonSearchPosLevel: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchPosLevelClick"}],
												buttonClearPosLevel: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearPosLevelClick"}]
											}],
											r_levelDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"LEVEL_ID","title":"รหัสระดับตำแหน่ง","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ชื่อระดับตำแหน่ง","width":"35%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"ORDERDOCREF","title":"ORDERDOCREF","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDERNO","title":"ORDERNO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDERDATE","title":"ORDERDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"EFFECTIVEDATE","title":"EFFECTIVEDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CANCELDATE","title":"CANCELDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MEMO","title":"MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_LEVEL_STATUS.LEVEL_STATUS_ID","title":"REL_LEVEL_STATUS.LEVEL_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_POSITION_TYPE.NAME","title":"ประเภทตำแหน่ง","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_LEVEL_STATUS.STATUS_NAME","title":"สถานะ","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_POSITION_TYPE.POSITION_TYPE_ID","title":"REL_POSITION_TYPE.POSITION_TYPE_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_levelLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}],
											Layer_UNIT_Info4: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												textSearchResultPosLevel: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
												spacer13: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
												buttonPreviewLevel: ["wm.Button", {"caption":"เลือก","imageIndex":17,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_R_Level_Info"}]
											}]
										}]
									}]
								}],
								layer_R_Level_Info: ["wm.Layer", {"borderColor":"","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
									r_levelDetailsPanel: ["wm.FancyPanel", {"freeze":false,"title":"[R_LEVEL_INFO] รายละเอียดข้อมูลระดับตำแหน่ง"}, {}, {
										r_levelLiveForm1: ["wm.LiveForm", {"autoScroll":true,"captionSize":"130px","confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"r_levelLiveForm1BeginInsert","onBeginUpdate":"r_levelLiveForm1BeginUpdate","onSuccess":"r_levelLiveVariable1"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"r_levelDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
											}],
											LEVEL_IDEditor1: ["wm.Number", {"caption":"รหัสระดับตำแหน่ง","captionSize":"130px","emptyValue":"zero","formField":"LEVEL_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
											NAMEEditor8: ["wm.Text", {"caption":"ชื่อระดับตำแหน่ง","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
											lookup8: ["wm.Lookup", {"caption":"ประเภทตำแหน่ง","captionSize":"130px","displayExpression":"${POSITION_TYPE_ID} + \" - \" + ${NAME}","displayField":"MEMO","formField":"REL_POSITION_TYPE","height":"26px","readonly":true,"width":"100%"}, {}],
											lookup9: ["wm.Lookup", {"caption":"สถานะ","captionSize":"130px","displayField":"STATUS_NAME","formField":"REL_LEVEL_STATUS","height":"26px","readonly":true,"width":"100%"}, {}],
											panel18: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												ORDERDOCREFEditor3: ["wm.Text", {"caption":"อ้างอิงจาก","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"ORDERDOCREF","height":"26px","readonly":true,"width":"50%"}, {}],
												ORDERNOEditor4: ["wm.Text", {"caption":"เลขที่","captionSize":"50px","dataValue":"","emptyValue":"emptyString","formField":"ORDERNO","height":"26px","readonly":true,"width":"25%"}, {}],
												ORDERDATEEditor4: ["wm.DateTime", {"caption":"วันที่","captionSize":"50px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDERDATE","height":"26px","readonly":true,"width":"25%"}, {}]
											}],
											EFFECTIVEDATEEditor4: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"EFFECTIVEDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											CANCELDATEEditor4: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCELDATE","height":"26px","readonly":true,"width":"100%"}, {}],
											MEMOEditor4: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											tabLayers14: ["wm.TabLayers", {"fitToContentHeight":true,"height":"138px","transition":"fade"}, {}, {
												layer10: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
												layer9: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													CREATEBYIDEditor6: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													CREATETSEditor6: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"130px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYBYIDEditor6: ["wm.Number", {"caption":"รหัสผู้ปรับแต่งล่าสุด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYTSEditor6: ["wm.DateTime", {"caption":"ปรับแต่งล่าสุดเมื่อ","captionSize":"130px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}]
										}],
										r_levelLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_levelLiveForm1","lock":false,"operationPanel":"operationPanel12","savePanel":"savePanel12"}, {}, {
											savePanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton12: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_levelLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_levelLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton12: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_levelLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												buttonLevelList: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_R_Level_List"}],
												spacer14: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
												newButton12: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_levelLiveForm1EditPanel.beginDataInsert"}],
												updateButton12: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_levelLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_levelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton12: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_levelLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_levelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_Level_Config: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.5.2 ปรับแต่งข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							tabLayers13: ["wm.TabLayers", {"transition":"fade"}, {}, {
								layer_R_Level_Status: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.5.2.1 สถานะระดับตำแหน่ง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_level_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_level_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_LEVEL_STATUS] ปรับแต่งสถานะระดับตำแหน่ง"}, {}, {
											r_level_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"LEVEL_STATUS_ID","title":"รหัสสถานะระดับตำแหน่ง","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUS_NAME","title":"สถานะระดับตำแหน่ง","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_level_statusLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_level_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
											r_level_statusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_level_statusLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_level_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												LEVEL_STATUS_IDEditor1: ["wm.Number", {"caption":"รหัสสถานะระดับตำแหน่ง","captionSize":"200px","emptyValue":"zero","formField":"LEVEL_STATUS_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												STATUS_NAMEEditor3: ["wm.Text", {"caption":"สถานะระดับตำแหน่ง","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUS_NAME","height":"26px","readonly":true,"width":"100%"}, {}],
												r_level_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_level_statusLiveForm1","lock":false,"operationPanel":"operationPanel11","savePanel":"savePanel11"}, {}, {
													savePanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton11: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_level_statusLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_level_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton11: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_level_statusLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton11: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_level_statusLiveForm1EditPanel.beginDataInsert"}],
														updateButton11: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_level_statusLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_level_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton11: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_level_statusLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_level_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_UnitType: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6 ประเภทสังกัด","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers4: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_R_Unit1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6.1 จัดการข้อมูลหน่วยงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							accordionLayers1: ["wm.Layers", {"defaultLayer":0,"margin":"0"}, {}, {
								layer_UNIT_List: ["wm.Layer", {"borderColor":"","caption":"[R_UNIT_LIST] ค้นหาหน่วยงาน","horizontalAlign":"left","margin":"4","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									fancyPanel2: ["wm.FancyPanel", {"title":"[R_UNIT_LIST] รายการข้อมูลสังกัด"}, {}, {
										panel1: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
											selectMenuSearchUnit: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - Unit ID.,1 - ชื่อสังกัด,2 - ชื่อย่อสังกัด,3 - ประเภทสังกัด","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
											textSearchUnit: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchUnitEnterKeyPress"}],
											buttonSearchUnit: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchUnitClick"}],
											buttonClear: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearUnitClick"}]
										}],
										dojoGrid_Unit: ["wm.DojoGrid", {"columns":[{"show":true,"id":"UNIT_ID","title":"รหัสหน่วยงาน (Unit ID.)","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"UNIT_NAME","title":"ชื่อหน่วยงาน","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"UNIT_CODE","title":"ชื่อย่อหน่วยงาน","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"APPROVE_DATE","title":"APPROVE_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"AFFECTIVE_DATE","title":"AFFECTIVE_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"COMMENT","title":"COMMENT","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDER_NO","title":"ORDER_NO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDER_DATE","title":"ORDER_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CANCEL_DATE","title":"CANCEL_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNITTYPE.UNITTYPEID","title":"REL_UNITTYPE.UNITTYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_UNITTYPE.NAME","title":"หน่วยเรียกหน่วยงาน","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_UNIT_STATUS.UNIT_STATUS_ID","title":"REL_UNIT_STATUS.UNIT_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_STATUS.NAME","title":"REL_UNIT_STATUS.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_STATUS.DESC","title":"REL_UNIT_STATUS.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_REGION.UNIT_REGION_ID","title":"REL_UNIT_REGION.UNIT_REGION_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_REGION.NAME","title":"REL_UNIT_REGION.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_REFDOC.UNITREFDOCID","title":"REL_UNIT_REFDOC.UNITREFDOCID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_REFDOC.REFDOCNAME","title":"REL_UNIT_REFDOC.REFDOCNAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_PARENT.UNIT_ID","title":"REL_UNIT_PARENT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_PARENT.UNIT_CODE","title":"REL_UNIT_PARENT.UNIT_CODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_PARENT.UNIT_NAME","title":"REL_UNIT_PARENT.UNIT_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dojoGrid_UnitClick"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"dataSet"}, {}]
											}]
										}],
										Layer_UNIT_Info: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
											textSearchResultUnit: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
											spacer6: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
											buttonPreview: ["wm.Button", {"caption":"เลือก","imageIndex":17,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navCall_Unit_Info"}]
										}]
									}]
								}],
								layer_UNIT_Info: ["wm.Layer", {"borderColor":"","caption":"[R_UNIT_INFO] รายละเอียดหน่วยงาน","horizontalAlign":"left","margin":"4","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									fancyPanel3: ["wm.FancyPanel", {"title":"[R_UNIT_INFO] จัดการข้อมูลหน่วยงาน"}, {}, {
										r_unitLiveForm2: ["wm.LiveForm", {"autoScroll":true,"captionSize":"130px","confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"r_unitLiveForm1BeginInsert","onBeginUpdate":"r_unitLiveForm1BeginUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGrid_Unit.selectedItem.UNIT_ID","targetProperty":"dataOutput.UNIT_ID"}, {}],
												wire: ["wm.Wire", {"expression":undefined,"source":"LVar_Unit_MT","targetProperty":"dataSet"}, {}]
											}],
											panel2: ["wm.Panel", {"fitToContentHeight":true,"height":"128px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													UNIT_IDEditor2: ["wm.Number", {"caption":"รหัสหน่วยงาน (Unit ID.)","captionSize":"130px","emptyValue":"zero","formField":"UNIT_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
													UNIT_NAMEEditor2: ["wm.Text", {"caption":"ชื่อหน่วยงาน","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"UNIT_NAME","height":"26px","readonly":true,"width":"100%"}, {}],
													REL_UNITTYPELookup1: ["wm.Lookup", {"caption":"หน่วยเรียกหน่วยงาน","captionSize":"130px","displayExpression":"${UNITTYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_UNITTYPE","readonly":true,"width":"100%"}, {}],
													REL_UNIT_REGIONLookup1: ["wm.Lookup", {"caption":"ประเภทหน่วยงาน","captionSize":"130px","displayExpression":"${UNIT_REGION_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_UNIT_REGION","readonly":true,"width":"100%"}, {}],
													REL_UNIT_PARENTLookup1: ["wm.Lookup", {"caption":"หน่วยงานที่ขึ้นตรง","captionSize":"130px","displayExpression":"${UNIT_ID} + \" - \" + ${UNIT_NAME} + \" (\" + ${UNIT_CODE} + \")\"","displayField":"UNIT_CODE","formField":"REL_UNIT_PARENT","readonly":true,"width":"100%"}, {}]
												}],
												panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													spacer2: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													UNIT_CODEEditor2: ["wm.Text", {"caption":"ชื่อย่อหน่วยงาน","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"UNIT_CODE","height":"26px","readonly":true,"width":"100%"}, {}],
													REL_UNIT_STATUSLookup1: ["wm.Lookup", {"caption":"สถานะหน่วยงาน","captionSize":"130px","displayExpression":"${UNIT_STATUS_ID} + \" - \" + ${NAME}","displayField":"DESC","formField":"REL_UNIT_STATUS","readonly":true,"width":"100%"}, {}],
													spacer3: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													spacer4: ["wm.Spacer", {"height":"26px","width":"100%"}, {}]
												}]
											}],
											panel6: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												lookup4: ["wm.Lookup", {"caption":"อ้างอิงจาก","captionSize":"130px","displayField":"REFDOCNAME","formField":"REL_UNIT_REFDOC","height":"26px","readonly":true,"width":"40%"}, {}],
												ORDER_NOEditor2: ["wm.Text", {"caption":"ที่","captionSize":"50px","dataValue":"","emptyValue":"emptyString","formField":"ORDER_NO","height":"26px","readonly":true,"width":"30%"}, {}],
												ORDER_DATEEditor2: ["wm.DateTime", {"caption":"ลงวันที่","captionSize":"50px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDER_DATE","height":"26px","readonly":true,"width":"30%"}, {}]
											}],
											panel7: ["wm.Panel", {"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													APPROVE_DATEEditor2: ["wm.DateTime", {"caption":"วันที่อนุมัติ","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"APPROVE_DATE","height":"26px","readonly":true,"width":"100%"}, {}],
													AFFECTIVE_DATEEditor2: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"AFFECTIVE_DATE","height":"26px","readonly":true,"width":"100%"}, {}]
												}],
												panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													spacer5: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													CANCEL_DATEEditor2: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCEL_DATE","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}],
											COMMENTEditor2: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"COMMENT","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											tabLayers5: ["wm.TabLayers", {"height":"138px","transition":"fade"}, {}, {
												layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
												layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"center","lock":true,"roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													CREATEBYIDEditor2: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													CREATETSEditor2: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"130px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYBYIDEditor2: ["wm.Number", {"caption":"รหัสผู้ปรับปรุงล่าสุด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYTSEditor2: ["wm.DateTime", {"caption":"ปรับปรุงล่าสุดเมื่อ","captionSize":"130px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}]
										}],
										liveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unitLiveForm2","lock":false,"operationPanel":"operationPanel21","savePanel":"savePanel21"}, {}, {
											savePanel21: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton21: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton21: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel21: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												buttonList: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonListClick","onclick1":"navCall_UNIT_List"}],
												spacer1: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
												newButton21: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataInsert"}],
												updateButton21: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton21: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_UnitConfig: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6.2 ปรับแต่งข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							layer_R_Unit: ["wm.TabLayers", {"transition":"fade"}, {}, {
								layer_R_UnitType: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6.2.1 หน่วยเรียกหน่วยงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_unittypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_unittypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_UNITTYPE] ปรับแต่งหน่วยเรียกสังกัด"}, {}, {
											r_unittypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UNITTYPEID","title":"รหัสประเภทหน่วยงาน","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"หน่วยเรียกหน่วยงาน","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_unittypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
											r_unittypeLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_unittypeLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												UNITTYPEIDEditor1: ["wm.Number", {"caption":"รหัสประเภทหน่วยเรียกหน่วยงาน","captionSize":"200px","emptyValue":"zero","formField":"UNITTYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												NAMEEditor2: ["wm.Text", {"caption":"หน่วยเรียกหน่วยงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												r_unittypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unittypeLiveForm1","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
													savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton2: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton2: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton2: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.beginDataInsert"}],
														updateButton2: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton2: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								layer_R_UnitRegion: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6.2.2 ประเภทหน่วยงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_unit_regionLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_unit_regionGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_UNIT_REGION] ปรับแต่งประเภทหน่วยงาน"}, {}, {
											r_unit_regionDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UNIT_REGION_ID","title":"รหัสประเภทหน่วยงาน","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ประเภทหน่วยงาน","width":"70%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_regionLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_unit_regionDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
											r_unit_regionLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_unit_regionLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_regionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												UNIT_REGION_IDEditor1: ["wm.Number", {"caption":"รหัสประเภทสังกัด","captionSize":"200px","emptyValue":"zero","formField":"UNIT_REGION_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												UNIT_REGION_NAMEEditor1: ["wm.Text", {"caption":"ประเภทสังกัด","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
												r_unit_regionLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unit_regionLiveForm1","lock":false,"operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
													savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton3: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_regionLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_regionLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton3: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_regionLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton3: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_regionLiveForm1EditPanel.beginDataInsert"}],
														updateButton3: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_regionLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_regionLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton3: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_regionLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_regionLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								layer_R_UnitStatus: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6.2.3 สถานะหน่วยงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_unit_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_unit_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_UNIT_STATUS] ปรับแต่งสถานะสังกัด"}, {}, {
											r_unit_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UNIT_STATUS_ID","title":"รหัสสถานะสังกัด","width":"25%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"สถานะ","width":"35%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"คำอธิบาย","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_statusLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_unit_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"รายละเอียด"}, {}, {
											r_unit_statusLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_unit_statusLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												UNIT_STATUS_IDEditor1: ["wm.Number", {"caption":"รหัสสถานะสังกัด","captionSize":"200px","emptyValue":"zero","formField":"UNIT_STATUS_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												NAMEEditor3: ["wm.Text", {"caption":"สถานะ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												DESCEditor1: ["wm.Text", {"caption":"คำอธิบาย","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","readonly":true,"width":"100%"}, {}],
												r_unit_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unit_statusLiveForm1","lock":false,"operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
													savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton4: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_statusLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton4: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_statusLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton4: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_statusLiveForm1EditPanel.beginDataInsert"}],
														updateButton4: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_statusLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton4: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_statusLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}],
								layer_R_UnitRefDoc: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.6.2.4 หนังสืออ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									r_unit_refdocLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										r_unit_refdocGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_UNIT_REFDOC] ปรับแต่งประเภทหนังสืออ้างอิง"}, {}, {
											r_unit_refdocDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UNITREFDOCID","title":"รหัสประเภทหนังสืออ้างอิง","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REFDOCNAME","title":"ชื่อประเภทหนังสืออ้างอิง","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveVariable1","targetProperty":"dataSet"}, {}]
												}]
											}]
										}],
										r_unit_refdocDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
											r_unit_refdocLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_unit_refdocLiveVariable1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
												}],
												UNITREFDOCIDEditor1: ["wm.Number", {"caption":"รหัสประเภทหนังสืออ้างอิง","captionSize":"200px","emptyValue":"zero","formField":"UNITREFDOCID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												REFDOCNAMEEditor1: ["wm.Text", {"caption":"ประเภทหนังสืออ้างอิง","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REFDOCNAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												r_unit_refdocLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unit_refdocLiveForm1","lock":false,"operationPanel":"operationPanel22","savePanel":"savePanel22"}, {}, {
													savePanel22: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
														saveButton22: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.saveData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
															}]
														}],
														cancelButton22: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.cancelEdit"}]
													}],
													operationPanel22: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
														newButton22: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.beginDataInsert"}],
														updateButton22: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.beginDataUpdate"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}],
														deleteButton22: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.deleteData"}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
															}]
														}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_JobDesc: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"1.7 คำบรรยายลักษณะงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
			}]
		}]
	}]
}