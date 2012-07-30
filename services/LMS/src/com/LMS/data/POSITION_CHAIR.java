
package com.LMS.data;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.POSITION_CHAIR
 *  07/29/2555 15:57:01
 * 
 */
public class POSITION_CHAIR {

    private Integer CHAIR_ID;
    private BigDecimal STEP_SALARY;
    private Integer POSITION_SALARY;
    private Date EFFECTIVEDATE;
    private Integer SALARY_TYPE;
    private String COMMENT;
    private BigDecimal SALARY;
    private Integer MINISTRY_CMD_NUMBER;
    private Integer MINISTRY_CMD_YEAR;
    private Date MINISTRY_CMD_DATE;
    private Integer MINISTRY_BOOK_NUMBER;
    private Date MINISTRY_BOOK_DATE;
    private String MINISTRY_COMMENT;
    private String STATUS_MINISTRY;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Integer POSITIONID;
    private R_POSITION_TYPE REL_POSITION_TYPE;
    private R_UNIT REL_UNIT;
    private R_POSITION_MANAGEMENT REL_POS_MANAGE;
    private R_POSITION_WORK REL_POS_WORK;
    private R_LEVEL REL_POS_LEVEL;
    private R_PERSONALTYPE REL_POSONAL_TYPE;
    private R_POSITIONSTATUS REL_POSITIONSTATUS;
    private Set<com.LMS.data.PIM_02_EMPLOYEE> pim_02_employees = new HashSet<com.LMS.data.PIM_02_EMPLOYEE>();

    public Integer getCHAIR_ID() {
        return CHAIR_ID;
    }

    public void setCHAIR_ID(Integer CHAIR_ID) {
        this.CHAIR_ID = CHAIR_ID;
    }

    public BigDecimal getSTEP_SALARY() {
        return STEP_SALARY;
    }

    public void setSTEP_SALARY(BigDecimal STEP_SALARY) {
        this.STEP_SALARY = STEP_SALARY;
    }

    public Integer getPOSITION_SALARY() {
        return POSITION_SALARY;
    }

    public void setPOSITION_SALARY(Integer POSITION_SALARY) {
        this.POSITION_SALARY = POSITION_SALARY;
    }

    public Date getEFFECTIVEDATE() {
        return EFFECTIVEDATE;
    }

    public void setEFFECTIVEDATE(Date EFFECTIVEDATE) {
        this.EFFECTIVEDATE = EFFECTIVEDATE;
    }

    public Integer getSALARY_TYPE() {
        return SALARY_TYPE;
    }

    public void setSALARY_TYPE(Integer SALARY_TYPE) {
        this.SALARY_TYPE = SALARY_TYPE;
    }

    public String getCOMMENT() {
        return COMMENT;
    }

    public void setCOMMENT(String COMMENT) {
        this.COMMENT = COMMENT;
    }

    public BigDecimal getSALARY() {
        return SALARY;
    }

    public void setSALARY(BigDecimal SALARY) {
        this.SALARY = SALARY;
    }

    public Integer getMINISTRY_CMD_NUMBER() {
        return MINISTRY_CMD_NUMBER;
    }

    public void setMINISTRY_CMD_NUMBER(Integer MINISTRY_CMD_NUMBER) {
        this.MINISTRY_CMD_NUMBER = MINISTRY_CMD_NUMBER;
    }

    public Integer getMINISTRY_CMD_YEAR() {
        return MINISTRY_CMD_YEAR;
    }

    public void setMINISTRY_CMD_YEAR(Integer MINISTRY_CMD_YEAR) {
        this.MINISTRY_CMD_YEAR = MINISTRY_CMD_YEAR;
    }

    public Date getMINISTRY_CMD_DATE() {
        return MINISTRY_CMD_DATE;
    }

    public void setMINISTRY_CMD_DATE(Date MINISTRY_CMD_DATE) {
        this.MINISTRY_CMD_DATE = MINISTRY_CMD_DATE;
    }

    public Integer getMINISTRY_BOOK_NUMBER() {
        return MINISTRY_BOOK_NUMBER;
    }

    public void setMINISTRY_BOOK_NUMBER(Integer MINISTRY_BOOK_NUMBER) {
        this.MINISTRY_BOOK_NUMBER = MINISTRY_BOOK_NUMBER;
    }

    public Date getMINISTRY_BOOK_DATE() {
        return MINISTRY_BOOK_DATE;
    }

    public void setMINISTRY_BOOK_DATE(Date MINISTRY_BOOK_DATE) {
        this.MINISTRY_BOOK_DATE = MINISTRY_BOOK_DATE;
    }

    public String getMINISTRY_COMMENT() {
        return MINISTRY_COMMENT;
    }

    public void setMINISTRY_COMMENT(String MINISTRY_COMMENT) {
        this.MINISTRY_COMMENT = MINISTRY_COMMENT;
    }

    public String getSTATUS_MINISTRY() {
        return STATUS_MINISTRY;
    }

    public void setSTATUS_MINISTRY(String STATUS_MINISTRY) {
        this.STATUS_MINISTRY = STATUS_MINISTRY;
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

    public Integer getPOSITIONID() {
        return POSITIONID;
    }

    public void setPOSITIONID(Integer POSITIONID) {
        this.POSITIONID = POSITIONID;
    }

    public R_POSITION_TYPE getREL_POSITION_TYPE() {
        return REL_POSITION_TYPE;
    }

    public void setREL_POSITION_TYPE(R_POSITION_TYPE REL_POSITION_TYPE) {
        this.REL_POSITION_TYPE = REL_POSITION_TYPE;
    }

    public R_UNIT getREL_UNIT() {
        return REL_UNIT;
    }

    public void setREL_UNIT(R_UNIT REL_UNIT) {
        this.REL_UNIT = REL_UNIT;
    }

    public R_POSITION_MANAGEMENT getREL_POS_MANAGE() {
        return REL_POS_MANAGE;
    }

    public void setREL_POS_MANAGE(R_POSITION_MANAGEMENT REL_POS_MANAGE) {
        this.REL_POS_MANAGE = REL_POS_MANAGE;
    }

    public R_POSITION_WORK getREL_POS_WORK() {
        return REL_POS_WORK;
    }

    public void setREL_POS_WORK(R_POSITION_WORK REL_POS_WORK) {
        this.REL_POS_WORK = REL_POS_WORK;
    }

    public R_LEVEL getREL_POS_LEVEL() {
        return REL_POS_LEVEL;
    }

    public void setREL_POS_LEVEL(R_LEVEL REL_POS_LEVEL) {
        this.REL_POS_LEVEL = REL_POS_LEVEL;
    }

    public R_PERSONALTYPE getREL_POSONAL_TYPE() {
        return REL_POSONAL_TYPE;
    }

    public void setREL_POSONAL_TYPE(R_PERSONALTYPE REL_POSONAL_TYPE) {
        this.REL_POSONAL_TYPE = REL_POSONAL_TYPE;
    }

    public R_POSITIONSTATUS getREL_POSITIONSTATUS() {
        return REL_POSITIONSTATUS;
    }

    public void setREL_POSITIONSTATUS(R_POSITIONSTATUS REL_POSITIONSTATUS) {
        this.REL_POSITIONSTATUS = REL_POSITIONSTATUS;
    }

    public Set<com.LMS.data.PIM_02_EMPLOYEE> getPim_02_employees() {
        return pim_02_employees;
    }

    public void setPim_02_employees(Set<com.LMS.data.PIM_02_EMPLOYEE> pim_02_employees) {
        this.pim_02_employees = pim_02_employees;
    }

}
