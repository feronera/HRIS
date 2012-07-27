LMS_ITS_Main.widgets = {
	navCall_ITS_Applicant: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"LMS_ITS_APP\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_ITS_Config: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"LMS_ITS_Config\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[LMS_ITS] หน้าหลักระบบจัดการนักศึกษาฝึกงาน (Internship Management System)"}, {}, {
			panel1: ["wm.Panel", {"height":"216px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","verticalAlign":"top","width":"890px"}, {}, {
				panel2: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_MAIN_MENU: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_MENU.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MENUMouseOut","onMouseOver":"picBtn_MAIN_MENUMouseOver","onclick":"picBtn_MAIN_MENUClick","onclick1":"app.navCall_MainMenu"}]
				}],
				panel3: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_ITS_Applicant: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS.gif","width":"180px"}, {"onMouseOut":"picBtn_ITS_ApplicantMouseOut","onMouseOver":"picBtn_ITS_ApplicantMouseOver","onclick":"picBtn_ITS_ApplicantClick","onclick1":"navCall_ITS_Applicant"}]
				}],
				panel4: ["wm.Panel", {"height":"180px","horizontalAlign":"left","padding":"10","verticalAlign":"top","width":"200px"}, {}, {
					picBtn_ITS_Req: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_REQ.gif","width":"180px"}, {"onMouseOut":"picBtn_ITS_ReqMouseOut","onMouseOver":"picBtn_ITS_ReqMouseOver","onclick":"picBtn_ITS_ReqClick","onclick1":"navCall_ITS_Applicant"}]
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
						picBtn_ITS_Config: ["wm.Picture", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BorderShadow_StrongShadow"]},"border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_ITS_CONFIG.png","width":"180px"}, {"onMouseOut":"picBtn_ITS_ConfigMouseOut","onMouseOver":"picBtn_ITS_ConfigMouseOver","onclick":"picBtn_ITS_ConfigClick","onclick1":"navCall_ITS_Config"}]
					}]
				}]
			}]
		}]
	}]
}