
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_PERSONALTYPE
 *  07/30/2555 19:20:06
 * 
 */
public class R_PERSONALTYPE {

    private Integer PERSONTYPE_ID;
    private String NAME;
    private Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals = new HashSet<com.LMS.data.PIM_01_GENERAL>();
    private Set<com.LMS.data.POSITION_CHAIR> position_chairs = new HashSet<com.LMS.data.POSITION_CHAIR>();

    public Integer getPERSONTYPE_ID() {
        return PERSONTYPE_ID;
    }

    public void setPERSONTYPE_ID(Integer PERSONTYPE_ID) {
        this.PERSONTYPE_ID = PERSONTYPE_ID;
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

    public Set<com.LMS.data.POSITION_CHAIR> getPosition_chairs() {
        return position_chairs;
    }

    public void setPosition_chairs(Set<com.LMS.data.POSITION_CHAIR> position_chairs) {
        this.position_chairs = position_chairs;
    }

}
