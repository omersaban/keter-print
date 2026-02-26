import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function NavigationTracker() {
    const location = useLocation();
    const { isAuthenticated } = useAuth();

    // כאן בעתיד תוכל להוסיף מעקב של Google Analytics או מערכת אחרת
    useEffect(() => {
        const pathname = location.pathname;
        
        // כרגע רק מדפיס לקונסול כדי שתוכל לראות שזה עובד
        // בייצור אפשר להוריד את השורה הזו
        // console.log(`User navigated to: ${pathname}, Authenticated: ${isAuthenticated}`);
        
    }, [location, isAuthenticated]);

    return null;
}
