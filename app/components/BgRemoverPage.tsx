"use client";

import { useState, useEffect } from "react";
import UploadBox from "./UploadBox";
import PreviewImage from "./PreviewImage";
import Loader from "./Loader";
import Head from "next/head";

export default function BgRemoverPage() {
  const [image, setImage] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [pageTitle] = useState("Free AI Background Remover | Instant PNG Tool | RemoveBG Pro");
  const [pageDescription] = useState("Remove image backgrounds instantly with our free AI tool. Perfect for ecommerce, portraits, and product photos. No signup required!");

  // Set meta tags for SEO
  useEffect(() => {
    // Update document title
    document.title = pageTitle;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', pageDescription);
  }, [pageTitle, pageDescription]);

  const handleUpload = async (file: File) => {
    try {
      // Show preview instantly
      const previewUrl = URL.createObjectURL(file);
      setImage(previewUrl);

      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("api/remove-bg", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Failed to process image");

      const data = await res.json();
      setOutput(data.imageUrl);
    } catch (error) {
      console.error(error);
      alert("Something went wrong while removing background.");
    } finally {
      setLoading(false);
    }
  };

  // This function resets everything and shows the upload box again
  const handleNewUpload = () => {
    setImage(null);
    setOutput(null);
    setLoading(false);
  };

  // JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Background Remover",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser",
    "description": pageDescription,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "RemoveBG Pro"
    }
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="remove background, background remover, AI background removal, free photo editor, transparent PNG, ecommerce photos, product images" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href="https://yourdomain.com/remove-background" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-start py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 ">
        {/* Main container with proper centering */}
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center">

          {/* Breadcrumb - Centered and responsive */}
          <nav aria-label="breadcrumb" className="w-full max-w-2xl mb-6 px-4">
            <ol className="flex justify-center space-x-2 text-sm text-gray-400" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" itemProp="item" className="hover:text-white transition-colors">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li className="before:content-['/'] before:mr-2">
                <span className="text-white" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <span itemProp="name">Background Remover</span>
                  <meta itemProp="position" content="2" />
                </span>
              </li>
            </ol>
          </nav>

          {/* Main content section */}
          <section className="flex flex-col gap-6 items-center w-full max-w-2xl p-4 sm:p-6 bg-white/5 rounded-2xl shadow-lg border border-white/10">

            {/* Main heading with responsive text sizes */}
            <header className="text-center w-full">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                🪄 Free AI Background Remover
              </h1>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6 px-2">
                Remove backgrounds instantly with advanced AI technology. Perfect for product photos, portraits, and marketing materials.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm text-gray-400">
                <span className="bg-green-500/20 text-green-300 px-2 sm:px-3 py-1 rounded-full">100% Free</span>
                <span className="bg-blue-500/20 text-blue-300 px-2 sm:px-3 py-1 rounded-full">No Watermark</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 sm:px-3 py-1 rounded-full">HD Quality</span>
                <span className="bg-orange-500/20 text-orange-300 px-2 sm:px-3 py-1 rounded-full">Instant Download</span>
              </div>
            </header>

            {/* Hidden FAQ Schema for SEO */}
            <div itemScope itemType="https://schema.org/FAQPage" className="hidden">
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">How to remove background from image?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">Upload your image and our AI will automatically remove the background in seconds. Download your transparent PNG instantly.</div>
                </div>
              </div>
              <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <h3 itemProp="name">Is background removal really free?</h3>
                <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <div itemProp="text">Yes, our AI background remover is completely free with no hidden costs or watermarks.</div>
                </div>
              </div>
            </div>

            {/* Upload Box */}
            {!image && (
              <div className="w-full max-w-md">
                <UploadBox onUpload={handleUpload} setImage={setImage} />
              </div>
            )}

            {/* Image Preview */}
            {image && !output && !loading && (
              <div className="w-full text-center space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Image Preview</h2>
                  <img
                    src={image}
                    alt="Uploaded preview for background removal"
                    className="w-full max-w-sm sm:max-w-md mx-auto rounded-xl border border-white/20 shadow-lg object-contain"
                    style={{ maxHeight: 'min(400px, 50vh)' }}
                  />
                  <p className="text-gray-300 mt-3 sm:mt-4 text-sm">Processing will start automatically...</p>
                </div>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="w-full text-center space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 sm:p-6 border border-white/20">
                  <Loader />
                  <p className="text-gray-300 mt-3 sm:mt-4 text-sm">AI is removing your background... Please wait</p>
                </div>
              </div>
            )}

            {/* Processed Image */}
            {output && image && (
              <div className="w-full">
                <PreviewImage
                  input={image}
                  output={output}
                  onNewUpload={handleNewUpload}
                />
              </div>
            )}

            {/* Features Section - Responsive grid */}
            <div className="mt-6 sm:mt-8 w-full text-center px-2">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Why Choose Our Background Remover?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-center sm:text-left">
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold text-white text-lg mb-2">🚀 Lightning Fast</h3>
                  <p className="text-gray-300 text-sm">Remove backgrounds in seconds with our optimized AI technology</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold text-white text-lg mb-2">💎 Professional Quality</h3>
                  <p className="text-gray-300 text-sm">Perfect edges and clean cuts for ecommerce and professional use</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                  <h3 className="font-semibold text-white text-lg mb-2">🔒 Privacy First</h3>
                  <p className="text-gray-300 text-sm">Your images are processed securely and never stored on our servers</p>
                </div>
              </div>
            </div>

            {/* Additional SEO Content */}
            <div className="mt-6 sm:mt-8 w-full text-center text-gray-300 px-2 sm:px-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Free Online Background Remover Tool</h2>
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                <p>
                  Our advanced AI background removal tool helps you create professional transparent PNG images
                  instantly. Perfect for <strong className="text-white">ecommerce product photos</strong>, <strong className="text-white">social media content</strong>,
                  <strong className="text-white"> marketing materials</strong>, and <strong className="text-white">personal projects</strong>.
                </p>
                <p>
                  Unlike other background removers that charge per image or leave watermarks, our tool is
                  completely free with unlimited usage. Experience <strong className="text-white">studio-quality background removal</strong>
                  without the expensive software or complicated editing skills.
                </p>
                <p className="text-xs sm:text-sm bg-white/10 p-3 rounded-lg">
                  <strong>Supported formats:</strong> JPG, JPEG, PNG, WEBP | <strong>Max file size:</strong> 10MB | <strong>Output:</strong> High-quality PNG
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
