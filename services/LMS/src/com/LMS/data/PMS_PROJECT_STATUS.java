
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_PROJECT_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class PMS_PROJECT_STATUS {

    private Integer PROJECT_STATUS_ID;
    private String STATUS_NAME;
    private String DESC;
    private Set<com.LMS.data.PMS_PROJECT> pms_projects = new HashSet<com.LMS.data.PMS_PROJECT>();

    public Integer getPROJECT_STATUS_ID() {
        return PROJECT_STATUS_ID;
    }

    public void setPROJECT_STATUS_ID(Integer PROJECT_STATUS_ID) {
        this.PROJECT_STATUS_ID = PROJECT_STATUS_ID;
    }

    public String getSTATUS_NAME() {
        return STATUS_NAME;
    }

    public void setSTATUS_NAME(String STATUS_NAME) {
        this.STATUS_NAME = STATUS_NAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.PMS_PROJECT> getPms_projects() {
        return pms_projects;
    }

    public void setPms_projects(Set<com.LMS.data.PMS_PROJECT> pms_projects) {
        this.pms_projects = pms_projects;
    }

}
