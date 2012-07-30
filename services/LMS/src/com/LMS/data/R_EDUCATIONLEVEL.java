
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_EDUCATIONLEVEL
 *  07/29/2555 15:37:25
 * 
 */
public class R_EDUCATIONLEVEL {

    private Integer EDUCATIONLEVELID;
    private String NAME;
    private Set<com.LMS.data.LMS_ITS> lms_itss = new HashSet<com.LMS.data.LMS_ITS>();
    private Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs = new HashSet<com.LMS.data.LMS_ITS_REQ>();

    public Integer getEDUCATIONLEVELID() {
        return EDUCATIONLEVELID;
    }

    public void setEDUCATIONLEVELID(Integer EDUCATIONLEVELID) {
        this.EDUCATIONLEVELID = EDUCATIONLEVELID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.LMS_ITS> getLms_itss() {
        return lms_itss;
    }

    public void setLms_itss(Set<com.LMS.data.LMS_ITS> lms_itss) {
        this.lms_itss = lms_itss;
    }

    public Set<com.LMS.data.LMS_ITS_REQ> getLms_its_reqs() {
        return lms_its_reqs;
    }

    public void setLms_its_reqs(Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs) {
        this.lms_its_reqs = lms_its_reqs;
    }

}
