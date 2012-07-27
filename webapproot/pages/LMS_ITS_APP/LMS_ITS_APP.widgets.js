LMS_ITS_APP.widgets = {
	varTemplateUsername: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	lms_itsLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.lms_its_LiveView1"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"lms_itsLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	LVar_ITS_Grid: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"app.lms_its_LiveView1","matchMode":"anywhere"}, {"onResult":"LVar_ITS_GridResult"}],
	var_ITS_Search: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"ID.\",\"dataValue\":\"0\"},{\"name\":\"ชื่อ\",\"dataValue\":\"1\"},{\"name\":\"นามสกุล\",\"dataValue\":\"2\"},{\"name\":\"สถาบันการศึกษา\",\"dataValue\":\"3\"},{\"name\":\"สาขาวืชา\",\"dataValue\":\"4\"}]","type":"EntryData"}, {}],
	userFilterVariable: ["wm.Variable", {"type":"EntryData"}, {}],
	navCall_Layer_ITS_Info: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer_ITS_Info","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	LVar_ITS_Req_Grid: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"app.lms_its_reqLiveView1","matchMode":"anywhere"}, {"onResult":"LVar_ITS_Req_GridResult"}],
	lms_its_reqDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":"380px","modal":false,"title":"[LMS_ITS_REQ_002] ปรับแต่งข้อมูลการร้องขอนักศึกษาฝึกงาน","width":"520px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"506px"}, {}, {
			lms_its_reqLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"302px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onBeginInsert":"lms_its_reqLiveForm1BeginInsert","onBeginUpdate":"lms_its_reqLiveForm1BeginUpdate","onSuccess":"lms_its_reqLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_its_reqDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.REL_EDUCATIONLEVEL"}, {}]
				}],
				ITS_REQ_IDEditor1: ["wm.Number", {"caption":"ID.","captionAlign":"left","captionSize":"40px","emptyValue":"zero","formField":"ITS_REQ_ID","height":"26px","required":true,"width":"100px"}, {}],
				tabLayers2: ["wm.TabLayers", {"fitToContentHeight":true,"height":"268px","transition":"fade"}, {}, {
					layer7: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลการร้องขอ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						REQUESTOR_IDEditor1: ["wm.Text", {"caption":"รหัสผู้ร้องขอ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REQUESTOR_ID","height":"26px","width":"100%"}, {}],
						lookup3: ["wm.Lookup", {"caption":"หน่วยงานที่ร้องขอ","captionSize":"200px","displayExpression":"${UNIT_NAME} + \" (\" + ${UNIT_CODE} + \")\"","displayField":"UNIT_CODE","formField":"REL_UNIT","height":"26px","width":"100%"}, {}],
						lookup2: ["wm.Lookup", {"caption":"ความสามารถ/ความเชี่ยวชาญที่ต้องการ","captionSize":"200px","displayExpression":"${ITS_ABILITY_ID} + \" - \" + ${ABILITY_NAME}","displayField":"ABILITY_NAME","formField":"REL_ITS_ABILITY","height":"26px","width":"100%"}, {}],
						REQ_AMOUNTEditor1: ["wm.Number", {"caption":"จำนวน (คน) ที่ร้องขอ","captionSize":"200px","emptyValue":"zero","formField":"REQ_AMOUNT","height":"26px","required":true,"width":"100%"}, {}],
						REQ_TSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่ร้องขอ","captionSize":"200px","emptyValue":"emptyString","formField":"REQ_TS","height":"26px","width":"100%"}, {}],
						lookup5: ["wm.Lookup", {"caption":"สถานะการร้องขอ","captionSize":"200px","displayExpression":"${ITS_REQ_STATUS_ID} + \" - \" + ${REQ_STATUS_NAME}","displayField":"REQ_STATUS_NAME","formField":"REL_REQ_STATUS","height":"26px","required":true,"width":"100%"}, {}],
						REQ_REASONEditor1: ["wm.Text", {"caption":"เหตุผลการร้องขอ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REQ_REASON","height":"26px","width":"100%"}, {}],
						lookup4: ["wm.Lookup", {"caption":"ช่วงเวลาการฝึกงาน","captionSize":"200px","displayExpression":"${INTERN_PERIOD_ID} + \" - \"  + ${PERIOD}","displayField":"PERIOD","formField":"REL_INTERNPERIOD","height":"26px","required":true,"width":"100%"}, {}],
						lookup1: ["wm.Lookup", {"caption":"ระดับการศึกษาที่ต้องการ","captionSize":"200px","displayExpression":"${EDUCATIONLEVELID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_EDUCATIONLEVEL","height":"26px","width":"100%"}, {}]
					}],
					layer9: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"อื่นๆ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						MEMOEditor1: ["wm.Text", {"caption":"รายละเอียดอื่นๆ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"MEMO","height":"52px","singleLine":false,"width":"100%"}, {}]
					}],
					layer8: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
						CREATEBYID_Editor1: ["wm.Text", {"caption":"กำหนดโดย","captionSize":"200px","dataValue":"","disabled":true,"emptyValue":"emptyString","formField":"CREATEBY_ID","height":"26px","readonly":true,"width":"100%"}, {}],
						CREATETS_Editor1: ["wm.DateTime", {"caption":"วันเวลาที่กำหนด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"CREATE_TS","height":"26px","readonly":true,"width":"100%"}, {}],
						MODIFYBYID_Editor1: ["wm.Number", {"caption":"ปรับปรุงโดย","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"UPDATEBY_ID","height":"26px","readonly":true,"width":"100%"}, {}],
						MODIFYTS_Editor1: ["wm.DateTime", {"caption":"วันเวลาที่ปรับปรุง","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"UPDATE_TS","height":"26px","readonly":true,"width":"100%"}, {}]
					}]
				}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_its_reqSaveButton: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_reqLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_its_reqLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_its_reqCancelButton: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_reqDialog.hide","onclick1":"lms_its_reqLiveForm1.cancelEdit"}]
		}]
	}],
	lms_its_reqLiveVariable1: ["wm.LiveVariable", {"autoUpdate":false,"liveSource":"app.lms_its_reqLiveView1"}, {}],
	var_ITS_REQ_Search: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"รหัสผู้ร้องขอ\",\"dataValue\":\"0\"},{\"name\":\"หน่วยงานที่ร้องขอ\",\"dataValue\":\"1\"},{\"name\":\"ประเทความสามารถ\",\"dataValue\":\"2\"}]","type":"EntryData"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_ITS_APP] ระบบจัดการนักศึกษาฝึกงาน"}, {}, {
			layer_LMS_ITS: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_ITS_Search: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ค้นหานักศึกษาฝึกงาน","horizontalAlign":"left","padding":"0","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selectMenuSearch: ["wm.SelectMenu", {"caption":"ค้นหาโดย","captionAlign":"center","captionSize":"70px","displayExpression":"${dataValue} + \" - \" + ${name}","displayValue":"","placeHolder":"เลือกประเภทการค้นหา"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"var_ITS_Search","targetProperty":"dataSet"}, {}]
							}]
						}],
						txt_searchKey: ["wm.Text", {"caption":"คำค้นหา","captionAlign":"center","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรอกคำค้นหา","resetButton":true}, {"onEnterKeyPress":"txt_searchKeyEnterKeyPress"}],
						buttonSearch: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchClick"}],
						buttonClear: ["wm.Button", {"caption":"ล้างค่า","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearClick"}]
					}],
					fancyPanel2: ["wm.FancyPanel", {"height":"80%","title":"ผลการค้นหา"}, {}, {
						dojoGrid_ITS: ["wm.DojoGrid", {"columns":[{"show":true,"id":"ITSID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FIRSTNAME","title":"ชื่อ","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"LASTNAME","title":"นามสกุล","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"SEX","title":"เพศ","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"BIRTHDATE","title":"BIRTHDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CITIZEN_ID","title":"CITIZEN_ID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ADDRESS","title":"ADDRESS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"TELEPHONENO","title":"TELEPHONENO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"EMAIL","title":"EMAIL","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REGIST_DATE","title":"REGIST_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"STARTDATE","title":"STARTDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"FINISHDATE","title":"FINISHDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"ABILITY","title":"ABILITY","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"MEMO","title":"MEMO","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CONTACTPERSON","title":"CONTACTPERSON","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CONTACTPERSON_DETAILS","title":"CONTACTPERSON_DETAILS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"ISACTIVE","title":"ISACTIVE","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_TITLENAME.INIT_ID","title":"REL_TITLENAME.INIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_TITLENAME.NAME","title":"คำนำหน้า","width":"10%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_TITLENAME.NAMEEN","title":"REL_TITLENAME.NAMEEN","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_ACADEMIC.EDUCATIONSCHOOLID","title":"REL_ACADEMIC.EDUCATIONSCHOOLID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_MAJOR.NAME","title":"สาขาวิชา","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_EDU_LEVEL.NAME","title":"ระดับการศึกษา","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_ACADEMIC.NAME","title":"สถานศึกษา","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_MAJOR.EDUCATIONMAJORID","title":"REL_MAJOR.EDUCATIONMAJORID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_ITS_STATUS.ITS_STATUS_ID","title":"REL_ITS_STATUS.ITS_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_ITS_STATUS.STATUSNAME","title":"REL_ITS_STATUS.STATUSNAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_ITS_STATUS.DESC","title":"REL_ITS_STATUS.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_EDU_LEVEL.EDUCATIONLEVELID","title":"REL_EDU_LEVEL.EDUCATIONLEVELID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onClick":"dojoGrid_ITSClick"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"LVar_ITS_Grid","targetProperty":"dataSet"}, {}]
							}]
						}]
					}],
					panel4: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						txtSearchResult: ["wm.Text", {"captionAlign":"left","dataValue":undefined,"displayValue":"","readonly":true}, {}],
						spacer1: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
						buttonSelect: ["wm.Button", {"caption":"เลือก","imageIndex":88,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navCall_Layer_ITS_Info"}]
					}]
				}],
				layer_ITS_Info: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลนักศึกษาฝึกงาน","horizontalAlign":"left","padding":"0","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","scrollY":true,"verticalAlign":"top","width":"100%"}, {}, {
						liveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"322px","horizontalAlign":"left","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"liveForm1BeginInsert","onBeginUpdate":"liveForm1BeginUpdate"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"lms_itsLiveVariable1","targetProperty":"dataSet"}, {}],
								wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.REL_TITLENAME"}, {}]
							}],
							ITSIDEditor1: ["wm.Number", {"caption":"ID.","captionAlign":"center","captionSize":"200px","emptyValue":"zero","formField":"ITSID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
							REL_ITS_STATUSLookup1: ["wm.Lookup", {"caption":"สถานะนักศึกษาฝึกงาน","captionSize":"200px","displayField":"STATUSNAME","formField":"REL_ITS_STATUS","readonly":true,"width":"100%"}, {}],
							tabLayers1: ["wm.TabLayers", {"height":"240px","transition":"fade"}, {}, {
								layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลส่วนตัว","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									REL_TITLENAMELookup1: ["wm.Lookup", {"caption":"คำนำหน้าชื่อ","captionSize":"200px","displayExpression":"${NAME}","displayField":"NAMEEN","formField":"REL_TITLENAME","readonly":true,"width":"100%"}, {}],
									FIRSTNAMEEditor1: ["wm.Text", {"caption":"ชื่อ","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"FIRSTNAME","height":"26px","readonly":true,"width":"100%"}, {}],
									LASTNAMEEditor1: ["wm.Text", {"caption":"นามสกุล","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"LASTNAME","height":"26px","readonly":true,"width":"100%"}, {}],
									SEXEditor: ["wm.SelectMenu", {"caption":"เพศ","captionSize":"200px","dataField":"dataValue","displayField":"dataValue","formField":"SEX","height":"26px","options":"M,F","readonly":true,"width":"100%"}, {}],
									BIRTHDATEEditor1: ["wm.DateTime", {"caption":"วันเกิด","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"BIRTHDATE","height":"26px","readonly":true,"width":"100%"}, {}],
									textAGE: ["wm.Text", {"caption":"อายุ (ปี)","captionSize":"200px","displayValue":"42","emptyValue":"emptyString","height":"26px","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"Math.floor((new Date() - ${BIRTHDATEEditor1.dataValue})/(1000*60*60*24*365.25))","source":false,"targetProperty":"dataValue"}, {}]
										}]
									}],
									CITIZEN_IDEditor1: ["wm.Text", {"caption":"เลขที่บัตรประชาชน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"CITIZEN_ID","height":"26px","invalidMessage":"กรอกรหัสปัตรประชาชนจำนวน 13 หลัก","readonly":true,"regExp":"\\d{13}","required":true,"width":"100%"}, {}],
									ABILITYEditor1: ["wm.Text", {"caption":"ความสามารถ/ความเชี่ยวชาญ:","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ABILITY","height":"26px","readonly":true,"width":"100%"}, {}]
								}],
								layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลการติดต่อ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									ADDRESSEditor1: ["wm.Text", {"caption":"ที่อยู่","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"ADDRESS","height":"26px","readonly":true,"singleLine":false,"width":"100%"}, {}],
									TELEPHONENOEditor1: ["wm.Text", {"caption":"เบอร์โทรศัพท์","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TELEPHONENO","height":"26px","readonly":true,"width":"100%"}, {}],
									EMAILEditor1: ["wm.Text", {"caption":"อีเมล์","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"EMAIL","height":"26px","readonly":true,"width":"100%"}, {}],
									CONTACTPERSONEditor1: ["wm.Text", {"caption":"ชื่อ - นามสกุล บุคคลที่ติดต่อได้","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"CONTACTPERSON","height":"26px","readonly":true,"width":"100%"}, {}],
									CONTACTPERSON_DETAILSEditor1: ["wm.Text", {"caption":"ข้อมูลบุคคลที่ติดต่อได้","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"CONTACTPERSON_DETAILS","height":"26px","readonly":true,"width":"100%"}, {}]
								}],
								layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลการศึกษา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									REL_ACADEMICLookup1: ["wm.Lookup", {"caption":"สถาบันการศึกษา","captionSize":"200px","displayField":"NAME","formField":"REL_ACADEMIC","readonly":true,"width":"100%"}, {}],
									REL_EDU_LEVELLookup1: ["wm.Lookup", {"caption":"ระดับการศึกษา","captionSize":"200px","displayField":"NAME","formField":"REL_EDU_LEVEL","readonly":true,"width":"100%"}, {}],
									REL_MAJORLookup1: ["wm.Lookup", {"caption":"สาขาวิชา","captionSize":"200px","displayField":"NAME","formField":"REL_MAJOR","readonly":true,"width":"100%"}, {}]
								}],
								layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลการฝึกงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									REGIST_DATEEditor1: ["wm.DateTime", {"caption":"วันที่ลงทะเบียน","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"REGIST_DATE","height":"26px","readonly":true,"width":"100%"}, {}],
									STARTDATEEditor1: ["wm.DateTime", {"caption":"วันที่ต้องการเริ่มฝึกงาน","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"STARTDATE","height":"26px","readonly":true,"width":"100%"}, {}],
									FINISHDATEEditor1: ["wm.DateTime", {"caption":"วันที่สิ้นสุดการฝึกงาน","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"FINISHDATE","height":"26px","readonly":true,"width":"100%"}, {}],
									text1: ["wm.Text", {"caption":"ระยะเวลาทั้งสิ้น (วัน)","captionSize":"200px","displayValue":"0","emptyValue":"emptyString","height":"26px","readonly":true,"width":"100%"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":"(${FINISHDATEEditor1.dataValue}-${STARTDATEEditor1.dataValue})/86400000","source":false,"targetProperty":"dataValue"}, {}]
										}]
									}]
								}],
								layer6: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"left","roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									CREATEBYIDEditor1: ["wm.Number", {"caption":"กำหนดโดย","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
									CREATETSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่กำหนด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
									MODIFYBYIDEditor1: ["wm.Number", {"caption":"ปรับแต่งล่าสุดโดย","captionSize":"200px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
									MODIFYTSEditor1: ["wm.DateTime", {"caption":"วัน และเวลาที่ปรับแต่งล่าสุด","captionSize":"200px","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}],
									ISACTIVEEditor1: ["wm.Checkbox", {"caption":"สถานะการใช้งาน","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"ISACTIVE","height":"26px","readonly":true,"width":"100%"}, {}]
								}],
								layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"อื่นๆ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									richText1: ["wm.RichText", {"caption":"รายละเอียดอื่นๆ","captionAlign":"right","captionPosition":"left","captionSize":"200px","dataValue":null,"formField":"MEMO","height":"200%","padding":"2","readonly":true,"toolbarStyleAll":true}, {}]
								}]
							}],
							liveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"liveForm1","lock":false,"operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
								savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
									saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"liveForm1EditPanel.saveData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
										}]
									}],
									cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"liveForm1EditPanel.cancelEdit"}]
								}],
								operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									newButton1: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataInsert"}],
									updateButton1: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataUpdate"}, {
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
				layer_ITS_Request: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ร้องขอนักศึกษาฝึกงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel2: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selectMenuSearch_Req: ["wm.SelectMenu", {"caption":"ค้นหาโดย","captionAlign":"center","captionSize":"70px","displayExpression":"${dataValue} + \" - \" + ${name}","displayValue":""}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"var_ITS_REQ_Search","targetProperty":"dataSet"}, {}]
							}]
						}],
						txt_searchKey_Req: ["wm.Text", {"caption":"คำค้นหา","captionAlign":"center","captionSize":"80px","dataValue":undefined,"displayValue":"","resetButton":true}, {"onEnterKeyPress":"txt_searchKey_ReqEnterKeyPress"}],
						buttonSearch_Req: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearch_ReqClick"}],
						buttonClear_Req: ["wm.Button", {"caption":"ล้างค่า","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClear_ReqClick"}]
					}],
					lms_its_reqLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_its_reqDialog","targetId":null,"targetProperty":"dialog"}, {}],
							wire1: ["wm.Wire", {"source":"lms_its_reqLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
							wire2: ["wm.Wire", {"source":"lms_its_reqDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
							wire3: ["wm.Wire", {"source":"lms_its_reqSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
						}],
						lms_its_reqDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"ITS_REQ_ID","title":"ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"UPDATEBY_ID","title":"UPDATEBY_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REQ_REASON","title":"REQ_REASON","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"REQ_AMOUNT","title":"จำนวนที่ร้องขอ","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"UPDATE_TS","title":"UPDATE_TS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REQ_TS","title":"REQ_TS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":true,"id":"REQUESTOR_ID","title":"รหัสผู้ร้องขอ","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"MEMO","title":"MEMO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_EDUCATIONLEVEL.EDUCATIONLEVELID","title":"REL_EDUCATIONLEVEL.EDUCATIONLEVELID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_EDUCATIONLEVEL.NAME","title":"REL_EDUCATIONLEVEL.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_ITS_ABILITY.ITS_ABILITY_ID","title":"REL_ITS_ABILITY.ITS_ABILITY_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_UNIT.UNIT_NAME","title":"หน่วยงาน","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_ITS_ABILITY.ABILITY_NAME","title":"ประเภทความสามารถ","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_UNIT.UNIT_ID","title":"REL_UNIT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT.UNIT_CODE","title":"REL_UNIT.UNIT_CODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT.APPROVE_DATE","title":"REL_UNIT.APPROVE_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_UNIT.AFFECTIVE_DATE","title":"REL_UNIT.AFFECTIVE_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_UNIT.COMMENT","title":"REL_UNIT.COMMENT","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT.STATUS","title":"REL_UNIT.STATUS","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT.ORDER_NO","title":"REL_UNIT.ORDER_NO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT.ORDER_DATE","title":"REL_UNIT.ORDER_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_UNIT.CANCEL_DATE","title":"REL_UNIT.CANCEL_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"REL_UNIT.UNIT_REGION","title":"REL_UNIT.UNIT_REGION","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_INTERNPERIOD.INTERN_PERIOD_ID","title":"REL_INTERNPERIOD.INTERN_PERIOD_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_INTERNPERIOD.PERIOD","title":"ช่วงเวลา","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_INTERNPERIOD.DESC","title":"REL_INTERNPERIOD.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_REQ_STATUS.ITS_REQ_STATUS_ID","title":"REL_REQ_STATUS.ITS_REQ_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_REQ_STATUS.REQ_STATUS_NAME","title":"REL_REQ_STATUS.REQ_STATUS_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_REQ_STATUS.REQ_STATUS_DESC","title":"REL_REQ_STATUS.REQ_STATUS_DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CREATEBY_ID","title":"CREATEBY_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"CREATE_TS","title":"CREATE_TS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"}],"height":"100%","margin":"4"}, {"onCellDblClick":"lms_its_reqLivePanel1.popupLivePanelEdit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"LVar_ITS_Req_Grid","targetProperty":"dataSet"}, {}]
							}]
						}],
						lms_its_reqGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							txtSearchReqResult: ["wm.Text", {"captionAlign":"left","dataValue":undefined,"displayValue":"","readonly":true}, {}],
							spacer2: ["wm.Spacer", {"height":"48px","width":"96%"}, {}],
							lms_its_reqNewButton: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_reqLivePanel1.popupLivePanelInsert"}],
							lms_its_reqUpdateButton: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_reqLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"lms_its_reqDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}],
							lms_its_reqDeleteButton: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_its_reqLiveForm1.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"lms_its_reqDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}]
			}]
		}]
	}]
}