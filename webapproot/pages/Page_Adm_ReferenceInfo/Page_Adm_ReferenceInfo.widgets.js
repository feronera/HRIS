Page_Adm_ReferenceInfo.widgets = {
	r_bloodtypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_bloodtypeLiveView1"}, {}],
	r_initialnameLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_initialnameLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"text_InitialNameSearch.dataValue","targetProperty":"filter.NAME"}, {}]
		}]
	}],
	r_mariagestatusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_mariagestatusLiveView1"}, {}],
	r_nationalityLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_nationalityLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"text_NationalitySearch.dataValue","targetProperty":"filter.NAME"}, {}]
		}]
	}],
	r_personalstatusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_personalstatusLiveView1"}, {}],
	r_personaltypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_personaltypeLiveView1"}, {}],
	r_raceLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_raceLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"text_racesSearch.dataValue","targetProperty":"filter.NAME"}, {}]
		}]
	}],
	r_religionLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_religionLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"text_ReligionSearch.dataValue","targetProperty":"filter.NAME"}, {}]
		}]
	}],
	r_educationLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_educationLiveView1"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"text_EduSearch.dataValue","targetProperty":"filter.NAME"}, {}]
		}]
	}],
	r_movementtypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_movementtypeLiveView1"}, {}],
	r_saralybenefitLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.r_saralybenefitLiveView2"}, {}],
	r_attachment_groupDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":"200px","title":"Attachment Group Setting","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			r_attachment_groupLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"119px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"r_attachment_groupLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"r_attachment_groupDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				ATTACHMENT_GROUP_IDEditor1: ["wm.Number", {"caption":"ATTACHMENT GROUP ID.","captionSize":"200px","emptyValue":"zero","formField":"ATTACHMENT_GROUP_ID","height":"26px","required":true,"width":"100%"}, {}],
				GROUPNAMEEditor1: ["wm.Text", {"caption":"GROUP NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"GROUPNAME","height":"26px","width":"100%"}, {}],
				DESCEditor1: ["wm.Text", {"caption":"DESCRIPTION","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"59px","singleLine":false,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			r_attachment_groupSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_attachment_groupLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"r_attachment_groupLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			r_attachment_groupCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_attachment_groupDialog.hide","onclick1":"r_attachment_groupLiveForm1.cancelEdit"}]
		}]
	}],
	r_attachment_groupLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_attachment_groupLiveView1","matchMode":"anywhere"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"textSearchAttachmentGroup.dataValue","targetProperty":"filter.GROUPNAME"}, {}]
		}]
	}],
	r_educationhonorLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_educationhonorLiveView1"}, {}],
	r_educationlevelLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_educationlevelLiveView1"}, {}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}]
		}]
	}],
	r_educationmajorLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_educationmajorLiveView1"}, {}],
	r_educationschoolLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_educationschoolLiveView1"}, {}],
	r_educationscholarLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_educationscholarLiveView1"}, {}],
	r_educationscholarLiveVariable2: ["wm.LiveVariable", {"liveSource":"app.r_educationscholarLiveView1"}, {}],
	r_unittypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unittypeLiveView1"}, {}],
	r_leavetypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_leavetypeLiveView1"}, {}],
	r_leavetimetypeLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_leavetimetypeLiveView1"}, {}],
	hr_leave_req_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.hr_leave_req_statusLiveView1"}, {}],
	binding: ["wm.Binding", {}, {}, {
		wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"dataSet"}, {}]
	}],
	binding1: ["wm.Binding", {}, {}, {
		wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"dataSet"}, {}]
	}],
	binding2: ["wm.Binding", {}, {}, {
		wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"dataSet"}, {}]
	}],
	r_unitLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unitLiveView","matchMode":"anywhere"}, {"onResult":"r_unitLiveVariable1Result"}],
	LVar_Unit_MT: ["wm.LiveVariable", {"liveSource":"app.r_unitLiveView"}, {}],
	r_unit_refdocLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.r_unit_refdocLiveView1"}, {}],
	navCall_UnitList: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"layer_UNIT_List","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	navCall_UnitInfo: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"expression":"true","targetProperty":"showOnlyParentLayer"}, {}],
				wire: ["wm.Wire", {"source":"layer_UNIT_Info","targetProperty":"layer"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[R] Reference Information Settings"}, {}, {
			tabLayers1: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer_MainMenu: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"[R_MAIN] หน้าหลัก","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
				layer_ATTACHMENT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Attachment","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers_ATTACHMENT: ["wm.TabLayers", {}, {}, {
						layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Attachment Group","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							textSearchAttachmentGroup: ["wm.Text", {"caption":"Attachment Group Search:","captionSize":"200px","changeOnKey":true,"dataValue":undefined,"displayValue":"","placeHolder":"Enter \"Attachment Group\" Keyword...","resetButton":true,"width":"500px"}, {}],
							r_attachment_groupLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"r_attachment_groupDialog","targetId":null,"targetProperty":"dialog"}, {}],
									wire1: ["wm.Wire", {"source":"r_attachment_groupLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
									wire2: ["wm.Wire", {"source":"r_attachment_groupDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
									wire3: ["wm.Wire", {"source":"r_attachment_groupSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
								}],
								r_attachment_groupDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"ATTACHMENT_GROUP_ID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"GROUPNAME","title":"ATTACHMENT GROUP NAME","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTION","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"r_attachment_groupLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"r_attachment_groupLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}],
								r_attachment_groupGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									r_attachment_groupNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_attachment_groupLivePanel1.popupLivePanelInsert"}],
									r_attachment_groupUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_attachment_groupLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"r_attachment_groupDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}],
									r_attachment_groupDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_attachment_groupLiveForm1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"r_attachment_groupDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_PIM: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"[R_PIM] PIM","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayer_REF_PIM: ["wm.TabLayers", {"transition":"slide"}, {}, {
						layer_REF_PIM_BLOODTYPE: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Blood type","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_bloodtypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_bloodtypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Blood Type Setting"}, {}, {
									r_bloodtypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"BLOODTYPEID","title":"BLOOD TYPE ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"BLOOD TYPE","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_bloodtypeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_bloodtypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_bloodtypeLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_bloodtypeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_bloodtypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										BLOODTYPEIDEditor1: ["wm.Number", {"caption":"BLOOD TYPE ID","captionSize":"200px","emptyValue":"zero","formField":"BLOODTYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor1: ["wm.Text", {"caption":"BLOOD TYPE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_bloodtypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_bloodtypeLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1"}, {}, {
											savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton1: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_bloodtypeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_bloodtypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton1: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_bloodtypeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton1: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_bloodtypeLiveForm1EditPanel.beginDataInsert"}],
												updateButton1: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_bloodtypeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_bloodtypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton1: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_bloodtypeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_bloodtypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_INITIALNAME: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Initial Name","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							text_InitialNameSearch: ["wm.Text", {"caption":"Search Initial Name: ","captionAlign":"left","captionSize":"30%","changeOnKey":true,"dataValue":undefined,"displayValue":"","placeHolder":"Search...","resetButton":true,"width":"419px"}, {"onEnterKeyPress":"r_initialnameLiveVariable1"}],
							r_initialnameLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_initialnameGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Initial Name Setting"}, {}, {
									r_initialnameDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"INIT_ID","title":"INITIAL NAME ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"INITIAL NAME","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAMEEN","title":"INITIAL ENGLISH NAME","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_initialnameLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_initialnameDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"140px","title":"Details"}, {}, {
									r_initialnameLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"110px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_initialnameLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_initialnameDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										INIT_IDEditor1: ["wm.Number", {"caption":"INITIAL NAME ID","captionSize":"200px","emptyValue":"zero","formField":"INIT_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor2: ["wm.Text", {"caption":"INITIAL NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										NAMEENEditor1: ["wm.Text", {"caption":"INITIAL ENGLISH NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAMEEN","height":"26px","readonly":true,"width":"100%"}, {}],
										r_initialnameLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_initialnameLiveForm1","operationPanel":"operationPanel2","savePanel":"savePanel2"}, {}, {
											savePanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton2: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_initialnameLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_initialnameLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton2: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_initialnameLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton2: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_initialnameLiveForm1EditPanel.beginDataInsert"}],
												updateButton2: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_initialnameLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_initialnameLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton2: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_initialnameLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_initialnameLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_MARRIAGESTATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Marriage Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_mariagestatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_mariagestatusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Marriage Status Setting"}, {}, {
									r_mariagestatusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"MARIAGESTATUSID","title":"MARRIAGE STATUS ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"MARRIAGE STATUS NAME","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_mariagestatusLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_mariagestatusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_mariagestatusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_mariagestatusLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_mariagestatusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										MARIAGESTATUSIDEditor1: ["wm.Number", {"caption":"MARRIAGE STATUS ID","captionSize":"200px","emptyValue":"zero","formField":"MARIAGESTATUSID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor3: ["wm.Text", {"caption":"MARRIAGE STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_mariagestatusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_mariagestatusLiveForm1","operationPanel":"operationPanel3","savePanel":"savePanel3"}, {}, {
											savePanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton3: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_mariagestatusLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_mariagestatusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton3: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_mariagestatusLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton3: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_mariagestatusLiveForm1EditPanel.beginDataInsert"}],
												updateButton3: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_mariagestatusLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_mariagestatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton3: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_mariagestatusLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_mariagestatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_NATIONALITY: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Nationality","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_nationalityLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								text_NationalitySearch: ["wm.Text", {"caption":"Nationality Title Searching: ","captionAlign":"left","captionSize":"50%","changeOnKey":true,"dataValue":undefined,"displayValue":"","resetButton":true,"width":"40%"}, {}],
								r_nationalityGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Nationality Setting"}, {}, {
									r_nationalityDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"NATIONALITYID","title":"NATIONALITY ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"NATIONALITY NAME","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_nationalityLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_nationalityDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_nationalityLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_nationalityLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_nationalityDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										NATIONALITYIDEditor1: ["wm.Number", {"caption":"NATIONALITY ID","captionSize":"200px","emptyValue":"zero","formField":"NATIONALITYID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor4: ["wm.Text", {"caption":"NATIONALITY TITLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_nationalityLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_nationalityLiveForm1","operationPanel":"operationPanel4","savePanel":"savePanel4"}, {}, {
											savePanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton4: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_nationalityLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_nationalityLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton4: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_nationalityLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel4: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton4: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_nationalityLiveForm1EditPanel.beginDataInsert"}],
												updateButton4: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_nationalityLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_nationalityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton4: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_nationalityLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_nationalityLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_PERSONALSTATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Personal Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_personalstatusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_personalstatusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Personal Status Setting"}, {}, {
									r_personalstatusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"PERSONALSTATUSID","title":"PERSONAL STATUS ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"PERSONAL STATUS NAME","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_personalstatusLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_personalstatusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_personalstatusLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_personalstatusLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_personalstatusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										PERSONALSTATUSIDEditor1: ["wm.Number", {"caption":"PERSONAL STATUS ID","captionSize":"200px","emptyValue":"zero","formField":"PERSONALSTATUSID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor5: ["wm.Text", {"caption":"PERSONAL STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_personalstatusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_personalstatusLiveForm1","operationPanel":"operationPanel5","savePanel":"savePanel5"}, {}, {
											savePanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton5: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_personalstatusLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_personalstatusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton5: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_personalstatusLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton5: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_personalstatusLiveForm1EditPanel.beginDataInsert"}],
												updateButton5: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_personalstatusLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_personalstatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton5: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_personalstatusLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_personalstatusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_PERSONALTYPE: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Personal Type","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_personaltypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_personaltypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Personal Type Setting"}, {}, {
									r_personaltypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"PERSONTYPE_ID","title":"PERSONAL TYPE ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"PERSONAL TYPE TITLE","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_personaltypeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_personaltypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_personaltypeLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_personaltypeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_personaltypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										PERSONTYPE_IDEditor1: ["wm.Number", {"caption":"PERSONAL TYPE ID","captionSize":"200px","emptyValue":"zero","formField":"PERSONTYPE_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor6: ["wm.Text", {"caption":"PERSONAL TYPE TITLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_personaltypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_personaltypeLiveForm1","operationPanel":"operationPanel6","savePanel":"savePanel6"}, {}, {
											savePanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton6: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_personaltypeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_personaltypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton6: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_personaltypeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel6: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton6: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_personaltypeLiveForm1EditPanel.beginDataInsert"}],
												updateButton6: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_personaltypeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_personaltypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton6: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_personaltypeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_personaltypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_RACES: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Races","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							text_racesSearch: ["wm.Text", {"caption":"Searching Races: ","captionSize":"40%","changeOnKey":true,"dataValue":undefined,"displayValue":"","placeHolder":"Search...","resetButton":true}, {}],
							r_raceLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_raceGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Races Setting"}, {}, {
									r_raceDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"RACEID","title":"RACES ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"RACES TITLE","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_raceLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_raceDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_raceLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_raceLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_raceDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										RACEIDEditor1: ["wm.Number", {"caption":"RACES ID","captionSize":"200px","emptyValue":"zero","formField":"RACEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor7: ["wm.Text", {"caption":"RACES TITLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_raceLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_raceLiveForm1","operationPanel":"operationPanel7","savePanel":"savePanel7"}, {}, {
											savePanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton7: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_raceLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_raceLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton7: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_raceLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel7: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton7: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_raceLiveForm1EditPanel.beginDataInsert"}],
												updateButton7: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_raceLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_raceLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton7: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_raceLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_raceLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_RELIGION: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Religion","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							text_ReligionSearch: ["wm.Text", {"caption":"Religion Searching: ","captionSize":"40%","changeOnKey":true,"dataValue":undefined,"displayValue":"","placeHolder":"Search...","resetButton":true}, {}],
							r_religionLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_religionGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Religion Setting"}, {}, {
									r_religionDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"RELIGIONID","title":"RELIGION ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"RELIGION TITLE","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_religionLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_religionDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_religionLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_religionLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_religionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										RELIGIONIDEditor1: ["wm.Number", {"caption":"RELIGION ID","captionSize":"200px","emptyValue":"zero","formField":"RELIGIONID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor8: ["wm.Text", {"caption":"RELIGION TITLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_religionLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_religionLiveForm1","operationPanel":"operationPanel8","savePanel":"savePanel8"}, {}, {
											savePanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton8: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_religionLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_religionLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton8: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_religionLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel8: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton8: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_religionLiveForm1EditPanel.beginDataInsert"}],
												updateButton8: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_religionLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_religionLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton8: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_religionLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_religionLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_MOVEMENTTYPE: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Movement type","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_movementtypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_movementtypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Movement Type Setting"}, {}, {
									r_movementtypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"MOVEMENTTYPEID","title":"MOVEMENTTYPE ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"MOVEMENT TYPE NAME","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_movementtypeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_movementtypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_movementtypeLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_movementtypeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_movementtypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										MOVEMENTTYPEIDEditor1: ["wm.Number", {"caption":"MOVEMENT TYPE ID","captionSize":"200px","emptyValue":"zero","formField":"MOVEMENTTYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor12: ["wm.Text", {"caption":"MOVEMENT TYPE NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_movementtypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_movementtypeLiveForm1","operationPanel":"operationPanel10","savePanel":"savePanel10"}, {}, {
											savePanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton10: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_movementtypeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_movementtypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton10: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_movementtypeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel10: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton10: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_movementtypeLiveForm1EditPanel.beginDataInsert"}],
												updateButton10: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_movementtypeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_movementtypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton10: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_movementtypeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_movementtypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_PIM_SARALYBENEFIT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Salary Benefit","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_saralybenefitLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_saralybenefitGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Salary Benefit Setting"}, {}, {
									r_saralybenefitDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"SARALYBENEFITID","title":"SALARY BENEFIT ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"SALARY BENEFIT TITLE","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_saralybenefitLiveVariable2","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_saralybenefitDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_saralybenefitLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_saralybenefitLiveVariable2"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_saralybenefitDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										SARALYBENEFITIDEditor1: ["wm.Number", {"caption":"Salary Benefit ID","captionSize":"200px","emptyValue":"zero","formField":"SARALYBENEFITID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor13: ["wm.Text", {"caption":"Salary Benefit Title","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_saralybenefitLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_saralybenefitLiveForm1","operationPanel":"operationPanel11","savePanel":"savePanel11"}, {}, {
											savePanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton11: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_saralybenefitLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_saralybenefitLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton11: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_saralybenefitLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel11: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton11: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_saralybenefitLiveForm1EditPanel.beginDataInsert"}],
												updateButton11: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_saralybenefitLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_saralybenefitLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton11: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_saralybenefitLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_saralybenefitLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_EDU: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"[R_EDUCATION] การศึกษา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayer_REF_EDU: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_REF_EDU_EDUCATION: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"Education","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							text_EduSearch: ["wm.Text", {"caption":"Education Search: ","captionSize":"50%","changeOnKey":true,"dataValue":undefined,"displayValue":"","placeHolder":"Edu. Title Search...","resetButton":true}, {}],
							r_educationLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","scrollY":true,"verticalAlign":"top"}, {}, {
								r_educationGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Education Setting"}, {}, {
									r_educationDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"EDUCATIONID","title":"EDU. ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"EDUCATIONCODE","title":"EDU. CODE","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"EDUCATIONCODE_EN","title":"EDU. CODE EN","width":"15%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"EDU. TITLE","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME_EN","title":"EDU. TITLE EN","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_educationDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"192px","title":"Details"}, {}, {
									r_educationLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"162px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_educationLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										EDUCATIONIDEditor1: ["wm.Number", {"caption":"EDUCATION ID","captionSize":"200px","emptyValue":"zero","formField":"EDUCATIONID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor9: ["wm.Text", {"caption":"EDUCATION TITLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										NAMEEditor11: ["wm.Text", {"caption":"EDUCATION TITLE EN","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME_EN","height":"26px","readonly":true,"width":"100%"}, {}],
										EDUCATIONCODEEditor1: ["wm.Text", {"caption":"EDUCATION CODE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"EDUCATIONCODE","height":"26px","readonly":true,"width":"100%"}, {}],
										NAMEEditor10: ["wm.Text", {"caption":"EDUCATION CODE EN","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"EDUCATIONCODE_EN","height":"26px","readonly":true,"width":"100%"}, {}],
										r_educationLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_educationLiveForm1","operationPanel":"operationPanel9","savePanel":"savePanel9"}, {}, {
											savePanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton9: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_educationLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton9: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_educationLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel9: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton9: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_educationLiveForm1EditPanel.beginDataInsert"}],
												updateButton9: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_educationLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton9: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_educationLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_EDU_HONOR: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"Honor","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_educationhonorLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_educationhonorGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Education Honor Setting"}, {}, {
									r_educationhonorDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"EDUCATIONHONORID","title":"EDUCATION HONOR ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"EDUCATION HONOR","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationhonorLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_educationhonorDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_educationhonorLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_educationhonorLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationhonorDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										EDUCATIONHONORIDEditor1: ["wm.Number", {"caption":"EDUCATION HONOR ID","captionSize":"200px","emptyValue":"zero","formField":"EDUCATIONHONORID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor14: ["wm.Text", {"caption":"EDUCATION HONOR","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_educationhonorLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_educationhonorLiveForm1","operationPanel":"operationPanel12","savePanel":"savePanel12"}, {}, {
											savePanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton12: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_educationhonorLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationhonorLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton12: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_educationhonorLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel12: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton12: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_educationhonorLiveForm1EditPanel.beginDataInsert"}],
												updateButton12: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_educationhonorLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationhonorLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton12: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_educationhonorLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationhonorLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_EDU_LEVEL: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"Level","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_educationlevelLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_educationlevelGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Education Level Setting"}, {}, {
									r_educationlevelDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"EDUCATIONLEVELID","title":"EDUCATION LEVEL ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"EDUCATION LEVEL","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationlevelLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_educationlevelDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_educationlevelLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_educationlevelLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationlevelDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										EDUCATIONLEVELIDEditor1: ["wm.Number", {"caption":"EDUCATION LEVEL ID","captionSize":"200px","emptyValue":"zero","formField":"EDUCATIONLEVELID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor15: ["wm.Text", {"caption":"EDUCATION LEVEL","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_educationlevelLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_educationlevelLiveForm1","operationPanel":"operationPanel13","savePanel":"savePanel13"}, {}, {
											savePanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton13: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_educationlevelLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationlevelLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton13: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_educationlevelLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel13: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton13: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_educationlevelLiveForm1EditPanel.beginDataInsert"}],
												updateButton13: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_educationlevelLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationlevelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton13: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_educationlevelLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationlevelLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_EDU_MAJOR: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"Major","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_educationmajorLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_educationmajorGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Education Major Setting"}, {}, {
									r_educationmajorDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"EDUCATIONMAJORID","title":"EDUCATION MAJOR ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"EDUCATION MAJOR","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationmajorLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_educationmajorDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_educationmajorLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_educationmajorLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationmajorDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										EDUCATIONMAJORIDEditor1: ["wm.Number", {"caption":"EDUCATION MAJOR ID","captionSize":"200px","emptyValue":"zero","formField":"EDUCATIONMAJORID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor16: ["wm.Text", {"caption":"EDUCATION MAJOR","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_educationmajorLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_educationmajorLiveForm1","operationPanel":"operationPanel14","savePanel":"savePanel14"}, {}, {
											savePanel14: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton14: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_educationmajorLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationmajorLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton14: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_educationmajorLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel14: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton14: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_educationmajorLiveForm1EditPanel.beginDataInsert"}],
												updateButton14: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_educationmajorLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationmajorLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton14: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_educationmajorLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationmajorLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_EDU_SCHOLARSHIP: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Scholarship","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_educationscholarLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_educationscholarGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Education Scholarship Setting"}, {}, {
									r_educationscholarDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"EDUCATIONSCHOLARID","title":"EDUCATION SCHOLARSHIP ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"EDUCATION SCHOLARSHIP","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationscholarLiveVariable2","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_educationscholarDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_educationscholarLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_educationscholarLiveVariable2"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationscholarDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										EDUCATIONSCHOLARIDEditor1: ["wm.Number", {"caption":"EDUCATION SCHOLAR ID","captionSize":"200px","emptyValue":"zero","formField":"EDUCATIONSCHOLARID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor17: ["wm.Text", {"caption":"EDUCATION SCHOLAR","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_educationscholarLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_educationscholarLiveForm1","operationPanel":"operationPanel15","savePanel":"savePanel15"}, {}, {
											savePanel15: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton15: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_educationscholarLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationscholarLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton15: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_educationscholarLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel15: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton15: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_educationscholarLiveForm1EditPanel.beginDataInsert"}],
												updateButton15: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_educationscholarLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationscholarLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton15: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_educationscholarLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationscholarLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_REF_EDU_SCHOOL: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"School","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_educationschoolLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_educationschoolGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"Education School Setting"}, {}, {
									r_educationschoolDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"EDUCATIONSCHOOLID","title":"EDUCATION SCHOOL ID","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"EDUCATION SCHOOL","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationschoolLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_educationschoolDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"Details"}, {}, {
									r_educationschoolLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_educationschoolLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_educationschoolDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										EDUCATIONSCHOOLIDEditor1: ["wm.Number", {"caption":"EDUCATION SCHOOL ID","captionSize":"200px","emptyValue":"zero","formField":"EDUCATIONSCHOOLID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor18: ["wm.Text", {"caption":"EDUCATION SCHOOL","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_educationschoolLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","liveForm":"r_educationschoolLiveForm1","operationPanel":"operationPanel16","savePanel":"savePanel16"}, {}, {
											savePanel16: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton16: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_educationschoolLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationschoolLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton16: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_educationschoolLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel16: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton16: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"r_educationschoolLiveForm1EditPanel.beginDataInsert"}],
												updateButton16: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"r_educationschoolLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationschoolLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton16: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"r_educationschoolLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_educationschoolLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_UNIT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"[R_UNIT] สังกัด/หน่วยงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers2: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_R_UNIT: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"หน่วยงาน","horizontalAlign":"left","margin":"0","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							accordionLayers1: ["wm.Layers", {"defaultLayer":0,"margin":"0"}, {}, {
								layer_UNIT_List: ["wm.Layer", {"borderColor":"","caption":"[R_UNIT_LIST] ค้นหาหน่วยงาน","horizontalAlign":"left","margin":"4","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									fancyPanel2: ["wm.FancyPanel", {"title":"[R_UNIT_LIST] ข้อมูลหน่วยงาน"}, {}, {
										panel1: ["wm.Panel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
											selectMenuSearch: ["wm.SelectMenu", {"caption":"ประเภทการค้นหา","dataField":"dataValue","displayField":"dataValue","displayValue":"","options":"0 - Unit ID.,1 - ชื่อสังกัด,2 - ชื่อย่อสังกัด,3 - ประเภทสังกัด","placeHolder":"กรุณาเลือกประเภทการค้นหา"}, {}],
											textSearch: ["wm.Text", {"caption":"คำค้นหา","captionSize":"80px","dataValue":undefined,"displayValue":"","placeHolder":"กรุณากรอกคำค้น"}, {"onEnterKeyPress":"textSearchEnterKeyPress"}],
											buttonSearch: ["wm.Button", {"caption":"ค้นหา","imageIndex":48,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonSearchClick"}],
											buttonClear: ["wm.Button", {"caption":"ล้างค่า","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"buttonClearClick"}]
										}],
										dojoGrid_Unit: ["wm.DojoGrid", {"columns":[{"show":true,"id":"UNIT_ID","title":"รหัสหน่วยงาน (Unit ID.)","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"UNIT_NAME","title":"ชื่อหน่วยงาน","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"UNIT_CODE","title":"ชื่อย่อหน่วยงาน","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"APPROVE_DATE","title":"APPROVE_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"AFFECTIVE_DATE","title":"AFFECTIVE_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"COMMENT","title":"COMMENT","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDER_NO","title":"ORDER_NO","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"ORDER_DATE","title":"ORDER_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CANCEL_DATE","title":"CANCEL_DATE","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATETS","title":"CREATETS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"MODIFYBYID","title":"MODIFYBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"MODIFYTS","title":"MODIFYTS","width":"80px","displayType":"Date","noDelete":true,"align":"left","formatFunc":"wm_date_formatter"},{"show":false,"id":"CREATEBYID","title":"CREATEBYID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNITTYPE.UNITTYPEID","title":"REL_UNITTYPE.UNITTYPEID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":true,"id":"REL_UNITTYPE.NAME","title":"หน่วยเรียกหน่วยงาน","width":"25%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":false,"id":"REL_UNIT_STATUS.UNIT_STATUS_ID","title":"REL_UNIT_STATUS.UNIT_STATUS_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_STATUS.NAME","title":"REL_UNIT_STATUS.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_STATUS.DESC","title":"REL_UNIT_STATUS.DESC","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_REGION.UNIT_REGION_ID","title":"REL_UNIT_REGION.UNIT_REGION_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_REGION.NAME","title":"REL_UNIT_REGION.NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_REFDOC.UNITREFDOCID","title":"REL_UNIT_REFDOC.UNITREFDOCID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_REFDOC.REFDOCNAME","title":"REL_UNIT_REFDOC.REFDOCNAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_PARENT.UNIT_ID","title":"REL_UNIT_PARENT.UNIT_ID","width":"80px","displayType":"Number","noDelete":true,"align":"right","formatFunc":""},{"show":false,"id":"REL_UNIT_PARENT.UNIT_CODE","title":"REL_UNIT_PARENT.UNIT_CODE","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""},{"show":false,"id":"REL_UNIT_PARENT.UNIT_NAME","title":"REL_UNIT_PARENT.UNIT_NAME","width":"100%","displayType":"Text","noDelete":true,"align":"left","formatFunc":""}],"height":"100%","margin":"4"}, {"onClick":"dojoGrid_UnitClick","onCellDblClick":"dojoGrid_UnitCellDblClick"}, {
											binding: ["wm.Binding", {}, {}, {
												wire: ["wm.Wire", {"expression":undefined,"source":"r_unitLiveVariable1","targetProperty":"dataSet"}, {}]
											}]
										}],
										panel5: ["wm.Panel", {"height":"34px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
											textSearchResult: ["wm.Text", {"captionSize":"0px","dataValue":undefined,"disabled":true,"displayValue":"","readonly":true,"width":"200px"}, {}],
											spacer6: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
											buttonPreview_Unit: ["wm.Button", {"caption":"เลือก","imageIndex":5,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navCall_UnitInfo"}]
										}]
									}]
								}],
								layer_UNIT_Info: ["wm.Layer", {"borderColor":"","caption":"[R_UNIT_INFO] รายละเอียดหน่วยงาน","horizontalAlign":"left","margin":"4","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
									fancyPanel3: ["wm.FancyPanel", {}, {}, {
										r_unitLiveForm1: ["wm.LiveForm", {"autoScroll":true,"captionSize":"130px","confirmDelete":"กรุณายืนยันการลบข้อมูล","height":"100%","horizontalAlign":"center","readonly":true,"verticalAlign":"top"}, {"onBeginInsert":"r_unitLiveForm1BeginInsert","onBeginUpdate":"r_unitLiveForm1BeginUpdate"}, {
											binding: ["wm.Binding", {}, {}, {
												wire1: ["wm.Wire", {"expression":undefined,"source":"dojoGrid_Unit.selectedItem.UNIT_ID","targetProperty":"dataOutput.UNIT_ID"}, {}],
												wire: ["wm.Wire", {"expression":undefined,"source":"LVar_Unit_MT","targetProperty":"dataSet"}, {}]
											}],
											panel2: ["wm.Panel", {"fitToContentHeight":true,"height":"128px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													UNIT_IDEditor2: ["wm.Number", {"caption":"รหัสหน่วยงาน (Unit ID.)","captionSize":"130px","emptyValue":"zero","formField":"UNIT_ID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
													UNIT_NAMEEditor2: ["wm.Text", {"caption":"ชื่อหน่วยงาน","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"UNIT_NAME","height":"26px","readonly":true,"width":"100%"}, {}],
													REL_UNITTYPELookup1: ["wm.Lookup", {"caption":"หน่วยเรียกหน่วยงาน","captionSize":"130px","displayExpression":"${UNITTYPEID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_UNITTYPE","readonly":true,"width":"100%"}, {}],
													REL_UNIT_REGIONLookup1: ["wm.Lookup", {"caption":"ประเภทหน่วยงาน","captionSize":"130px","displayExpression":"${UNIT_REGION_ID} + \" - \" + ${NAME}","displayField":"NAME","formField":"REL_UNIT_REGION","readonly":true,"width":"100%"}, {}],
													REL_UNIT_PARENTLookup1: ["wm.Lookup", {"caption":"หน่วยงานที่ขึ้นตรง","captionSize":"130px","displayExpression":"${UNIT_ID} + \" - \" + ${UNIT_NAME} + \" (\" + ${UNIT_CODE} + \")\"","displayField":"UNIT_CODE","formField":"REL_UNIT_PARENT","readonly":true,"width":"100%"}, {}]
												}],
												panel4: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													spacer2: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													UNIT_CODEEditor2: ["wm.Text", {"caption":"ชื่อย่อหน่วยงาน","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"UNIT_CODE","height":"26px","readonly":true,"width":"100%"}, {}],
													REL_UNIT_STATUSLookup1: ["wm.Lookup", {"caption":"สถานะหน่วยงาน","captionSize":"130px","displayExpression":"${UNIT_STATUS_ID} + \" - \" + ${NAME}","displayField":"DESC","formField":"REL_UNIT_STATUS","readonly":true,"width":"100%"}, {}],
													spacer3: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													spacer4: ["wm.Spacer", {"height":"26px","width":"100%"}, {}]
												}]
											}],
											panel6: ["wm.Panel", {"height":"26px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												lookup1: ["wm.Lookup", {"caption":"อ้างอิงจาก","captionSize":"130px","displayField":"REFDOCNAME","formField":"REL_UNIT_REFDOC","height":"26px","readonly":true,"width":"40%"}, {}],
												ORDER_NOEditor2: ["wm.Text", {"caption":"ที่","captionSize":"50px","dataValue":"","emptyValue":"emptyString","formField":"ORDER_NO","height":"26px","readonly":true,"width":"30%"}, {}],
												ORDER_DATEEditor2: ["wm.DateTime", {"caption":"ลงวันที่","captionSize":"50px","dateMode":"Date","emptyValue":"emptyString","formField":"ORDER_DATE","height":"26px","readonly":true,"width":"30%"}, {}]
											}],
											panel7: ["wm.Panel", {"height":"52px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												panel8: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													APPROVE_DATEEditor2: ["wm.DateTime", {"caption":"วันที่อนุมัติ","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"APPROVE_DATE","height":"26px","readonly":true,"width":"100%"}, {}],
													AFFECTIVE_DATEEditor2: ["wm.DateTime", {"caption":"วันที่มีผลบังคับใช้","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"AFFECTIVE_DATE","height":"26px","readonly":true,"width":"100%"}, {}]
												}],
												panel9: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"50%"}, {}, {
													spacer5: ["wm.Spacer", {"height":"26px","width":"100%"}, {}],
													CANCEL_DATEEditor2: ["wm.DateTime", {"caption":"วันที่ยกเลิก","captionSize":"130px","dateMode":"Date","emptyValue":"emptyString","formField":"CANCEL_DATE","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}],
											COMMENTEditor2: ["wm.Text", {"caption":"หมายเหตุ","captionSize":"130px","dataValue":"","emptyValue":"emptyString","formField":"COMMENT","height":"52px","readonly":true,"singleLine":false,"width":"100%"}, {}],
											tabLayers4: ["wm.TabLayers", {"height":"138px","transition":"fade"}, {}, {
												layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"เอกสารอ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}],
												layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ข้อมูลระบบ","horizontalAlign":"center","lock":true,"roles":["SCA"],"themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
													CREATEBYIDEditor1: ["wm.Number", {"caption":"รหัสผู้กำหนด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"CREATEBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													CREATETSEditor1: ["wm.DateTime", {"caption":"กำหนดเมื่อ","captionSize":"130px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"CREATETS","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYBYIDEditor1: ["wm.Number", {"caption":"รหัสผู้ปรับปรุงล่าสุด","captionSize":"130px","disabled":true,"emptyValue":"zero","formField":"MODIFYBYID","height":"26px","readonly":true,"width":"100%"}, {}],
													MODIFYTSEditor1: ["wm.DateTime", {"caption":"ปรับปรุงล่าสุดเมื่อ","captionSize":"130px","dateMode":"Date","disabled":true,"emptyValue":"emptyString","formField":"MODIFYTS","height":"26px","readonly":true,"width":"100%"}, {}]
												}]
											}]
										}],
										liveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unitLiveForm1","lock":false,"operationPanel":"operationPanel21","savePanel":"savePanel21"}, {}, {
											savePanel21: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton21: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton21: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel21: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
												buttonList: ["wm.Button", {"caption":"รายการ","imageIndex":19,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"navCall_UnitList"}],
												spacer1: ["wm.Spacer", {"height":"100%","width":"96%"}, {}],
												newButton21: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataInsert"}],
												updateButton21: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton21: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"liveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"liveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_UNITTYPE: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ประเภทหน่วยงาน","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_unittypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_unittypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"ข้อมูลประเภทสังกัด"}, {}, {
									r_unittypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UNITTYPEID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ประเภทหน่วยงาน","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_unittypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
									r_unittypeLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_unittypeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										UNITTYPEIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"UNITTYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor19: ["wm.Text", {"caption":"ประเภทหน่วยงาน","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_unittypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unittypeLiveForm1","lock":false,"operationPanel":"operationPanel17","savePanel":"savePanel17"}, {}, {
											savePanel17: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton17: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton17: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel17: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton17: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.beginDataInsert"}],
												updateButton17: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":75,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton17: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unittypeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_unittypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_UNITREFDOC: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"หนังสืออ้างอิง","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_unit_refdocLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_unit_refdocGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"[R_UNIT_REFDOC] ปรับแต่งประเภทหนังสืออ้างอิง"}, {}, {
									r_unit_refdocDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"UNITREFDOCID","title":"รหัสประเภทหนังสืออ้างอิง","width":"30%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REFDOCNAME","title":"ชื่อประเภทหนังสืออ้างอิง","width":"70%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_unit_refdocDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
									r_unit_refdocLiveForm1: ["wm.LiveForm", {"fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_unit_refdocLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										UNITREFDOCIDEditor1: ["wm.Number", {"caption":"รหัสประเภทหนังสืออ้างอิง","captionSize":"200px","emptyValue":"zero","formField":"UNITREFDOCID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										REFDOCNAMEEditor1: ["wm.Text", {"caption":"ประเภทหนังสืออ้างอิง","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REFDOCNAME","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										r_unit_refdocLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_unit_refdocLiveForm1","lock":false,"operationPanel":"operationPanel22","savePanel":"savePanel22"}, {}, {
											savePanel22: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton22: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton22: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel22: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton22: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.beginDataInsert"}],
												updateButton22: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton22: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_unit_refdocLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_unit_refdocLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_Leave: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"[R_LEAVE] การลา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					layer_HR_LEAVE: ["wm.TabLayers", {"transition":"fade"}, {}, {
						layer_R_LEAVE: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ประเภทการลา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_leavetypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_leavetypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"ข้อมูลประเภทการลา"}, {}, {
									r_leavetypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"LEAVETYPEID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ประเภทการลา","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetypeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_leavetypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
									r_leavetypeLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_leavetypeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										LEAVETYPEIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"LEAVETYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor20: ["wm.Text", {"caption":"ประเภทการลา","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_leavetypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_leavetypeLiveForm1","lock":false,"operationPanel":"operationPanel18","savePanel":"savePanel18"}, {}, {
											savePanel18: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton18: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetypeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton18: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetypeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel18: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton18: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetypeLiveForm1EditPanel.beginDataInsert"}],
												updateButton18: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetypeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton18: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetypeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_R_LEAVETIME: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ช่วงเวลาการลา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							r_leavetimetypeLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								r_leavetimetypeGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"ข้อมูลช่วงเวลาการลา"}, {}, {
									r_leavetimetypeDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"LEAVETIMETYPEID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"NAME","title":"ช่วงเวลาการลา","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetimetypeLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								r_leavetimetypeDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
									r_leavetimetypeLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"r_leavetimetypeLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetimetypeDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										LEAVETIMETYPEIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"LEAVETIMETYPEID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										NAMEEditor21: ["wm.Text", {"caption":"ช่วงเวลาการลา","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"NAME","height":"26px","readonly":true,"width":"100%"}, {}],
										r_leavetimetypeLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"r_leavetimetypeLiveForm1","lock":false,"operationPanel":"operationPanel19","savePanel":"savePanel19"}, {}, {
											savePanel19: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton19: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetimetypeLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetimetypeLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton19: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetimetypeLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel19: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton19: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetimetypeLiveForm1EditPanel.beginDataInsert"}],
												updateButton19: ["wm.Button", {"caption":"ปรับปรุง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetimetypeLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetimetypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton19: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"r_leavetimetypeLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"r_leavetimetypeLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}],
						layer_HR_LEAVE_REQ_STATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"สถานะการร้องขอการลา","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							hr_leave_req_statusLivePanel1: ["wm.LivePanel", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								hr_leave_req_statusGridPanel: ["wm.FancyPanel", {"minHeight":"180","title":"ข้อมูลสถานะการร้องขอการลา"}, {}, {
									hr_leave_req_statusDojoGrid: ["wm.DojoGrid", {"_classes":{"domNode":["omgDataGrid"]},"border":"0","columns":[{"show":true,"id":"LEAVEREQSTATUSID","title":"ID.","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"REQSTATUSNAME","title":"สถานะการร้องขอการลา","width":"80%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"hr_leave_req_statusLiveVariable1","targetProperty":"dataSet"}, {}]
										}]
									}]
								}],
								hr_leave_req_statusDetailsPanel: ["wm.FancyPanel", {"fitToContentHeight":true,"height":"114px","title":"รายละเอียด"}, {}, {
									hr_leave_req_statusLiveForm1: ["wm.LiveForm", {"confirmDelete":"กรุณายืนยันการลบข้อมูล","fitToContentHeight":true,"height":"84px","horizontalAlign":"left","margin":"0,40,0,40","readonly":true,"verticalAlign":"top"}, {"onSuccess":"hr_leave_req_statusLiveVariable1"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"expression":undefined,"source":"hr_leave_req_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
										}],
										LEAVEREQSTATUSIDEditor1: ["wm.Number", {"caption":"ID.","captionSize":"200px","emptyValue":"zero","formField":"LEAVEREQSTATUSID","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
										REQSTATUSNAMEEditor1: ["wm.Text", {"caption":"สถานะการร้องขอการลา","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"REQSTATUSNAME","height":"26px","readonly":true,"width":"100%"}, {}],
										hr_leave_req_statusLiveForm1EditPanel: ["wm.EditPanel", {"height":"32px","isCustomized":true,"liveForm":"hr_leave_req_statusLiveForm1","lock":false,"operationPanel":"operationPanel20","savePanel":"savePanel20"}, {}, {
											savePanel20: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
												saveButton20: ["wm.Button", {"caption":"บันทึก","imageIndex":15,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"hr_leave_req_statusLiveForm1EditPanel.saveData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"hr_leave_req_statusLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
													}]
												}],
												cancelButton20: ["wm.Button", {"caption":"ยกเลิก","imageIndex":21,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"hr_leave_req_statusLiveForm1EditPanel.cancelEdit"}]
											}],
											operationPanel20: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
												newButton20: ["wm.Button", {"caption":"เพิ่ม","imageIndex":1,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"hr_leave_req_statusLiveForm1EditPanel.beginDataInsert"}],
												updateButton20: ["wm.Button", {"caption":"ปรับแต่ง","imageIndex":4,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"hr_leave_req_statusLiveForm1EditPanel.beginDataUpdate"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"hr_leave_req_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}],
												deleteButton20: ["wm.Button", {"caption":"ลบ","imageIndex":11,"imageList":"app.silkIconList","margin":"4"}, {"onclick":"hr_leave_req_statusLiveForm1EditPanel.deleteData"}, {
													binding: ["wm.Binding", {}, {}, {
														wire: ["wm.Wire", {"expression":undefined,"source":"hr_leave_req_statusLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
													}]
												}]
											}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer_Doc: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"[DOC] ข้อมูลเอกสาร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers3: ["wm.TabLayers", {}, {}, {
						layer_Doc_Type: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"ประเภทหนังสือ","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}]
					}]
				}]
			}]
		}]
	}]
}