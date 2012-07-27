
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_SARALYBENEFIT
 *  07/26/2555 21:35:19
 * 
 */
public class R_SARALYBENEFIT {

    private Integer SARALYBENEFITID;
    private String NAME;
    private Set<com.LMS.data.PIM_02_EMPLOYEE> pim_02_employees = new HashSet<com.LMS.data.PIM_02_EMPLOYEE>();

    public Integer getSARALYBENEFITID() {
        return SARALYBENEFITID;
    }

    public void setSARALYBENEFITID(Integer SARALYBENEFITID) {
        this.SARALYBENEFITID = SARALYBENEFITID;
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
