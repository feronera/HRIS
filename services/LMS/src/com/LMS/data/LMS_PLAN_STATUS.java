
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_PLAN_STATUS
 *  07/30/2555 19:20:05
 * 
 */
public class LMS_PLAN_STATUS {

    private Integer PLANSTATUSID;
    private String STATUSNAME;
    private String DESC;
    private Set<com.LMS.data.LMS_PLAN> lms_plans = new HashSet<com.LMS.data.LMS_PLAN>();

    public Integer getPLANSTATUSID() {
        return PLANSTATUSID;
    }

    public void setPLANSTATUSID(Integer PLANSTATUSID) {
        this.PLANSTATUSID = PLANSTATUSID;
    }

    public String getSTATUSNAME() {
        return STATUSNAME;
    }

    public void setSTATUSNAME(String STATUSNAME) {
        this.STATUSNAME = STATUSNAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.LMS_PLAN> getLms_plans() {
        return lms_plans;
    }

    public void setLms_plans(Set<com.LMS.data.LMS_PLAN> lms_plans) {
        this.lms_plans = lms_plans;
    }

}
