Login.widgets = {
	layoutBox: ["wm.Layout", {"height":"100%","lock":true}, {}, {
		loginMainPanel: ["wm.Panel", {"_classes":{"domNode":["wm_BackgroundChromeBar_Yellow"]},"height":"100%","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"100%"}, {}, {
			picture1: ["wm.Picture", {"aspect":"h","border":"0","height":"200px","source":"resources/images/logos/logo.png","width":"200px"}, {}],
			label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontFamily_Courier"]},"align":"center","border":"0","caption":"ระบบบริหารทรัพยากรบุคคล","height":"40px","padding":"4","width":"237px"}, {}],
			wmTitle1: ["wm.Label", {"_classes":{"domNode":["wm_FontFamily_Times","wm_FontSizePx_20px"]},"align":"center","border":"0","caption":"HRIS - Human Resource Management  System","height":"36px","padding":"4","width":"370px"}, {}],
			loginInputPanel: ["wm.EmphasizedContentPanel", {"_classes":{"domNode":["wm_SilverBlueTheme_ToolBar"]},"height":"140px","horizontalAlign":"center","padding":"10","verticalAlign":"center","width":"350px"}, {}, {
				usernameInput: ["wm.Text", {"caption":"ชื่อผู้ใช้งาน: ","captionSize":"120px","dataValue":undefined,"displayValue":""}, {}],
				passwordInput: ["wm.Text", {"caption":"รหัสผ่าน: ","captionSize":"120px","dataValue":undefined,"displayValue":"","password":true}, {}],
				loginButtonPanel: ["wm.Panel", {"height":"50px","horizontalAlign":"right","layoutKind":"left-to-right","padding":"4","width":"100%"}, {}, {
					loginErrorMsg: ["wm.Label", {"align":"center","border":"0","caption":" ","height":"100%","padding":"4","singleLine":false,"width":"100%"}, {}, {
						format: ["wm.DataFormatter", {}, {}]
					}],
					loginButton: ["wm.Button", {"caption":"เข้าสู่ระบบ","height":"100%","imageIndex":18,"imageList":"app.silkIconList","margin":"4","width":"94px"}, {"onclick":"loginButtonClick"}]
				}]
			}]
		}]
	}]
}