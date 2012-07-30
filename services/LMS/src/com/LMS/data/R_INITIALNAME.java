
package com.LMS.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  LMS.R_INITIALNAME
 *  07/30/2555 19:20:05
 * 
 */
public class R_INITIALNAME {

    private Integer INIT_ID;
    private String NAME;
    private String NAMEEN;
    private Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals = new HashSet<com.LMS.data.PIM_01_GENERAL>();
    private Set<com.LMS.data.LMS_ITS> lms_itss = new HashSet<com.LMS.data.LMS_ITS>();

    public Integer getINIT_ID() {
        return INIT_ID;
    }

    public void setINIT_ID(Integer INIT_ID) {
        this.INIT_ID = INIT_ID;
    }

    public String getNAME() {
        return NAME;
    }

    public void setNAME(String NAME) {
        this.NAME = NAME;
    }

    public String getNAMEEN() {
        return NAMEEN;
    }

    public void setNAMEEN(String NAMEEN) {
        this.NAMEEN = NAMEEN;
    }

    public Set<com.LMS.data.PIM_01_GENERAL> getPim_01_generals() {
        return pim_01_generals;
    }

    public void setPim_01_generals(Set<com.LMS.data.PIM_01_GENERAL> pim_01_generals) {
        this.pim_01_generals = pim_01_generals;
    }

    public Set<com.LMS.data.LMS_ITS> getLms_itss() {
        return lms_itss;
    }

    public void setLms_itss(Set<com.LMS.data.LMS_ITS> lms_itss) {
        this.lms_itss = lms_itss;
    }

}
