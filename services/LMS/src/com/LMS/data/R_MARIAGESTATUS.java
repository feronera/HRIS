
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_MARIAGESTATUS
 *  07/26/2555 21:35:19
 * 
 */
public class R_MARIAGESTATUS {

    private Integer MARIAGESTATUSID;
    private String NAME;
    private Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals = new HashSet<com.LMS.data.PIM_01_GENERAL>();

    public Integer getMARIAGESTATUSID() {
        return MARIAGESTATUSID;
    }

    public void setMARIAGESTATUSID(Integer MARIAGESTATUSID) {
        this.MARIAGESTATUSID = MARIAGESTATUSID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public Set<com.LMS.data.PIM_01_GENERAL> getPim_01_generals() {
        return pim_01_generals;
    }

    public void setPim_01_generals(Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals) {
        this.pim_01_generals = pim_01_generals;
    }

}
