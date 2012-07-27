LMS_DP_Main.widgets = {
	navCall_DP_Config: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"LMS_DP_Config\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_DP: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_DP] หน้าจอหลักแผนพัฒนา (Development Planning Main Menu)"}, {}, {
			panel1: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
				panel2: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_MAIN_MENU: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_MENU.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MENUMouseOut","onMouseOver":"picBtn_MAIN_MENUMouseOver","onclick":"picBtn_MAIN_MENUClick","onclick1":"app.navCall_MainMenu"}]
				}],
				panel3: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_DP: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_DP.gif","width":"180px"}, {"onMouseOut":"picBtn_DPMouseOut","onMouseOver":"picBtn_DPMouseOver","onclick":"picBtn_DPClick","onclick1":"navCall_DP"}]
				}],
				panel4: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
				panel5: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
					panel6: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}]
				}]
			}],
			panel7: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
				panel8: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
				panel9: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
				panel10: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
				panel11: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
					panel12: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_DP_Config: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_CONFIG.png","width":"180px"}, {"onMouseOut":"picBtn_DP_ConfigMouseOut","onMouseOver":"picBtn_DP_ConfigMouseOver","onclick":"picBtn_DP_ConfigClick","onclick1":"navCall_DP_Config"}]
					}]
				}]
			}]
		}]
	}]
}