
package com.LMS.data;

import java.util.Date;


/**
 *  LMS.LMS_PLAN_DOC
 *  07/30/2555 19:20:05
 * 
 */
public class LMS_PLAN_DOC {

    private Integer DOCID;
    private String FILENAME;
    private String FILETYPE;
    private Integer FILESIZE;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer MODIFYBYID;
    private Date MODIFYTS;
    private Integer NUMBEROFDOWNLOAD;
    private String FILEPATH;
    private LMS_BASIC_DOC_STATUS REL_DOC_STATUS;
    private LMS_PLAN REL_DOC_PLAN;

    public Integer getDOCID() {
        return DOCID;
    }

    public void setDOCID(Integer DOCID) {
        this.DOCID = DOCID;
    }

    public String getFILENAME() {
        return FILENAME;
    }

    public void setFILENAME(String FILENAME) {
        this.FILENAME = FILENAME;
    }

    public String getFILETYPE() {
        return FILETYPE;
    }

    public void setFILETYPE(String FILETYPE) {
        this.FILETYPE = FILETYPE;
    }

    public Integer getFILESIZE() {
        return FILESIZE;
    }

    public void setFILESIZE(Integer FILESIZE) {
        this.FILESIZE = FILESIZE;
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

    public Integer getNUMBEROFDOWNLOAD() {
        return NUMBEROFDOWNLOAD;
    }

    public void setNUMBEROFDOWNLOAD(Integer NUMBEROFDOWNLOAD) {
        this.NUMBEROFDOWNLOAD = NUMBEROFDOWNLOAD;
    }

    public String getFILEPATH() {
        return FILEPATH;
    }

    public void setFILEPATH(String FILEPATH) {
        this.FILEPATH = FILEPATH;
    }

    public LMS_BASIC_DOC_STATUS getREL_DOC_STATUS() {
        return REL_DOC_STATUS;
    }

    public void setREL_DOC_STATUS(LMS_BASIC_DOC_STATUS REL_DOC_STATUS) {
        this.REL_DOC_STATUS = REL_DOC_STATUS;
    }

    public LMS_PLAN getREL_DOC_PLAN() {
        return REL_DOC_PLAN;
    }

    public void setREL_DOC_PLAN(LMS_PLAN REL_DOC_PLAN) {
        this.REL_DOC_PLAN = REL_DOC_PLAN;
    }

}
