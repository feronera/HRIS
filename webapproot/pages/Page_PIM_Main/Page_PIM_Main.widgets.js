Page_PIM_Main.widgets = {
	navCall_PIM_Search: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_PIM_Search\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_PIM_MT: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_PIM_MT\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_PIM_Config: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"[page_Adm_ReferenceInfo].layer_PIM","targetProperty":"layer"}, {}],
				wire1: ["wm.Wire", {"expression":"\"Page_Adm_ReferenceInfo\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_HR_LeaveReq: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_HR_LEAVE_REQ\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_PIM_I: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"PIM Main Menu"}, {}, {
			panel1: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
				panel2: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_MAIN_MENU: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_MENU.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MENUMouseOut","onMouseOver":"picBtn_MAIN_MENUMouseOver","onclick":"picBtn_MAIN_MENUClick","onclick1":"app.navCall_MainMenu"}]
				}],
				panel3: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_PIM_I: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_PIM_I.gif","width":"180px"}, {"onMouseOut":"picBtn_PIM_IMouseOut","onMouseOver":"picBtn_PIM_IMouseOver","onclick":"picBtn_PIM_IClick","onclick1":"navCall_PIM_I"}]
				}],
				panel4: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_PIM_SEARCH: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_PIM_SEARCH.png","width":"180px"}, {"onMouseOut":"picBtn_PIM_SEARCHMouseOut","onMouseOver":"picBtn_PIM_SEARCHMouseOver","onclick":"picBtn_PIM_SEARCHClick","onclick1":"navCall_PIM_Search"}]
				}],
				panel5: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
					panel6: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_PIM_MT: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_PIM_MT.png","width":"180px"}, {"onMouseOut":"picBtn_PIM_MTMouseOut","onMouseOver":"picBtn_PIM_MTMouseOver","onclick":"picBtn_PIM_MTClick","onclick1":"navCall_PIM_MT"}]
					}]
				}]
			}],
			panel7: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
				panel8: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_HR_LEAVE_REQ: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_HR_LEAVE_REQ.gif","width":"180px"}, {"onMouseOut":"picBtn_HR_LEAVE_REQMouseOut","onMouseOver":"picBtn_HR_LEAVE_REQMouseOver","onclick":"picBtn_HR_LEAVE_REQClick","onclick1":"navCall_HR_LeaveReq"}]
				}],
				panel9: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
				panel10: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}],
				panel11: ["wm.Panel", {"height":"180px","horizontalAlign":"left","verticalAlign":"top","width":"200px"}, {}, {
					panel12: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
						picBtn_PIM_CONFIG: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_CONFIG.png","width":"180px"}, {"onMouseOut":"picBtn_PIM_CONFIGMouseOut","onMouseOver":"picBtn_PIM_CONFIGMouseOver","onclick":"picBtn_PIM_CONFIGClick","onclick1":"navCall_PIM_Config"}]
					}]
				}]
			}]
		}]
	}]
}