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
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	varSearchType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"UID.\",\"dataValue\":\"0\"},{\"name\":\"รหัสบุคลากร\",\"dataValue\":\"1\"},{\"name\":\"ชื่อ\",\"dataValue\":\"2\"},{\"name\":\"นามสกุล\",\"dataValue\":\"3\"},{\"name\":\"เลขประจำตัวประชาชน\",\"dataValue\":\"4\"}]","type":"EntryData"}, {}],
	LVar_PIM01: ["wm.LiveVariable", {"liveSource":"app.pim01_LiveView","startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoGridPIMList.selectedItem.uid","targetProperty":"filter.UID"}, {}]
		}]
	}],
	varSelectedUID: ["wm.Variable", {"type":"NumberData"}, {}],
	pim_02_employeeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pim_02_employeeLiveView1","startUpdate":false}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoGridPIMList.selectedItem.uid","targetProperty":"filter.UID"}, {}]
		}]
	}],
	loadingDialog3: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"sVar_PIMLIST","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	sVar_PIMLIST: ["wm.ServiceVariable", {"operation":"q_Chair_GOV2","service":"LMS","startUpdate":true}, {"onResult":"sVar_PIMLISTResult"}, {
		input: ["wm.ServiceInput", {"type":"q_Chair_GOV2Inputs"}, {}]
	}],
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
					panel2: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						dojoGridPIMList: ["wm.DojoGrid", {"columns":[{"show":true,"id":"uid","title":"รหัสระบบ (UID)","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"name","title":"ชื่อ","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"surname","title":"นามสกุล","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"personalType","title":"ประเภทบุคคล","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"c4","title":"รหัสบุคลากร","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"sVar_PIMLIST","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					panel3: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						textSearchResult: ["wm.Text", {"captionAlign":"left","captionSize":"0px","dataValue":undefined,"displayValue":"","readonly":true,"width":"200px"}, {}],
						spacer1: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
						buttonSelect: ["wm.Button", {"caption":"เลือก","imageIndex":73,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"layer_PIM_Info"}]
					}]
				}],
				layer_PIM_Info: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลส่วนบุคคล","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer_PIM_InfoShow"}, {
					tabLayer_PIM_Info_Details: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_PIM01: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"PIM01-ข้อมูลส่วนบุคคล","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer_PIM01Show"}, {
							fancyPanel2: ["wm.FancyPanel", {"title":"[PIM01_INFO] ปรับแต่งข้อมูลส่วนบุคคล"}, {}, {
								liveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","readonly":true,"scrollY":true,"verticalAlign":"top"}, {}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"LVar_PIM01","targetProperty":"dataSet"}, {}]
									}],
									panel4: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										UIDEditor1: ["wm.Number", {"caption":"รหัสระบบ (UID)","captionSize":"130px","emptyValue":"zero","formField":"UID","height":"26px","readonly":true,"required":true,"width":"50%"}, {}],
										REL_PERSONALTYPELookup1: ["wm.Lookup", {"caption":"ประเภทบุคคล","captionSize":"128px","displayExpression":"${PERSONTYPE_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_PERSONALTYPE","readonly":true,"required":true,"width":"50%"}, {"onchange":"REL_PERSONALTYPELookup1Change"}]
									}],
									tabLayersPIM01_Details: ["wm.TabLayers", {"transition":"fade"}, {}, {
										layer_PIM01_Basic: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลพื้นฐาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
											panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
												panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
													spacer4: ["wm.Spacer", {"height":"100%","width":"8px"}, {}],
													panel7: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
														REL_INITIALNAMELookup1: ["wm.Lookup", {"caption":"คำนำหน้าชื่อ","captionSize":"130px","displayExpression":"${INIT_ID} + \" - \" + ${NAME} + \" (\" + ${NAMEEN} + \")\"","displayField":"NAMEEN","formField":"REL_INITIALNAME","readonly":true,"width":"100%"}, {}],
														NAMETHEditor1: ["wm.Text", {"caption":"ชื่อ (ภาษาไทย)","captionSize":"130px","dataValue":"กรรณนิภา","emptyValue":"emptyString","formField":"NAMETH","height":"26px","readonly":true,"width":"100%"}, {}],
														NAMEENEditor1: ["wm.Text", {"caption":"ชื่อ (ภาษาอังกฤษ)","captionSize":"130px","dataValue":"KANNIPHA","emptyValue":"emptyString","formField":"NAMEEN","height":"26px","readonly":true,"width":"100%"}, {}],
														selectMenuSex: ["wm.SelectMenu", {"caption":"เพศ","captionSize":"130px","dataField":"dataValue","displayExpression":"${name} + \" (\" + ${dataValue} + \")\"","displayField":"dataValue","formField":"SEX","height":"26px","readonly":true,"required":true,"width":"100%"}, {}, {
															binding: ["wm.Binding", {}, {}, {
																wire: ["wm.Wire", {"expression":undefined,"source":"staticVarSex","targetProperty":"dataSet"}, {}]
															}]
														}],
														BIRTHDATEEditor1: ["wm.DateTime", {"caption":"วันที่เกิด","captionSize":"130px","dataValue":733338000000,"dateMode":"Date","emptyValue":"emptyString","formField":"BIRTHDATE","height":"26px","readonly":true,"width":"100%"}, {}],
														CITIZENIDEditor1: ["wm.Text", {"caption":"เลขบัตรประจำตัวประชาชน","captionSize":"130px","dataValue":"1234567891234","emptyValue":"emptyString","formField":"CITIZENID","height":"26px","readonly":true,"width":"100%"}, {}],
														REL_MARIAGESTATUSLookup1: ["wm.Lookup", {"caption":"สถานภาพสมรส","captionSize":"130px","displayExpression":"${MARIAGESTATUSID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_MARIAGESTATUS","readonly":true,"width":"100%"}, {}],
														REL_RACELookup1: ["wm.Lookup", {"caption":"เชื้อชาติ","captionSize":"130px","displayExpression":"${RACEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_RACE","readonly":true,"width":"100%"}, {}],
														REL_RELIGIONLookup1: ["wm.Lookup", {"caption":"ศาสนา","captionSize":"130px","displayExpression":"${RELIGIONID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_RELIGION","readonly":true,"width":"100%"}, {}]
													}],
													spacer5: ["wm.Spacer", {"height":"100%","width":"8px"}, {}],
													panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
														spacer2: ["wm.Spacer", {"height":"24px","width":"100%"}, {}],
														SURNAMETHEditor1: ["wm.Text", {"caption":"นามสกุล (ภาษาไทย)","captionSize":"120px","dataValue":"เจริญ","emptyValue":"emptyString","formField":"SURNAMETH","height":"26px","readonly":true,"width":"100%"}, {}],
														SURNAMEENEditor1: ["wm.Text", {"caption":"นามสกุล (ภาษาอังกฤษ)","captionSize":"120px","dataValue":"CHAROEN","emptyValue":"emptyString","formField":"SURNAMEEN","height":"26px","readonly":true,"width":"100%"}, {}],
														textAGE: ["wm.Text", {"caption":"อายุ","captionSize":"120px","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"26px","readonly":true,"width":"100%"}, {}],
														BIRTHADDRESSEditor1: ["wm.Text", {"caption":"สถานที่เกิด","captionSize":"120px","dataValue":"","emptyValue":"emptyString","formField":"BIRTHADDRESS","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
														REL_BLOODTYPELookup1: ["wm.Lookup", {"caption":"หมู่เลือด","captionSize":"120px","displayExpression":"${BLOODTYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_BLOODTYPE","readonly":true,"width":"100%"}, {}],
														REL_NATIONALITYLookup1: ["wm.Lookup", {"caption":"สัญชาติ","captionSize":"120px","displayExpression":"${NATIONALITYID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_NATIONALITY","readonly":true,"width":"100%"}, {}]
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
						}],
						layer_PIM02: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"PIM02-ข้อมูลบุคลากร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							pim_02_employeeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								pim_02_employeeGridPanel: ["wm.FancyPanel", {"minHeight":"180","showing":false,"title":"Pim_02_employee"}, {}, {
									pim_02_employeeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UID","title":"UID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"PERSONALNO","title":"PERSONALNO","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"ACTIVEDATE","title":"ACTIVEDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"PICID","title":"PICID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"TAXNO","title":"TAXNO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"EMPLOYDATE","title":"EMPLOYDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"RETIREDYEAR","title":"RETIREDYEAR","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"CONTACTADDRESS","title":"CONTACTADDRESS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"REL_MOVEMENTTYPE.MOVEMENTTYPEID","title":"REL_MOVEMENTTYPE.MOVEMENTTYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_MOVEMENTTYPE.NAME","title":"REL_MOVEMENTTYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"REL_SALARYBENEFIT.SARALYBENEFITID","title":"REL_SALARYBENEFIT.SARALYBENEFITID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_SALARYBENEFIT.NAME","title":"REL_SALARYBENEFIT.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"POS_LEVEL_LAST_XXX","title":"POS_LEVEL_LAST_XXX","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"POS_LEVEL_NEW_XXX","title":"POS_LEVEL_NEW_XXX","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_POSITION_CHAIR.CHAIR_ID","title":"REL_POSITION_CHAIR.CHAIR_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.POSITIONID","title":"REL_POSITION_CHAIR.POSITIONID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POSITION_TYPE.POSITION_TYPE_ID","title":"REL_POSITION_CHAIR.REL_POSITION_TYPE.POSITION_TYPE_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POSITION_TYPE.NAME","title":"REL_POSITION_CHAIR.REL_POSITION_TYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_UNIT.UNIT_ID","title":"REL_POSITION_CHAIR.REL_UNIT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_UNIT.UNIT_NAME","title":"REL_POSITION_CHAIR.REL_UNIT.UNIT_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POS_MANAGE.POSITION_MANAGEMENT_ID","title":"REL_POSITION_CHAIR.REL_POS_MANAGE.POSITION_MANAGEMENT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POS_MANAGE.NAME","title":"REL_POSITION_CHAIR.REL_POS_MANAGE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POS_WORK.POSITION_WORK_ID","title":"REL_POSITION_CHAIR.REL_POS_WORK.POSITION_WORK_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POS_WORK.NAME","title":"REL_POSITION_CHAIR.REL_POS_WORK.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POS_LEVEL.LEVEL_ID","title":"REL_POSITION_CHAIR.REL_POS_LEVEL.LEVEL_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POS_LEVEL.NAME","title":"REL_POSITION_CHAIR.REL_POS_LEVEL.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POSONAL_TYPE.PERSONTYPE_ID","title":"REL_POSITION_CHAIR.REL_POSONAL_TYPE.PERSONTYPE_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POSONAL_TYPE.NAME","title":"REL_POSITION_CHAIR.REL_POSONAL_TYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POSITIONSTATUS.POSITIONSTATUS_ID","title":"REL_POSITION_CHAIR.REL_POSITIONSTATUS.POSITIONSTATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_POSITION_CHAIR.REL_POSITIONSTATUS.NAME","title":"REL_POSITION_CHAIR.REL_POSITIONSTATUS.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								pim_02_employeeDetailsPanel: ["wm.FancyPanel", {"title":"[PIM02_INFO] ข้อมูลบุคลากร"}, {}, {
									pim_02_employeeLiveForm1: ["wm.LiveForm", {"autoScroll":true,"confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"pim_02_employeeLiveForm1BeginInsert","onSuccess":"pim_02_employeeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveVariable1","targetProperty":"dataSet"}, {}]
										}],
										panel5: ["wm.Panel", {"fitToContentHeight":true,"height":"332px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"30%"}, {}, {
												PICIDEditor1: ["wm.Number", {"caption":"PICID","captionAlign":"center","captionSize":"200px","emptyValue":"zero","formField":"PICID","height":"26px","readonly":true,"width":"100%"}, {}]
											}],
											panel11: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"70%"}, {}, {
												UIDEditor2: ["wm.Number", {"caption":"รหัสระบบ (UID)","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"UID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												PERSONALNOEditor1: ["wm.Text", {"caption":"เลขที่บุคลากร","captionSize":"200px","dataValue":"540123","emptyValue":"emptyString","formField":"PERSONALNO","height":"26px","readonly":true,"width":"100%"}, {}],
												REL_POSITION_CHAIRLookup1: ["wm.Lookup", {"caption":"เลขที่ตำแหน่ง","captionSize":"200px","displayExpression":"${POSITIONID}","displayField":"COMMENT","formField":"REL_POSITION_CHAIR","readonly":true,"width":"100%"}, {}],
												ACTIVEDATEEditor1: ["wm.DateTime", {"caption":"วันที่เข้าส่วนราชการ","captionSize":"200px","dataValue":1341162000000,"dateMode":"Date","emptyValue":"emptyString","formField":"ACTIVEDATE","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
												TAXNOEditor1: ["wm.Text", {"caption":"เลขประจำตัวผู้เสียภาษีอากร","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TAXNO","height":"26px","readonly":true,"width":"100%"}, {}],
												EMPLOYDATEEditor1: ["wm.DateTime", {"caption":"วันที่เข้ารับราชการ","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"EMPLOYDATE","height":"26px","readonly":true,"width":"100%"}, {}],
												POS_LEVEL_LAST_XXXEditor1: ["wm.Number", {"caption":"ระดับตำแหน่งเดิม","captionSize":"200px","emptyValue":"zero","formField":"POS_LEVEL_LAST_XXX","height":"26px","readonly":true,"width":"100%"}, {}],
												POS_LEVEL_NEW_XXXEditor1: ["wm.Number", {"caption":"ระดับตำแหน่งใหม่","captionSize":"200px","emptyValue":"zero","formField":"POS_LEVEL_NEW_XXX","height":"26px","readonly":true,"width":"100%"}, {}],
												RETIREDYEAREditor1: ["wm.Text", {"caption":"ปีที่เกษียณ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"RETIREDYEAR","height":"26px","readonly":true,"width":"100%"}, {}],
												CONTACTADDRESSEditor1: ["wm.Text", {"caption":"ที่อยู่ที่สามารถติดต่อได้","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"CONTACTADDRESS","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
												REL_MOVEMENTTYPELookup1: ["wm.Lookup", {"caption":"รหัสประเภทการเคลื่อนไหว","captionSize":"200px","displayField":"NAME","formField":"REL_MOVEMENTTYPE","readonly":true,"required":true,"width":"100%"}, {}],
												REL_SALARYBENEFITLookup1: ["wm.Lookup", {"caption":"รหัสประเภทเงินเพิ่มพิเศษ","captionSize":"200px","displayField":"NAME","formField":"REL_SALARYBENEFIT","readonly":true,"width":"100%"}, {}]
											}]
										}]
									}],
									pim_02_employeeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"pim_02_employeeLiveForm1","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
										savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
											saveButton2: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"pim_02_employeeLiveForm1EditPanel.saveData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
												}]
											}],
											cancelButton2: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"pim_02_employeeLiveForm1EditPanel.cancelEdit"}]
										}],
										operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
											newButton2: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"pim_02_employeeLiveForm1EditPanel.beginDataInsert"}],
											updateButton2: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"pim_02_employeeLiveForm1EditPanel.beginDataUpdate"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
												}]
											}],
											deleteButton2: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"pim_02_employeeLiveForm1EditPanel.deleteData"}, {
												binding: ["wm.Binding", {}, {}, {
													wire: ["wm.Wire", {"expression":undefined,"source":"pim_02_employeeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
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
}