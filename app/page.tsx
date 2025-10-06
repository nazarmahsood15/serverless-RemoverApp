"use client";

import BgRemoverPage from "./components/BgRemoverPage";
import Head from "next/head";

export default function Home() {
  const siteTitle = "Free AI Background Remover - Remove Image Backgrounds Instantly | RemoveBG Pro";
  const siteDescription = "Remove backgrounds from images automatically with AI. Free online tool for product photos, portraits, and marketing materials. No registration required!";
  const canonicalUrl = "https://removebgpro.com";
  const siteKeywords = "remove background, background remover, AI background removal, free photo editor, transparent PNG, remove background from image, online background remover, ecommerce photos, product images, remove bg";

  // JSON-LD structured data for the entire website
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RemoveBG Pro - AI Background Remover",
    "url": canonicalUrl,
    "description": siteDescription,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${canonicalUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "RemoveBG Pro",
      "logo": {
        "@type": "ImageObject",
        "url": `${canonicalUrl}/logo.png`
      },
      "sameAs": [
        "https://twitter.com/removebgpro",
        "https://facebook.com/removebgpro",
        "https://instagram.com/removebgpro"
      ]
    }
  };

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RemoveBG Pro",
    "url": canonicalUrl,
    "logo": `${canonicalUrl}/logo.png`,
    "description": siteDescription,
    "sameAs": [
      "https://twitter.com/removebgpro",
      "https://facebook.com/removebgpro",
      "https://instagram.com/removebgpro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "support@removebgpro.com",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>{siteTitle}</title>
        <meta name="title" content={siteTitle} />
        <meta name="description" content={siteDescription} />
        <meta name="keywords" content={siteKeywords} />

        {/* Technical SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="language" content="en" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="RemoveBG Pro" />
        <meta name="generator" content="Next.js" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:image" content={`${canonicalUrl}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="RemoveBG Pro - AI Background Remover" />
        <meta property="og:site_name" content="RemoveBG Pro" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonicalUrl} />
        <meta property="twitter:title" content={siteTitle} />
        <meta property="twitter:description" content={siteDescription} />
        <meta property="twitter:image" content={`${canonicalUrl}/twitter-image.png`} />
        <meta name="twitter:creator" content="@removebgpro" />
        <meta name="twitter:site" content="@removebgpro" />

        {/* Canonical & Alternate URLs */}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hrefLang="x-default" />
        <link rel="alternate" href={canonicalUrl} hrefLang="en" />
        <link rel="alternate" href={`${canonicalUrl}/es`} hrefLang="es" />
        <link rel="alternate" href={`${canonicalUrl}/fr`} hrefLang="fr" />

        {/* Mobile Specific */}
        <meta name="theme-color" content="#3B82F6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="RemoveBG Pro" />

        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Preload critical resources */}
        <link rel="preload" as="image" href="/og-image.png" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="classification" content="Online Tools, Photo Editing, AI Technology" />
        <meta name="subject" content="AI Background Removal Tool" />
        <meta name="topic" content="Online Photo Background Removal" />
        <meta name="summary" content="Free AI-powered background removal tool for images and photos" />
        <meta name="url" content={canonicalUrl} />

        {/* Verification Meta Tags (add your actual verification codes) */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="facebook-domain-verification" content="your-facebook-verification" />
        <meta name="p:domain_verify" content="your-pinterest-verification" />

        {/* Performance & SEO Optimization */}
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
      </Head>

      {/* Hidden SEO-rich content for search engines */}
      <div className="hidden" aria-hidden="true">
        <h1>AI Background Remover - Remove Image Backgrounds Automatically</h1>
        <h2>Free Online Tool for Perfect Background Removal</h2>
        <p>
          RemoveBG Pro is the best free online background remover that uses advanced artificial intelligence
          to automatically remove backgrounds from images. Our AI background removal tool is perfect for
          ecommerce product photos, portrait photography, social media content, marketing materials,
          and personal projects. Unlike other background removers, our service is completely free with
          no hidden costs, no watermarks, and no registration required.
        </p>
        <p>
          Key features of our background remover tool include: instant processing, high-quality PNG output,
          support for JPG, JPEG, PNG, and WEBP formats, secure image processing with automatic deletion,
          and mobile-friendly interface. Use our remove bg tool for perfect transparent backgrounds every time.
        </p>
        <ul>
          <li>Free background removal with AI technology</li>
          <li>No registration or sign up required</li>
          <li>High-quality transparent PNG output</li>
          <li>Fast processing in seconds</li>
          <li>Secure and private image processing</li>
          <li>Mobile-friendly online tool</li>
          <li>Perfect for ecommerce and product photos</li>
        </ul>
      </div>

      {/* Main content */}
      <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="w-full">
          <BgRemoverPage />
        </div>
      </main>

      {/* Performance monitoring script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('load', function() {
              // Track Core Web Vitals
              if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                  list.getEntries().forEach((entry) => {
                    console.log('LCP candidate:', entry.startTime, entry);
                  });
                });
                observer.observe({entryTypes: ['largest-contentful-paint']});
              }
            });
          `,
        }}
      />
    </>
  );
}
