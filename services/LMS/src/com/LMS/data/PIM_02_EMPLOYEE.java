
package com.LMS.data;

import java.math.BigDecimal;
import java.util.Date;


/**
 *  LMS.PIM_02_EMPLOYEE
 *  07/29/2555 15:57:01
 * 
 */
public class PIM_02_EMPLOYEE {

    private Integer UID;
    private Integer PERSONALNO;
    private Date ACTIVEDATE;
    private Integer PICID;
    private String TAXNO;
    private Date EMPLOYDATE;
    private Integer POS_LEVEL_LAST_XXX;
    private Integer POS_LEVEL_NEW_XXX;
    private String RETIREDYEAR;
    private String CONTACTADDRESS;
    private BigDecimal SALARAY;
    private Date DATEOUTCONTRACT;
    private String LICENSEDPROFESSIONALNO;
    private String WORKING_UNIT;
    private String CMD_ACQUIRE;
    private Integer WORKING_POSITION;
    private Integer REAL_POSITION;
    private R_MOVEMENTTYPE REL_MOVEMENTTYPE;
    private R_SARALYBENEFIT REL_SALARYBENEFIT;
    private POSITION_CHAIR REL_POSITION_CHAIR;

    public Integer getUID() {
        return UID;
    }

    public void setUID(Integer UID) {
        this.UID = UID;
    }

    public Integer getPERSONALNO() {
        return PERSONALNO;
    }

    public void setPERSONALNO(Integer PERSONALNO) {
        this.PERSONALNO = PERSONALNO;
    }

    public Date getACTIVEDATE() {
        return ACTIVEDATE;
    }

    public void setACTIVEDATE(Date ACTIVEDATE) {
        this.ACTIVEDATE = ACTIVEDATE;
    }

    public Integer getPICID() {
        return PICID;
    }

    public void setPICID(Integer PICID) {
        this.PICID = PICID;
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

    public Integer getPOS_LEVEL_LAST_XXX() {
        return POS_LEVEL_LAST_XXX;
    }

    public void setPOS_LEVEL_LAST_XXX(Integer POS_LEVEL_LAST_XXX) {
        this.POS_LEVEL_LAST_XXX = POS_LEVEL_LAST_XXX;
    }

    public Integer getPOS_LEVEL_NEW_XXX() {
        return POS_LEVEL_NEW_XXX;
    }

    public void setPOS_LEVEL_NEW_XXX(Integer POS_LEVEL_NEW_XXX) {
        this.POS_LEVEL_NEW_XXX = POS_LEVEL_NEW_XXX;
    }

    public String getRETIREDYEAR() {
        return RETIREDYEAR;
    }

    public void setRETIREDYEAR(String RETIREDYEAR) {
        this.RETIREDYEAR = RETIREDYEAR;
    }

    public String getCONTACTADDRESS() {
        return CONTACTADDRESS;
    }

    public void setCONTACTADDRESS(String CONTACTADDRESS) {
        this.CONTACTADDRESS = CONTACTADDRESS;
    }

    public BigDecimal getSALARAY() {
        return SALARAY;
    }

    public void setSALARAY(BigDecimal SALARAY) {
        this.SALARAY = SALARAY;
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

    public String getWORKING_UNIT() {
        return WORKING_UNIT;
    }

    public void setWORKING_UNIT(String WORKING_UNIT) {
        this.WORKING_UNIT = WORKING_UNIT;
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

    public Integer getREAL_POSITION() {
        return REAL_POSITION;
    }

    public void setREAL_POSITION(Integer REAL_POSITION) {
        this.REAL_POSITION = REAL_POSITION;
    }

    public R_MOVEMENTTYPE getREL_MOVEMENTTYPE() {
        return REL_MOVEMENTTYPE;
    }

    public void setREL_MOVEMENTTYPE(R_MOVEMENTTYPE REL_MOVEMENTTYPE) {
        this.REL_MOVEMENTTYPE = REL_MOVEMENTTYPE;
    }

    public R_SARALYBENEFIT getREL_SALARYBENEFIT() {
        return REL_SALARYBENEFIT;
    }

    public void setREL_SALARYBENEFIT(R_SARALYBENEFIT REL_SALARYBENEFIT) {
        this.REL_SALARYBENEFIT = REL_SALARYBENEFIT;
    }

    public POSITION_CHAIR getREL_POSITION_CHAIR() {
        return REL_POSITION_CHAIR;
    }

    public void setREL_POSITION_CHAIR(POSITION_CHAIR REL_POSITION_CHAIR) {
        this.REL_POSITION_CHAIR = REL_POSITION_CHAIR;
    }

}
