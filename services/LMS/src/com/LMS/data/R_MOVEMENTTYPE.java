
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_MOVEMENTTYPE
 *  07/30/2555 19:20:06
 * 
 */
public class R_MOVEMENTTYPE {

    private Integer MOVEMENTTYPEID;
    private String NAME;
    private Set<com.LMS.data.PIM_02_EMPLOYEE> pim_02_employees = new HashSet<com.LMS.data.PIM_02_EMPLOYEE>();

    public Integer getMOVEMENTTYPEID() {
        return MOVEMENTTYPEID;
    }

    public void setMOVEMENTTYPEID(Integer MOVEMENTTYPEID) {
        this.MOVEMENTTYPEID = MOVEMENTTYPEID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.PIM_02_EMPLOYEE> getPim_02_employees() {
        return pim_02_employees;
    }

    public void setPim_02_employees(Set<com.LMS.data.PIM_02_EMPLOYEE> pim_02_employees) {
        this.pim_02_employees = pim_02_employees;
    }

}
