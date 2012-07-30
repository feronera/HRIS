
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_UNIT_REFDOC
 *  07/29/2555 15:37:25
 * 
 */
public class R_UNIT_REFDOC {

    private Integer UNITREFDOCID;
    private String REFDOCNAME;
    private Set<com.LMS.data.R_UNIT> r_units = new HashSet<com.LMS.data.R_UNIT>();

    public Integer getUNITREFDOCID() {
        return UNITREFDOCID;
    }

    public void setUNITREFDOCID(Integer UNITREFDOCID) {
        this.UNITREFDOCID = UNITREFDOCID;
    }

    public String getREFDOCNAME() {
        return REFDOCNAME;
    }

    public void setREFDOCNAME(String REFDOCNAME) {
        this.REFDOCNAME = REFDOCNAME;
    }

    public Set<com.LMS.data.R_UNIT> getR_units() {
        return r_units;
    }

    public void setR_units(Set<com.LMS.data.R_UNIT> r_units) {
        this.r_units = r_units;
    }

}
