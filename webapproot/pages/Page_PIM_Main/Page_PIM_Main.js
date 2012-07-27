dojo.declare("Page_PIM_Main", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    picBtn_PIM_MTMouseOut: function(inSender, event) {
        try {
            this.picBtn_PIM_MT.setSource("resources/images/buttons/BTN_PIM_MT.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_MTMouseOut: ' + e);
        }
    },
    picBtn_PIM_MTMouseOver: function(inSender, event) {
        try {
            this.picBtn_PIM_MT.setSource("resources/images/buttons/BTN_PIM_MT_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_MTMouseOver: ' + e);
        }
    },
    picBtn_PIM_MTClick: function(inSender) {
        try {
            this.picBtn_PIM_MT.setSource("resources/images/buttons/BTN_PIM_MT_down.png");
            //app.pim_01_generalLiveVariable1.filter.clearData();
            //app.pim_01_generalLiveVariable1.update();
            app.staticVar_SelectUID.setValue("dataValue", "");
        } catch (e) {
            console.error('ERROR IN picBtn_ITS_ApplicantClick: ' + e);
        }
    },
    picBtn_PIM_SEARCHMouseOut: function(inSender, event) {
        try {
            this.picBtn_PIM_SEARCH.setSource("resources/images/buttons/BTN_PIM_SEARCH.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_SEARCHMouseOut: ' + e);
        }
    },
    picBtn_PIM_SEARCHMouseOver: function(inSender, event) {
        try {
            this.picBtn_PIM_SEARCH.setSource("resources/images/buttons/BTN_PIM_SEARCH_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_SEARCHMouseOver: ' + e);
        }
    },
    picBtn_PIM_SEARCHClick: function(inSender) {
        try {
            this.picBtn_PIM_SEARCH.setSource("resources/images/buttons/BTN_PIM_SEARCH_down.png");
            app.staticVar_SelectUID.setValue("dataValue", "");
        } catch (e) {
            console.error('ERROR IN picBtn_PIM_SEARCHClick: ' + e);
        }
    },
    picBtn_PIM_CONFIGClick: function(inSender) {
        try {
            this.picBtn_PIM_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG_down.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_CONFIGClick: ' + e);
        }
    },
    picBtn_PIM_CONFIGMouseOut: function(inSender, event) {
        try {
            this.picBtn_PIM_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_CONFIGMouseOut: ' + e);
        }
    },
    picBtn_PIM_CONFIGMouseOver: function(inSender, event) {
        try {
            this.picBtn_PIM_CONFIG.setSource("resources/images/buttons/BTN_ITS_CONFIG_over.png");

        } catch (e) {
            console.error('ERROR IN picBtn_PIM_CONFIGMouseOver: ' + e);
        }
    },
    picBtn_MAIN_MENUMouseOut: function(inSender, event) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUMouseOut: ' + e);
        }
    },
    picBtn_MAIN_MENUMouseOver: function(inSender, event) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU_over.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUMouseOver: ' + e);
        }
    },
    picBtn_MAIN_MENUClick: function(inSender) {
        try {
            this.picBtn_MAIN_MENU.setSource("resources/images/buttons/BTN_MAIN_MENU_down.gif");

        } catch (e) {
            console.error('ERROR IN picBtn_MAIN_MENUClick: ' + e);
        }
    },
    picBtn_HR_LEAVE_REQMouseOut: function(inSender, event) {
      try {
          this.picBtn_HR_LEAVE_REQ.setSource("resources/images/buttons/BTN_HR_LEAVE_REQ.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_HR_LEAVE_REQMouseOut: ' + e); 
      } 
  },
  picBtn_HR_LEAVE_REQMouseOver: function(inSender, event) {
      try {
          this.picBtn_HR_LEAVE_REQ.setSource("resources/images/buttons/BTN_HR_LEAVE_REQ_down.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_HR_LEAVE_REQMouseOver: ' + e); 
      } 
  },
  picBtn_HR_LEAVE_REQClick: function(inSender) {
      try {
          this.picBtn_HR_LEAVE_REQ.setSource("resources/images/buttons/BTN_HR_LEAVE_REQ_down.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_HR_LEAVE_REQClick: ' + e); 
      } 
  },
  picBtn_PIM_IMouseOut: function(inSender, event) {
      try {
          this.picBtn_PIM_I.setSource("resources/images/buttons/BTN_PIM_I.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_PIM_IMouseOut: ' + e); 
      } 
  },
  picBtn_PIM_IMouseOver: function(inSender, event) {
      try {
          this.picBtn_PIM_I.setSource("resources/images/buttons/BTN_PIM_I_over.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_PIM_IMouseOver: ' + e); 
      } 
  },
  picBtn_PIM_IClick: function(inSender) {
      try {
          this.picBtn_PIM_I.setSource("resources/images/buttons/BTN_PIM_I_down.gif");
          
      } catch(e) {
          console.error('ERROR IN picBtn_PIM_IClick: ' + e); 
      } 
  },
  _end: 0
});