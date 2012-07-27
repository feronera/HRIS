Page_PIM_MT.widgets = {
	staticVarSex: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Male\",\"dataValue\":\"M\"},{\"name\":\"Female\",\"dataValue\":\"F\"},{\"name\":\"Non-Identified\",\"dataValue\":\"N\"}]","type":"EntryData"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"pim_01_generalLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	loadingDialog2: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	varSearchType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"UID.\",\"dataValue\":\"0\"},{\"name\":\"รหัสบุคลากร\",\"dataValue\":\"1\"},{\"name\":\"ชื่อ\",\"dataValue\":\"2\"},{\"name\":\"นามสกุล\",\"dataValue\":\"3\"},{\"name\":\"เลขประจำตัวประชาชน\",\"dataValue\":\"4\"}]","type":"EntryData"}, {}],
	LVar_PIM01: ["wm.LiveVariable", {"liveSource":"app.pim01_LiveView","startUpdate":false}, {}],
	LVar_PIM02: ["wm.LiveVariable", {"liveSource":"app.pim_02_employeeLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"autoScroll":false,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[PIM_MT] รายการข้อมูลส่วนบุคคล"}, {}, {
			tabLayer_PIM_Info: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_PIM_Main: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายการข้อมูล","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selectSearchType: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","displayExpression":"${dataValue} + \" - \" + ${name}","displayField":"name","displayValue":""}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"varSearchType","targetProperty":"dataSet"}, {}]
							}]
						}],
						textUIDSearch: ["wm.Text", {"caption":"คำค้นหา:","captionSize":"60px","changeOnKey":true,"dataValue":undefined,"displayValue":"","resetButton":true,"width":"240px"}, {"onchange":"textUIDSearchChange"}],
						buttonSearch: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {}],
						buttonClear: ["wm.Button", {"caption":"ยกเลิก","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {}]
					}],
					panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoGridPIMList: ["wm.DojoGrid", {"columns":[],"height":"100%","localizationStructure":{},"margin":"4"}, {}]
					}],
					panel3: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						textSearchResult: ["wm.Text", {"caption":"ผลการค้นหา: ","captionAlign":"left","dataValue":undefined,"displayValue":"","readonly":true,"width":"200px"}, {}],
						spacer1: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
						buttonSelect: ["wm.Button", {"caption":"เลือก","imageIndex":73,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_PIM_Info"}]
					}]
				}],
				layer_PIM_Info: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลส่วนบุคคล","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer_PIM_InfoShow"}, {
					tabLayer_PIM_Info_Details: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_PIM01: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"PIM01-ข้อมูลส่วนบุคคล","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							fancyPanel2: ["wm.FancyPanel", {"title":"[PIM01_INFO] ปรับแต่งข้อมูลส่วนบุคคล - 1"}, {}, {
								liveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"316px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"LVar_PIM01","targetProperty":"dataSet"}, {}]
									}],
									panel4: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										UIDEditor1: ["wm.Number", {"caption":"รหัสระบบ (UID.)","captionSize":"130px","emptyValue":"zero","formField":"UID","height":"26px","readonly":true,"required":true,"width":"50%"}, {}],
										REL_PERSONALTYPELookup1: ["wm.Lookup", {"caption":"ประเภทบุคคล","captionSize":"128px","displayField":"NAME","formField":"REL_PERSONALTYPE","readonly":true,"width":"50%"}, {"onchange":"REL_PERSONALTYPELookup1Change"}]
									}],
									tabLayersPIM01_Details: ["wm.TabLayers", {"fitToContentHeight":true,"height":"260px","transition":"fade"}, {}, {
										layer_PIM01_Basic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
											panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
												panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													spacer4: ["wm.Spacer", {"height":"100%","width":"8px"}, {}],
													panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
														REL_INITIALNAMELookup1: ["wm.Lookup", {"caption":"คำนำหน้าชื่อ","captionSize":"130px","displayExpression":"${INIT_ID} + \" - \" + ${NAME} + \" (\" + ${NAMEEN} + \")\"","displayField":"NAMEEN","formField":"REL_INITIALNAME","readonly":true,"width":"100%"}, {}],
														NAMETHEditor1: ["wm.Text", {"caption":"ชื่อ (ภาษาไทย)","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"NAMETH","height":"26px","readonly":true,"width":"100%"}, {}],
														NAMEENEditor1: ["wm.Text", {"caption":"ชื่อ (ภาษาอังกฤษ)","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"NAMEEN","height":"26px","readonly":true,"width":"100%"}, {}],
														SEXEditor1: ["wm.Text", {"caption":"เพศ","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"SEX","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
														BIRTHDATEEditor1: ["wm.DateTime", {"caption":"วันที่เกิด","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"BIRTHDATE","height":"26px","readonly":true,"width":"100%"}, {}],
														CITIZENIDEditor1: ["wm.Text", {"caption":"เลขบัตรประจำตัวประชาชน","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"CITIZENID","height":"26px","readonly":true,"width":"100%"}, {}],
														REL_MARIAGESTATUSLookup1: ["wm.Lookup", {"caption":"สถานภาพสมรส","captionSize":"130px","displayField":"NAME","formField":"REL_MARIAGESTATUS","readonly":true,"width":"100%"}, {}],
														REL_RACELookup1: ["wm.Lookup", {"caption":"เชื้อชาติ","captionSize":"130px","displayField":"NAME","formField":"REL_RACE","readonly":true,"width":"100%"}, {}],
														REL_RELIGIONLookup1: ["wm.Lookup", {"caption":"ศาสนา","captionSize":"130px","displayField":"NAME","formField":"REL_RELIGION","readonly":true,"width":"100%"}, {}]
													}],
													spacer5: ["wm.Spacer", {"height":"100%","width":"8px"}, {}],
													panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
														spacer2: ["wm.Spacer", {"height":"24px","width":"100%"}, {}],
														SURNAMETHEditor1: ["wm.Text", {"caption":"นามสกุล (ภาษาไทย)","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"SURNAMETH","height":"26px","readonly":true,"width":"100%"}, {}],
														SURNAMEENEditor1: ["wm.Text", {"caption":"นามสกุล (ภาษาอังกฤษ)","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"SURNAMEEN","height":"26px","readonly":true,"width":"100%"}, {}],
														textAGE: ["wm.Text", {"caption":"อายุ","captionSize":"120px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"26px","readonly":true,"width":"100%"}, {}],
														BIRTHADDRESSEditor1: ["wm.Text", {"caption":"สถานที่เกิด","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"BIRTHADDRESS","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
														REL_BLOODTYPELookup1: ["wm.Lookup", {"caption":"หมู่เลือด","captionSize":"120px","displayField":"NAME","formField":"REL_BLOODTYPE","readonly":true,"width":"100%"}, {}],
														REL_NATIONALITYLookup1: ["wm.Lookup", {"caption":"สัญชาติ","captionSize":"120px","displayField":"NAME","formField":"REL_NATIONALITY","readonly":true,"width":"100%"}, {}]
													}]
												}]
											}]
										}],
										layer_PIM01_Contact: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลการติดต่อ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
											ADDRESSEditor1: ["wm.Text", {"caption":"ที่อยู่ที่ติดต่อได้","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ADDRESS","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											TELNO1Editor1: ["wm.Text", {"caption":"เบอร์โทรศัพท์บ้าน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TELNO1","height":"26px","readonly":true,"width":"100%"}, {}],
											TELNO2Editor1: ["wm.Text", {"caption":"เบอร์โทรศัพท์เคลื่อนที่","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TELNO2","height":"26px","readonly":true,"width":"100%"}, {}],
											TELNO3Editor1: ["wm.Text", {"caption":"เบอร์โทรศัพท์ติดต่ออื่นๆ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TELNO3","height":"26px","readonly":true,"width":"100%"}, {}]
										}],
										layer_PIM01_Misc: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"อื่นๆ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
											REL_PERSONALSTATUSLookup1: ["wm.Lookup", {"caption":"สถานะบุคคล","captionSize":"200px","displayField":"NAME","formField":"REL_PERSONALSTATUS","readonly":true,"width":"100%"}, {}],
											YEARSOFWORKEditor1: ["wm.Number", {"caption":"จำนวนปีที่เข้าปฏิบัติงาน","captionSize":"200px","emptyValue":"zero","formField":"YEARSOFWORK","height":"26px","readonly":true,"width":"100%"}, {}]
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
						}],
						layer_PIM02: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"PIM02-ข้อมูลบุคลากร","horizontalAlign":"left","showing":false,"themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer_PIM02Show"}, {
							fancyPanel3: ["wm.FancyPanel", {}, {}, {
								liveForm2: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"LVar_PIM02","targetProperty":"dataSet"}, {}]
									}],
									panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										panelPic: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"center","verticalAlign":"bottom","width":"30%"}, {}, {
											PICIDEditor1: ["wm.Number", {"caption":"รูปประกอบ","captionAlign":"center","emptyValue":"zero","formField":"PICID","readonly":true,"width":"100%"}, {}]
										}],
										panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"70%"}, {}, {
											UIDEditor2: ["wm.Text", {"caption":"รหัสระบบ (UID)","captionSize":"200px","dataValue":"","disabled":true,"emptyValue":"emptyString","formField":"UID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
											PERSONALNOEditor1: ["wm.Number", {"caption":"เลขที่บุคลากร","captionSize":"200px","emptyValue":"zero","formField":"PERSONALNO","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
											tabLayers1: ["wm.TabLayers", {"fitToContentHeight":true,"height":"214px"}, {}, {
												layer_PIM02_Position: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลตำแหน่งงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													POSITIONIDEditor1: ["wm.Number", {"caption":"รหัสเลขที่ตำแหน่ง","captionSize":"200px","emptyValue":"zero","formField":"POSITIONID","height":"26px","readonly":true,"width":"100%"}, {}],
													EMPLOYDATEEditor1: ["wm.DateTime", {"caption":"วันที่เข้ารับราชการ","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"EMPLOYDATE","height":"26px","readonly":true,"width":"100%"}, {}],
													ACTIVEDATEEditor1: ["wm.DateTime", {"caption":"วันที่เข้าส่วนข้าราชการ","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"ACTIVEDATE","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
													RETIREDYEAREditor1: ["wm.Text", {"caption":"ปีที่เกษียณ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"RETIREDYEAR","height":"26px","readonly":true,"width":"100%"}, {}],
													POS_LEVEL_LAST_XXXEditor1: ["wm.Number", {"caption":"ระดับตำแหน่งเดิม","captionSize":"200px","emptyValue":"zero","formField":"POS_LEVEL_LAST_XXX","height":"26px","readonly":true,"width":"100%"}, {}],
													POS_LEVEL_NEW_XXXEditor1: ["wm.Number", {"caption":"ระดับตำแหน่งใหม่","captionSize":"200px","emptyValue":"zero","formField":"POS_LEVEL_NEW_XXX","height":"26px","readonly":true,"width":"100%"}, {}],
													REL_R_MOVEMENTTYPELookup1: ["wm.Lookup", {"caption":"ประเภทการเคลื่อนไหว","captionSize":"200px","displayExpression":"${MOVEMENTTYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_R_MOVEMENTTYPE","readonly":true,"required":true,"width":"100%"}, {}]
												}],
												layer_PIM02_Salary: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลเงินเดือน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													SALARAYEditor1: ["wm.Number", {"caption":"เงินเดือน","captionSize":"200px","emptyValue":"zero","formField":"SALARAY","height":"26px","readonly":true,"width":"100%"}, {}],
													REL_R_SALARYBENEFITLookup1: ["wm.Lookup", {"caption":"ประเภทเงินเพิ่มพิเศษ","captionSize":"200px","displayExpression":"${SARALYBENEFITID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_R_SALARYBENEFIT","readonly":true,"width":"100%"}, {}]
												}],
												layer_PIM02_Misc: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"อื่นๆ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													TAXNOEditor1: ["wm.Text", {"caption":"เลขประจำตัวผู้เสียภาษีอากร","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TAXNO","height":"26px","readonly":true,"width":"100%"}, {}],
													CONTACTADDRESSEditor1: ["wm.Text", {"caption":"ที่อยู่ที่สามารถติดต่อได้","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"CONTACTADDRESS","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}]
												}]
											}]
										}]
									}]
								}],
								liveForm2EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"liveForm2","lock":false,"operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
									savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton2: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm2EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"liveForm2EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton2: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm2EditPanel.cancelEdit"}]
									}],
									operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton2: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm2EditPanel.beginDataInsert"}],
										updateButton2: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm2EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"liveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton2: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm2EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"liveForm2EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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