
package com.LMS.data;

import java.math.BigDecimal;


/**
 *  LMS.PMS_PROJECT_ATTACHMENT
 *  07/30/2555 19:20:06
 * 
 */
public class PMS_PROJECT_ATTACHMENT {

    private Integer ATTACHMENT_ID;
    private String FILENAME;
    private String FILECONTENT;
    private String FILEPATH;
    private BigDecimal FILESIZE;
    private PMS_PROJECT REL_PROJECT_ATTACHMENT;
    private R_ATTACHMENT_GROUP REL_ATTACHMENT_GROUP;

    public Integer getATTACHMENT_ID() {
        return ATTACHMENT_ID;
    }

    public void setATTACHMENT_ID(Integer ATTACHMENT_ID) {
        this.ATTACHMENT_ID = ATTACHMENT_ID;
    }

    public String getFILENAME() {
        return FILENAME;
    }

    public void setFILENAME(String FILENAME) {
        this.FILENAME = FILENAME;
    }

    public String getFILECONTENT() {
        return FILECONTENT;
    }

    public void setFILECONTENT(String FILECONTENT) {
        this.FILECONTENT = FILECONTENT;
    }

    public String getFILEPATH() {
        return FILEPATH;
    }

    public void setFILEPATH(String FILEPATH) {
        this.FILEPATH = FILEPATH;
    }

    public BigDecimal getFILESIZE() {
        return FILESIZE;
    }

    public void setFILESIZE(BigDecimal FILESIZE) {
        this.FILESIZE = FILESIZE;
    }

    public PMS_PROJECT getREL_PROJECT_ATTACHMENT() {
        return REL_PROJECT_ATTACHMENT;
    }

    public void setREL_PROJECT_ATTACHMENT(PMS_PROJECT REL_PROJECT_ATTACHMENT) {
        this.REL_PROJECT_ATTACHMENT = REL_PROJECT_ATTACHMENT;
    }

    public R_ATTACHMENT_GROUP getREL_ATTACHMENT_GROUP() {
        return REL_ATTACHMENT_GROUP;
    }

    public void setREL_ATTACHMENT_GROUP(R_ATTACHMENT_GROUP REL_ATTACHMENT_GROUP) {
        this.REL_ATTACHMENT_GROUP = REL_ATTACHMENT_GROUP;
    }

}
