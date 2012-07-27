
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_UNIT_STATUS
 *  07/26/2555 21:35:20
 * 
 */
public class R_UNIT_STATUS {

    private Integer UNIT_STATUS_ID;
    private String NAME;
    private String DESC;
    private Set<com.LMS.data.R_UNIT> r_units = new HashSet<com.LMS.data.R_UNIT>();

    public Integer getUNIT_STATUS_ID() {
        return UNIT_STATUS_ID;
    }

    public void setUNIT_STATUS_ID(Integer UNIT_STATUS_ID) {
        this.UNIT_STATUS_ID = UNIT_STATUS_ID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.R_UNIT> getR_units() {
        return r_units;
    }

    public void setR_units(Set<com.LMS.data.R_UNIT> r_units) {
        this.r_units = r_units;
    }

}
