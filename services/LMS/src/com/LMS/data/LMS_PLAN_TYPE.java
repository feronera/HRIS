
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_PLAN_TYPE
 *  07/26/2555 21:35:19
 * 
 */
public class LMS_PLAN_TYPE {

    private Integer PLANTYPEID;
    private String PLANTYPENAME;
    private String DESC;
    private Set<com.LMS.data.LMS_PLAN> lms_plans = new HashSet<com.LMS.data.LMS_PLAN>();

    public Integer getPLANTYPEID() {
        return PLANTYPEID;
    }

    public void setPLANTYPEID(Integer PLANTYPEID) {
        this.PLANTYPEID = PLANTYPEID;
    }

    public String getPLANTYPENAME() {
        return PLANTYPENAME;
    }

    public void setPLANTYPENAME(String PLANTYPENAME) {
        this.PLANTYPENAME = PLANTYPENAME;
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
