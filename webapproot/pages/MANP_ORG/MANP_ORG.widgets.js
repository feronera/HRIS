MANP_ORG.widgets = {
	LVar_Org_Chair: ["wm.LiveVariable", {"liveSource":"com.LMS.data.R_UNIT"}, {"onSuccess":"LVar_Org_ChairSuccess"}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["wm_BackgroundColor_White"]},"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
		fancyPanel1: ["wm.FancyPanel", {"title":"[MANP_ORG] โครงสร้างกรมศุลกากร (Customs Organization Chart)"}, {}, {
			tabLayers1: ["wm.TabLayers", {}, {}, {
				layer_MANP_ORG_Chart: ["wm.Layer", {"autoScroll":true,"border":"1","borderColor":"#999999","caption":"แผนผังโครงสร้างกรมศุลกากร","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
					objectTree1: ["wm.ObjectTree", {"border":"0","height":"100%","margin":"4"}, {}]
				}]
			}]
		}]
	}]
}