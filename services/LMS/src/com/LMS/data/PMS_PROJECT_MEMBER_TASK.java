
package com.LMS.data;

import java.util.Date;


/**
 *  LMS.PMS_PROJECT_MEMBER_TASK
 *  07/29/2555 15:37:25
 * 
 */
public class PMS_PROJECT_MEMBER_TASK {

    private Integer MEMBER_TASK_ID;
    private Integer PROGRESS;
    private Date STARTDATE;
    private Date FINISHDATE;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Boolean ISACTIVE;
    private PMS_TASK REL_TASKID;
    private PMS_TASK_STATUS REL_TASK_STATUS;
    private PMS_PROJECT_MEMBER REL_PROJ_MEMBER_ID;

    public Integer getMEMBER_TASK_ID() {
        return MEMBER_TASK_ID;
    }

    public void setMEMBER_TASK_ID(Integer MEMBER_TASK_ID) {
        this.MEMBER_TASK_ID = MEMBER_TASK_ID;
    }

    public Integer getPROGRESS() {
        return PROGRESS;
    }

    public void setPROGRESS(Integer PROGRESS) {
        this.PROGRESS = PROGRESS;
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

    public PMS_TASK getREL_TASKID() {
        return REL_TASKID;
    }

    public void setREL_TASKID(PMS_TASK REL_TASKID) {
        this.REL_TASKID = REL_TASKID;
    }

    public PMS_TASK_STATUS getREL_TASK_STATUS() {
        return REL_TASK_STATUS;
    }

    public void setREL_TASK_STATUS(PMS_TASK_STATUS REL_TASK_STATUS) {
        this.REL_TASK_STATUS = REL_TASK_STATUS;
    }

    public PMS_PROJECT_MEMBER getREL_PROJ_MEMBER_ID() {
        return REL_PROJ_MEMBER_ID;
    }

    public void setREL_PROJ_MEMBER_ID(PMS_PROJECT_MEMBER REL_PROJ_MEMBER_ID) {
        this.REL_PROJ_MEMBER_ID = REL_PROJ_MEMBER_ID;
    }

}
