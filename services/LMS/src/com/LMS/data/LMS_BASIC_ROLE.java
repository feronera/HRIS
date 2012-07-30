
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_BASIC_ROLE
 *  07/29/2555 15:37:25
 * 
 */
public class LMS_BASIC_ROLE {

    private Integer ROLEID;
    private String ROLETITLE;
    private String ROLECODE;
    private String DESC;
    private Set<com.LMS.data.LMS_BASIC_USER> lms_basic_users = new HashSet<com.LMS.data.LMS_BASIC_USER>();

    public Integer getROLEID() {
        return ROLEID;
    }

    public void setROLEID(Integer ROLEID) {
        this.ROLEID = ROLEID;
    }

    public String getROLETITLE() {
        return ROLETITLE;
    }

    public void setROLETITLE(String ROLETITLE) {
        this.ROLETITLE = ROLETITLE;
    }

    public String getROLECODE() {
        return ROLECODE;
    }

    public void setROLECODE(String ROLECODE) {
        this.ROLECODE = ROLECODE;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.LMS_BASIC_USER> getLms_basic_users() {
        return lms_basic_users;
    }

    public void setLms_basic_users(Set<com.LMS.data.LMS_BASIC_USER> lms_basic_users) {
        this.lms_basic_users = lms_basic_users;
    }

}
