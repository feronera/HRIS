Page_MANP_Main.widgets = {
	navCall_Org: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}]
	}],
	navCall_EMP_PER: ["wm.NavigationCall", {}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoLayerInputs"}, {}]
	}],
	navCall_GOV: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"MANP_GOV\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[MANP_MAIN] หน้าหลักระบบจัดการข้อมูลอัตรากำลัง (Main menu)"}, {}, {
			panel1: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
				panel7: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
					panel8: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_MAIN_MENU: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_MENU.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MENUMouseOut","onMouseOver":"picBtn_MAIN_MENUMouseOver","onclick":"picBtn_MAIN_MENUClick","onclick1":"app.navCall_MainMenu"}]
					}],
					panel9: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_MANP_ORG: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MANP_ORG.gif","width":"180px"}, {"onMouseOut":"picBtn_MANP_ORGMouseOut","onMouseOver":"picBtn_MANP_ORGMouseOver","onclick":"picBtn_MANP_ORGClick","onclick1":"navCall_Org"}]
					}],
					panel10: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
					panel11: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
						panel12: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
							picBtn_PIM_CONFIG: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_CONFIG.png","width":"180px"}, {"onMouseOut":"picBtn_PIM_CONFIGMouseOut","onMouseOver":"picBtn_PIM_CONFIGMouseOver","onclick":"picBtn_PIM_CONFIGClick","onclick1":"navCall_PIM_Config"}]
						}]
					}]
				}],
				panel13: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
					panel14: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_MANP_GOV: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","roles":["MANPGOV","SCA"],"source":"resources/images/buttons/BTN_MANP_GOV.gif","width":"180px"}, {"onMouseOut":"picBtn_MANP_GOVMouseOut","onMouseOver":"picBtn_MANP_GOVMouseOver","onclick":"picBtn_MANP_GOVClick","onclick1":"navCall_GOV"}]
					}],
					panel15: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_MANP_EMP_PER: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","roles":["MANPGOV","SCA"],"source":"resources/images/buttons/BTN_MANP_PER.png","width":"180px"}, {"onMouseOut":"picBtn_MANP_EMP_PERMouseOut","onMouseOver":"picBtn_MANP_EMP_PERMouseOver","onclick":"picBtn_MANP_EMP_PERClick","onclick1":"navCall_GOV"}]
					}],
					panel16: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_MANP_EMP_GOV: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","roles":["MANPGOV","SCA"],"source":"resources/images/buttons/BTN_MANP_EMPGOV.png","width":"180px"}, {"onMouseOut":"picBtn_MANP_EMP_GOVMouseOut","onMouseOver":"picBtn_MANP_EMP_GOVMouseOver","onclick":"picBtn_MANP_EMP_GOVClick","onclick1":"navCall_GOV"}]
					}],
					panel17: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
						panel18: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
							picBtn_MANP_EMP_TMP: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","roles":["MANPGOV","SCA"],"source":"resources/images/buttons/BTN_MANP_TMP.png","width":"180px"}, {"onMouseOut":"picBtn_MANP_EMP_TMPMouseOut","onMouseOver":"picBtn_MANP_EMP_TMPMouseOver","onclick":"picBtn_MANP_EMP_TMPClick","onclick1":"navCall_GOV"}]
						}]
					}]
				}]
			}]
		}]
	}]
}