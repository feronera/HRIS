
package com.LMS.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_POSITION_TYPE
 *  07/29/2555 15:37:25
 * 
 */
public class R_POSITION_TYPE {

    private Integer POSITION_TYPE_ID;
    private String NAME;
    private String ORDERSOURCE;
    private Date ORDERDATE;
    private String ORDERNO;
    private Date EFFECTIVEDATE;
    private Date CANCELDATE;
    private String MEMO;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private R_POSITION_TYPE_STATUS REL_POSITION_TYPE_STATUS;
    private Set<com.LMS.data.R_LEVEL> r_levels = new HashSet<com.LMS.data.R_LEVEL>();
    private Set<com.LMS.data.POSITION_CHAIR> position_chairs = new HashSet<com.LMS.data.POSITION_CHAIR>();

    public Integer getPOSITION_TYPE_ID() {
        return POSITION_TYPE_ID;
    }

    public void setPOSITION_TYPE_ID(Integer POSITION_TYPE_ID) {
        this.POSITION_TYPE_ID = POSITION_TYPE_ID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getORDERSOURCE() {
        return ORDERSOURCE;
    }

    public void setORDERSOURCE(String ORDERSOURCE) {
        this.ORDERSOURCE = ORDERSOURCE;
    }

    public Date getORDERDATE() {
        return ORDERDATE;
    }

    public void setORDERDATE(Date ORDERDATE) {
        this.ORDERDATE = ORDERDATE;
    }

    public String getORDERNO() {
        return ORDERNO;
    }

    public void setORDERNO(String ORDERNO) {
        this.ORDERNO = ORDERNO;
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

    public R_POSITION_TYPE_STATUS getREL_POSITION_TYPE_STATUS() {
        return REL_POSITION_TYPE_STATUS;
    }

    public void setREL_POSITION_TYPE_STATUS(R_POSITION_TYPE_STATUS REL_POSITION_TYPE_STATUS) {
        this.REL_POSITION_TYPE_STATUS = REL_POSITION_TYPE_STATUS;
    }

    public Set<com.LMS.data.R_LEVEL> getR_levels() {
        return r_levels;
    }

    public void setR_levels(Set<com.LMS.data.R_LEVEL> r_levels) {
        this.r_levels = r_levels;
    }

    public Set<com.LMS.data.POSITION_CHAIR> getPosition_chairs() {
        return position_chairs;
    }

    public void setPosition_chairs(Set<com.LMS.data.POSITION_CHAIR> position_chairs) {
        this.position_chairs = position_chairs;
    }

}
