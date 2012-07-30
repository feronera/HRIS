
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_LEVEL_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class R_LEVEL_STATUS {

    private Integer LEVEL_STATUS_ID;
    private String STATUS_NAME;
    private Set<com.LMS.data.R_LEVEL> r_levels = new HashSet<com.LMS.data.R_LEVEL>();

    public Integer getLEVEL_STATUS_ID() {
        return LEVEL_STATUS_ID;
    }

    public void setLEVEL_STATUS_ID(Integer LEVEL_STATUS_ID) {
        this.LEVEL_STATUS_ID = LEVEL_STATUS_ID;
    }

    public String getSTATUS_NAME() {
        return STATUS_NAME;
    }

    public void setSTATUS_NAME(String STATUS_NAME) {
        this.STATUS_NAME = STATUS_NAME;
    }

    public Set<com.LMS.data.R_LEVEL> getR_levels() {
        return r_levels;
    }

    public void setR_levels(Set<com.LMS.data.R_LEVEL> r_levels) {
        this.r_levels = r_levels;
    }

}
