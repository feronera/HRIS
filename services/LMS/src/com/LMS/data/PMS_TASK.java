
package com.LMS.data;

import java.util.Currency;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_TASK
 *  07/26/2555 21:35:20
 * 
 */
public class PMS_TASK {

    private Integer TASKID;
    private String TASK_NAME;
    private String TASK_GOAL;
    private String NOTE;
    private Boolean ISMILESTONE;
    private Integer PROGRESS;
    private Currency COST_BASELINE;
    private Currency COST_TOTAL;
    private Date STARTDATE;
    private Date FINISHDATE;
    private Date DEADLINEDATE;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Integer ISACTIVE;
    private PMS_TASK_STATUS REL_PMS_TASK_STATUS;
    private PMS_R_PRIORITY REL_R_PRIORITY;
    private PMS_PROJECT REL_PROJECT_ID;
    private Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> pms_project_member_tasks = new HashSet<com.LMS.data.PMS_PROJECT_MEMBER_TASK>();
    private Set<com.LMS.data.PMS_TASK_ATTACHMENT> pms_task_attachments = new HashSet<com.LMS.data.PMS_TASK_ATTACHMENT>();

    public Integer getTASKID() {
        return TASKID;
    }

    public void setTASKID(Integer TASKID) {
        this.TASKID = TASKID;
    }

    public String getTASK_NAME() {
        return TASK_NAME;
    }

    public void setTASK_NAME(String TASK_NAME) {
        this.TASK_NAME = TASK_NAME;
    }

    public String getTASK_GOAL() {
        return TASK_GOAL;
    }

    public void setTASK_GOAL(String TASK_GOAL) {
        this.TASK_GOAL = TASK_GOAL;
    }

    public String getNOTE() {
        return NOTE;
    }

    public void setNOTE(String NOTE) {
        this.NOTE = NOTE;
    }

    public Boolean getISMILESTONE() {
        return ISMILESTONE;
    }

    public void setISMILESTONE(Boolean ISMILESTONE) {
        this.ISMILESTONE = ISMILESTONE;
    }

    public Integer getPROGRESS() {
        return PROGRESS;
    }

    public void setPROGRESS(Integer PROGRESS) {
        this.PROGRESS = PROGRESS;
    }

    public Currency getCOST_BASELINE() {
        return COST_BASELINE;
    }

    public void setCOST_BASELINE(Currency COST_BASELINE) {
        this.COST_BASELINE = COST_BASELINE;
    }

    public Currency getCOST_TOTAL() {
        return COST_TOTAL;
    }

    public void setCOST_TOTAL(Currency COST_TOTAL) {
        this.COST_TOTAL = COST_TOTAL;
    }

    public Date getSTARTDATE() {
        return STARTDATE;
    }

    public void setSTARTDATE(Date STARTDATE) {
        this.STARTDATE = STARTDATE;
    }

    public Date getFINISHDATE() {
        return FINISHDATE;
    }

    public void setFINISHDATE(Date FINISHDATE) {
        this.FINISHDATE = FINISHDATE;
    }

    public Date getDEADLINEDATE() {
        return DEADLINEDATE;
    }

    public void setDEADLINEDATE(Date DEADLINEDATE) {
        this.DEADLINEDATE = DEADLINEDATE;
    }

    public Integer getCREATEBYID() {
        return CREATEBYID;
    }

    public void setCREATEBYID(Integer CREATEBYID) {
        this.CREATEBYID = CREATEBYID;
    }

    public Date getCREATETS() {
        return CREATETS;
    }

    public void setCREATETS(Date CREATETS) {
        this.CREATETS = CREATETS;
    }

    public Integer getMODIFYBYID() {
        return MODIFYBYID;
    }

    public void setMODIFYBYID(Integer MODIFYBYID) {
        this.MODIFYBYID = MODIFYBYID;
    }

    public Date getMODIFYTS() {
        return MODIFYTS;
    }

    public void setMODIFYTS(Date MODIFYTS) {
        this.MODIFYTS = MODIFYTS;
    }

    public Integer getISACTIVE() {
        return ISACTIVE;
    }

    public void setISACTIVE(Integer ISACTIVE) {
        this.ISACTIVE = ISACTIVE;
    }

    public PMS_TASK_STATUS getREL_PMS_TASK_STATUS() {
        return REL_PMS_TASK_STATUS;
    }

    public void setREL_PMS_TASK_STATUS(PMS_TASK_STATUS REL_PMS_TASK_STATUS) {
        this.REL_PMS_TASK_STATUS = REL_PMS_TASK_STATUS;
    }

    public PMS_R_PRIORITY getREL_R_PRIORITY() {
        return REL_R_PRIORITY;
    }

    public void setREL_R_PRIORITY(PMS_R_PRIORITY REL_R_PRIORITY) {
        this.REL_R_PRIORITY = REL_R_PRIORITY;
    }

    public PMS_PROJECT getREL_PROJECT_ID() {
        return REL_PROJECT_ID;
    }

    public void setREL_PROJECT_ID(PMS_PROJECT REL_PROJECT_ID) {
        this.REL_PROJECT_ID = REL_PROJECT_ID;
    }

    public Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> getPms_project_member_tasks() {
        return pms_project_member_tasks;
    }

    public void setPms_project_member_tasks(Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> pms_project_member_tasks) {
        this.pms_project_member_tasks = pms_project_member_tasks;
    }

    public Set<com.LMS.data.PMS_TASK_ATTACHMENT> getPms_task_attachments() {
        return pms_task_attachments;
    }

    public void setPms_task_attachments(Set<com.LMS.data.PMS_TASK_ATTACHMENT> pms_task_attachments) {
        this.pms_task_attachments = pms_task_attachments;
    }

}
