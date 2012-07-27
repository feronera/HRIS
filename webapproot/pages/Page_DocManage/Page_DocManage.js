dojo.declare("Page_DocManage", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    lms_basic_docLiveForm1BeginInsert: function(inSender) {
        try {
            this.CREATEBYIDEditor1.setDataValue(this.svVarSecurity.getValue("dataValue"));
            this.CREATETSEditor1.setValue("dataValue", new Date().valueOf());
            this.LASTMODIFYBYIDEditor1.setDataValue(this.svVarSecurity.getValue("dataValue"));
            this.LASTMODIFYTSEditor1.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN lms_basic_docLiveForm1BeginInsert: ' + e);
        }
    },
    lms_basic_docLiveForm1BeginUpdate: function(inSender) {
        try {

            this.LASTMODIFYBYIDEditor1.setDataValue(this.svVarSecurity.getValue("dataValue"));
            this.LASTMODIFYTSEditor1.setValue("dataValue", new Date().valueOf());

        } catch (e) {
            console.error('ERROR IN lms_basic_docLiveForm1BeginUpdate: ' + e);
        }
    },
    btnUploadClick: function(inSender) {
      try {
            this.dojoFlashFileUpload1.upload();
            //this.FILEEXTEditor1.setDataValur(this.svVarFileTransfer);
            //this.FILESIZEEditor1.setDataValur();
            
      } catch(e) {
          console.error('ERROR IN btnUploadClick: ' + e); 
      } 
  },
  _end: 0
});