"use client";

import { useState, useRef, useCallback } from "react";

interface UploadBoxProps {
  onUpload: (file: File) => void;
  setImage: (url: string) => void;
}

export default function UploadBox({ onUpload, setImage }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileInfo, setFileInfo] = useState<{ name: string; size: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Hidden SEO content for search engines
  const seoStructuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "name": "AI Background Remover Upload Interface",
    "description": "Upload interface for removing backgrounds from images using artificial intelligence",
    "acquireLicensePage": "https://removebgpro.com/terms",
    "usageInfo": "https://removebgpro.com/privacy"
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      alert('File size too large. Please upload an image smaller than 50MB');
      return;
    }

    const url = URL.createObjectURL(file);
    setImage(url);
    setPreview(url);
    setFileInfo({
      name: file.name,
      size: formatFileSize(file.size)
    });
    onUpload(file);
  }, [onUpload, setImage]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreview(null);
    setFileInfo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      {/* Hidden SEO Content for Search Engines */}
      <div className="hidden" aria-hidden="true">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoStructuredData) }}
        />

        <h1>Image Upload for Background Removal</h1>
        <h2>Upload Interface for AI Background Remover Tool</h2>
        <p>
          Upload your images to remove backgrounds automatically using our advanced AI technology.
          This upload interface supports multiple image formats including PNG, JPG, JPEG, and WEBP
          files up to 50MB in size. The drag-and-drop functionality makes it easy to upload product
          photos, portrait images, or any picture where you need the background removed.
        </p>
        <p>
          Our background remover upload process is secure, fast, and user-friendly. Simply drag your
          image file into the upload area or click to browse your computer. The system will
          automatically process your image and prepare it for background removal using artificial
          intelligence algorithms.
        </p>
        <ul>
          <li>Drag and drop image upload functionality</li>
          <li>Support for PNG, JPG, JPEG, WEBP formats</li>
          <li>Maximum file size: 50MB</li>
          <li>Instant image preview</li>
          <li>Secure file processing</li>
          <li>Mobile-friendly upload interface</li>
          <li>Fast upload speeds</li>
          <li>Automatic format validation</li>
        </ul>

        {/* Additional SEO keywords */}
        <div style={{ display: 'none' }}>
          <span>upload image for background removal</span>
          <span>drag and drop image upload</span>
          <span>image upload interface</span>
          <span>photo upload for bg removal</span>
          <span>online image upload tool</span>
          <span>free image upload for editing</span>
          <span>upload product photos</span>
          <span>portrait image upload</span>
          <span>ecommerce image upload</span>
          <span>social media photo upload</span>
        </div>
      </div>

      {/* Hidden FAQ Schema for Upload Process */}
      <div itemScope itemType="https://schema.org/FAQPage" className="hidden">
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">How do I upload an image for background removal?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              You can upload an image by dragging and dropping it into the upload area or clicking
              to browse your computer. Supported formats include PNG, JPG, JPEG, and WEBP with
              maximum file size of 50MB.
            </div>
          </div>
        </div>
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">What image formats are supported for background removal?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Our background remover supports PNG, JPG, JPEG, and WEBP image formats. These are
              the most common image formats used for photography, product images, and web content.
            </div>
          </div>
        </div>
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">Is there a file size limit for uploaded images?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, the maximum file size for uploaded images is 50MB. This ensures fast processing
              times and optimal performance for all users.
            </div>
          </div>
        </div>
      </div>

      {/* Main Upload Component */}
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative border-2 border-dashed rounded-3xl p-12 text-center w-full
          backdrop-blur-2xl cursor-pointer transition-all duration-500 ease-out
          group hover:scale-[1.02] active:scale-[0.99]
          ${
            isDragging
              ? 'border-cyan-400/60 bg-cyan-500/10 shadow-2xl shadow-cyan-500/25'
              : preview
              ? 'border-emerald-400/40 bg-emerald-500/5 shadow-2xl'
              : 'border-white/30 bg-white/5 hover:border-cyan-400/40 hover:bg-cyan-500/5 shadow-2xl'
          }
        `}
        role="button"
        aria-label="Upload image for background removal"
        title="Click or drag and drop to upload image"
        itemScope
        itemType="https://schema.org/UploadAction"
      >
        {/* Background Glow Effect */}
        <div className={`
          absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-white/5 to-transparent
          transition-all duration-500
          ${isDragging ? 'opacity-100' : 'opacity-50'}
        `}></div>

        {/* Animated Border Glow */}
        <div className={`
          absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
          opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500
          ${isDragging ? 'opacity-30' : ''}
        `}></div>

        {preview ? (
          <div className="relative z-10 space-y-6">
            {/* Success Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                  <span className="text-3xl">✨</span>
                </div>
                <div className="absolute -inset-2 bg-emerald-400/20 rounded-2xl blur-lg -z-10"></div>
              </div>
            </div>

            {/* File Info */}
            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">
                Image Ready for Processing!
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <p className="text-white font-semibold truncate">
                  {fileInfo?.name}
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  {fileInfo?.size}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-center">
              <button
                onClick={handleClick}
                className="px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-2xl transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
                aria-label="Change uploaded image"
              >
                Change Image
              </button>
              <button
                onClick={handleRemove}
                className="px-6 py-3 bg-red-500/10 hover:bg-red-500/15 border border-red-400/30 text-red-300 rounded-2xl transition-all duration-300 hover:scale-105 font-semibold backdrop-blur-sm"
                aria-label="Remove uploaded image"
              >
                Remove
              </button>
            </div>
          </div>
        ) : (
          <div className="relative z-10 space-y-6">
            {/* Upload Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-4xl">📁</span>
                </div>
                <div className="absolute -inset-3 bg-blue-400/20 rounded-3xl blur-xl -z-10 group-hover:blur-2xl transition-all duration-500"></div>

                {/* Plus Icon */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-white/20">
                  <span className="text-lg">+</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-3">
              <h3 className="text-2xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                {isDragging ? 'DROP TO UPLOAD' : 'UPLOAD IMAGE'}
              </h3>
              <p className="text-gray-300 text-lg">
                Drag & drop or click to browse
              </p>
              <div className="flex justify-center gap-4 text-sm text-gray-400">
                <span>PNG, JPG, WEBP</span>
                <span>•</span>
                <span>MAX 50MB</span>
              </div>
            </div>

            {/* Upload Button */}
            <button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 font-bold text-lg"
              aria-label="Browse files to upload image"
            >
              Browse Files
            </button>
          </div>
        )}

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
          aria-hidden="true"
        />

        {/* Drag & Drop Indicator */}
        {isDragging && (
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
            <div className="text-center space-y-3">
              <div className="text-4xl">🎯</div>
              <p className="text-white font-bold text-lg">Drop your image here</p>
            </div>
          </div>
        )}

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/40 rounded-full animate-float"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${30 + (i * 5)}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + i}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-6 text-center space-y-2">
        <p className="text-gray-400 text-sm">
          Supported formats: <span className="text-cyan-400">PNG, JPG, JPEG, WEBP</span>
        </p>
        <p className="text-gray-400 text-sm">
          Maximum file size: <span className="text-cyan-400">50MB</span>
        </p>
      </div>

      {/* Additional Hidden SEO Content */}
      <div className="hidden">
        <h3>Image Upload Features for Background Removal</h3>
        <p>
          Our upload interface is optimized for background removal tasks with support for high-quality
          images up to 50MB. The system automatically validates file formats and provides instant
          previews to ensure your images are ready for AI-powered background removal processing.
        </p>
        <p>
          Whether you're uploading product photos for ecommerce, portrait images for professional
          use, or personal photos for social media, our upload system handles all image types with
          secure processing and fast upload speeds.
        </p>

        {/* Keyword-rich hidden content */}
        <div>
          <span>upload images for AI background removal</span>
          <span>free image upload service</span>
          <span>secure file upload for photo editing</span>
          <span>drag drop image upload interface</span>
          <span>online photo upload for bg removal</span>
          <span>image upload for transparent background</span>
          <span>upload product images for ecommerce</span>
          <span>portrait photo upload for editing</span>
          <span>social media image upload tool</span>
          <span>professional photo upload service</span>
        </div>
      </div>
    </div>
  );
}
