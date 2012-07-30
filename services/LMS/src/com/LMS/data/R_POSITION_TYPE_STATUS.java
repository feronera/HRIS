
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_POSITION_TYPE_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class R_POSITION_TYPE_STATUS {

    private Integer POSITION_TYPE_STAT_ID;
    private String NAME;
    private Set<com.LMS.data.R_POSITION_TYPE> r_position_types = new HashSet<com.LMS.data.R_POSITION_TYPE>();

    public Integer getPOSITION_TYPE_STAT_ID() {
        return POSITION_TYPE_STAT_ID;
    }

    public void setPOSITION_TYPE_STAT_ID(Integer POSITION_TYPE_STAT_ID) {
        this.POSITION_TYPE_STAT_ID = POSITION_TYPE_STAT_ID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.R_POSITION_TYPE> getR_position_types() {
        return r_position_types;
    }

    public void setR_position_types(Set<com.LMS.data.R_POSITION_TYPE> r_position_types) {
        this.r_position_types = r_position_types;
    }

}
