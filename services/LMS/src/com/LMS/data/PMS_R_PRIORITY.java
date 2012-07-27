
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_R_PRIORITY
 *  07/26/2555 21:35:19
 * 
 */
public class PMS_R_PRIORITY {

    private Integer PRIORITY_ID;
    private String PRIORITY_TITLE;
    private String DESC;
    private Set<com.LMS.data.PMS_TASK> pms_tasks = new HashSet<com.LMS.data.PMS_TASK>();
    private Set<com.LMS.data.PMS_PROJECT> pms_projects = new HashSet<com.LMS.data.PMS_PROJECT>();

    public Integer getPRIORITY_ID() {
        return PRIORITY_ID;
    }

    public void setPRIORITY_ID(Integer PRIORITY_ID) {
        this.PRIORITY_ID = PRIORITY_ID;
    }

    public String getPRIORITY_TITLE() {
        return PRIORITY_TITLE;
    }

    public void setPRIORITY_TITLE(String PRIORITY_TITLE) {
        this.PRIORITY_TITLE = PRIORITY_TITLE;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.PMS_TASK> getPms_tasks() {
        return pms_tasks;
    }

    public void setPms_tasks(Set<com.LMS.data.PMS_TASK> pms_tasks) {
        this.pms_tasks = pms_tasks;
    }

    public Set<com.LMS.data.PMS_PROJECT> getPms_projects() {
        return pms_projects;
    }

    public void setPms_projects(Set<com.LMS.data.PMS_PROJECT> pms_projects) {
        this.pms_projects = pms_projects;
    }

}
