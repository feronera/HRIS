
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_LEAVETIMETYPE
 *  07/30/2555 19:20:06
 * 
 */
public class R_LEAVETIMETYPE {

    private Integer LEAVETIMETYPEID;
    private String NAME;
    private Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs = new HashSet<com.LMS.data.HR_LEAVE_REQ>();

    public Integer getLEAVETIMETYPEID() {
        return LEAVETIMETYPEID;
    }

    public void setLEAVETIMETYPEID(Integer LEAVETIMETYPEID) {
        this.LEAVETIMETYPEID = LEAVETIMETYPEID;
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
