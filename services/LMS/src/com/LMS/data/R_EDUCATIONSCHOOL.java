
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_EDUCATIONSCHOOL
 *  07/30/2555 19:20:06
 * 
 */
public class R_EDUCATIONSCHOOL {

    private Integer EDUCATIONSCHOOLID;
    private String NAME;
    private Set<com.LMS.data.LMS_ITS> lms_itss = new HashSet<com.LMS.data.LMS_ITS>();

    public Integer getEDUCATIONSCHOOLID() {
        return EDUCATIONSCHOOLID;
    }

    public void setEDUCATIONSCHOOLID(Integer EDUCATIONSCHOOLID) {
        this.EDUCATIONSCHOOLID = EDUCATIONSCHOOLID;
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

}
