Page_ADM_Main.widgets = {
	navCall_ADM_USER: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_Adm_UserManage\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_ADM_ROLE: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_Adm_UserRole\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","roles":["SCA"],"verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[ADM_MAIN] หน้าจอหลักการจัดการระบบ"}, {}, {
			panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				panel7: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
					panel8: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_MAIN_MENU: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_MENU.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MENUMouseOut","onMouseOver":"picBtn_MAIN_MENUMouseOver","onclick":"picBtn_MAIN_MENUClick","onclick1":"app.navCall_MainMenu"}]
					}],
					panel9: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_ADM_USER: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ADM_USER.png","width":"180px"}, {"onMouseOut":"picBtn_ADM_USERMouseOut","onMouseOver":"picBtn_ADM_USERMouseOver","onclick":"picBtn_ADM_USERClick","onclick1":"navCall_ADM_USER"}]
					}],
					panel10: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_ADM_ROLE: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ADM_ROLE.png","width":"180px"}, {"onMouseOut":"picBtn_ADM_ROLEMouseOut","onMouseOver":"picBtn_ADM_ROLEMouseOver","onclick":"picBtn_ADM_ROLEClick","onclick1":"navCall_ADM_ROLE"}]
					}],
					panel11: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
						panel12: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}]
					}]
				}],
				panel13: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
					panel14: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
					panel15: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
					panel16: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
					panel17: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
						panel18: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
							picBtn_PIM_CONFIG: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_CONFIG.png","width":"180px"}, {"onMouseOut":"picBtn_PIM_CONFIGMouseOut","onMouseOver":"picBtn_PIM_CONFIGMouseOver","onclick":"picBtn_PIM_CONFIGClick","onclick1":"navCall_PIM_Config"}]
						}]
					}]
				}]
			}]
		}]
	}]
}