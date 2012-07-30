
package com.LMS;

import java.util.List;
import com.LMS.data.LMS_BASIC_DOC;
import com.LMS.data.output.Q_Chair_GOV2RtnType;
import com.LMS.data.output.Q_Chair_GOVRtnType;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "LMS"
 *  07/30/2555 10:54:46
 * 
 */
@SuppressWarnings("unchecked")
public class LMS
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<Q_Chair_GOVRtnType> q_Chair_GOV(Integer uid) {
        return ((List<Q_Chair_GOVRtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (LMSConstants.Q_Chair_GOVQueryName), uid));
    }

    public List<LMS_BASIC_DOC> getDocById(Integer id, PagingOptions pagingOptions) {
        return ((List<LMS_BASIC_DOC> ) dsMgr.invoke(taskMgr.getQueryTask(), (LMSConstants.getDocByIdQueryName), id, pagingOptions));
    }

    public List<Q_Chair_GOV2RtnType> q_Chair_GOV2() {
        return ((List<Q_Chair_GOV2RtnType> ) dsMgr.invoke(taskMgr.getQueryTask(), (LMSConstants.Q_Chair_GOV2QueryName)));
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
