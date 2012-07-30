
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_NATIONALITY
 *  07/30/2555 19:20:06
 * 
 */
public class R_NATIONALITY {

    private Integer NATIONALITYID;
    private String NAME;
    private Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals = new HashSet<com.LMS.data.PIM_01_GENERAL>();

    public Integer getNATIONALITYID() {
        return NATIONALITYID;
    }

    public void setNATIONALITYID(Integer NATIONALITYID) {
        this.NATIONALITYID = NATIONALITYID;
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
