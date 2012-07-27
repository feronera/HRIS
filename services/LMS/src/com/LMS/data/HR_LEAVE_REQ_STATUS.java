
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.HR_LEAVE_REQ_STATUS
 *  07/26/2555 21:35:19
 * 
 */
public class HR_LEAVE_REQ_STATUS {

    private Integer LEAVEREQSTATUSID;
    private String REQSTATUSNAME;
    private Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs = new HashSet<com.LMS.data.HR_LEAVE_REQ>();

    public Integer getLEAVEREQSTATUSID() {
        return LEAVEREQSTATUSID;
    }

    public void setLEAVEREQSTATUSID(Integer LEAVEREQSTATUSID) {
        this.LEAVEREQSTATUSID = LEAVEREQSTATUSID;
    }

    public String getREQSTATUSNAME() {
        return REQSTATUSNAME;
    }

    public void setREQSTATUSNAME(String REQSTATUSNAME) {
        this.REQSTATUSNAME = REQSTATUSNAME;
    }

    public Set<com.LMS.data.HR_LEAVE_REQ> getHr_leave_reqs() {
        return hr_leave_reqs;
    }

    public void setHr_leave_reqs(Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs) {
        this.hr_leave_reqs = hr_leave_reqs;
    }

}
