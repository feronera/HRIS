
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_ITS_REQ_STATUS
 *  07/26/2555 21:35:20
 * 
 */
public class LMS_ITS_REQ_STATUS {

    private Integer ITS_REQ_STATUS_ID;
    private String REQ_STATUS_NAME;
    private String REQ_STATUS_DESC;
    private Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs = new HashSet<com.LMS.data.LMS_ITS_REQ>();

    public Integer getITS_REQ_STATUS_ID() {
        return ITS_REQ_STATUS_ID;
    }

    public void setITS_REQ_STATUS_ID(Integer ITS_REQ_STATUS_ID) {
        this.ITS_REQ_STATUS_ID = ITS_REQ_STATUS_ID;
    }

    public String getREQ_STATUS_NAME() {
        return REQ_STATUS_NAME;
    }

    public void setREQ_STATUS_NAME(String REQ_STATUS_NAME) {
        this.REQ_STATUS_NAME = REQ_STATUS_NAME;
    }

    public String getREQ_STATUS_DESC() {
        return REQ_STATUS_DESC;
    }

    public void setREQ_STATUS_DESC(String REQ_STATUS_DESC) {
        this.REQ_STATUS_DESC = REQ_STATUS_DESC;
    }

    public Set<com.LMS.data.LMS_ITS_REQ> getLms_its_reqs() {
        return lms_its_reqs;
    }

    public void setLms_its_reqs(Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs) {
        this.lms_its_reqs = lms_its_reqs;
    }

}
