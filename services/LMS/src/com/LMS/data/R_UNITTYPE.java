
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_UNITTYPE
 *  07/30/2555 19:20:05
 * 
 */
public class R_UNITTYPE {

    private Integer UNITTYPEID;
    private String NAME;
    private Set<com.LMS.data.R_UNIT> r_units = new HashSet<com.LMS.data.R_UNIT>();

    public Integer getUNITTYPEID() {
        return UNITTYPEID;
    }

    public void setUNITTYPEID(Integer UNITTYPEID) {
        this.UNITTYPEID = UNITTYPEID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.R_UNIT> getR_units() {
        return r_units;
    }

    public void setR_units(Set<com.LMS.data.R_UNIT> r_units) {
        this.r_units = r_units;
    }

}
