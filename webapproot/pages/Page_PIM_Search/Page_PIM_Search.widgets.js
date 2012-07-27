Page_PIM_Search.widgets = {
	lVar_PIM01_List: ["wm.LiveVariable", {"autoUpdate":false,"ignoreCase":true,"liveSource":"app.pim_01_generalLiveView1","matchMode":"anywhere"}, {}],
	navCall_PIM_Main: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_PIM_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_PIM_MT: ["wm.NavigationCall", {"operation":"gotoPage"}, {"onSuccess":"navCall_PIM_MTSuccess"}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_PIM_MT\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"lVar_PIM01_List","targetProperty":"serviceVariableToTrack"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"813px"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[PIM_SEARCH] ค้นหาข้อมูลส่วนบุคคล"}, {}, {
			wizardLayers1: ["wm.WizardLayers", {}, {"onCancelClick":"navCall_PIM_Main","onDoneClick":"wizardLayers1DoneClick","onDoneClick1":"navCall_PIM_MT","onLayerValidation":"wizardLayers1LayerValidation","oncanchange":"wizardLayers1Canchange"}, {
				layer1: ["wm.Layer", {"border":"1","caption":"STEP 1: เลือกประเภทการค้นหา","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"layer1Show"}, {
					spacer1: ["wm.Spacer", {"height":"100%","width":"10%"}, {}],
					panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"80%"}, {}, {
						panel6: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							label1: ["wm.Label", {"border":"0","caption":"Select searching type:","padding":"4"}, {}]
						}],
						panel2: ["wm.Panel", {"height":"50%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
							radBtn_UserID: ["wm.RadioButton", {"caption":"UID (รหัสผู้ใช้งานระบบ)","captionAlign":"left","captionPosition":"right","captionSize":"140px","checkedValue":"uid","dataType":undefined,"displayValue":true,"height":"26px","radioGroup":"grpSearch","startChecked":true,"width":"160px"}, {}],
							radBtn_EmpId: ["wm.RadioButton", {"caption":"รหัสบุคลากร","captionAlign":"left","captionPosition":"right","captionSize":"140px","checkedValue":"empNo","dataType":undefined,"displayValue":false,"height":"26px","radioGroup":"grpSearch","width":"160px"}, {}],
							radBtn_Name: ["wm.RadioButton", {"caption":"ชื่อ","captionAlign":"left","captionPosition":"right","captionSize":"140px","checkedValue":"name","displayValue":"","height":"26px","radioGroup":"grpSearch","width":"160px"}, {}],
							radBtn_Surname: ["wm.RadioButton", {"caption":"นามสกุล","captionAlign":"left","captionPosition":"right","captionSize":"140px","checkedValue":"surname","dataType":undefined,"displayValue":false,"height":"26px","radioGroup":"grpSearch","width":"160px"}, {}],
							radBtn_CID: ["wm.RadioButton", {"caption":"เลขประจำตัวประชาชน","captionAlign":"left","captionPosition":"right","captionSize":"140px","checkedValue":"cid","displayValue":"","height":"26px","radioGroup":"grpSearch","width":"160px"}, {}]
						}],
						panel3: ["wm.Panel", {"height":"50%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
							labelSearchBy: ["wm.Label", {"align":"center","border":"0","padding":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"\"ค้าหาจาก: \" +  ${radBtn_UserID.groupValue}","source":false,"targetProperty":"caption"}, {}]
								}]
							}],
							textKeyword: ["wm.Text", {"caption":"คำค้นหา","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำที่ต้องการค้าหา","required":true,"resetButton":true}, {}]
						}]
					}],
					spacer2: ["wm.Spacer", {"height":"100%","width":"10%"}, {}]
				}],
				layer2: ["wm.Layer", {"border":"1","caption":"STEP 2: เลือกรายการที่ต้องการ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					layer3: ["wm.Panel", {"border":"1","height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","themeStyleType":"ContentPanel","verticalAlign":"top","width":"100%"}, {}, {
						spacer3: ["wm.Spacer", {"height":"100%","width":"10%"}, {}],
						panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"80%"}, {}, {
							panel5: ["wm.Panel", {"height":"28px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								text1: ["wm.Text", {"caption":"เลือกรายการที่พบ:","captionAlign":"left","dataValue":undefined,"displayValue":"","readonly":true,"width":"150px"}, {}]
							}],
							dojoGrid1: ["wm.DojoGrid", {"columns":[{"show":true,"id":"UID","title":"UID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"SEX","title":"SEX","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"REL_INITIALNAME.NAME","title":"คำนำหน้าชื่อ","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAMETH","title":"ชื่อ","width":"35%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"SURNAMETH","title":"นามสกุล","width":"35%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"NAMEEN","title":"NAMEEN","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"SURNAMEEN","title":"SURNAMEEN","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"CITIZENID","title":"CITIZENID","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"BIRTHDATE","title":"BIRTHDATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"BIRTHADDRESS","title":"BIRTHADDRESS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ADDRESS","title":"ADDRESS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"TELNO1","title":"TELNO1","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"TELNO2","title":"TELNO2","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"TELNO3","title":"TELNO3","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"YEARSOFWORK","title":"YEARSOFWORK","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_MARIAGESTATUS.MARIAGESTATUSID","title":"REL_MARIAGESTATUS.MARIAGESTATUSID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_MARIAGESTATUS.NAME","title":"REL_MARIAGESTATUS.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_BLOODTYPE.BLOODTYPEID","title":"REL_BLOODTYPE.BLOODTYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_BLOODTYPE.NAME","title":"REL_BLOODTYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_RACE.RACEID","title":"REL_RACE.RACEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_RACE.NAME","title":"REL_RACE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PERSONALTYPE.PERSONTYPE_ID","title":"REL_PERSONALTYPE.PERSONTYPE_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PERSONALTYPE.NAME","title":"REL_PERSONALTYPE.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_RELIGION.RELIGIONID","title":"REL_RELIGION.RELIGIONID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_RELIGION.NAME","title":"REL_RELIGION.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_NATIONALITY.NATIONALITYID","title":"REL_NATIONALITY.NATIONALITYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_NATIONALITY.NAME","title":"REL_NATIONALITY.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_PERSONALSTATUS.PERSONALSTATUSID","title":"REL_PERSONALSTATUS.PERSONALSTATUSID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_PERSONALSTATUS.NAME","title":"REL_PERSONALSTATUS.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_INITIALNAME.INIT_ID","title":"REL_INITIALNAME.INIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_INITIALNAME.NAMEEN","title":"REL_INITIALNAME.NAMEEN","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"80%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"dojoGrid1CellDblClick","onCellDblClick1":"navCall_PIM_MT","onClick":"dojoGrid1Click"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lVar_PIM01_List","targetProperty":"dataSet"}, {}]
								}]
							}],
							labelSelect: ["wm.Label", {"border":"0","padding":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"\"รหัสรายการที่เลือก: \" + ${dojoGrid1.selectedItem.UID}","source":false,"targetProperty":"caption"}, {}]
								}]
							}]
						}],
						spacer4: ["wm.Spacer", {"height":"100%","width":"10%"}, {}]
					}]
				}]
			}]
		}]
	}]
}