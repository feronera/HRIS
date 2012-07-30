
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_RELIGION
 *  07/29/2555 15:37:24
 * 
 */
public class R_RELIGION {

    private Integer RELIGIONID;
    private String NAME;
    private Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals = new HashSet<com.LMS.data.PIM_01_GENERAL>();

    public Integer getRELIGIONID() {
        return RELIGIONID;
    }

    public void setRELIGIONID(Integer RELIGIONID) {
        this.RELIGIONID = RELIGIONID;
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
