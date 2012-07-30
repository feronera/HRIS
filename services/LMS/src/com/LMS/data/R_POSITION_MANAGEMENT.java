
package com.LMS.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_POSITION_MANAGEMENT
 *  07/30/2555 19:20:05
 * 
 */
public class R_POSITION_MANAGEMENT {

    private Integer POSITION_MANAGEMENT_ID;
    private String NAME;
    private String ORDERDOCREF;
    private Date EFFECTIVEDATE;
    private String ORDERNO;
    private Date ORDERDATE;
    private Date CANCELDATE;
    private String MEMO;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private R_POSITION_MANAGEMENT_STATUS REL_POS_MNMT_STAT;
    private Set<com.LMS.data.POSITION_CHAIR> position_chairs = new HashSet<com.LMS.data.POSITION_CHAIR>();

    public Integer getPOSITION_MANAGEMENT_ID() {
        return POSITION_MANAGEMENT_ID;
    }

    public void setPOSITION_MANAGEMENT_ID(Integer POSITION_MANAGEMENT_ID) {
        this.POSITION_MANAGEMENT_ID = POSITION_MANAGEMENT_ID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getORDERDOCREF() {
        return ORDERDOCREF;
    }

    public void setORDERDOCREF(String ORDERDOCREF) {
        this.ORDERDOCREF = ORDERDOCREF;
    }

    public Date getEFFECTIVEDATE() {
        return EFFECTIVEDATE;
    }

    public void setEFFECTIVEDATE(Date EFFECTIVEDATE) {
        this.EFFECTIVEDATE = EFFECTIVEDATE;
    }

    public String getORDERNO() {
        return ORDERNO;
    }

    public void setORDERNO(String ORDERNO) {
        this.ORDERNO = ORDERNO;
    }

    public Date getORDERDATE() {
        return ORDERDATE;
    }

    public void setORDERDATE(Date ORDERDATE) {
        this.ORDERDATE = ORDERDATE;
    }

    public Date getCANCELDATE() {
        return CANCELDATE;
    }

    public void setCANCELDATE(Date CANCELDATE) {
        this.CANCELDATE = CANCELDATE;
    }

    public String getMEMO() {
        return MEMO;
    }

    public void setMEMO(String MEMO) {
        this.MEMO = MEMO;
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

    public R_POSITION_MANAGEMENT_STATUS getREL_POS_MNMT_STAT() {
        return REL_POS_MNMT_STAT;
    }

    public void setREL_POS_MNMT_STAT(R_POSITION_MANAGEMENT_STATUS REL_POS_MNMT_STAT) {
        this.REL_POS_MNMT_STAT = REL_POS_MNMT_STAT;
    }

    public Set<com.LMS.data.POSITION_CHAIR> getPosition_chairs() {
        return position_chairs;
    }

    public void setPosition_chairs(Set<com.LMS.data.POSITION_CHAIR> position_chairs) {
        this.position_chairs = position_chairs;
    }

}
