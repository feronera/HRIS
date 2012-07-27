LMS_ITS_Config.widgets = {
	lms_its_req_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_its_req_statusLiveView1"}, {}],
	lms_its_abilityLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_its_abilityLiveView1"}, {}],
	lms_its_internperiodLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_its_internperiodLiveView1"}, {}],
	lms_its_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_its_statusLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_ITS_CFG] ปรับแต่งข้อมูลอ้างอิงระบบนักศึกษาฝึกงาน"}, {}, {
			tabLayer_ITS_CFG: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_ITS_CFG_REQ_STATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"สถานะการร้องขอนักศึกษาฝึกงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_its_req_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_its_req_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[LMS_ITS_CFG_001] ปรับแต่งสถานะการร้องขอนักศึกษาฝึกงาน"}, {}, {
							lms_its_req_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"ITS_REQ_STATUS_ID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REQ_STATUS_NAME","title":"สถานะการร้องขอนักศึกษาฝึกงาน","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REQ_STATUS_DESC","title":"คำอธิบาย","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_req_statusLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_its_req_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"รายละเอียด"}, {}, {
							lms_its_req_statusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_its_req_statusLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_req_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								ITS_REQ_STATUS_IDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"ITS_REQ_STATUS_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								REQ_STATUS_NAMEEditor1: ["wm.Text", {"caption":"สถานะการร้องขอนักศึกษาฝึกงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REQ_STATUS_NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								REQ_STATUS_DESCEditor1: ["wm.Text", {"caption":"คำอธิบาย","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REQ_STATUS_DESC","height":"26px","readonly":true,"width":"100%"}, {}],
								lms_its_req_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"lms_its_req_statusLiveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton1: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_req_statusLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_req_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton1: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_req_statusLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
										newButton1: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_req_statusLiveForm1EditPanel.beginDataInsert"}],
										updateButton1: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_req_statusLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_req_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton1: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_req_statusLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_req_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_ITS_CFG_ABILITY: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ความเชี่ยวชาญ/ความสามารถ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_its_abilityLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_its_abilityGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[LMS_ITS_CFG_002] ปรับแต่งข้อมูลความเชี่ยวชาญ/ความสามารถ"}, {}, {
							lms_its_abilityDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"ITS_ABILITY_ID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"ABILITY_NAME","title":"ความเชี่ยวชาญ/ความสามารถ","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_abilityLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_its_abilityDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
							lms_its_abilityLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_its_abilityLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_abilityDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								ITS_ABILITY_IDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"ITS_ABILITY_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								ABILITY_NAMEEditor1: ["wm.Text", {"caption":"ความเชี่ยวชาญ/ความสามารถ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ABILITY_NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								lms_its_abilityLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"lms_its_abilityLiveForm1","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
									savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton2: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_abilityLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_abilityLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton2: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_abilityLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton2: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_abilityLiveForm1EditPanel.beginDataInsert"}],
										updateButton2: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_abilityLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_abilityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton2: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_abilityLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_abilityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_ITS_CFG_INTERNPERIOD: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ช่วงเวลาการฝึกงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_its_internperiodLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_its_internperiodGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[LMS_ITS_CFG_003] ปรับแต่งช่วงเวลาการฝึกงาน"}, {}, {
							lms_its_internperiodDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"INTERN_PERIOD_ID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"PERIOD","title":"ช่วงเวลาการฝึกงาน","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"คำอธิบาย","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_internperiodLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_its_internperiodDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"รายละเอียด"}, {}, {
							lms_its_internperiodLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_its_internperiodLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_internperiodDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								INTERN_PERIOD_IDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"INTERN_PERIOD_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								PERIODEditor1: ["wm.Text", {"caption":"ช่วงเวลาการฝึกงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PERIOD","height":"26px","readonly":true,"width":"100%"}, {}],
								DESCEditor1: ["wm.Text", {"caption":"คำอธิบาย","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","readonly":true,"width":"100%"}, {}],
								lms_its_internperiodLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"lms_its_internperiodLiveForm1","lock":false,"operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
									savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton3: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_internperiodLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_internperiodLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton3: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_internperiodLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton3: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_internperiodLiveForm1EditPanel.beginDataInsert"}],
										updateButton3: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_internperiodLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_internperiodLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton3: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_internperiodLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_internperiodLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_ITS_CFG_ITS_STATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"สถานะของนักศึกษาฝึกงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_its_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_its_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[LMS_ITS_CFG_004] ปรับแต่งสถานะของนักศึกษาฝึกงาน"}, {}, {
							lms_its_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"ITS_STATUS_ID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUSNAME","title":"สถานะนักศึกษาฝึกงาน","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"คำอธิบาย","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_statusLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_its_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"รายละเอียด"}, {}, {
							lms_its_statusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_its_statusLiveVariable1"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								ITS_STATUS_IDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"ITS_STATUS_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								STATUSNAMEEditor1: ["wm.Text", {"caption":"สถานะนักศึกษาฝึกงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUSNAME","height":"26px","readonly":true,"width":"100%"}, {}],
								DESCEditor2: ["wm.Text", {"caption":"คำอธิบาย","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","readonly":true,"width":"100%"}, {}],
								lms_its_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"lms_its_statusLiveForm1","lock":false,"operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
									savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton4: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_statusLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton4: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_statusLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","lock":true,"verticalAlign":"top","width":"100%"}, {}, {
										newButton4: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_statusLiveForm1EditPanel.beginDataInsert"}],
										updateButton4: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_statusLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton4: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_statusLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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