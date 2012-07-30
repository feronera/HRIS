
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_BASIC_DOC_TYPE
 *  07/30/2555 19:20:05
 * 
 */
public class LMS_BASIC_DOC_TYPE {

    private Integer DOCTYPEID;
    private String DOCTYPE;
    private String DESC;
    private Set<com.LMS.data.LMS_BASIC_DOC> lms_basic_docs = new HashSet<com.LMS.data.LMS_BASIC_DOC>();

    public Integer getDOCTYPEID() {
        return DOCTYPEID;
    }

    public void setDOCTYPEID(Integer DOCTYPEID) {
        this.DOCTYPEID = DOCTYPEID;
    }

    public String getDOCTYPE() {
        return DOCTYPE;
    }

    public void setDOCTYPE(String DOCTYPE) {
        this.DOCTYPE = DOCTYPE;
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

}
