
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_EDUCATIONMAJOR
 *  07/30/2555 19:20:06
 * 
 */
public class R_EDUCATIONMAJOR {

    private Integer EDUCATIONMAJORID;
    private String NAME;
    private Set<com.LMS.data.LMS_ITS> lms_itss = new HashSet<com.LMS.data.LMS_ITS>();

    public Integer getEDUCATIONMAJORID() {
        return EDUCATIONMAJORID;
    }

    public void setEDUCATIONMAJORID(Integer EDUCATIONMAJORID) {
        this.EDUCATIONMAJORID = EDUCATIONMAJORID;
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
