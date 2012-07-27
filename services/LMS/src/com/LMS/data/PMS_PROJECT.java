
package com.LMS.data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_PROJECT
 *  07/26/2555 21:35:21
 * 
 */
public class PMS_PROJECT {

    private Integer PROJECT_ID;
    private String PROJECT_NAME;
    private String PROJECT_GOAL;
    private Integer OWNER_EMPNO;
    private Date STARTDATE;
    private Date FINISHDATE;
    private Float PROGRESS;
    private String OTHER_DETAILS;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private BigDecimal BUDGET;
    private String PM;
    private String PROJECT_SITE;
    private Boolean ISACTIVE;
    private PMS_PROJECT_STATUS REL_PROJECT_STATUS;
    private PMS_R_PRIORITY REL_PROJECT_PRIORITY;
    private Set<com.LMS.data.PMS_PROJECT_MEMBER> pms_project_members = new HashSet<com.LMS.data.PMS_PROJECT_MEMBER>();
    private Set<com.LMS.data.PMS_TASK> pms_tasks = new HashSet<com.LMS.data.PMS_TASK>();
    private Set<com.LMS.data.PMS_PROJECT_ATTACHMENT> pms_project_attachments = new HashSet<com.LMS.data.PMS_PROJECT_ATTACHMENT>();

    public Integer getPROJECT_ID() {
        return PROJECT_ID;
    }

    public void setPROJECT_ID(Integer PROJECT_ID) {
        this.PROJECT_ID = PROJECT_ID;
    }

    public String getPROJECT_NAME() {
        return PROJECT_NAME;
    }

    public void setPROJECT_NAME(String PROJECT_NAME) {
        this.PROJECT_NAME = PROJECT_NAME;
    }

    public String getPROJECT_GOAL() {
        return PROJECT_GOAL;
    }

    public void setPROJECT_GOAL(String PROJECT_GOAL) {
        this.PROJECT_GOAL = PROJECT_GOAL;
    }

    public Integer getOWNER_EMPNO() {
        return OWNER_EMPNO;
    }

    public void setOWNER_EMPNO(Integer OWNER_EMPNO) {
        this.OWNER_EMPNO = OWNER_EMPNO;
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

    public Float getPROGRESS() {
        return PROGRESS;
    }

    public void setPROGRESS(Float PROGRESS) {
        this.PROGRESS = PROGRESS;
    }

    public String getOTHER_DETAILS() {
        return OTHER_DETAILS;
    }

    public void setOTHER_DETAILS(String OTHER_DETAILS) {
        this.OTHER_DETAILS = OTHER_DETAILS;
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

    public BigDecimal getBUDGET() {
        return BUDGET;
    }

    public void setBUDGET(BigDecimal BUDGET) {
        this.BUDGET = BUDGET;
    }

    public String getPM() {
        return PM;
    }

    public void setPM(String PM) {
        this.PM = PM;
    }

    public String getPROJECT_SITE() {
        return PROJECT_SITE;
    }

    public void setPROJECT_SITE(String PROJECT_SITE) {
        this.PROJECT_SITE = PROJECT_SITE;
    }

    public Boolean getISACTIVE() {
        return ISACTIVE;
    }

    public void setISACTIVE(Boolean ISACTIVE) {
        this.ISACTIVE = ISACTIVE;
    }

    public PMS_PROJECT_STATUS getREL_PROJECT_STATUS() {
        return REL_PROJECT_STATUS;
    }

    public void setREL_PROJECT_STATUS(PMS_PROJECT_STATUS REL_PROJECT_STATUS) {
        this.REL_PROJECT_STATUS = REL_PROJECT_STATUS;
    }

    public PMS_R_PRIORITY getREL_PROJECT_PRIORITY() {
        return REL_PROJECT_PRIORITY;
    }

    public void setREL_PROJECT_PRIORITY(PMS_R_PRIORITY REL_PROJECT_PRIORITY) {
        this.REL_PROJECT_PRIORITY = REL_PROJECT_PRIORITY;
    }

    public Set<com.LMS.data.PMS_PROJECT_MEMBER> getPms_project_members() {
        return pms_project_members;
    }

    public void setPms_project_members(Set<com.LMS.data.PMS_PROJECT_MEMBER> pms_project_members) {
        this.pms_project_members = pms_project_members;
    }

    public Set<com.LMS.data.PMS_TASK> getPms_tasks() {
        return pms_tasks;
    }

    public void setPms_tasks(Set<com.LMS.data.PMS_TASK> pms_tasks) {
        this.pms_tasks = pms_tasks;
    }

    public Set<com.LMS.data.PMS_PROJECT_ATTACHMENT> getPms_project_attachments() {
        return pms_project_attachments;
    }

    public void setPms_project_attachments(Set<com.LMS.data.PMS_PROJECT_ATTACHMENT> pms_project_attachments) {
        this.pms_project_attachments = pms_project_attachments;
    }

}
