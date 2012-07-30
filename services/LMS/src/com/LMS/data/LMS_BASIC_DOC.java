
package com.LMS.data;

import java.math.BigInteger;
import java.util.Date;


/**
 *  LMS.LMS_BASIC_DOC
 *  07/30/2555 19:20:05
 * 
 */
public class LMS_BASIC_DOC {

    private Integer DOCID;
    private String TITLE;
    private String OTHERDETAILS;
    private BigInteger FILESIZE;
    private String FILEPATH;
    private String OWNERID;
    private Integer CREATEBYID;
    private Date CREATETS;
    private Integer LASTMODIFYBYID;
    private Date LASTMODIFYTS;
    private String DOCNO;
    private Date DOCDATE;
    private Boolean ISACTIVE;
    private String FILENAME;
    private String FILEEXT;
    private LMS_BASIC_DOC_TYPE rel_DOCTYPE;
    private LMS_BASIC_DOC_STATUS rel_DOCSTATUS;

    public Integer getDOCID() {
        return DOCID;
    }

    public void setDOCID(Integer DOCID) {
        this.DOCID = DOCID;
    }

    public String getTITLE() {
        return TITLE;
    }

    public void setTITLE(String TITLE) {
        this.TITLE = TITLE;
    }

    public String getOTHERDETAILS() {
        return OTHERDETAILS;
    }

    public void setOTHERDETAILS(String OTHERDETAILS) {
        this.OTHERDETAILS = OTHERDETAILS;
    }

    public BigInteger getFILESIZE() {
        return FILESIZE;
    }

    public void setFILESIZE(BigInteger FILESIZE) {
        this.FILESIZE = FILESIZE;
    }

    public String getFILEPATH() {
        return FILEPATH;
    }

    public void setFILEPATH(String FILEPATH) {
        this.FILEPATH = FILEPATH;
    }

    public String getOWNERID() {
        return OWNERID;
    }

    public void setOWNERID(String OWNERID) {
        this.OWNERID = OWNERID;
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

    public Integer getLASTMODIFYBYID() {
        return LASTMODIFYBYID;
    }

    public void setLASTMODIFYBYID(Integer LASTMODIFYBYID) {
        this.LASTMODIFYBYID = LASTMODIFYBYID;
    }

    public Date getLASTMODIFYTS() {
        return LASTMODIFYTS;
    }

    public void setLASTMODIFYTS(Date LASTMODIFYTS) {
        this.LASTMODIFYTS = LASTMODIFYTS;
    }

    public String getDOCNO() {
        return DOCNO;
    }

    public void setDOCNO(String DOCNO) {
        this.DOCNO = DOCNO;
    }

    public Date getDOCDATE() {
        return DOCDATE;
    }

    public void setDOCDATE(Date DOCDATE) {
        this.DOCDATE = DOCDATE;
    }

    public Boolean getISACTIVE() {
        return ISACTIVE;
    }

    public void setISACTIVE(Boolean ISACTIVE) {
        this.ISACTIVE = ISACTIVE;
    }

    public String getFILENAME() {
        return FILENAME;
    }

    public void setFILENAME(String FILENAME) {
        this.FILENAME = FILENAME;
    }

    public String getFILEEXT() {
        return FILEEXT;
    }

    public void setFILEEXT(String FILEEXT) {
        this.FILEEXT = FILEEXT;
    }

    public LMS_BASIC_DOC_TYPE getRel_DOCTYPE() {
        return rel_DOCTYPE;
    }

    public void setRel_DOCTYPE(LMS_BASIC_DOC_TYPE rel_DOCTYPE) {
        this.rel_DOCTYPE = rel_DOCTYPE;
    }

    public LMS_BASIC_DOC_STATUS getRel_DOCSTATUS() {
        return rel_DOCSTATUS;
    }

    public void setRel_DOCSTATUS(LMS_BASIC_DOC_STATUS rel_DOCSTATUS) {
        this.rel_DOCSTATUS = rel_DOCSTATUS;
    }

}
