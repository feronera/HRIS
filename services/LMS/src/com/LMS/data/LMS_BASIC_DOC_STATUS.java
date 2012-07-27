
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_BASIC_DOC_STATUS
 *  07/26/2555 21:35:20
 * 
 */
public class LMS_BASIC_DOC_STATUS {

    private Integer DOCSTATUSID;
    private String STATUSNAME;
    private String DESC;
    private Set<com.LMS.data.LMS_BASIC_DOC> lms_basic_docs = new HashSet<com.LMS.data.LMS_BASIC_DOC>();
    private Set<com.LMS.data.LMS_PLAN_DOC> lms_plan_docs = new HashSet<com.LMS.data.LMS_PLAN_DOC>();

    public Integer getDOCSTATUSID() {
        return DOCSTATUSID;
    }

    public void setDOCSTATUSID(Integer DOCSTATUSID) {
        this.DOCSTATUSID = DOCSTATUSID;
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

    public Set<com.LMS.data.LMS_BASIC_DOC> getLms_basic_docs() {
        return lms_basic_docs;
    }

    public void setLms_basic_docs(Set<com.LMS.data.LMS_BASIC_DOC> lms_basic_docs) {
        this.lms_basic_docs = lms_basic_docs;
    }

    public Set<com.LMS.data.LMS_PLAN_DOC> getLms_plan_docs() {
        return lms_plan_docs;
    }

    public void setLms_plan_docs(Set<com.LMS.data.LMS_PLAN_DOC> lms_plan_docs) {
        this.lms_plan_docs = lms_plan_docs;
    }

}
