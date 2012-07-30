
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_PROJECT_MEMBER_STATUS
 *  07/30/2555 19:20:05
 * 
 */
public class PMS_PROJECT_MEMBER_STATUS {

    private Integer PMS_MEMBER_STATUS_ID;
    private String MEMBER_STATUS_NAME;
    private String DESC;
    private Set<com.LMS.data.PMS_PROJECT_MEMBER> pms_project_members = new HashSet<com.LMS.data.PMS_PROJECT_MEMBER>();

    public Integer getPMS_MEMBER_STATUS_ID() {
        return PMS_MEMBER_STATUS_ID;
    }

    public void setPMS_MEMBER_STATUS_ID(Integer PMS_MEMBER_STATUS_ID) {
        this.PMS_MEMBER_STATUS_ID = PMS_MEMBER_STATUS_ID;
    }

    public String getMEMBER_STATUS_NAME() {
        return MEMBER_STATUS_NAME;
    }

    public void setMEMBER_STATUS_NAME(String MEMBER_STATUS_NAME) {
        this.MEMBER_STATUS_NAME = MEMBER_STATUS_NAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.PMS_PROJECT_MEMBER> getPms_project_members() {
        return pms_project_members;
    }

    public void setPms_project_members(Set<com.LMS.data.PMS_PROJECT_MEMBER> pms_project_members) {
        this.pms_project_members = pms_project_members;
    }

}
