LMS_PLAN_Main.widgets = {
	navCall_Plan_Config: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"LMS_PLAN_Config\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_Plan_App: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"LMS_PLAN_App\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_Plan_Doc: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"LMS_PLAN_DOC\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_PLAN] หน้าจอหลักการจัดการแผนงาน (Planning Management Main Menu)"}, {}, {
			panel1: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
				panel2: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_MAIN_MENU: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_MENU.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MENUMouseOut","onMouseOver":"picBtn_MAIN_MENUMouseOver","onclick":"picBtn_MAIN_MENUClick","onclick1":"app.navCall_MainMenu"}]
				}],
				panel3: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_PLAN: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_PLAN.gif","width":"180px"}, {"onMouseOut":"picBtn_PLANMouseOut","onMouseOver":"picBtn_PLANMouseOver","onclick":"picBtn_PLANClick","onclick1":"navCall_Plan_App"}]
				}],
				panel4: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_DOC: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_DOC.gif","width":"180px"}, {"onMouseOut":"picBtn_DOCMouseOut","onMouseOver":"picBtn_DOCMouseOver","onclick":"picBtn_DOCClick","onclick1":"navCall_Plan_Doc"}]
				}],
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
						picBtn_PLAN_Config: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_CONFIG.png","width":"180px"}, {"onMouseOut":"picBtn_PLAN_ConfigMouseOut","onMouseOver":"picBtn_PLAN_ConfigMouseOver","onclick":"picBtn_PLAN_ConfigClick","onclick1":"navCall_Plan_Config"}]
					}]
				}]
			}]
		}]
	}]
}