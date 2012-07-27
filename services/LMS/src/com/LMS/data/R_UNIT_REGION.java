
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_UNIT_REGION
 *  07/26/2555 21:35:19
 * 
 */
public class R_UNIT_REGION {

    private Integer UNIT_REGION_ID;
    private String NAME;
    private Set<com.LMS.data.R_UNIT> r_units = new HashSet<com.LMS.data.R_UNIT>();

    public Integer getUNIT_REGION_ID() {
        return UNIT_REGION_ID;
    }

    public void setUNIT_REGION_ID(Integer UNIT_REGION_ID) {
        this.UNIT_REGION_ID = UNIT_REGION_ID;
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
