
package com.LMS.data;

import java.math.BigInteger;
import java.util.Date;


/**
 *  LMS.HR_LEAVE_REQ
 *  07/29/2555 15:37:25
 * 
 */
public class HR_LEAVE_REQ {

    private BigInteger LEAVEREQID;
    private Date STARTDATE;
    private Date FINISHDATE;
    private String CONTACTADDRESS;
    private String MEMO;
    private Boolean ISAPPROVE;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Integer TOTALLEAVEDAY;
    private Integer LEAVER_PIM02;
    private R_LEAVETYPE REL_LEAVETYPE;
    private R_LEAVETIMETYPE REL_LEAVETIMETYPE;
    private HR_LEAVE_REQ_STATUS REL_LEAVEREQSTATUS;
    private com.LMS.data.PIM_01_GENERAL REL_LEAVER_PIM01;
    private com.LMS.data.PIM_01_GENERAL REL_APPROVER_PIM01;

    public BigInteger getLEAVEREQID() {
        return LEAVEREQID;
    }

    public void setLEAVEREQID(BigInteger LEAVEREQID) {
        this.LEAVEREQID = LEAVEREQID;
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

    public String getCONTACTADDRESS() {
        return CONTACTADDRESS;
    }

    public void setCONTACTADDRESS(String CONTACTADDRESS) {
        this.CONTACTADDRESS = CONTACTADDRESS;
    }

    public String getMEMO() {
        return MEMO;
    }

    public void setMEMO(String MEMO) {
        this.MEMO = MEMO;
    }

    public Boolean getISAPPROVE() {
        return ISAPPROVE;
    }

    public void setISAPPROVE(Boolean ISAPPROVE) {
        this.ISAPPROVE = ISAPPROVE;
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

    public Integer getTOTALLEAVEDAY() {
        return TOTALLEAVEDAY;
    }

    public void setTOTALLEAVEDAY(Integer TOTALLEAVEDAY) {
        this.TOTALLEAVEDAY = TOTALLEAVEDAY;
    }

    public Integer getLEAVER_PIM02() {
        return LEAVER_PIM02;
    }

    public void setLEAVER_PIM02(Integer LEAVER_PIM02) {
        this.LEAVER_PIM02 = LEAVER_PIM02;
    }

    public R_LEAVETYPE getREL_LEAVETYPE() {
        return REL_LEAVETYPE;
    }

    public void setREL_LEAVETYPE(R_LEAVETYPE REL_LEAVETYPE) {
        this.REL_LEAVETYPE = REL_LEAVETYPE;
    }

    public R_LEAVETIMETYPE getREL_LEAVETIMETYPE() {
        return REL_LEAVETIMETYPE;
    }

    public void setREL_LEAVETIMETYPE(R_LEAVETIMETYPE REL_LEAVETIMETYPE) {
        this.REL_LEAVETIMETYPE = REL_LEAVETIMETYPE;
    }

    public HR_LEAVE_REQ_STATUS getREL_LEAVEREQSTATUS() {
        return REL_LEAVEREQSTATUS;
    }

    public void setREL_LEAVEREQSTATUS(HR_LEAVE_REQ_STATUS REL_LEAVEREQSTATUS) {
        this.REL_LEAVEREQSTATUS = REL_LEAVEREQSTATUS;
    }

    public com.LMS.data.PIM_01_GENERAL getREL_LEAVER_PIM01() {
        return REL_LEAVER_PIM01;
    }

    public void setREL_LEAVER_PIM01(com.LMS.data.PIM_01_GENERAL REL_LEAVER_PIM01) {
        this.REL_LEAVER_PIM01 = REL_LEAVER_PIM01;
    }

    public com.LMS.data.PIM_01_GENERAL getREL_APPROVER_PIM01() {
        return REL_APPROVER_PIM01;
    }

    public void setREL_APPROVER_PIM01(com.LMS.data.PIM_01_GENERAL REL_APPROVER_PIM01) {
        this.REL_APPROVER_PIM01 = REL_APPROVER_PIM01;
    }

}
