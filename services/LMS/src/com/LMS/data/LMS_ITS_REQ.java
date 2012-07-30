
package com.LMS.data;

import java.util.Date;


/**
 *  LMS.LMS_ITS_REQ
 *  07/29/2555 15:37:26
 * 
 */
public class LMS_ITS_REQ {

    private Integer ITS_REQ_ID;
    private String MEMO;
    private Integer REQUESTOR_ID;
    private Integer REQ_AMOUNT;
    private String REQ_REASON;
    private Date REQ_TS;
    private Integer UPDATEBY_ID;
    private Date UPDATE_TS;
    private Integer CREATEBY_ID;
    private Date CREATE_TS;
    private R_EDUCATIONLEVEL REL_EDUCATIONLEVEL;
    private LMS_ITS_ABILITY REL_ITS_ABILITY;
    private R_UNIT REL_UNIT;
    private LMS_ITS_INTERNPERIOD REL_INTERNPERIOD;
    private LMS_ITS_REQ_STATUS REL_REQ_STATUS;

    public Integer getITS_REQ_ID() {
        return ITS_REQ_ID;
    }

    public void setITS_REQ_ID(Integer ITS_REQ_ID) {
        this.ITS_REQ_ID = ITS_REQ_ID;
    }

    public String getMEMO() {
        return MEMO;
    }

    public void setMEMO(String MEMO) {
        this.MEMO = MEMO;
    }

    public Integer getREQUESTOR_ID() {
        return REQUESTOR_ID;
    }

    public void setREQUESTOR_ID(Integer REQUESTOR_ID) {
        this.REQUESTOR_ID = REQUESTOR_ID;
    }

    public Integer getREQ_AMOUNT() {
        return REQ_AMOUNT;
    }

    public void setREQ_AMOUNT(Integer REQ_AMOUNT) {
        this.REQ_AMOUNT = REQ_AMOUNT;
    }

    public String getREQ_REASON() {
        return REQ_REASON;
    }

    public void setREQ_REASON(String REQ_REASON) {
        this.REQ_REASON = REQ_REASON;
    }

    public Date getREQ_TS() {
        return REQ_TS;
    }

    public void setREQ_TS(Date REQ_TS) {
        this.REQ_TS = REQ_TS;
    }

    public Integer getUPDATEBY_ID() {
        return UPDATEBY_ID;
    }

    public void setUPDATEBY_ID(Integer UPDATEBY_ID) {
        this.UPDATEBY_ID = UPDATEBY_ID;
    }

    public Date getUPDATE_TS() {
        return UPDATE_TS;
    }

    public void setUPDATE_TS(Date UPDATE_TS) {
        this.UPDATE_TS = UPDATE_TS;
    }

    public Integer getCREATEBY_ID() {
        return CREATEBY_ID;
    }

    public void setCREATEBY_ID(Integer CREATEBY_ID) {
        this.CREATEBY_ID = CREATEBY_ID;
    }

    public Date getCREATE_TS() {
        return CREATE_TS;
    }

    public void setCREATE_TS(Date CREATE_TS) {
        this.CREATE_TS = CREATE_TS;
    }

    public R_EDUCATIONLEVEL getREL_EDUCATIONLEVEL() {
        return REL_EDUCATIONLEVEL;
    }

    public void setREL_EDUCATIONLEVEL(R_EDUCATIONLEVEL REL_EDUCATIONLEVEL) {
        this.REL_EDUCATIONLEVEL = REL_EDUCATIONLEVEL;
    }

    public LMS_ITS_ABILITY getREL_ITS_ABILITY() {
        return REL_ITS_ABILITY;
    }

    public void setREL_ITS_ABILITY(LMS_ITS_ABILITY REL_ITS_ABILITY) {
        this.REL_ITS_ABILITY = REL_ITS_ABILITY;
    }

    public R_UNIT getREL_UNIT() {
        return REL_UNIT;
    }

    public void setREL_UNIT(R_UNIT REL_UNIT) {
        this.REL_UNIT = REL_UNIT;
    }

    public LMS_ITS_INTERNPERIOD getREL_INTERNPERIOD() {
        return REL_INTERNPERIOD;
    }

    public void setREL_INTERNPERIOD(LMS_ITS_INTERNPERIOD REL_INTERNPERIOD) {
        this.REL_INTERNPERIOD = REL_INTERNPERIOD;
    }

    public LMS_ITS_REQ_STATUS getREL_REQ_STATUS() {
        return REL_REQ_STATUS;
    }

    public void setREL_REQ_STATUS(LMS_ITS_REQ_STATUS REL_REQ_STATUS) {
        this.REL_REQ_STATUS = REL_REQ_STATUS;
    }

}
