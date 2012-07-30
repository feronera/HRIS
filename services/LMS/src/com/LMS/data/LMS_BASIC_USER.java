
package com.LMS.data;

import java.util.Date;


/**
 *  LMS.LMS_BASIC_USER
 *  07/30/2555 19:20:06
 * 
 */
public class LMS_BASIC_USER {

    private Integer USERID;
    private String USERNAME;
    private Integer TENANTID;
    private String ROLECODE;
    private Boolean ISACTIVE;
    private Integer EMPLOYEENO;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer FOREGETPASSWORDNO;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private String PASSWORD;
    private String EMAIL;
    private LMS_BASIC_ROLE rel;

    public Integer getUSERID() {
        return USERID;
    }

    public void setUSERID(Integer USERID) {
        this.USERID = USERID;
    }

    public String getUSERNAME() {
        return USERNAME;
    }

    public void setUSERNAME(String USERNAME) {
        this.USERNAME = USERNAME;
    }

    public Integer getTENANTID() {
        return TENANTID;
    }

    public void setTENANTID(Integer TENANTID) {
        this.TENANTID = TENANTID;
    }

    public String getROLECODE() {
        return ROLECODE;
    }

    public void setROLECODE(String ROLECODE) {
        this.ROLECODE = ROLECODE;
    }

    public Boolean getISACTIVE() {
        return ISACTIVE;
    }

    public void setISACTIVE(Boolean ISACTIVE) {
        this.ISACTIVE = ISACTIVE;
    }

    public Integer getEMPLOYEENO() {
        return EMPLOYEENO;
    }

    public void setEMPLOYEENO(Integer EMPLOYEENO) {
        this.EMPLOYEENO = EMPLOYEENO;
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

    public Integer getFOREGETPASSWORDNO() {
        return FOREGETPASSWORDNO;
    }

    public void setFOREGETPASSWORDNO(Integer FOREGETPASSWORDNO) {
        this.FOREGETPASSWORDNO = FOREGETPASSWORDNO;
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

    public String getPASSWORD() {
        return PASSWORD;
    }

    public void setPASSWORD(String PASSWORD) {
        this.PASSWORD = PASSWORD;
    }

    public String getEMAIL() {
        return EMAIL;
    }

    public void setEMAIL(String EMAIL) {
        this.EMAIL = EMAIL;
    }

    public LMS_BASIC_ROLE getRel() {
        return rel;
    }

    public void setRel(LMS_BASIC_ROLE rel) {
        this.rel = rel;
    }

}
