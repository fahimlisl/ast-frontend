import { useEffect } from 'react';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonical,
  schemaMarkup,
}) => {
  
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name, content, isProperty = false) => {
      let element = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      
      if (!element) {
        element = document.createElement('meta');
        isProperty ? element.setAttribute('property', name) : element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    setMeta('description', description);
    setMeta('keywords', keywords);
    
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonical, true);
    
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    
    setMeta('robots', 'index, follow');
    setMeta('language', 'English');
    setMeta('author', 'Tajammul Hoque');
    
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;
    
    if (schemaMarkup) {
      let schemaScript = document.querySelector('script[type="application/ld+json"]');
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaMarkup);
    }
    
    return () => {
      // Cleanup function if needed
    };
  }, [title, description, keywords, ogImage, canonical, schemaMarkup]);

  return null; 
};

export default SEOHead;