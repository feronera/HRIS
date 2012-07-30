
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_ITS_INTERNPERIOD
 *  07/30/2555 19:20:06
 * 
 */
public class LMS_ITS_INTERNPERIOD {

    private Integer INTERN_PERIOD_ID;
    private String PERIOD;
    private String DESC;
    private Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs = new HashSet<com.LMS.data.LMS_ITS_REQ>();

    public Integer getINTERN_PERIOD_ID() {
        return INTERN_PERIOD_ID;
    }

    public void setINTERN_PERIOD_ID(Integer INTERN_PERIOD_ID) {
        this.INTERN_PERIOD_ID = INTERN_PERIOD_ID;
    }

    public String getPERIOD() {
        return PERIOD;
    }

    public void setPERIOD(String PERIOD) {
        this.PERIOD = PERIOD;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.LMS_ITS_REQ> getLms_its_reqs() {
        return lms_its_reqs;
    }

    public void setLms_its_reqs(Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs) {
        this.lms_its_reqs = lms_its_reqs;
    }

}
