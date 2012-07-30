Main.widgets = {
	templateUsernameVar: ["wm.ServiceVariable", {"autoUpdate":true,"operation":"getUserName","service":"securityService","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getUserNameInputs"}, {}]
	}],
	templateLogoutVar: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	navCall_Adm_UserManage: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_Adm_UserManage\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_Adm_UserRole: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_Adm_UserRole\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_DocManagement: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_DocManage\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_Adm_ReferenceInfo: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_Adm_ReferenceInfo\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_PIM_Main: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_PIM_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_ITS_Main: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}]
	}],
	navCall_LMS_ITS_Main: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"LMS_ITS_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_Login: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Login\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	svVar_Logout: ["wm.ServiceVariable", {"operation":"logout","service":"securityService"}, {"onResult":"svVar_LogoutResult"}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	svVar_InvalidateSession: ["wm.ServiceVariable", {"operation":"invalidateSesssion","service":"SessionManager"}, {}, {
		input: ["wm.ServiceInput", {"type":"invalidateSesssionInputs"}, {}]
	}],
	navCall_MAINMenu: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire: ["wm.Wire", {"expression":"\"Page_MainMenu\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_LMS_Main: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire1: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire: ["wm.Wire", {"expression":"\"Page_LMS_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	loadingDialog1: ["wm.LoadingDialog", {}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"layoutBox1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"svVar_InvalidateSession","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	navCall_PMS_Main: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_PMS_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_MainMenu: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_MainMenu\"","targetProperty":"pageName"}, {}],
				wire1: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}]
			}]
		}]
	}],
	navCall_MANP_GOV: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"MANP_GOV\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_MANP_ORG: ["wm.NavigationCall", {"operation":"gotoPageContainerPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageContainerPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"source":"pageContainer1","targetProperty":"pageContainer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"MANP_ORG\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"829px"}, {}, {
		MenuonTop: ["wm.Template", {"autoScroll":true,"height":"100%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			panelCenter: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"verticalAlign":"top","width":"100%"}, {}, {
				panelHeader: ["wm.HeaderContentPanel", {"_classes":{"domNode":["wm_BackgroundColor_White","wm_BackgroundGradient_Blue","wm_BackgroundChromeBar_LightBlue"]},"height":"145px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10,0,10","verticalAlign":"middle","width":"100%"}, {}, {
					picture1: ["wm.Picture", {"aspect":"h","border":"0","height":"126px","source":"resources/images/logos/logo.png","width":"126px"}, {}],
					panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"middle","width":"100%"}, {}, {
						label3: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Times","wm_FontColor_Blue","wm_FontSizePx_24px"]},"border":"0","caption":"ระบบบริหารทรัพยากรบุคคล","height":"40px","padding":"4","width":"200%"}, {}],
						label2: ["wm.Label", {"_classes":{"domNode":["wm_FontColor_Blue","wm_FontFamily_Times","wm_FontSizePx_28px"]},"border":"0","caption":"HRIS Management System","height":"35px","padding":"4","width":"100%"}, {}, {
							format: ["wm.DataFormatter", {}, {}]
						}]
					}],
					panel10: ["wm.Panel", {"height":"100%","horizontalAlign":"center","verticalAlign":"middle","width":"300px"}, {}, {
						SecurityComponents: ["wm.Template", {"height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"300px"}, {}, {
							templateUserNameLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","height":"20px","padding":"4","width":"100%"}, {}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":"\"ยินดีต้อนรับ, \" + ${templateUsernameVar.dataValue}","source":false,"targetProperty":"caption"}, {}]
								}],
								format: ["wm.DataFormatter", {}, {}]
							}],
							templateLogoutButton: ["wm.Button", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"ออกจากระบบ","imageIndex":42,"imageList":"app.silkIconList","margin":"4","width":"110px"}, {"onclick":"templateLogoutVar"}]
						}],
						panel15: ["wm.Panel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"middle","width":"100%"}, {}, {
							text1: ["wm.Text", {"dataValue":undefined,"displayValue":"","placeHolder":"ค้นหา...","resetButton":true,"width":"100%"}, {}],
							picture5: ["wm.Picture", {"border":"0","height":"16px","source":"lib/images/silkIcons/zoom.png","width":"16px"}, {}]
						}]
					}]
				}],
				splitter2: ["wm.Splitter", {"height":"1px","maximum":146,"width":"100%"}, {}],
				panel2: ["wm.Panel", {"height":"30px","horizontalAlign":"left","layoutKind":"left-to-right","touchScrolling":true,"verticalAlign":"top","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"_classes":{"domNode":["ClickableDojoMenu"]},"eventList":[],"fullStructure":[{"label":"MAIN MENU","defaultLabel":"MAIN MENU","iconClass":"app_silkIconList_10","imageList":"app.silkIconList","onClick":"app.navCall_MainMenu","children":[]},{"label":"PIM","defaultLabel":"PIM","iconClass":undefined,"imageList":undefined,"onClick":"navCall_PIM_Main","children":[]},{"label":"LMS","defaultLabel":"LMS","iconClass":undefined,"imageList":undefined,"onClick":"navCall_LMS_Main","children":[]},{"label":"MANP","defaultLabel":"MANP","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[{"label":"โครงสร้างอัตรากำลัง","defaultLabel":"โครงสร้างอัตรากำลัง","iconClass":"app_silkIconList_10","imageList":"app.silkIconList","onClick":undefined,"children":[]},{"label":"จัดการข้อมูลข้าราชการ","defaultLabel":"จัดการข้อมูลข้าราชการ","iconClass":"app_silkIconList_52","imageList":"app.silkIconList","onClick":undefined,"children":[]}]},{"label":"PMS","defaultLabel":"PMS","iconClass":undefined,"imageList":undefined,"onClick":"navCall_PMS_Main","children":[]},{"label":"Administrative Tools","defaultLabel":"Administrative Tools","iconClass":undefined,"imageList":undefined,"onClick":undefined,"children":[]}],"height":"100%","localizationStructure":{},"transparent":false}, {}]
				}],
				panelContent: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					TwoColumns: ["wm.Template", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
						panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
							leftSideBarTOC: ["wm.EmphasizedContentPanel", {"_classes":{"domNode":["TOC","wm_BackgroundChromeBar_LightBlue"]},"border":"0","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"220px"}, {}, {
								dojoMenu2: ["wm.DojoMenu", {"_classes":{"domNode":["TransparentDojoMenu"]},"eventList":[],"fullStructure":[{"label":"Main Menu","defaultLabel":"Main Menu","iconClass":"app_silkIconList_26","imageList":"app.silkIconList","onClick":"navCall_MAINMenu","children":[]},{"label":"LMS","defaultLabel":"LMS","iconClass":"app_silkIconList_8","imageList":"app.silkIconList","onClick":"navCall_LMS_Main","children":[]},{"label":"MANP","defaultLabel":"MANP","iconClass":"app_silkIconList_54","imageList":"app.silkIconList","onClick":undefined,"children":[{"label":"โครงสร้างกรมศุลกากร","defaultLabel":"โครงสร้างกรมศุลกากร","iconClass":"app_silkIconList_10","imageList":"app.silkIconList","onClick":"navCall_MANP_ORG","children":[]},{"label":"จัดการข้อมูลข้าราชการ","defaultLabel":"จัดการข้อมูลข้าราชการ","iconClass":"app_silkIconList_52","imageList":"app.silkIconList","onClick":"navCall_MANP_GOV","children":[]},{"label":"MANP_EMP_PER","defaultLabel":"MANP_EMP_PER","iconClass":"app_silkIconList_52","imageList":"app.silkIconList","onClick":undefined,"children":[]},{"label":"MANP_EMP_GOV","defaultLabel":"MANP_EMP_GOV","iconClass":"app_silkIconList_52","imageList":"app.silkIconList","onClick":undefined,"children":[]},{"label":"MANP_EMP_TEMP","defaultLabel":"MANP_EMP_TEMP","iconClass":"app_silkIconList_52","imageList":"app.silkIconList","onClick":undefined,"children":[]},{"label":"MANP_ASK","defaultLabel":"MANP_ASK","iconClass":"app_silkIconList_52","imageList":"app.silkIconList","onClick":undefined,"children":[]}]},{"label":"PIM","defaultLabel":"PIM","iconClass":"app_silkIconList_43","imageList":"app.silkIconList","onClick":"navCall_PIM_Main","children":[]},{"label":"PMS","defaultLabel":"PMS","iconClass":"app_silkIconList_19","imageList":"app.silkIconList","onClick":"navCall_PMS_Main","children":[]},{"label":"ปรับแต่งระบบ","defaultLabel":"ปรับแต่งระบบ","iconClass":"app_silkIconList_1","imageList":"app.silkIconList","onClick":undefined,"children":[]},{"label":"เครื่องมือจัดการระบบ","defaultLabel":"เครื่องมือจัดการระบบ","iconClass":"app_silkIconList_58","imageList":"app.silkIconList","onClick":undefined,"children":[{"label":"ปรับแต่งผู้ใช้งานระบบ","defaultLabel":"ปรับแต่งผู้ใช้งานระบบ","iconClass":"app_silkIconList_54","imageList":"app.silkIconList","onClick":"navCall_Adm_UserManage","children":[]},{"label":"ปรับแต่งสิทธิผู้ใช้งานในระบบ","defaultLabel":"ปรับแต่งสิทธิผู้ใช้งานในระบบ","iconClass":"app_silkIconList_63","imageList":"app.silkIconList","onClick":"navCall_Adm_UserRole","children":[]},{"label":"ระบบจัดการเอกสาร","defaultLabel":"ระบบจัดการเอกสาร","iconClass":"app_silkIconList_9","imageList":"app.silkIconList","onClick":"navCall_DocManagement","children":[]},{"label":"ปรับแต่งค่าอ้างอิง","defaultLabel":"ปรับแต่งค่าอ้างอิง","iconClass":"app_silkIconList_75","imageList":"app.silkIconList","onClick":"navCall_Adm_ReferenceInfo","children":[]}]}],"height":"100%","imageList":"app.silkIconList","localizationStructure":{},"padding":"20","transparent":true,"vertical":true}, {}]
							}],
							splitter1: ["wm.Splitter", {"bevelSize":"2","height":"100%","maximum":220,"width":"2px"}, {}],
							mainContent: ["wm.MainContentPanel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
								pageContainer1: ["wm.PageContainer", {"border":"0","deferLoad":true,"pageName":"Page_MainMenu"}, {}]
							}]
						}]
					}]
				}],
				panelFooter: ["wm.HeaderContentPanel", {"height":"36px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
					picture2: ["wm.Picture", {"aspect":"v","border":"0","height":"36px","source":"resources/images/logos/logo_ait.png","width":"36px"}, {}],
					label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"border":"0","caption":"Powered by AIT","height":"100%","padding":"4"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					edFooterLabel: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","border":"0","caption":"Copyright [กรมศุลกากร] 2012","height":"100%","padding":"4","width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}]
				}]
			}]
		}]
	}]
}