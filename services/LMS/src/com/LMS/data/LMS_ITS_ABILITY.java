
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_ITS_ABILITY
 *  07/26/2555 21:35:19
 * 
 */
public class LMS_ITS_ABILITY {

    private Integer ITS_ABILITY_ID;
    private String ABILITY_NAME;
    private Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs = new HashSet<com.LMS.data.LMS_ITS_REQ>();

    public Integer getITS_ABILITY_ID() {
        return ITS_ABILITY_ID;
    }

    public void setITS_ABILITY_ID(Integer ITS_ABILITY_ID) {
        this.ITS_ABILITY_ID = ITS_ABILITY_ID;
    }

    public String getABILITY_NAME() {
        return ABILITY_NAME;
    }

    public void setABILITY_NAME(String ABILITY_NAME) {
        this.ABILITY_NAME = ABILITY_NAME;
    }

    public Set<com.LMS.data.LMS_ITS_REQ> getLms_its_reqs() {
        return lms_its_reqs;
    }

    public void setLms_its_reqs(Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs) {
        this.lms_its_reqs = lms_its_reqs;
    }

}
