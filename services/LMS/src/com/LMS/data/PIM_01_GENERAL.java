
package com.LMS.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.PIM_01_GENERAL
 *  07/26/2555 21:35:19
 * 
 */
public class PIM_01_GENERAL {

    private Integer UID;
    private String SEX;
    private String NAMETH;
    private String SURNAMETH;
    private String NAMEEN;
    private String SURNAMEEN;
    private String CITIZENID;
    private Date BIRTHDATE;
    private String BIRTHADDRESS;
    private String ADDRESS;
    private String TELNO1;
    private String TELNO2;
    private String TELNO3;
    private Integer YEARSOFWORK;
    private R_MARIAGESTATUS REL_MARIAGESTATUS;
    private R_BLOODTYPE REL_BLOODTYPE;
    private R_RACE REL_RACE;
    private R_PERSONALTYPE REL_PERSONALTYPE;
    private R_RELIGION REL_RELIGION;
    private R_NATIONALITY REL_NATIONALITY;
    private R_PERSONALSTATUS REL_PERSONALSTATUS;
    private R_INITIALNAME REL_INITIALNAME;
    private Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs = new HashSet<com.LMS.data.HR_LEAVE_REQ>();

    public Integer getUID() {
        return UID;
    }

    public void setUID(Integer UID) {
        this.UID = UID;
    }

    public String getSEX() {
        return SEX;
    }

    public void setSEX(String SEX) {
        this.SEX = SEX;
    }

    public String getNAMETH() {
        return NAMETH;
    }

    public void setNAMETH(String NAMETH) {
        this.NAMETH = NAMETH;
    }

    public String getSURNAMETH() {
        return SURNAMETH;
    }

    public void setSURNAMETH(String SURNAMETH) {
        this.SURNAMETH = SURNAMETH;
    }

    public String getNAMEEN() {
        return NAMEEN;
    }

    public void setNAMEEN(String NAMEEN) {
        this.NAMEEN = NAMEEN;
    }

    public String getSURNAMEEN() {
        return SURNAMEEN;
    }

    public void setSURNAMEEN(String SURNAMEEN) {
        this.SURNAMEEN = SURNAMEEN;
    }

    public String getCITIZENID() {
        return CITIZENID;
    }

    public void setCITIZENID(String CITIZENID) {
        this.CITIZENID = CITIZENID;
    }

    public Date getBIRTHDATE() {
        return BIRTHDATE;
    }

    public void setBIRTHDATE(Date BIRTHDATE) {
        this.BIRTHDATE = BIRTHDATE;
    }

    public String getBIRTHADDRESS() {
        return BIRTHADDRESS;
    }

    public void setBIRTHADDRESS(String BIRTHADDRESS) {
        this.BIRTHADDRESS = BIRTHADDRESS;
    }

    public String getADDRESS() {
        return ADDRESS;
    }

    public void setADDRESS(String ADDRESS) {
        this.ADDRESS = ADDRESS;
    }

    public String getTELNO1() {
        return TELNO1;
    }

    public void setTELNO1(String TELNO1) {
        this.TELNO1 = TELNO1;
    }

    public String getTELNO2() {
        return TELNO2;
    }

    public void setTELNO2(String TELNO2) {
        this.TELNO2 = TELNO2;
    }

    public String getTELNO3() {
        return TELNO3;
    }

    public void setTELNO3(String TELNO3) {
        this.TELNO3 = TELNO3;
    }

    public Integer getYEARSOFWORK() {
        return YEARSOFWORK;
    }

    public void setYEARSOFWORK(Integer YEARSOFWORK) {
        this.YEARSOFWORK = YEARSOFWORK;
    }

    public R_MARIAGESTATUS getREL_MARIAGESTATUS() {
        return REL_MARIAGESTATUS;
    }

    public void setREL_MARIAGESTATUS(R_MARIAGESTATUS REL_MARIAGESTATUS) {
        this.REL_MARIAGESTATUS = REL_MARIAGESTATUS;
    }

    public R_BLOODTYPE getREL_BLOODTYPE() {
        return REL_BLOODTYPE;
    }

    public void setREL_BLOODTYPE(R_BLOODTYPE REL_BLOODTYPE) {
        this.REL_BLOODTYPE = REL_BLOODTYPE;
    }

    public R_RACE getREL_RACE() {
        return REL_RACE;
    }

    public void setREL_RACE(R_RACE REL_RACE) {
        this.REL_RACE = REL_RACE;
    }

    public R_PERSONALTYPE getREL_PERSONALTYPE() {
        return REL_PERSONALTYPE;
    }

    public void setREL_PERSONALTYPE(R_PERSONALTYPE REL_PERSONALTYPE) {
        this.REL_PERSONALTYPE = REL_PERSONALTYPE;
    }

    public R_RELIGION getREL_RELIGION() {
        return REL_RELIGION;
    }

    public void setREL_RELIGION(R_RELIGION REL_RELIGION) {
        this.REL_RELIGION = REL_RELIGION;
    }

    public R_NATIONALITY getREL_NATIONALITY() {
        return REL_NATIONALITY;
    }

    public void setREL_NATIONALITY(R_NATIONALITY REL_NATIONALITY) {
        this.REL_NATIONALITY = REL_NATIONALITY;
    }

    public R_PERSONALSTATUS getREL_PERSONALSTATUS() {
        return REL_PERSONALSTATUS;
    }

    public void setREL_PERSONALSTATUS(R_PERSONALSTATUS REL_PERSONALSTATUS) {
        this.REL_PERSONALSTATUS = REL_PERSONALSTATUS;
    }

    public R_INITIALNAME getREL_INITIALNAME() {
        return REL_INITIALNAME;
    }

    public void setREL_INITIALNAME(R_INITIALNAME REL_INITIALNAME) {
        this.REL_INITIALNAME = REL_INITIALNAME;
    }

    public Set<com.LMS.data.HR_LEAVE_REQ> getHr_leave_reqs() {
        return hr_leave_reqs;
    }

    public void setHr_leave_reqs(Set<com.LMS.data.HR_LEAVE_REQ> hr_leave_reqs) {
        this.hr_leave_reqs = hr_leave_reqs;
    }

}
