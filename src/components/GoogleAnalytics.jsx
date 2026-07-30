import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function GoogleAnalytics() {
  const location = useLocation();
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    // Only initialize GA if measurement ID is provided
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.log('Google Analytics not configured - no valid Measurement ID');
      return;
    }

    console.log('Initializing Google Analytics with ID:', GA_MEASUREMENT_ID);

    // Load gtag script if not already loaded
    if (!window.gtag) {
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', GA_MEASUREMENT_ID, {
        // Enable debug mode for localhost testing
        debug_mode: true,
        send_page_view: true
      });
      
      console.log('Google Analytics script loaded');
    }
  }, [GA_MEASUREMENT_ID]);

  useEffect(() => {
    // Track page views on route change
    if (window.gtag && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      console.log('Tracking page view:', location.pathname + location.search);
      
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
        debug_mode: true
      });
    }
  }, [location, GA_MEASUREMENT_ID]);

  return null;
}

export default GoogleAnalytics;
