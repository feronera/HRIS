dojo.declare("Page_PMS_List", wm.Page, {
    start: function() {
        try {
            
            
        } catch(e) {
            app.toastError(this.name + ".start() Failed: " + e.toString()); 
        }
    },

    _end: 0
});