import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollTop } from '../hooks/useScrollTop';

const AppLayout = () => {
    const location = useLocation();

    useScrollTop();

    useEffect(() => {
        const legalPaths = ['/privacidad', '/terminos'];
        const robotsContent = legalPaths.includes(location.pathname)
            ? 'noindex,follow'
            : 'index,follow';

        let robotsMeta = document.querySelector('meta[name="robots"]');
        if (!robotsMeta) {
            robotsMeta = document.createElement('meta');
            robotsMeta.setAttribute('name', 'robots');
            document.head.appendChild(robotsMeta);
        }

        robotsMeta.setAttribute('content', robotsContent);
    }, [location.pathname]);

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default AppLayout
