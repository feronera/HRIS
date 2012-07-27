
package com.LMS.data;

import java.util.Date;


/**
 *  LMS.PIM_02_EMPLOYEE
 *  07/26/2555 21:35:19
 * 
 */
public class PIM_02_EMPLOYEE {

    private Integer UID;
    private Integer POSITIONID;
    private Integer PICID;
    private Integer PERSONALNO;
    private String TAXNO;
    private Date EMPLOYDATE;
    private Date ACTIVEDATE;
    private Integer POS_LEVEL_LAST_XXX;
    private Character RETIREDYEAR;
    private String CONTACTADDRESS;
    private Integer POS_LEVEL_NEW_XXX;
    private Integer SALARY;
    private Date DATEOUTCONTRACT;
    private String LICENSEDPROFESSIONALNO;
    private String CMD_ACQUIRE;
    private Integer WORKING_POSITION;
    private R_MOVEMENTTYPE REL_R_MOVEMENTTYPE;
    private R_SARALYBENEFIT REL_R_SALARYBENEFIT;
    private R_UNIT REL_R_UNIT;

    public Integer getUID() {
        return UID;
    }

    public void setUID(Integer UID) {
        this.UID = UID;
    }

    public Integer getPOSITIONID() {
        return POSITIONID;
    }

    public void setPOSITIONID(Integer POSITIONID) {
        this.POSITIONID = POSITIONID;
    }

    public Integer getPICID() {
        return PICID;
    }

    public void setPICID(Integer PICID) {
        this.PICID = PICID;
    }

    public Integer getPERSONALNO() {
        return PERSONALNO;
    }

    public void setPERSONALNO(Integer PERSONALNO) {
        this.PERSONALNO = PERSONALNO;
    }

    public String getTAXNO() {
        return TAXNO;
    }

    public void setTAXNO(String TAXNO) {
        this.TAXNO = TAXNO;
    }

    public Date getEMPLOYDATE() {
        return EMPLOYDATE;
    }

    public void setEMPLOYDATE(Date EMPLOYDATE) {
        this.EMPLOYDATE = EMPLOYDATE;
    }

    public Date getACTIVEDATE() {
        return ACTIVEDATE;
    }

    public void setACTIVEDATE(Date ACTIVEDATE) {
        this.ACTIVEDATE = ACTIVEDATE;
    }

    public Integer getPOS_LEVEL_LAST_XXX() {
        return POS_LEVEL_LAST_XXX;
    }

    public void setPOS_LEVEL_LAST_XXX(Integer POS_LEVEL_LAST_XXX) {
        this.POS_LEVEL_LAST_XXX = POS_LEVEL_LAST_XXX;
    }

    public Character getRETIREDYEAR() {
        return RETIREDYEAR;
    }

    public void setRETIREDYEAR(Character RETIREDYEAR) {
        this.RETIREDYEAR = RETIREDYEAR;
    }

    public String getCONTACTADDRESS() {
        return CONTACTADDRESS;
    }

    public void setCONTACTADDRESS(String CONTACTADDRESS) {
        this.CONTACTADDRESS = CONTACTADDRESS;
    }

    public Integer getPOS_LEVEL_NEW_XXX() {
        return POS_LEVEL_NEW_XXX;
    }

    public void setPOS_LEVEL_NEW_XXX(Integer POS_LEVEL_NEW_XXX) {
        this.POS_LEVEL_NEW_XXX = POS_LEVEL_NEW_XXX;
    }

    public Integer getSALARY() {
        return SALARY;
    }

    public void setSALARY(Integer SALARY) {
        this.SALARY = SALARY;
    }

    public Date getDATEOUTCONTRACT() {
        return DATEOUTCONTRACT;
    }

    public void setDATEOUTCONTRACT(Date DATEOUTCONTRACT) {
        this.DATEOUTCONTRACT = DATEOUTCONTRACT;
    }

    public String getLICENSEDPROFESSIONALNO() {
        return LICENSEDPROFESSIONALNO;
    }

    public void setLICENSEDPROFESSIONALNO(String LICENSEDPROFESSIONALNO) {
        this.LICENSEDPROFESSIONALNO = LICENSEDPROFESSIONALNO;
    }

    public String getCMD_ACQUIRE() {
        return CMD_ACQUIRE;
    }

    public void setCMD_ACQUIRE(String CMD_ACQUIRE) {
        this.CMD_ACQUIRE = CMD_ACQUIRE;
    }

    public Integer getWORKING_POSITION() {
        return WORKING_POSITION;
    }

    public void setWORKING_POSITION(Integer WORKING_POSITION) {
        this.WORKING_POSITION = WORKING_POSITION;
    }

    public R_MOVEMENTTYPE getREL_R_MOVEMENTTYPE() {
        return REL_R_MOVEMENTTYPE;
    }

    public void setREL_R_MOVEMENTTYPE(R_MOVEMENTTYPE REL_R_MOVEMENTTYPE) {
        this.REL_R_MOVEMENTTYPE = REL_R_MOVEMENTTYPE;
    }

    public R_SARALYBENEFIT getREL_R_SALARYBENEFIT() {
        return REL_R_SALARYBENEFIT;
    }

    public void setREL_R_SALARYBENEFIT(R_SARALYBENEFIT REL_R_SALARYBENEFIT) {
        this.REL_R_SALARYBENEFIT = REL_R_SALARYBENEFIT;
    }

    public R_UNIT getREL_R_UNIT() {
        return REL_R_UNIT;
    }

    public void setREL_R_UNIT(R_UNIT REL_R_UNIT) {
        this.REL_R_UNIT = REL_R_UNIT;
    }

}
