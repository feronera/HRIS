
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_POSITION_WORK_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class R_POSITION_WORK_STATUS {

    private Integer POSITION_WORK_STAT_ID;
    private String STATUS_NAME;
    private Set<com.LMS.data.R_POSITION_WORK> r_position_works = new HashSet<com.LMS.data.R_POSITION_WORK>();

    public Integer getPOSITION_WORK_STAT_ID() {
        return POSITION_WORK_STAT_ID;
    }

    public void setPOSITION_WORK_STAT_ID(Integer POSITION_WORK_STAT_ID) {
        this.POSITION_WORK_STAT_ID = POSITION_WORK_STAT_ID;
    }

    public String getSTATUS_NAME() {
        return STATUS_NAME;
    }

    public void setSTATUS_NAME(String STATUS_NAME) {
        this.STATUS_NAME = STATUS_NAME;
    }

    public Set<com.LMS.data.R_POSITION_WORK> getR_position_works() {
        return r_position_works;
    }

    public void setR_position_works(Set<com.LMS.data.R_POSITION_WORK> r_position_works) {
        this.r_position_works = r_position_works;
    }

}
