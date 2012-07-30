
package com.LMS.data;

import java.util.Currency;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PMS_PROJECT_MEMBER
 *  07/29/2555 15:37:25
 * 
 */
public class PMS_PROJECT_MEMBER {

    private Integer PJ_MEMBER_ID;
    private Integer EMP_ID;
    private Date JOINTS;
    private Date DISJOINTS;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Boolean ISACTIVE;
    private Currency COST_MANDAY;
    private String NOTE;
    private String PROJECTROLE;
    private PMS_PROJECT_MEMBER_STATUS REL_PMS_MEMBER_STATUS;
    private PMS_PROJECT_MEMBER_POSITION REL_PROJECT_POS;
    private PMS_PROJECT REL_PROJECT;
    private Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> pms_project_member_tasks = new HashSet<com.LMS.data.PMS_PROJECT_MEMBER_TASK>();

    public Integer getPJ_MEMBER_ID() {
        return PJ_MEMBER_ID;
    }

    public void setPJ_MEMBER_ID(Integer PJ_MEMBER_ID) {
        this.PJ_MEMBER_ID = PJ_MEMBER_ID;
    }

    public Integer getEMP_ID() {
        return EMP_ID;
    }

    public void setEMP_ID(Integer EMP_ID) {
        this.EMP_ID = EMP_ID;
    }

    public Date getJOINTS() {
        return JOINTS;
    }

    public void setJOINTS(Date JOINTS) {
        this.JOINTS = JOINTS;
    }

    public Date getDISJOINTS() {
        return DISJOINTS;
    }

    public void setDISJOINTS(Date DISJOINTS) {
        this.DISJOINTS = DISJOINTS;
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

    public Boolean getISACTIVE() {
        return ISACTIVE;
    }

    public void setISACTIVE(Boolean ISACTIVE) {
        this.ISACTIVE = ISACTIVE;
    }

    public Currency getCOST_MANDAY() {
        return COST_MANDAY;
    }

    public void setCOST_MANDAY(Currency COST_MANDAY) {
        this.COST_MANDAY = COST_MANDAY;
    }

    public String getNOTE() {
        return NOTE;
    }

    public void setNOTE(String NOTE) {
        this.NOTE = NOTE;
    }

    public String getPROJECTROLE() {
        return PROJECTROLE;
    }

    public void setPROJECTROLE(String PROJECTROLE) {
        this.PROJECTROLE = PROJECTROLE;
    }

    public PMS_PROJECT_MEMBER_STATUS getREL_PMS_MEMBER_STATUS() {
        return REL_PMS_MEMBER_STATUS;
    }

    public void setREL_PMS_MEMBER_STATUS(PMS_PROJECT_MEMBER_STATUS REL_PMS_MEMBER_STATUS) {
        this.REL_PMS_MEMBER_STATUS = REL_PMS_MEMBER_STATUS;
    }

    public PMS_PROJECT_MEMBER_POSITION getREL_PROJECT_POS() {
        return REL_PROJECT_POS;
    }

    public void setREL_PROJECT_POS(PMS_PROJECT_MEMBER_POSITION REL_PROJECT_POS) {
        this.REL_PROJECT_POS = REL_PROJECT_POS;
    }

    public PMS_PROJECT getREL_PROJECT() {
        return REL_PROJECT;
    }

    public void setREL_PROJECT(PMS_PROJECT REL_PROJECT) {
        this.REL_PROJECT = REL_PROJECT;
    }

    public Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> getPms_project_member_tasks() {
        return pms_project_member_tasks;
    }

    public void setPms_project_member_tasks(Set<com.LMS.data.PMS_PROJECT_MEMBER_TASK> pms_project_member_tasks) {
        this.pms_project_member_tasks = pms_project_member_tasks;
    }

}
