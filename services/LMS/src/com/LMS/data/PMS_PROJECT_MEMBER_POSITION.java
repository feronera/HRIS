
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_PROJECT_MEMBER_POSITION
 *  07/26/2555 21:35:19
 * 
 */
public class PMS_PROJECT_MEMBER_POSITION {

    private Integer PROJ_MEMBER_POS_ID;
    private String POS_NAME;
    private String DESC;
    private String PMS_POS_CODE;
    private Set<com.LMS.data.PMS_PROJECT_MEMBER> pms_project_members = new HashSet<com.LMS.data.PMS_PROJECT_MEMBER>();

    public Integer getPROJ_MEMBER_POS_ID() {
        return PROJ_MEMBER_POS_ID;
    }

    public void setPROJ_MEMBER_POS_ID(Integer PROJ_MEMBER_POS_ID) {
        this.PROJ_MEMBER_POS_ID = PROJ_MEMBER_POS_ID;
    }

    public String getPOS_NAME() {
        return POS_NAME;
    }

    public void setPOS_NAME(String POS_NAME) {
        this.POS_NAME = POS_NAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public String getPMS_POS_CODE() {
        return PMS_POS_CODE;
    }

    public void setPMS_POS_CODE(String PMS_POS_CODE) {
        this.PMS_POS_CODE = PMS_POS_CODE;
    }

    public Set<com.LMS.data.PMS_PROJECT_MEMBER> getPms_project_members() {
        return pms_project_members;
    }

    public void setPms_project_members(Set<com.LMS.data.PMS_PROJECT_MEMBER> pms_project_members) {
        this.pms_project_members = pms_project_members;
    }

}
