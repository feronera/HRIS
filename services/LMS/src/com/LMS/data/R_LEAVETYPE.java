
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_LEAVETYPE
 *  07/29/2555 15:37:25
 * 
 */
public class R_LEAVETYPE {

    private Integer LEAVETYPEID;
    private String NAME;
    private Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs = new HashSet<com.LMS.data.HR_LEAVE_REQ>();

    public Integer getLEAVETYPEID() {
        return LEAVETYPEID;
    }

    public void setLEAVETYPEID(Integer LEAVETYPEID) {
        this.LEAVETYPEID = LEAVETYPEID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.HR_LEAVE_REQ> getHr_leave_reqs() {
        return hr_leave_reqs;
    }

    public void setHr_leave_reqs(Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs) {
        this.hr_leave_reqs = hr_leave_reqs;
    }

}
