
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_ITS_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class LMS_ITS_STATUS {

    private Integer ITS_STATUS_ID;
    private String STATUSNAME;
    private String DESC;
    private Set<com.LMS.data.LMS_ITS> lms_itss = new HashSet<com.LMS.data.LMS_ITS>();

    public Integer getITS_STATUS_ID() {
        return ITS_STATUS_ID;
    }

    public void setITS_STATUS_ID(Integer ITS_STATUS_ID) {
        this.ITS_STATUS_ID = ITS_STATUS_ID;
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

    public Set<com.LMS.data.LMS_ITS> getLms_itss() {
        return lms_itss;
    }

    public void setLms_itss(Set<com.LMS.data.LMS_ITS> lms_itss) {
        this.lms_itss = lms_itss;
    }

}
