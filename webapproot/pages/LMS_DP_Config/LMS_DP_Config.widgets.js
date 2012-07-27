LMS_DP_Config.widgets = {
	lms_plan_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_plan_statusLiveView1"}, {}],
	lms_plan_typeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_plan_typeLiveView1"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"lms_plan_typeLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_PLAN_CONFIG] ปรับแต่งข้อมูลพื้นฐานระบบจัดการแผนงาน (Planning Management Configuration)"}, {}, {
			tabLayers_DP_Config: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_PLAN_TYPE: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ประเภทแผนงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_plan_typeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_plan_typeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[PLAN_TYPE] ปรับแต่งประเภทแผนงาน (Plan Type Configuration)"}, {}, {
							lms_plan_typeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"PLANTYPEID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"PLANTYPENAME","title":"ประเภทแผนงาน","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"รายละเอียด/คำอธิบาย","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_typeLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_plan_typeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"รายละเอียด"}, {}, {
							lms_plan_typeLiveForm1: ["wm.LiveForm", {"confirmDelete":"โปรดยืนยันการลบข้อมูลที่เลือกอีกครั้ง","fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_plan_typeLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_typeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								PLANTYPEIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"PLANTYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								PLANTYPENAMEEditor1: ["wm.Text", {"caption":"ประเภทแผนงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PLANTYPENAME","height":"26px","readonly":true,"width":"100%"}, {}],
								DESCEditor2: ["wm.Text", {"caption":"คำอธิบาย","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","readonly":true,"width":"100%"}, {}],
								lms_plan_typeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"lms_plan_typeLiveForm1","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
									savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton2: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_typeLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_typeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton2: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_typeLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
										newButton2: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_typeLiveForm1EditPanel.beginDataInsert"}],
										updateButton2: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":6,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_typeLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_typeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton2: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_typeLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_typeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_PLAN_STATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"สถานะแผนงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_plan_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_plan_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[PLAN_STATUS] ปรับแต่งสถานะแผนงาน (Plan Status Configuration)"}, {}, {
							lms_plan_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"PLANSTATUSID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUSNAME","title":"สถานะ","width":"45%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"คำอธิบาย/รายละเอียด","width":"45%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_statusLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_plan_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"รายละเอียด"}, {}, {
							lms_plan_statusLiveForm1: ["wm.LiveForm", {"confirmDelete":"โปรดยืนยันการลบข้อมูลที่เลือกอีกครั้ง","fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_plan_statusLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								PLANSTATUSIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"PLANSTATUSID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								STATUSNAMEEditor1: ["wm.Text", {"caption":"สถานะ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUSNAME","height":"26px","readonly":true,"width":"100%"}, {}],
								DESCEditor1: ["wm.Text", {"caption":"คำอธิบาย/รายละเอียด","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","readonly":true,"width":"100%"}, {}],
								lms_plan_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"lms_plan_statusLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton1: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_statusLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton1: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_statusLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton1: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_statusLiveForm1EditPanel.beginDataInsert"}],
										updateButton1: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_statusLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton1: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_statusLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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
}