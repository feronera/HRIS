Page_DocManage.widgets = {
	lms_basic_doc_statusLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.lms_basic_doc_statusLiveView2"}, {}],
	lms_basic_doc_typeDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":160,"title":"lms_basic_doc_type","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_doc_typeLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"86px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"lms_basic_doc_typeLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_typeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				DOCTYPEIDEditor1: ["wm.Number", {"caption":"DOCTYPEID","captionSize":"200px","emptyValue":"zero","formField":"DOCTYPEID","height":"26px","required":true,"width":"100%"}, {}],
				DOCTYPEEditor1: ["wm.Text", {"caption":"DOCTYPE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DOCTYPE","height":"26px","required":true,"width":"100%"}, {}],
				DESCEditor2: ["wm.Text", {"caption":"DESC","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_doc_typeSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"lms_basic_doc_typeLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_basic_doc_typeLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_basic_doc_typeCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"lms_basic_doc_typeDialog.hide","onclick1":"lms_basic_doc_typeLiveForm1.cancelEdit"}]
		}]
	}],
	lms_basic_doc_typeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_basic_doc_typeLiveView2"}, {}],
	varDocInput: ["wm.Variable", {"type":"wm.DojoFileUpload.FileData"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"dojoFlashFileUpload1.variable","targetProperty":"dataSet"}, {}]
		}]
	}],
	lms_basic_docDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","height":"460px","positionNear":"","title":"DOCUMENT INFORMATION MANAGEMENT","width":"580px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"396px","horizontalAlign":"center","margin":"0","padding":"3","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_docLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"392px","horizontalAlign":"center","liveEditing":false,"margin":"4","verticalAlign":"top","width":"560px"}, {"onBeginInsert":"lms_basic_docLiveForm1BeginInsert","onBeginUpdate":"lms_basic_docLiveForm1BeginUpdate","onSuccess":"lms_basic_docLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_docDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
					wire1: ["wm.Wire", {"expression":undefined,"source":"relatedEditor1.dataOutput","targetProperty":"dataOutput.rel_DOCTYPE"}, {}]
				}],
				panel11: ["wm.Panel", {"height":"52px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel13: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						DOCIDEditor1: ["wm.Number", {"caption":"DOC. ID","captionAlign":"left","captionSize":"40%","emptyValue":"zero","formField":"DOCID","height":"26px","padding":"3","readonly":true,"required":true,"width":"50%"}, {}],
						ISACTIVEEditor1: ["wm.Checkbox", {"caption":"ISACTIVE","captionSize":"200px","dataValue":"false","displayValue":"false","emptyValue":"false","formField":"ISACTIVE","height":"26px","startChecked":true,"width":"100%"}, {}]
					}],
					OWNERIDEditor1: ["wm.Text", {"caption":"OWNER ID","captionSize":"30%","dataValue":"","emptyValue":"emptyString","formField":"OWNERID","height":"26px","padding":"3","placeHolder":"Document Owner ID...","regExp":"\\d*","width":"44%"}, {}],
					TITLEEditor1: ["wm.Text", {"caption":"TITLE","captionSize":"14%","dataValue":"","emptyValue":"emptyString","formField":"TITLE","height":"26px","required":true,"width":"100%"}, {}]
				}],
				panel7: ["wm.Panel", {"height":"178px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel8: ["wm.Panel", {"height":"124px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
						panel10: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							panel9: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
								DOCNOEditor1: ["wm.Text", {"caption":"DOC. NO","captionAlign":"left","captionSize":"25%","dataValue":"","emptyValue":"emptyString","formField":"DOCNO","height":"26px","padding":"3","placeHolder":"Document No.","width":"95%"}, {}]
							}],
							panel14: ["wm.Panel", {"height":"26px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
								DOCDATEEditor1: ["wm.Date", {"caption":"DOC DATE","captionSize":"30%","dataValue":"","displayValue":"","emptyValue":"emptyString","height":"26px","placeHolder":"Document Date...","width":"98%"}, {}]
							}]
						}],
						richText1: ["wm.RichText", {"caption":"OTHERDETAILS","captionSize":"16px","dataValue":null,"formField":"OTHERDETAILS","height":"100%","padding":"2"}, {}]
					}],
					panel12: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						lookup2: ["wm.Lookup", {"caption":"DOC. STATUS","captionAlign":"left","captionSize":"20%","displayExpression":"${DOCSTATUSID} + \" - \" +${STATUSNAME}","displayField":"DESC","formField":"rel_DOCSTATUS","height":"26px","padding":"3","required":true,"width":"90%"}, {}]
					}],
					lookup1: ["wm.Lookup", {"caption":"DOC. TYPE","captionAlign":"left","captionSize":"20%","displayExpression":"${DOCTYPEID} + \" - \" + ${DOCTYPE}","displayField":"DESC","formField":"rel_DOCTYPE","height":"26px","padding":"3","required":true,"width":"90%"}, {}]
				}],
				panel1: ["wm.Panel", {"height":"100px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel2: ["wm.Panel", {"height":"40px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						dojoFlashFileUpload1: ["wm.DojoFlashFileUpload", {"autoDeleteDelay":0,"buttonCaption":"Select Files...","fileMaskLabel":"All File Type","fileMaskList":"*.*","height":"32px","margin":"1","operation":"uploadFileCustom","uploadImmediately":false,"useList":false,"width":"123px"}, {}, {
							input: ["wm.ServiceInput", {"type":"uploadFileCustomInputs"}, {}]
						}],
						btnUpload: ["wm.Button", {"caption":"Upload","margin":"4"}, {"onclick":"btnUploadClick"}],
						label1: ["wm.Label", {"border":"0","padding":"4"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":"\"Percentage uploading: \" + ${dojoFlashFileUpload1.variable.percent} + \" %\"","source":false,"targetProperty":"caption"}, {}]
							}]
						}]
					}],
					panel3: ["wm.Panel", {"height":"56px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						panel20: ["wm.Panel", {"height":"56px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
							FILENAMEEditor1: ["wm.Text", {"caption":"FILENAME","captionSize":"30%","disabled":true,"emptyValue":"emptyString","formField":"FILENAME","height":"26px","padding":"3","placeHolder":"-","readonly":true,"required":true,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"dojoFlashFileUpload1.variable.name","targetProperty":"dataValue"}, {}]
								}]
							}],
							FILEPATHEditor1: ["wm.Text", {"caption":"FILEPATH","captionSize":"30%","disabled":true,"emptyValue":"emptyString","formField":"FILEPATH","height":"26px","padding":"3","readonly":true,"required":true,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"varDocInput.path","targetProperty":"dataValue"}, {}]
								}]
							}]
						}],
						panel21: ["wm.Panel", {"height":"58px","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
							FILEEXTEditor1: ["wm.Number", {"caption":"FILEEXT","captionSize":"40%","disabled":true,"formField":"FILEEXT","height":"26px","padding":"3","placeHolder":"-","readonly":true,"required":true,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"svVarFileTransfer.type","targetProperty":"dataValue"}, {}]
								}]
							}],
							FILESIZEEditor1: ["wm.Number", {"caption":"FILESIZE (Kbs)","captionSize":"40%","disabled":true,"formField":"FILESIZE","height":"26px","padding":"3","readonly":true,"required":true,"width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"(${svVarFileTransfer.size}/1024).toFixed(2)","source":false,"targetProperty":"dataValue"}, {}]
								}]
							}]
						}]
					}]
				}],
				panel4: ["wm.Panel", {"height":"54px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
						CREATEBYIDEditor1: ["wm.Number", {"caption":"CREATE BY ID","captionSize":"40%","disabled":true,"formField":"CREATEBYID","height":"26px","padding":"3","readonly":true,"width":"100%"}, {}],
						CREATETSEditor1: ["wm.DateTime", {"caption":"CREATE TIME","captionSize":"40%","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","padding":"3","readonly":true,"width":"100%"}, {}]
					}],
					panel6: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
						LASTMODIFYBYIDEditor1: ["wm.Number", {"caption":"LAST MODIFY BY ID","captionSize":"50%","disabled":true,"formField":"LASTMODIFYBYID","height":"26px","padding":"3","readonly":true,"width":"100%"}, {}],
						LASTMODIFYTSEditor1: ["wm.DateTime", {"caption":"LAST MODIFY TIME","captionSize":"50%","disabled":true,"emptyValue":"emptyString","formField":"LASTMODIFYTS","height":"26px","padding":"3","readonly":true,"width":"100%"}, {}]
					}]
				}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			lms_basic_docSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"lms_basic_docLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"lms_basic_docLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			lms_basic_docCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"lms_basic_docDialog.hide","onclick1":"lms_basic_docLiveForm1.cancelEdit"}]
		}]
	}],
	lms_basic_docLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.lms_basic_docLiveView1"}, {}],
	svVarFileTransfer: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"listFiles","service":"FlashUploadDownload"}, {}, {
		input: ["wm.ServiceInput", {"type":"listFilesInputs"}, {}]
	}],
	svVarSecurity: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserId","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserIdInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"784px"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"Document Management"}, {}, {
			tabLayers1: ["wm.TabLayers", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"padding":"10"}, {}, {
				layer_DocList: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Document List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					panel15: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
						text1: ["wm.Text", {"caption":"Search","captionAlign":"center","dataValue":undefined,"displayValue":"","resetButton":true}, {}],
						btnSearch: ["wm.Button", {"caption":"Search","margin":"4"}, {}]
					}],
					lms_basic_docLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_basic_docDialog","targetId":null,"targetProperty":"dialog"}, {}],
							wire1: ["wm.Wire", {"source":"lms_basic_docLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
							wire2: ["wm.Wire", {"source":"lms_basic_docDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
							wire3: ["wm.Wire", {"source":"lms_basic_docSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
						}],
						lms_basic_docDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"DOCID","title":"DOCID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"FILENAME","title":"FILENAME","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"TITLE","title":"TITLE","width":"35%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"OTHERDETAILS","title":"OTHERDETAILS","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"FILESIZE","title":"FILESIZE","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"FILEPATH","title":"FILEPATH","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":true,"id":"OWNERID","title":"OWNERID","width":"10%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"CREATEBYID","title":"CREATEBYID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"CREATETS","title":"CREATETS","width":"15%","displayType":"Date","noDelete":true,"align":"center","formatFunc":"wm_date_formatter"},{"show":false,"id":"LASTMODIFYBYID","title":"LASTMODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"LASTMODIFYTS","title":"LASTMODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"DOCNO","title":"DOCNO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"DOCDATE","title":"DOCDATE","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":"wm_date_formatter"},{"show":false,"id":"ISACTIVE","title":"ISACTIVE","width":"100%","displayType":"CheckBox","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"FILEEXT","title":"FILEEXT","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"rel_DOCTYPE.DOCTYPEID","title":"Rel_DOCTYPE.DOCTYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"rel_DOCTYPE.DOCTYPE","title":"Rel_DOCTYPE.DOCTYPE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"rel_DOCTYPE.DESC","title":"Rel_DOCTYPE.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"lms_basic_docLivePanel1.popupLivePanelEdit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_docLiveVariable1","targetProperty":"dataSet"}, {}]
							}]
						}],
						lms_basic_docGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							lms_basic_docNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lms_basic_docLivePanel1.popupLivePanelInsert"}],
							lms_basic_docUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"lms_basic_docLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"lms_basic_docDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}],
							lms_basic_docDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"lms_basic_docLiveForm1.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"lms_basic_docDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}],
				layer_DocStatus: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Document Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_basic_doc_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						lms_basic_doc_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"DOCUMENT STATUS SETTINGS"}, {}, {
							lms_basic_doc_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"DOCSTATUSID","title":"DOC STATUS ID.","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUSNAME","title":"STATUS NAME","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTIONS","width":"60%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_statusLiveVariable2","targetProperty":"dataSet"}, {}]
								}]
							}]
						}],
						lms_basic_doc_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"Details"}, {}, {
							lms_basic_doc_statusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"lms_basic_doc_statusLiveVariable2"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
								}],
								DOCSTATUSIDEditor2: ["wm.Number", {"caption":"DOC STATUS ID","captionSize":"200px","emptyValue":"zero","formField":"DOCSTATUSID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								STATUSNAMEEditor1: ["wm.Text", {"caption":"STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUSNAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
								DESCEditor1: ["wm.Text", {"caption":"DESCRIPTIONS","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","readonly":true,"width":"100%"}, {}],
								lms_basic_doc_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"lms_basic_doc_statusLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
									savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
										saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"lms_basic_doc_statusLiveForm1EditPanel.saveData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
											}]
										}],
										cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"lms_basic_doc_statusLiveForm1EditPanel.cancelEdit"}]
									}],
									operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
										newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lms_basic_doc_statusLiveForm1EditPanel.beginDataInsert"}],
										updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"lms_basic_doc_statusLiveForm1EditPanel.beginDataUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}],
										deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"lms_basic_doc_statusLiveForm1EditPanel.deleteData"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_DocType: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Document Type","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					lms_basic_doc_typeLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"source":"lms_basic_doc_typeDialog","targetId":null,"targetProperty":"dialog"}, {}],
							wire1: ["wm.Wire", {"source":"lms_basic_doc_typeLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
							wire2: ["wm.Wire", {"source":"lms_basic_doc_typeDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
							wire3: ["wm.Wire", {"source":"lms_basic_doc_typeSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
						}],
						lms_basic_doc_typeDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"DOCTYPEID","title":"DOC. TYPE ID","width":"15%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DOCTYPE","title":"DOC. TYPE","width":"35%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTIONS","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {"onCellDblClick":"lms_basic_doc_typeLivePanel1.popupLivePanelEdit"}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"expression":undefined,"source":"lms_basic_doc_typeLiveVariable1","targetProperty":"dataSet"}, {}]
							}]
						}],
						lms_basic_doc_typeGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							lms_basic_doc_typeNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"lms_basic_doc_typeLivePanel1.popupLivePanelInsert"}],
							lms_basic_doc_typeUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"lms_basic_doc_typeLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"lms_basic_doc_typeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}],
							lms_basic_doc_typeDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"lms_basic_doc_typeLiveForm1.deleteData"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"lms_basic_doc_typeDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
								}]
							}]
						}]
					}]
				}],
				layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"layer1","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
			}]
		}]
	}]
}