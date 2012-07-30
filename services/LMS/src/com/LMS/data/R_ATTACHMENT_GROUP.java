
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_ATTACHMENT_GROUP
 *  07/30/2555 19:20:05
 * 
 */
public class R_ATTACHMENT_GROUP {

    private Integer ATTACHMENT_GROUP_ID;
    private String GROUPNAME;
    private String DESC;
    private Set<com.LMS.data.PMS_PROJECT_ATTACHMENT> pms_project_attachments = new HashSet<com.LMS.data.PMS_PROJECT_ATTACHMENT>();
    private Set<com.LMS.data.PMS_TASK_ATTACHMENT> pms_task_attachments = new HashSet<com.LMS.data.PMS_TASK_ATTACHMENT>();

    public Integer getATTACHMENT_GROUP_ID() {
        return ATTACHMENT_GROUP_ID;
    }

    public void setATTACHMENT_GROUP_ID(Integer ATTACHMENT_GROUP_ID) {
        this.ATTACHMENT_GROUP_ID = ATTACHMENT_GROUP_ID;
    }

    public String getGROUPNAME() {
        return GROUPNAME;
    }

    public void setGROUPNAME(String GROUPNAME) {
        this.GROUPNAME = GROUPNAME;
    }

    public String getDESC() {
        return DESC;
    }

    public void setDESC(String DESC) {
        this.DESC = DESC;
    }

    public Set<com.LMS.data.PMS_PROJECT_ATTACHMENT> getPms_project_attachments() {
        return pms_project_attachments;
    }

    public void setPms_project_attachments(Set<com.LMS.data.PMS_PROJECT_ATTACHMENT> pms_project_attachments) {
        this.pms_project_attachments = pms_project_attachments;
    }

    public Set<com.LMS.data.PMS_TASK_ATTACHMENT> getPms_task_attachments() {
        return pms_task_attachments;
    }

    public void setPms_task_attachments(Set<com.LMS.data.PMS_TASK_ATTACHMENT> pms_task_attachments) {
        this.pms_task_attachments = pms_task_attachments;
    }

}
