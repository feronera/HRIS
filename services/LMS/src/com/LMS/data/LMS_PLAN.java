
package com.LMS.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.LMS_PLAN
 *  07/26/2555 21:35:21
 * 
 */
public class LMS_PLAN {

    private Integer PLANID;
    private Integer YEAROFPLAN;
    private String PLANTITLE;
    private Integer APPROVEDBYID;
    private Date APPROVEDTS;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private String MEMO;
    private Boolean ISACTIVE;
    private LMS_PLAN_STATUS REL_PLAN_STATUS;
    private LMS_PLAN_TYPE REL_PLAN_TYPE;
    private Set<com.LMS.data.LMS_PLAN_DOC> REL_PLAN_DOC = new HashSet<com.LMS.data.LMS_PLAN_DOC>();

    public Integer getPLANID() {
        return PLANID;
    }

    public void setPLANID(Integer PLANID) {
        this.PLANID = PLANID;
    }

    public Integer getYEAROFPLAN() {
        return YEAROFPLAN;
    }

    public void setYEAROFPLAN(Integer YEAROFPLAN) {
        this.YEAROFPLAN = YEAROFPLAN;
    }

    public String getPLANTITLE() {
        return PLANTITLE;
    }

    public void setPLANTITLE(String PLANTITLE) {
        this.PLANTITLE = PLANTITLE;
    }

    public Integer getAPPROVEDBYID() {
        return APPROVEDBYID;
    }

    public void setAPPROVEDBYID(Integer APPROVEDBYID) {
        this.APPROVEDBYID = APPROVEDBYID;
    }

    public Date getAPPROVEDTS() {
        return APPROVEDTS;
    }

    public void setAPPROVEDTS(Date APPROVEDTS) {
        this.APPROVEDTS = APPROVEDTS;
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

    public String getMEMO() {
        return MEMO;
    }

    public void setMEMO(String MEMO) {
        this.MEMO = MEMO;
    }

    public Boolean getISACTIVE() {
        return ISACTIVE;
    }

    public void setISACTIVE(Boolean ISACTIVE) {
        this.ISACTIVE = ISACTIVE;
    }

    public LMS_PLAN_STATUS getREL_PLAN_STATUS() {
        return REL_PLAN_STATUS;
    }

    public void setREL_PLAN_STATUS(LMS_PLAN_STATUS REL_PLAN_STATUS) {
        this.REL_PLAN_STATUS = REL_PLAN_STATUS;
    }

    public LMS_PLAN_TYPE getREL_PLAN_TYPE() {
        return REL_PLAN_TYPE;
    }

    public void setREL_PLAN_TYPE(LMS_PLAN_TYPE REL_PLAN_TYPE) {
        this.REL_PLAN_TYPE = REL_PLAN_TYPE;
    }

    public Set<com.LMS.data.LMS_PLAN_DOC> getREL_PLAN_DOC() {
        return REL_PLAN_DOC;
    }

    public void setREL_PLAN_DOC(Set<com.LMS.data.LMS_PLAN_DOC> REL_PLAN_DOC) {
        this.REL_PLAN_DOC = REL_PLAN_DOC;
    }

}
