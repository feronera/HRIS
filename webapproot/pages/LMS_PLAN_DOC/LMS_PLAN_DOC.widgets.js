LMS_PLAN_DOC.widgets = {
	lms_plan_docDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":342,"title":"lms_plan_doc","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			lms_plan_docLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"268px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"lms_plan_docLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_docDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				DOCIDEditor1: ["wm.Number", {"caption":"DOCID","captionSize":"200px","emptyValue":"zero","formField":"DOCID","height":"26px","required":true,"width":"100%"}, {}],
				FILENAMEEditor1: ["wm.Text", {"caption":"FILENAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"FILENAME","height":"26px","width":"100%"}, {}],
				FILETYPEEditor1: ["wm.Text", {"caption":"FILETYPE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"FILETYPE","height":"26px","width":"100%"}, {}],
				FILESIZEEditor1: ["wm.Number", {"caption":"FILESIZE","captionSize":"200px","emptyValue":"zero","formField":"FILESIZE","height":"26px","width":"100%"}, {}],
				CREATEBYIDEditor1: ["wm.Number", {"caption":"CREATEBYID","captionSize":"200px","emptyValue":"zero","formField":"CREATEBYID","height":"26px","width":"100%"}, {}],
				CREATETSEditor1: ["wm.DateTime", {"caption":"CREATETS","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"CREATETS","height":"26px","width":"100%"}, {}],
				MODIFYBYIDEditor1: ["wm.Number", {"caption":"MODIFYBYID","captionSize":"200px","emptyValue":"zero","formField":"MODIFYBYID","height":"26px","width":"100%"}, {}],
				MODIFYTSEditor1: ["wm.DateTime", {"caption":"MODIFYTS","captionSize":"200px","dateMode":"Date","emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","width":"100%"}, {}],
				NUMBEROFDOWNLOADEditor1: ["wm.Number", {"caption":"NUMBEROFDOWNLOAD","captionSize":"200px","emptyValue":"zero","formField":"NUMBEROFDOWNLOAD","height":"26px","width":"100%"}, {}],
				FILEPATHEditor1: ["wm.Text", {"caption":"FILEPATH","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"FILEPATH","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_plan_docSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"lms_plan_docLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_plan_docLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_plan_docCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"lms_plan_docDialog.hide","onclick1":"lms_plan_docLiveForm1.cancelEdit"}]
		}]
	}],
	lms_plan_docLiveVariable1: ["wm.LiveVariable", {"ignoreCase":true,"liveSource":"app.lms_plan_doc_LiveView1","matchMode":"anywhere"}, {"onResult":"lms_plan_docLiveVariable1Result"}],
	var_SearchType: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"รหัสเอกสาร\",\"dataValue\":\"0\"},{\"name\":\"ชื่อเอกสาร\",\"dataValue\":\"1\"},{\"name\":\"แผนงานของเอกสาร\",\"dataValue\":\"2\"},{\"name\":\"รหัสกำหนดเอกสาร\",\"dataValue\":\"3\"},{\"name\":\"ประเภทเอกสาร\",\"dataValue\":\"4\"}]","type":"EntryData"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"lms_plan_docLiveVariable1","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_PLAN_DOC] จัดการเอกสารที่เกี่ยวข้องระบบแผนงาน"}, {}, {
			tabLayers_PLAN_DOC: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_PLAN_DOC_Main: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"รายการเอกสารแนบ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel1: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						selectMenuSearch: ["wm.SelectMenu", {"caption":"ค้นหาโดย","captionAlign":"center","captionSize":"70px","displayExpression":"${dataValue} + \" - \" + ${name}","displayValue":"","placeHolder":"เลือกประเภทการค้นหา"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"var_SearchType","targetProperty":"dataSet"}, {}]
							}]
						}],
						txt_searchKey: ["wm.Text", {"caption":"คำค้นหา","captionAlign":"center","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรอกคำค้นหา","resetButton":true}, {"onEnterKeyPress":"txt_searchKeyEnterKeyPress"}],
						buttonSearch: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchClick"}],
						buttonClear: ["wm.Button", {"caption":"ล้างค่า","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearClick"}]
					}],
					panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						lms_plan_docLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"lms_plan_docDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"lms_plan_docLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"lms_plan_docDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"lms_plan_docSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							lms_plan_docDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"DOCID","title":"รหัสเอกสาร","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILENAME","title":"ชื่อเอกสาร","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REL_DOC_PLAN.PLANID","title":"แผนงานของเอกสาร","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"CREATEBYID","title":"รหัสกำหนดเอกสาร","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILETYPE","title":"ประเภทเอกสาร","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILESIZE","title":"ขนาดเอกสาร","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"NUMBEROFDOWNLOAD","title":"NUMBEROFDOWNLOAD","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"FILEPATH","title":"FILEPATH","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_DOC_STATUS.DOCSTATUSID","title":"REL_DOC_STATUS.DOCSTATUSID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_DOC_STATUS.STATUSNAME","title":"REL_DOC_STATUS.STATUSNAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_DOC_STATUS.DESC","title":"REL_DOC_STATUS.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"lms_plan_docLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_plan_docLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}],
							lms_plan_docGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
								txtSearchReqResult: ["wm.Text", {"captionAlign":"left","captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
								spacer1: ["wm.Spacer", {"height":"100%","width":"60%"}, {}],
								lms_plan_docNewButton: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"lms_plan_docLivePanel1.popupLivePanelInsert"}],
								lms_plan_docUpdateButton: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4","width":"90px"}, {"onclick":"lms_plan_docLivePanel1.popupLivePanelEdit"}, {
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
					}]
				}]
			}]
		}]
	}]
}