import { Helmet } from 'react-helmet-async'

function SEO({ 
  title, 
  description, 
  image = '/og-image.jpg',
  url,
  type = 'website'
}) {
  const siteTitle = 'Richard Musango - UI/UX Designer'
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '')
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
