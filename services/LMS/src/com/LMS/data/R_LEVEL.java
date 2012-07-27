
package com.LMS.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_LEVEL
 *  07/26/2555 21:35:20
 * 
 */
public class R_LEVEL {

    private Integer LEVEL_ID;
    private String NAME;
    private String ORDERDOCREF;
    private String ORDERNO;
    private Date ORDERDATE;
    private Date EFFECTIVEDATE;
    private Date CANCELDATE;
    private String MEMO;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private R_POSITION_TYPE REL_POSITION_TYPE;
    private R_LEVEL_STATUS REL_LEVEL_STATUS;
    private Set<com.LMS.data.POSITION_CHAIR> position_chairs = new HashSet<com.LMS.data.POSITION_CHAIR>();

    public Integer getLEVEL_ID() {
        return LEVEL_ID;
    }

    public void setLEVEL_ID(Integer LEVEL_ID) {
        this.LEVEL_ID = LEVEL_ID;
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

    public Date getEFFECTIVEDATE() {
        return EFFECTIVEDATE;
    }

    public void setEFFECTIVEDATE(Date EFFECTIVEDATE) {
        this.EFFECTIVEDATE = EFFECTIVEDATE;
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

    public R_POSITION_TYPE getREL_POSITION_TYPE() {
        return REL_POSITION_TYPE;
    }

    public void setREL_POSITION_TYPE(R_POSITION_TYPE REL_POSITION_TYPE) {
        this.REL_POSITION_TYPE = REL_POSITION_TYPE;
    }

    public R_LEVEL_STATUS getREL_LEVEL_STATUS() {
        return REL_LEVEL_STATUS;
    }

    public void setREL_LEVEL_STATUS(R_LEVEL_STATUS REL_LEVEL_STATUS) {
        this.REL_LEVEL_STATUS = REL_LEVEL_STATUS;
    }

    public Set<com.LMS.data.POSITION_CHAIR> getPosition_chairs() {
        return position_chairs;
    }

    public void setPosition_chairs(Set<com.LMS.data.POSITION_CHAIR> position_chairs) {
        this.position_chairs = position_chairs;
    }

}
