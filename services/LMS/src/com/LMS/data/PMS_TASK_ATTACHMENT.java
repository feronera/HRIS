
package com.LMS.data;

import java.math.BigDecimal;


/**
 *  LMS.PMS_TASK_ATTACHMENT
 *  07/26/2555 21:35:19
 * 
 */
public class PMS_TASK_ATTACHMENT {

    private Integer ATTACHMENT_ID;
    private String FILENAME;
    private String FILEPATH;
    private String FILECONTENT;
    private BigDecimal FILESIZE;
    private PMS_TASK REL_TASK_ATTACHMENT;
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

    public String getFILEPATH() {
        return FILEPATH;
    }

    public void setFILEPATH(String FILEPATH) {
        this.FILEPATH = FILEPATH;
    }

    public String getFILECONTENT() {
        return FILECONTENT;
    }

    public void setFILECONTENT(String FILECONTENT) {
        this.FILECONTENT = FILECONTENT;
    }

    public BigDecimal getFILESIZE() {
        return FILESIZE;
    }

    public void setFILESIZE(BigDecimal FILESIZE) {
        this.FILESIZE = FILESIZE;
    }

    public PMS_TASK getREL_TASK_ATTACHMENT() {
        return REL_TASK_ATTACHMENT;
    }

    public void setREL_TASK_ATTACHMENT(PMS_TASK REL_TASK_ATTACHMENT) {
        this.REL_TASK_ATTACHMENT = REL_TASK_ATTACHMENT;
    }

    public R_ATTACHMENT_GROUP getREL_ATTACHMENT_GROUP() {
        return REL_ATTACHMENT_GROUP;
    }

    public void setREL_ATTACHMENT_GROUP(R_ATTACHMENT_GROUP REL_ATTACHMENT_GROUP) {
        this.REL_ATTACHMENT_GROUP = REL_ATTACHMENT_GROUP;
    }

}
