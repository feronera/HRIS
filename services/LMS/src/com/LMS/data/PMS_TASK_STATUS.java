
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_TASK_STATUS
 *  07/29/2555 15:37:25
 * 
 */
public class PMS_TASK_STATUS {

    private Integer TASK_STATUS_ID;
    private String TASK_STATUS_NAME;
    private String DESC;
    private Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> pms_project_member_tasks = new HashSet<com.LMS.data.PMS_PROJECT_MEMBER_TASK>();
    private Set<com.LMS.data.PMS_TASK> pms_tasks = new HashSet<com.LMS.data.PMS_TASK>();

    public Integer getTASK_STATUS_ID() {
        return TASK_STATUS_ID;
    }

    public void setTASK_STATUS_ID(Integer TASK_STATUS_ID) {
        this.TASK_STATUS_ID = TASK_STATUS_ID;
    }

    public String getTASK_STATUS_NAME() {
        return TASK_STATUS_NAME;
    }

    public void setTASK_STATUS_NAME(String TASK_STATUS_NAME) {
        this.TASK_STATUS_NAME = TASK_STATUS_NAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> getPms_project_member_tasks() {
        return pms_project_member_tasks;
    }

    public void setPms_project_member_tasks(Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> pms_project_member_tasks) {
        this.pms_project_member_tasks = pms_project_member_tasks;
    }

    public Set<com.LMS.data.PMS_TASK> getPms_tasks() {
        return pms_tasks;
    }

    public void setPms_tasks(Set<com.LMS.data.PMS_TASK> pms_tasks) {
        this.pms_tasks = pms_tasks;
    }

}
