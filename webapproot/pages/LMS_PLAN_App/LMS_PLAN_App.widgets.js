LMS_PLAN_App.widgets = {
	varDP_SearchBy: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"ID.\",\"dataValue\":\"0\"},{\"name\":\"ปีของแผนงาน\",\"dataValue\":\"1\"},{\"name\":\"ชื่อแผนงาน\",\"dataValue\":\"2\"},{\"name\":\"รหัสผู้กำหนด\",\"dataValue\":\"3\"},{\"name\":\"รหัสผู้อนุมัติ\",\"dataValue\":\"4\"}]","type":"EntryData"}, {}],
	navCall_PLAN_INFO: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer_PLAN_INFO","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"true","targetProperty":"showOnlyParentLayer"}, {}]
			}]
		}]
	}],
	lms_plan_docDialog: ["wm.DesignableDialog", {"buttonBarId":"","containerWidgetId":"containerWidget1","height":"360px","title":"[LMS_PLAN_DOC] ปรับแต่งเอกสารแนบข้อมูลแผนงาน","width":"500px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			lms_plan_docLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"276px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"lms_plan_docLiveForm1BeginInsert","onSuccess":"lms_plan_docLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_docDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.REL_DOC_STATUS"}, {}]
				}],
				DOCIDEditor1: ["wm.Number", {"caption":"รหัสเอกสาร","captionSize":"200px","emptyValue":"zero","formField":"DOCID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
				lookup_PLANID: ["wm.Lookup", {"caption":"รหัสแผนงาน/ชื่อแผนงาน","captionSize":"200px","disabled":true,"displayExpression":"${PLANID} + \" - \" + ${PLANTITLE}","formField":"REL_DOC_PLAN","height":"26px","readonly":true,"width":"100%"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"LVar_Plan_Info","targetProperty":"defaultInsert"}, {}]
					}]
				}],
				panel6: ["wm.Panel", {"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
					FILEPATHEditor1: ["wm.Text", {"caption":"ตำแหน่งจัดเก็บเอกสาร","captionAlign":"center","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"FILEPATH","height":"50px","readonly":true,"singleLine":false,"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"dojoFlashFileUpload1.variable.path","targetProperty":"dataValue"}, {}]
						}]
					}],
					dojoFlashFileUpload1: ["wm.DojoFlashFileUpload", {"buttonCaption":"Upload","buttonWidth":80,"fileMaskLabel":"All Files","fileMaskList":"*.*","height":"32px","useList":false,"width":"80px"}, {"onSuccess":"dojoFlashFileUpload1Success"}, {
						input: ["wm.ServiceInput", {"type":"uploadFileInputs"}, {}]
					}]
				}],
				tabLayers1: ["wm.TabLayers", {"transition":"fade"}, {}, {
					layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายละเอียดเอกสาร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						FILENAMEEditor1: ["wm.Text", {"caption":"ชื่อเอกสาร","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"FILENAME","height":"26px","readonly":true,"width":"100%"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"dojoFlashFileUpload1.variable.name","targetProperty":"dataValue"}, {}]
							}]
						}],
						lookup1: ["wm.Lookup", {"caption":"สถานะเอกสาร","captionSize":"200px","displayExpression":"${DOCSTATUSID} + \" - \" + ${STATUSNAME}","displayField":"DESC","formField":"REL_DOC_STATUS","height":"26px","width":"100%"}, {}],
						FILETYPEEditor1: ["wm.Text", {"caption":"ประเภทเอกสาร","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"FILETYPE","height":"26px","width":"100%"}, {}],
						FILESIZEEditor1: ["wm.Number", {"caption":"ขนาดเอกสาร (KBs)","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"FILESIZE","height":"26px","readonly":true,"width":"100%"}, {}],
						NUMBEROFDOWNLOADEditor1: ["wm.Number", {"caption":"จำนวนครั้งที่ดาวน์โหลด","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"NUMBEROFDOWNLOAD","height":"26px","readonly":true,"width":"100%"}, {}]
					}],
					layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						CREATEBYIDEditor3: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
						CREATETSEditor3: ["wm.DateTime", {"caption":"วัน และเวลาที่กำหนด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
						MODIFYBYIDEditor3: ["wm.Number", {"caption":"รหัสผู้ปรับแต่งล่าสุด","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
						MODIFYTSEditor3: ["wm.DateTime", {"caption":"วัน และเวลาที่ปรับแต่งล่าสุด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
					}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_plan_docSaveButton: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_docLiveForm1.saveDataIfValid","onclick1":"lms_plan_docSaveButtonClick1"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_plan_docLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_plan_docCancelButton: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_docDialog.hide","onclick1":"lms_plan_docLiveForm1.cancelEdit"}]
		}]
	}],
	lms_plan_docLiveVariable2: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.lms_plan_docLiveView1","matchMode":"anywhere","startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoGrid_PLAN.selectedItem","targetProperty":"filter.REL_DOC_PLAN"}, {}]
		}]
	}],
	LVar_Plan_Info: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.lms_planLiveView1","matchMode":"anywhere","startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"lms_planDojoGrid.selectedItem.PLANID","targetProperty":"filter.PLANID"}, {}]
		}]
	}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"LVar_Plan_Main","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	binding: ["wm.Binding", {}, {}, {
		wire: ["wm.Wire", {"expression":undefined,"source":"lms_planLiveVariable1","targetProperty":"dataSet"}, {}]
	}],
	LVar_Plan_Main: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"app.lms_planLiveView1","matchMode":"anywhere"}, {"onResult":"LVar_Plan_MainResult"}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_PLAN_APP] การจัดการแผนงาน (Planning Management)"}, {}, {
			tabLayers_PLAN_APP: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_PLAN_App: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายการแผนงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selectMenuSearch: ["wm.SelectMenu", {"caption":"ค้นหาโดย","captionAlign":"center","captionSize":"70px","displayExpression":"${dataValue} + \" - \" + ${name}","displayValue":"","placeHolder":"เลือกประเภทการค้นหา"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"varDP_SearchBy","targetProperty":"dataSet"}, {}]
							}]
						}],
						txt_searchKey: ["wm.Text", {"caption":"คำค้นหา","captionAlign":"center","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรอกคำค้นหา","resetButton":true}, {"onEnterKeyPress":"txt_searchKeyEnterKeyPress"}],
						buttonSearch: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchClick"}],
						buttonClear: ["wm.Button", {"caption":"ล้างค่า","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearClick"}]
					}],
					panel2: ["wm.Panel", {"height":"80%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoGrid_PLAN: ["wm.DojoGrid", {"columns":[{"show":true,"id":"PLANID","title":"รหัสแผนงาน","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"YEAROFPLAN","title":"แผนงานประจำปี","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"PLANTITLE","title":"ชื่อแผนงาน","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"CREATEBYID","title":"รหัสผู้กำหนด","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"APPROVEDBYID","title":"รหัสผู้อนุมัติ","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"APPROVEDTS","title":"APPROVEDTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"MEMO","title":"รายละเอียดอื่นๆ","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"ISACTIVE","title":"สถานะการใช้งาน","width":"10%","displayType":"CheckBox","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dojoGrid_PLANClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"LVar_Plan_Main","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					panel7: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						spacer2: ["wm.Spacer", {"height":"48px","width":"4px"}, {}],
						txtSearchReqResult: ["wm.Text", {"captionAlign":"left","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
						spacer1: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
						buttonPreview: ["wm.Button", {"caption":"เลือก","imageIndex":73,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navCall_PLAN_INFO"}]
					}]
				}],
				layer_PLAN_INFO: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายละเอียดแผนงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						liveForm_PlanInfo: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"LVar_Plan_Info","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGrid_PLAN.selectedItem.PLANID","targetProperty":"dataOutput.PLANID"}, {}]
							}],
							PLANIDEditor2: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"PLANID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							PLANTITLEEditor2: ["wm.Text", {"caption":"ชื่อแผนงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PLANTITLE","height":"26px","readonly":true,"width":"100%"}, {}],
							layer_PlanInfo: ["wm.TabLayers", {"transition":"fade"}, {}, {
								layer_PlanInfo_Main: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายละเอียดพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									YEAROFPLANEditor2: ["wm.Text", {"caption":"แผนงานประจำปี (พ.ศ.)","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"YEAROFPLAN","height":"26px","readonly":true,"width":"100%"}, {}],
									APPROVEDBYIDEditor2: ["wm.Text", {"caption":"รหัสผู้อนุมัติ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"APPROVEDBYID","height":"26px","readonly":true,"width":"100%"}, {}],
									APPROVEDTSEditor2: ["wm.DateTime", {"caption":"วัน และเวลาที่อนุมัติ","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"APPROVEDTS","height":"26px","readonly":true,"width":"100%"}, {}],
									MEMOEditor2: ["wm.Text", {"caption":"รายละเอียดเพิ่มเติม","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}]
								}],
								layer_PlanInfo_Attach: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารแนบ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									lms_plan_docLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"lms_plan_docDialog","targetId":null,"targetProperty":"dialog"}, {}],
											wire1: ["wm.Wire", {"source":"lms_plan_docLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
											wire2: ["wm.Wire", {"source":"lms_plan_docDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
											wire3: ["wm.Wire", {"source":"lms_plan_docSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
										}],
										lms_plan_docDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"DOCID","title":"รหัสเอกสาร","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_DOC_PLAN.YEAROFPLAN","title":"แผนงานประจำปี","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILENAME","title":"ชื่อเอกสาร","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILEPATH","title":"ตำแหน่งไฟล์","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILETYPE","title":"ประเภทเอกสาร","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILESIZE","title":"ขนาดเอกสาร","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"NUMBEROFDOWNLOAD","title":"NUMBEROFDOWNLOAD","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_STATUS.DOCSTATUSID","title":"REL_DOC_STATUS.DOCSTATUSID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_STATUS.STATUSNAME","title":"REL_DOC_STATUS.STATUSNAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_DOC_STATUS.DESC","title":"REL_DOC_STATUS.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.PLANID","title":"REL_DOC_PLAN.PLANID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.PLANTITLE","title":"REL_DOC_PLAN.PLANTITLE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.APPROVEDBYID","title":"REL_DOC_PLAN.APPROVEDBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.APPROVEDTS","title":"REL_DOC_PLAN.APPROVEDTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_DOC_PLAN.CREATEBYID","title":"REL_DOC_PLAN.CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.CREATETS","title":"REL_DOC_PLAN.CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_DOC_PLAN.MODIFYBYID","title":"REL_DOC_PLAN.MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.MODIFYTS","title":"REL_DOC_PLAN.MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_DOC_PLAN.MEMO","title":"REL_DOC_PLAN.MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_DOC_PLAN.ISACTIVE","title":"REL_DOC_PLAN.ISACTIVE","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"lms_plan_docLivePanel1.popupLivePanelEdit"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_docLiveVariable2","targetProperty":"dataSet"}, {}]
											}]
										}],
										lms_plan_docGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											lms_plan_docNewButton: ["wm.Button", {"caption":"เพิ่มเอกสาร","imageIndex":73,"imageList":"app.silkIconList","margin":"4","width":"114px"}, {"onclick":"lms_plan_docLivePanel1.popupLivePanelInsert"}],
											lms_plan_docUpdateButton: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_docLivePanel1.popupLivePanelEdit","onclick1":"lms_plan_docUpdateButtonClick1"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"source":"lms_plan_docDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
												}]
											}],
											lms_plan_docDeleteButton: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_docLiveForm1.deleteData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"source":"lms_plan_docDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
												}]
											}]
										}]
									}]
								}],
								layer_PlanInfo_System: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									CREATEBYIDEditor2: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
									CREATETSEditor2: ["wm.DateTime", {"caption":"วัน และเวลาที่กำหนด","captionSize":"200px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
									MODIFYBYIDEditor2: ["wm.Number", {"caption":"รหัสผู้ปรับปรุง","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
									MODIFYTSEditor2: ["wm.DateTime", {"caption":"วันและเวลาที่ปรับปรุงล่าสุด","captionSize":"200px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}],
									ISACTIVEEditor2: ["wm.Checkbox", {"caption":"สถานะแผน (ใช้งาน/ไม่ใช้งาน)","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"ISACTIVE","height":"26px","readonly":true,"width":"100%"}, {}]
								}]
							}],
							liveForm_PlanInfoEditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"liveForm_PlanInfo","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
									saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"liveForm_PlanInfoEditPanel.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm_PlanInfoEditPanel.formInvalid","targetProperty":"disabled"}, {}]
										}]
									}],
									cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"liveForm_PlanInfoEditPanel.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									newButton1: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm_PlanInfoEditPanel.beginDataInsert"}],
									updateButton1: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm_PlanInfoEditPanel.beginDataUpdate"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm_PlanInfoEditPanel.formUneditable","targetProperty":"disabled"}, {}]
										}]
									}],
									deleteButton1: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm_PlanInfoEditPanel.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm_PlanInfoEditPanel.formUneditable","targetProperty":"disabled"}, {}]
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
}