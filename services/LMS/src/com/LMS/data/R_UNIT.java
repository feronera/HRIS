
package com.LMS.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_UNIT
 *  07/29/2555 15:37:25
 * 
 */
public class R_UNIT {

    private Integer UNIT_ID;
    private String UNIT_CODE;
    private String UNIT_NAME;
    private Date APPROVE_DATE;
    private Date AFFECTIVE_DATE;
    private String COMMENT;
    private String ORDER_NO;
    private Date ORDER_DATE;
    private Date CANCEL_DATE;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Integer CREATEBYID;
    private R_UNITTYPE REL_UNITTYPE;
    private R_UNIT_STATUS REL_UNIT_STATUS;
    private R_UNIT_REGION REL_UNIT_REGION;
    private R_UNIT_REFDOC REL_UNIT_REFDOC;
    private com.LMS.data.R_UNIT REL_UNIT_PARENT;
    private Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs = new HashSet<com.LMS.data.LMS_ITS_REQ>();
    private Set<com.LMS.data.R_UNIT> r_units = new HashSet<com.LMS.data.R_UNIT>();
    private Set<com.LMS.data.POSITION_CHAIR> position_chairs = new HashSet<com.LMS.data.POSITION_CHAIR>();

    public Integer getUNIT_ID() {
        return UNIT_ID;
    }

    public void setUNIT_ID(Integer UNIT_ID) {
        this.UNIT_ID = UNIT_ID;
    }

    public String getUNIT_CODE() {
        return UNIT_CODE;
    }

    public void setUNIT_CODE(String UNIT_CODE) {
        this.UNIT_CODE = UNIT_CODE;
    }

    public String getUNIT_NAME() {
        return UNIT_NAME;
    }

    public void setUNIT_NAME(String UNIT_NAME) {
        this.UNIT_NAME = UNIT_NAME;
    }

    public Date getAPPROVE_DATE() {
        return APPROVE_DATE;
    }

    public void setAPPROVE_DATE(Date APPROVE_DATE) {
        this.APPROVE_DATE = APPROVE_DATE;
    }

    public Date getAFFECTIVE_DATE() {
        return AFFECTIVE_DATE;
    }

    public void setAFFECTIVE_DATE(Date AFFECTIVE_DATE) {
        this.AFFECTIVE_DATE = AFFECTIVE_DATE;
    }

    public String getCOMMENT() {
        return COMMENT;
    }

    public void setCOMMENT(String COMMENT) {
        this.COMMENT = COMMENT;
    }

    public String getORDER_NO() {
        return ORDER_NO;
    }

    public void setORDER_NO(String ORDER_NO) {
        this.ORDER_NO = ORDER_NO;
    }

    public Date getORDER_DATE() {
        return ORDER_DATE;
    }

    public void setORDER_DATE(Date ORDER_DATE) {
        this.ORDER_DATE = ORDER_DATE;
    }

    public Date getCANCEL_DATE() {
        return CANCEL_DATE;
    }

    public void setCANCEL_DATE(Date CANCEL_DATE) {
        this.CANCEL_DATE = CANCEL_DATE;
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

    public Integer getCREATEBYID() {
        return CREATEBYID;
    }

    public void setCREATEBYID(Integer CREATEBYID) {
        this.CREATEBYID = CREATEBYID;
    }

    public R_UNITTYPE getREL_UNITTYPE() {
        return REL_UNITTYPE;
    }

    public void setREL_UNITTYPE(R_UNITTYPE REL_UNITTYPE) {
        this.REL_UNITTYPE = REL_UNITTYPE;
    }

    public R_UNIT_STATUS getREL_UNIT_STATUS() {
        return REL_UNIT_STATUS;
    }

    public void setREL_UNIT_STATUS(R_UNIT_STATUS REL_UNIT_STATUS) {
        this.REL_UNIT_STATUS = REL_UNIT_STATUS;
    }

    public R_UNIT_REGION getREL_UNIT_REGION() {
        return REL_UNIT_REGION;
    }

    public void setREL_UNIT_REGION(R_UNIT_REGION REL_UNIT_REGION) {
        this.REL_UNIT_REGION = REL_UNIT_REGION;
    }

    public R_UNIT_REFDOC getREL_UNIT_REFDOC() {
        return REL_UNIT_REFDOC;
    }

    public void setREL_UNIT_REFDOC(R_UNIT_REFDOC REL_UNIT_REFDOC) {
        this.REL_UNIT_REFDOC = REL_UNIT_REFDOC;
    }

    public com.LMS.data.R_UNIT getREL_UNIT_PARENT() {
        return REL_UNIT_PARENT;
    }

    public void setREL_UNIT_PARENT(com.LMS.data.R_UNIT REL_UNIT_PARENT) {
        this.REL_UNIT_PARENT = REL_UNIT_PARENT;
    }

    public Set<com.LMS.data.LMS_ITS_REQ> getLms_its_reqs() {
        return lms_its_reqs;
    }

    public void setLms_its_reqs(Set<com.LMS.data.LMS_ITS_REQ> lms_its_reqs) {
        this.lms_its_reqs = lms_its_reqs;
    }

    public Set<com.LMS.data.R_UNIT> getR_units() {
        return r_units;
    }

    public void setR_units(Set<com.LMS.data.R_UNIT> r_units) {
        this.r_units = r_units;
    }

    public Set<com.LMS.data.POSITION_CHAIR> getPosition_chairs() {
        return position_chairs;
    }

    public void setPosition_chairs(Set<com.LMS.data.POSITION_CHAIR> position_chairs) {
        this.position_chairs = position_chairs;
    }

}
