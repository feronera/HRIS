Page_MainMenu.widgets = {
	navCall_PIM: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_PIM_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_PMS: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_PMS_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_LMS: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_LMS_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_MANP: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_MANP_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	navCall_ADM: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Page_ADM_Main\"","targetProperty":"pageName"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px","wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"หน้าจอหลัก (Main Menu)"}, {}, {
			panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","padding":"20","scrollY":true,"verticalAlign":"top","width":"100%"}, {}, {
				panel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					panel3: ["wm.Panel", {"height":"210px","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
						picBtn_MAIN_PIM: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"aspect":"v","border":"3","height":"160px","imageList":"app.silkIconList","source":"resources/images/buttons/BTN_MAIN_PIM.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_PIMMouseOut","onMouseOver":"picBtn_MAIN_PIMMouseOver","onclick":"picBtn_MAIN_PIMClick","onclick1":"navCall_PIM"}],
						spacer1: ["wm.Spacer", {"height":"100%","width":"20px"}, {}],
						picBtn_MAIN_LMS: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"aspect":"v","border":"3","height":"160px","hint":"Personal Information Management System (ระบบจัดการข้อมูลส่วนบุคคล)","imageList":"app.silkIconList","roles":["SCA"],"source":"resources/images/buttons/BTN_MAIN_LMS.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_LMSMouseOut","onMouseOver":"picBtn_MAIN_LMSMouseOver","onclick":"picBtn_MAIN_LMSClick","onclick1":"navCall_LMS"}],
						spacer2: ["wm.Spacer", {"height":"100%","width":"20px"}, {}],
						picBtn_MAIN_MANP: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"aspect":"v","border":"3","height":"160px","hint":"Man-powering Management (ระบบอัตรากำลัง)","imageList":"app.silkIconList","roles":["SCA","MANPGOV"],"source":"resources/images/buttons/BTN_MAIN_MANP.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_MANPMouseOut","onMouseOver":"picBtn_MAIN_MANPMouseOver","onclick":"picBtn_MAIN_MANPClick","onclick1":"navCall_MANP"}]
					}],
					panel4: ["wm.Panel", {"height":"50%","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						panel5: ["wm.Panel", {"height":"210px","horizontalAlign":"center","layoutKind":"left-to-right","margin":"10","verticalAlign":"middle","width":"100%"}, {}, {
							picBtn_MAIN_PMS: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"aspect":"v","border":"3","height":"160px","hint":"Personal Information Management System (ระบบจัดการข้อมูลส่วนบุคคล)","imageList":"app.silkIconList","roles":["SCA"],"source":"resources/images/buttons/BTN_MAIN_PMS.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_PMSMouseOut","onMouseOver":"picBtn_MAIN_PMSMouseOver","onclick":"picBtn_MAIN_PMSClick","onclick1":"navCall_PMS"}],
							spacer3: ["wm.Spacer", {"height":"100%","width":"20px"}, {}],
							picBtn_MAIN_ADM: ["wm.Picture", {"_classes":{"domNode":["wm_BorderShadow_StrongShadow","wm_BorderTopStyle_Curved12px","wm_BorderBottomStyle_Curved12px"]},"aspect":"v","border":"3","height":"160px","hint":"System Administration (ปรับแต่งระบบ และข้อมูลพื้นฐาน)","imageList":"app.silkIconList","roles":["SCA","MANPGOV"],"source":"resources/images/buttons/BTN_MAIN_ADM.gif","width":"180px"}, {"onMouseOut":"picBtn_MAIN_ADMMouseOut","onMouseOver":"picBtn_MAIN_ADMMouseOver","onclick":"picBtn_MAIN_ADMClick","onclick1":"navCall_ADM"}]
						}]
					}]
				}]
			}]
		}]
	}]
}