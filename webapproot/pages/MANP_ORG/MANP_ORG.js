dojo.declare("MANP_ORG", wm.Page, {
    start: function() {
        try {


        } catch (e) {
            app.toastError(this.name + ".start() Failed: " + e.toString());
        }
    },

    LVar_Org_ChairSuccess: function(inSender, inDeprecated) {
        try {
            var data = inSender.getData();
            var treeData = {};

            /* Iterate over every item of data and add it to our datastructure */
            for (var i = 0; i < data.length; i++) {
                var unit = data[i];
            /* Each department gets a high level node on this tree; 
                  * expanding the node shows whatever subnodes we want; 
                  * in this case, budget, code and location */
                treeData[unit.UNIT_NAME] = {
                    "Unit ID.": unit.UNIT_ID,
                    "อักษรย่อสังกัด": unit.UNIT_CODE,
                    "หน่วยเรียกสังกัด": unit.REL_UNITTYPE
                };
            } /* Pass in the new datastructure and the tree will regenerate itself */
            this.objectTree1.setData(treeData);

        } catch (e) {
            console.error('ERROR IN LVar_Org_ChairSuccess: ' + e);
        }
    },
    _end: 0
});