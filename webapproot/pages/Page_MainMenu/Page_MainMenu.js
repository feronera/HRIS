dojo.declare("Page_MainMenu", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    picBtn_MAIN_PIMClick: function(inSender) {
        try {
            this.picBtn_MAIN_PIM.setSource("resources/images/buttons/BTN_MAIN_PIM_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_PIMClick: ' + e);
        }
    },
    picBtn_MAIN_PIMMouseOut: function(inSender, event) {
        try {
            this.picBtn_MAIN_PIM.setSource("resources/images/buttons/BTN_MAIN_PIM.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_PIMMouseOut: ' + e);
        }
    },
    picBtn_MAIN_PIMMouseOver: function(inSender, event) {
        try {
            this.picBtn_MAIN_PIM.setSource("resources/images/buttons/BTN_MAIN_PIM_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_PIMMouseOver: ' + e);
        }
    },
    picBtn_MAIN_LMSMouseOut: function(inSender, event) {
        try {
            this.picBtn_MAIN_LMS.setSource("resources/images/buttons/BTN_MAIN_LMS.gif");
        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_LMSMouseOut: ' + e);
        }
    },
    picBtn_MAIN_LMSMouseOver: function(inSender, event) {
        try {
            this.picBtn_MAIN_LMS.setSource("resources/images/buttons/BTN_MAIN_LMS_over.gif");
        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_LMSMouseOver: ' + e);
        }
    },
    picBtn_MAIN_LMSClick: function(inSender) {
        try {
            this.picBtn_MAIN_LMS.setSource("resources/images/buttons/BTN_MAIN_LMS_down.gif");
        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_LMSClick: ' + e);
        }
    },
    picBtn_MAIN_PMSMouseOut: function(inSender, event) {
      try {
          this.picBtn_MAIN_PMS.setSource("resources/images/buttons/BTN_MAIN_PMS.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_PMSMouseOut: ' + e); 
      } 
  },
  picBtn_MAIN_PMSMouseOver: function(inSender, event) {
      try {
          this.picBtn_MAIN_PMS.setSource("resources/images/buttons/BTN_MAIN_PMS_over.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_PMSMouseOver: ' + e); 
      } 
  },
  picBtn_MAIN_PMSClick: function(inSender) {
      try {
          this.picBtn_MAIN_PMS.setSource("resources/images/buttons/BTN_MAIN_PMS_down.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_PMSClick: ' + e); 
      } 
  },
  picBtn_MAIN_MANPMouseOut: function(inSender, event) {
      try {
          
          this.picBtn_MAIN_MANP.setSource("resources/images/buttons/BTN_MAIN_MANP.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_MANPMouseOut: ' + e); 
      } 
  },
  picBtn_MAIN_MANPMouseOver: function(inSender, event) {
      try {
          this.picBtn_MAIN_MANP.setSource("resources/images/buttons/BTN_MAIN_MANP_over.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_MANPMouseOver: ' + e); 
      } 
  },
  picBtn_MAIN_MANPClick: function(inSender) {
      try {
          this.picBtn_MAIN_MANP.setSource("resources/images/buttons/BTN_MAIN_MANP_down.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_MANPClick: ' + e); 
      } 
  },
  picBtn_MAIN_ADMMouseOut: function(inSender, event) {
      try {
          this.picBtn_MAIN_ADM.setSource("resources/images/buttons/BTN_MAIN_ADM.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_ADMMouseOut: ' + e); 
      } 
  },
  picBtn_MAIN_ADMMouseOver: function(inSender, event) {
      try {
          this.picBtn_MAIN_ADM.setSource("resources/images/buttons/BTN_MAIN_ADM_over.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_ADMMouseOver: ' + e); 
      } 
  },
  picBtn_MAIN_ADMClick: function(inSender) {
      try {
          this.picBtn_MAIN_ADM.setSource("resources/images/buttons/BTN_MAIN_ADM_down.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_MAIN_ADMClick: ' + e); 
      } 
  },
  _end: 0
});