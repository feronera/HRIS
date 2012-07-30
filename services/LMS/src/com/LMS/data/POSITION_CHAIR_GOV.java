
package com.LMS.data;

import java.util.Date;


/**
 *  LMS.POSITION_CHAIR_GOV
 *  07/30/2555 21:01:48
 * 
 */
public class POSITION_CHAIR_GOV {

    private Integer CHAIR_ID;
    private String WI;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;

    public Integer getCHAIR_ID() {
        return CHAIR_ID;
    }

    public void setCHAIR_ID(Integer CHAIR_ID) {
        this.CHAIR_ID = CHAIR_ID;
    }

    public String getWI() {
        return WI;
    }

    public void setWI(String WI) {
        this.WI = WI;
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

}
