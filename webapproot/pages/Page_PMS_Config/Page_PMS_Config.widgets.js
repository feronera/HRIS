Page_PMS_Config.widgets = {
	pms_project_statusDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget","height":"210px","title":"Project Status Setting","width":"500px"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"146px","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			pms_project_statusLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"125px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"pms_project_statusLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				PROJECT_STATUS_IDEditor1: ["wm.Number", {"caption":"PROJECT STATUS ID","captionSize":"200px","emptyValue":"zero","formField":"PROJECT_STATUS_ID","height":"26px","required":true,"width":"100%"}, {}],
				STATUS_NAMEEditor1: ["wm.Text", {"caption":"STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"STATUS_NAME","height":"26px","required":true,"width":"100%"}, {}],
				DESCEditor1: ["wm.Text", {"caption":"DESCRIPTION","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"65px","singleLine":false,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pms_project_statusSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pms_project_statusLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"pms_project_statusLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			pms_project_statusCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"pms_project_statusDialog.hide","onclick1":"pms_project_statusLiveForm1.cancelEdit"}]
		}]
	}],
	pms_project_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pms_project_statusLiveView1"}, {}],
	pms_project_member_statusDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget2","height":160,"title":"Member Status Setting","width":"500px"}, {}, {
		containerWidget2: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pms_project_member_statusLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"86px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"pms_project_member_statusLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_member_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				PMS_MEMBER_STATUS_IDEditor1: ["wm.Number", {"caption":"MEMBER STATUS ID","captionSize":"200px","emptyValue":"zero","formField":"PMS_MEMBER_STATUS_ID","height":"26px","required":true,"width":"100%"}, {}],
				MEMBER_STATUS_NAMEEditor1: ["wm.Text", {"caption":"MEMBER STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"MEMBER_STATUS_NAME","height":"26px","required":true,"width":"100%"}, {}],
				DESCEditor3: ["wm.Text", {"caption":"DESCRIPTION","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar2: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pms_project_member_statusSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pms_project_member_statusLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"pms_project_member_statusLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			pms_project_member_statusCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"pms_project_member_statusDialog.hide","onclick1":"pms_project_member_statusLiveForm1.cancelEdit"}]
		}]
	}],
	pms_project_member_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pms_project_member_statusLiveView1"}, {}],
	pms_r_priorityDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget4","height":160,"title":"Prioirity Setting","width":"500px"}, {}, {
		containerWidget4: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pms_r_priorityLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"86px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"pms_r_priorityLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pms_r_priorityDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				PRIORITY_IDEditor1: ["wm.Number", {"caption":"PRIORITY ID","captionSize":"200px","emptyValue":"zero","formField":"PRIORITY_ID","height":"26px","required":true,"width":"100%"}, {}],
				PRIORITY_TITLEEditor1: ["wm.Text", {"caption":"PRIORITY TITLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PRIORITY_TITLE","height":"26px","required":true,"width":"100%"}, {}],
				DESCEditor5: ["wm.Text", {"caption":"DESCRIPTION","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"26px","width":"100%"}, {}]
			}]
		}],
		buttonBar4: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pms_r_prioritySaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pms_r_priorityLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"pms_r_priorityLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			pms_r_priorityCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"pms_r_priorityDialog.hide","onclick1":"pms_r_priorityLiveForm1.cancelEdit"}]
		}]
	}],
	pms_r_priorityLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pms_r_priorityLiveView1"}, {}],
	pms_task_statusDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget3","height":"230px","title":"Task Status Setting","width":"500px"}, {}, {
		containerWidget3: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"middle","width":"100%"}, {}, {
			pms_task_statusLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"148px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"pms_task_statusLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pms_task_statusDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				TASK_STATUS_IDEditor1: ["wm.Number", {"caption":"TASK STATUS ID","captionSize":"200px","emptyValue":"zero","formField":"TASK_STATUS_ID","height":"26px","required":true,"width":"100%"}, {}],
				TASK_STATUS_NAMEEditor1: ["wm.Text", {"caption":"TASK STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TASK_STATUS_NAME","height":"26px","required":true,"width":"100%"}, {}],
				TASK_STATUS_NAMEEditor2: ["wm.Text", {"caption":"TASK STATUS NAME","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"TASK_STATUS_NAME","height":"26px","required":true,"width":"100%"}, {}],
				DESCEditor4: ["wm.Text", {"caption":"DESCRIPTION","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"62px","singleLine":false,"width":"100%"}, {}]
			}]
		}],
		buttonBar1: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pms_task_statusSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pms_task_statusLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"pms_task_statusLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			pms_task_statusCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"pms_task_statusDialog.hide","onclick1":"pms_task_statusLiveForm1.cancelEdit"}]
		}]
	}],
	pms_task_statusLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pms_task_statusLiveView1"}, {}],
	pms_project_member_positionDialog: ["wm.DesignableDialog", {"buttonBarId":"buttonBar","containerWidgetId":"containerWidget1","height":"240px","title":"Member Position Setting","width":"500px"}, {}, {
		containerWidget1: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","margin":"0","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			pms_project_member_positionLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"164px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"pms_project_member_positionLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_member_positionDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				PROJ_MEMBER_POS_IDEditor1: ["wm.Number", {"caption":"ID","captionSize":"200px","emptyValue":"zero","formField":"PROJ_MEMBER_POS_ID","height":"26px","required":true,"width":"100%"}, {}],
				POS_NAMEEditor1: ["wm.Text", {"caption":"POSITION ROLE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"POS_NAME","height":"26px","width":"100%"}, {}],
				PMS_POS_CODEEditor1: ["wm.Text", {"caption":"PROJECT ROLE CODE","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"PMS_POS_CODE","height":"26px","width":"100%"}, {}],
				DESCEditor2: ["wm.Text", {"caption":"DESCRIPTION","captionSize":"200px","dataValue":"","emptyValue":"emptyString","formField":"DESC","height":"78px","singleLine":false,"width":"100%"}, {}]
			}]
		}],
		buttonBar3: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			pms_project_member_positionSaveButton: ["wm.Button", {"caption":"Save","margin":"4"}, {"onclick":"pms_project_member_positionLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"pms_project_member_positionLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			pms_project_member_positionCancelButton: ["wm.Button", {"caption":"Cancel","margin":"4"}, {"onclick":"pms_project_member_positionDialog.hide","onclick1":"pms_project_member_positionLiveForm1.cancelEdit"}]
		}]
	}],
	pms_project_member_positionLiveVariable1: ["wm.LiveVariable", {"liveSource":"app.pms_project_member_positionLiveView1"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"PMS Configuration"}, {}, {
			tabLayers1: ["wm.TabLayers", {"transition":"fade"}, {}, {
				layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Project","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayer_PMS: ["wm.TabLayers", {}, {}, {
						layer_PROJECT_STATUS: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Project Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							pms_project_statusLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"pms_project_statusDialog","targetId":null,"targetProperty":"dialog"}, {}],
									wire1: ["wm.Wire", {"source":"pms_project_statusLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
									wire2: ["wm.Wire", {"source":"pms_project_statusDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
									wire3: ["wm.Wire", {"source":"pms_project_statusSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
								}],
								pms_project_statusDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"PROJECT_STATUS_ID","title":"ID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"STATUS_NAME","title":"PROJECT STATUS NAME","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTION","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","localizationStructure":{},"margin":"4"}, {"onCellDblClick":"pms_project_statusLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_statusLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}],
								pms_project_statusGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									pms_project_statusNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pms_project_statusLivePanel1.popupLivePanelInsert"}],
									pms_project_statusUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"pms_project_statusLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_project_statusDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}],
									pms_project_statusDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pms_project_statusLiveForm1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_project_statusDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Task","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers3: ["wm.TabLayers", {}, {}, {
						layer7: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Task Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							pms_task_statusLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"pms_task_statusDialog","targetId":null,"targetProperty":"dialog"}, {}],
									wire1: ["wm.Wire", {"source":"pms_task_statusLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
									wire2: ["wm.Wire", {"source":"pms_task_statusDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
									wire3: ["wm.Wire", {"source":"pms_task_statusSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
								}],
								pms_task_statusDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"TASK_STATUS_ID","title":"ID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"TASK_STATUS_NAME","title":"TASK STATUS NAME","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTION","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {"onCellDblClick":"pms_task_statusLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"pms_task_statusLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}],
								pms_task_statusGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									pms_task_statusNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pms_task_statusLivePanel1.popupLivePanelInsert"}],
									pms_task_statusUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"pms_task_statusLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_task_statusDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}],
									pms_task_statusDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pms_task_statusLiveForm1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_task_statusDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Member","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers2: ["wm.TabLayers", {"transition":"slide"}, {}, {
						layer6: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Member Position","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							pms_project_member_positionLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"pms_project_member_positionDialog","targetId":null,"targetProperty":"dialog"}, {}],
									wire1: ["wm.Wire", {"source":"pms_project_member_positionLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
									wire2: ["wm.Wire", {"source":"pms_project_member_positionDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
									wire3: ["wm.Wire", {"source":"pms_project_member_positionSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
								}],
								pms_project_member_positionDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"PROJ_MEMBER_POS_ID","title":"ID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"POS_NAME","title":"POSITION ROLE","width":"30%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"PMS_POS_CODE","title":"ROLE CODE","width":"20%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTION","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {"onCellDblClick":"pms_project_member_positionLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_member_positionLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}],
								pms_project_member_positionGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									pms_project_member_positionNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pms_project_member_positionLivePanel1.popupLivePanelInsert"}],
									pms_project_member_positionUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"pms_project_member_positionLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_project_member_positionDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}],
									pms_project_member_positionDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pms_project_member_positionLiveForm1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_project_member_positionDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}],
						layer8: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Member Status","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							pms_project_member_statusLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"pms_project_member_statusDialog","targetId":null,"targetProperty":"dialog"}, {}],
									wire1: ["wm.Wire", {"source":"pms_project_member_statusLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
									wire2: ["wm.Wire", {"source":"pms_project_member_statusDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
									wire3: ["wm.Wire", {"source":"pms_project_member_statusSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
								}],
								pms_project_member_statusDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"PMS_MEMBER_STATUS_ID","title":"ID","width":"10%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"MEMBER_STATUS_NAME","title":"MEMBER STATUS NAME","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTION","width":"50%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {"onCellDblClick":"pms_project_member_statusLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"pms_project_member_statusLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}],
								pms_project_member_statusGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									pms_project_member_statusNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pms_project_member_statusLivePanel1.popupLivePanelInsert"}],
									pms_project_member_statusUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"pms_project_member_statusLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_project_member_statusDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}],
									pms_project_member_statusDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pms_project_member_statusLiveForm1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_project_member_statusDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}]
								}]
							}]
						}]
					}]
				}],
				layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Miscellaneous","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					tabLayers4: ["wm.TabLayers", {}, {}, {
						layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Priority","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
							pms_r_priorityLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"source":"pms_r_priorityDialog","targetId":null,"targetProperty":"dialog"}, {}],
									wire1: ["wm.Wire", {"source":"pms_r_priorityLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
									wire2: ["wm.Wire", {"source":"pms_r_priorityDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
									wire3: ["wm.Wire", {"source":"pms_r_prioritySaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
								}],
								pms_r_priorityDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"id":"PRIORITY_ID","title":"PRIORITY ID","width":"20%","displayType":"Number","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"PRIORITY_TITLE","title":"PRIORITY TITLE","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""},{"show":true,"id":"DESC","title":"DESCRIPTION","width":"40%","displayType":"Text","noDelete":true,"align":"center","formatFunc":""}],"height":"100%","margin":"4"}, {"onCellDblClick":"pms_r_priorityLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"expression":undefined,"source":"pms_r_priorityLiveVariable1","targetProperty":"dataSet"}, {}]
									}]
								}],
								pms_r_priorityGridButtonPanel: ["wm.Panel", {"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
									pms_r_priorityNewButton: ["wm.Button", {"caption":"New","margin":"4"}, {"onclick":"pms_r_priorityLivePanel1.popupLivePanelInsert"}],
									pms_r_priorityUpdateButton: ["wm.Button", {"caption":"Update","margin":"4"}, {"onclick":"pms_r_priorityLivePanel1.popupLivePanelEdit"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_r_priorityDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
										}]
									}],
									pms_r_priorityDeleteButton: ["wm.Button", {"caption":"Delete","margin":"4"}, {"onclick":"pms_r_priorityLiveForm1.deleteData"}, {
										binding: ["wm.Binding", {}, {}, {
											wire: ["wm.Wire", {"source":"pms_r_priorityDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
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