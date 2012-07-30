
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_POSITION_MANAGEMENT_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class R_POSITION_MANAGEMENT_STATUS {

    private Integer POS_MANAGE_STATUS_ID;
    private String STATUS_NAME;
    private Set<com.LMS.data.R_POSITION_MANAGEMENT> r_position_managements = new HashSet<com.LMS.data.R_POSITION_MANAGEMENT>();

    public Integer getPOS_MANAGE_STATUS_ID() {
        return POS_MANAGE_STATUS_ID;
    }

    public void setPOS_MANAGE_STATUS_ID(Integer POS_MANAGE_STATUS_ID) {
        this.POS_MANAGE_STATUS_ID = POS_MANAGE_STATUS_ID;
    }

    public String getSTATUS_NAME() {
        return STATUS_NAME;
    }

    public void setSTATUS_NAME(String STATUS_NAME) {
        this.STATUS_NAME = STATUS_NAME;
    }

    public Set<com.LMS.data.R_POSITION_MANAGEMENT> getR_position_managements() {
        return r_position_managements;
    }

    public void setR_position_managements(Set<com.LMS.data.R_POSITION_MANAGEMENT> r_position_managements) {
        this.r_position_managements = r_position_managements;
    }

}
