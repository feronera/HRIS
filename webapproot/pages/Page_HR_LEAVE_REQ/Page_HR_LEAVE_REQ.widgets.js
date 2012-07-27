Page_HR_LEAVE_REQ.widgets = {
	LVar_LeaveReq: ["wm.LiveVariable", {"liveSource":"app.hr_leave_reqLiveView1"}, {}],
	LVar_LeavrReqInfo: ["wm.LiveVariable", {"liveSource":"app.hr_leave_reqLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[HR_LEVE_REQ] การร้องขอการลา"}, {}, {
			tabLayers1: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายการข้อมูล","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel1: ["wm.Panel", {"height":"32px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						selectMenuSearchType: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","displayValue":""}, {}],
						textSearchKey: ["wm.Text", {"caption":"คำค้นหา","captionSize":"60px","dataValue":undefined,"displayValue":"","width":"280px"}, {}],
						button1: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {}],
						button2: ["wm.Button", {"caption":"ล้างค่า","imageIndex":6,"imageList":"app.silkIconList","margin":"4"}, {}]
					}],
					panel2: ["wm.Panel", {"height":"90%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoGridLeaveReq: ["wm.DojoGrid", {"columns":[{"show":true,"id":"LEAVEREQID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"CONTACTADDRESS","title":"CONTACTADDRESS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"MEMO","title":"MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_LEAVETYPE.LEAVETYPEID","title":"REL_LEAVETYPE.LEAVETYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVETYPE.NAME","title":"","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_LEAVETIMETYPE.LEAVETIMETYPEID","title":"REL_LEAVETIMETYPE.LEAVETIMETYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVETIMETYPE.NAME","title":"REL_LEAVETIMETYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_LEAVEREQSTATUS.LEAVEREQSTATUSID","title":"REL_LEAVEREQSTATUS.LEAVEREQSTATUSID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVEREQSTATUS.REQSTATUSNAME","title":"REL_LEAVEREQSTATUS.REQSTATUSNAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"REL_LEAVER_PIM02.PERSONALID","title":"รหัสบุคลากร","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_LEAVER_PIM01.NAMETH","title":"ชื่อ","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_LEAVER_PIM01.SURNAMETH","title":"นามสกุล","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STARTDATE","title":"วันที่เริ่ม","width":"10%","displayType":"Date","noDelete":true,"align":"center","formatFunc":"wm_date_formatter"},{"show":true,"id":"FINISHDATE","title":"วันที่สิ้นสุด","width":"10%","displayType":"Date","noDelete":true,"align":"center","formatFunc":"wm_date_formatter"},{"show":true,"id":"TOTALLEAVEDAY","title":"จำนวนวันลา","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"ISAPPROVE","title":"สถานะการอนุมัติ","width":"10%","displayType":"CheckBox","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM01.UID","title":"REL_LEAVER_PIM01.UID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM01.REL_INITIALNAME.NAME","title":"REL_LEAVER_PIM01.REL_INITIALNAME.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.UID","title":"REL_LEAVER_PIM02.UID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.POSITIONID","title":"REL_LEAVER_PIM02.POSITIONID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.WORKING_POSITION","title":"REL_LEAVER_PIM02.WORKING_POSITION","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.WORKING_UNIT","title":"REL_LEAVER_PIM02.WORKING_UNIT","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM01.UID","title":"REL_APPROVER_PIM01.UID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM01.NAMETH","title":"REL_APPROVER_PIM01.NAMETH","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM01.SURNAMETH","title":"REL_APPROVER_PIM01.SURNAMETH","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM01.REL_INITIALNAME.NAME","title":"REL_APPROVER_PIM01.REL_INITIALNAME.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.UID","title":"REL_APPROVER_PIM02.UID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.PERSONALID","title":"REL_APPROVER_PIM02.PERSONALID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.POSITIONID","title":"REL_APPROVER_PIM02.POSITIONID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.WORKING_UNIT","title":"REL_APPROVER_PIM02.WORKING_UNIT","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.WORKING_POSITION","title":"REL_APPROVER_PIM02.WORKING_POSITION","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.REL_UNIT.UNIT_ID","title":"REL_APPROVER_PIM02.REL_UNIT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.REL_UNIT.UNIT_CODE","title":"REL_APPROVER_PIM02.REL_UNIT.UNIT_CODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_APPROVER_PIM02.REL_UNIT.UNIT_NAME","title":"REL_APPROVER_PIM02.REL_UNIT.UNIT_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.REL_UNIT.UNIT_ID","title":"REL_LEAVER_PIM02.REL_UNIT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.REL_UNIT.UNIT_CODE","title":"REL_LEAVER_PIM02.REL_UNIT.UNIT_CODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_LEAVER_PIM02.REL_UNIT.UNIT_NAME","title":"REL_LEAVER_PIM02.REL_UNIT.UNIT_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"LVar_LeaveReq","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					panel3: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						textSearchResult: ["wm.Text", {"captionAlign":"left","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
						spacer1: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
						buttonSelect: ["wm.Button", {"caption":"เลือก","imageIndex":73,"imageList":"app.silkIconList","margin":"4"}, {}]
					}]
				}],
				layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ร้องขอการลา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						liveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"356px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"LVar_LeavrReqInfo","targetProperty":"dataSet"}, {}]
							}],
							LEAVEREQIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"LEAVEREQID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							panel4: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								REL_LEAVER_PIM01Lookup1: ["wm.Lookup", {"caption":"ชื่อ","captionSize":"200px","displayField":"NAMETH","formField":"REL_LEAVER_PIM01","readonly":true,"width":"50%"}, {}],
								spacer2: ["wm.Spacer", {"height":"48px","width":"8px"}, {}],
								lookup1: ["wm.Lookup", {"caption":"นามสกุล","captionAlign":"left","displayField":"SURNAMETH","formField":"REL_LEAVER_PIM01","height":"26px","readonly":true,"width":"50%"}, {}]
							}],
							REL_LEAVER_PIM02Lookup1: ["wm.Lookup", {"caption":"รหัสบุคลากร","captionSize":"200px","displayField":"PERSONALID","formField":"REL_LEAVER_PIM02","readonly":true,"width":"100%"}, {}],
							REL_LEAVEREQSTATUSLookup1: ["wm.Lookup", {"caption":"สถานะการร้องขอการลา","captionSize":"200px","displayExpression":"${LEAVEREQSTATUSID} + \" - \" + ${REQSTATUSNAME}","displayField":"REQSTATUSNAME","formField":"REL_LEAVEREQSTATUS","readonly":true,"width":"100%"}, {}],
							ISAPPROVEEditor1: ["wm.Checkbox", {"caption":"สถานะการอนุมัติ (เลือกเพื่ออนุมัติ)","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"ISAPPROVE","height":"26px","readonly":true,"width":"100%"}, {}],
							MEMOEditor1: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"48px","readonly":true,"singleLine":false,"width":"100%"}, {}],
							tabLayers2: ["wm.TabLayers", {"fitToContentHeight":true,"height":"184px","transition":"fade"}, {}, {
								layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลการลา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									panel6: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										STARTDATEEditor1: ["wm.DateTime", {"caption":"วันที่เริ่ม","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"STARTDATE","height":"26px","readonly":true,"width":"50%"}, {}],
										spacer3: ["wm.Spacer", {"height":"48px","width":"8px"}, {}],
										FINISHDATEEditor1: ["wm.DateTime", {"caption":"วันที่สิ้นสุด","captionAlign":"left","dateMode":"Date","emptyValue":"emptyString","formField":"FINISHDATE","height":"26px","readonly":true,"width":"50%"}, {}]
									}],
									TOTALLEAVEDAYEditor1: ["wm.Number", {"caption":"จำนวนวันลารวม (วัน)","captionSize":"200px","emptyValue":"zero","formField":"TOTALLEAVEDAY","height":"26px","readonly":true,"width":"100%"}, {}],
									panel7: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										REL_LEAVETYPELookup1: ["wm.Lookup", {"caption":"ประเภทการลา","captionSize":"200px","displayExpression":"${LEAVETYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_LEAVETYPE","readonly":true,"width":"50%"}, {}],
										radioButton1: ["wm.RadioButton", {"caption":"ครึ่งวันเช้า","captionAlign":"left","captionPosition":"right","captionSize":"200px","displayValue":"","height":"26px","radioGroup":"leavetime","readonly":true,"width":"80px"}, {}],
										radioButton2: ["wm.RadioButton", {"caption":"ครึ่งวันบ่าย","captionAlign":"left","captionPosition":"right","captionSize":"200px","dataType":undefined,"displayValue":"","height":"26px","radioGroup":"leavetime","readonly":true,"width":"80px"}, {}],
										radioButton3: ["wm.RadioButton", {"caption":"ทั้งวัน","captionAlign":"left","captionPosition":"right","captionSize":"200px","dataType":undefined,"displayValue":"","height":"26px","radioGroup":"leavetime","readonly":true,"width":"80px"}, {}]
									}],
									REL_LEAVETIMETYPELookup1: ["wm.Lookup", {"caption":"ช่วงการลา","captionSize":"200px","displayExpression":"${LEAVETIMETYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_LEAVETIMETYPE","readonly":true,"width":"100%"}, {}],
									CONTACTADDRESSEditor1: ["wm.Text", {"caption":"ข้อมูลการติดต่อระหว่างการลา","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"CONTACTADDRESS","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}]
								}],
								layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลผู้อนุมัติ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									REL_APPROVER_PIM01Lookup1: ["wm.Lookup", {"caption":"ชื่อผู้อนุมัติ","captionSize":"200px","displayField":"TELNO1","formField":"REL_APPROVER_PIM01","readonly":true,"width":"100%"}, {}],
									lookup2: ["wm.Lookup", {"caption":"นามสกุลผู้อนุมัติ","captionSize":"200px","displayField":"TELNO1","formField":"REL_LEAVER_PIM01","height":"26px","readonly":true,"width":"100%"}, {}],
									REL_APPROVER_PIM02Lookup1: ["wm.Lookup", {"caption":"รหัสบุคลากร","captionSize":"200px","displayField":"PERSONALID","formField":"REL_LEAVER_PIM02","readonly":true,"width":"100%"}, {}]
								}],
								layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									CREATEBYIDEditor1: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"200px","emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"roles":["SCA"],"width":"100%"}, {}],
									CREATETSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่กำหนด","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
									MODIFYBYIDEditor1: ["wm.Number", {"caption":"รหัสผู้ปรับปรุงล่าสุด","captionSize":"200px","emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
									MODIFYTSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่ปรับปรุงล่าสุด","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
								}]
							}]
						}]
					}],
					liveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"liveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
						savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
							saveButton1: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.saveData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
								}]
							}],
							cancelButton1: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.cancelEdit"}]
						}],
						operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							newButton1: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataInsert"}],
							updateButton1: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataUpdate"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}],
							deleteButton1: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}