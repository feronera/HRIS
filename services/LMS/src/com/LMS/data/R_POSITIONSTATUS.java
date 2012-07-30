
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_POSITIONSTATUS
 *  07/30/2555 19:20:05
 * 
 */
public class R_POSITIONSTATUS {

    private Integer POSITIONSTATUS_ID;
    private String NAME;
    private Set<com.LMS.data.POSITION_CHAIR> position_chairs = new HashSet<com.LMS.data.POSITION_CHAIR>();

    public Integer getPOSITIONSTATUS_ID() {
        return POSITIONSTATUS_ID;
    }

    public void setPOSITIONSTATUS_ID(Integer POSITIONSTATUS_ID) {
        this.POSITIONSTATUS_ID = POSITIONSTATUS_ID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.POSITION_CHAIR> getPosition_chairs() {
        return position_chairs;
    }

    public void setPosition_chairs(Set<com.LMS.data.POSITION_CHAIR> position_chairs) {
        this.position_chairs = position_chairs;
    }

}
