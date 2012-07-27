/**
 * This is a client-facing service class.  All
 * public methods will be exposed to the client.  Their return
 * values and parameters will be passed to the client or taken
 * from the client, respectively.  This will be a singleton
 * instance, shared between all requests. 
 */

import javax.servlet.http.HttpSession;
import com.wavemaker.runtime.RuntimeAccess;

public class SessionManager {

    public String setAttribute(String theName, String theValue) {

        HttpSession sess = RuntimeAccess.getInstance().getRequest().getSession();

        sess.setAttribute(theName, theValue);
        return new String("OK");
    }

    public String getAttribute(String theName) {

        HttpSession sess = RuntimeAccess.getInstance().getRequest().getSession();
        String sessionValue = (String) sess.getAttribute(theName);
        return sessionValue;
    }

    public void invalidateSesssion() {
        try {
            RuntimeAccess.getInstance().getRequest().getSession().invalidate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public String getId() {
        HttpSession sess = RuntimeAccess.getInstance().getRequest().getSession();
        String sessionValue = (String) sess.getId();
        return sessionValue;

    }


}