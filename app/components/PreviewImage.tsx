"use client";

import { useState } from "react";
import Image from 'next/image';

interface PreviewImageProps {
  input: string;
  output: string;
  onNewUpload: () => void;
}

export default function PreviewImage({ input, output, onNewUpload }: PreviewImageProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);

    // Simulate download process
    await new Promise(resolve => setTimeout(resolve, 800));

    const link = document.createElement("a");
    link.href = output;
    link.download = `bg-removed-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsDownloading(false);
  };

  const handleNewUploadWithEffect = (event: React.MouseEvent) => {
    // Add a subtle animation before calling the function
    const button = event.currentTarget;
    button.classList.add('scale-95');
    setTimeout(() => {
      onNewUpload();
    }, 150);
  };

  return (
    <div className="flex flex-col gap-8 items-center w-full animate-fadeIn">
      {/* Enhanced Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/10 rounded-2xl border border-green-400/30">
          <span className="text-2xl animate-bounce">✨</span>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
            Magic Complete!
          </h2>
          <span className="text-2xl animate-bounce delay-150">🎉</span>
        </div>
        <p className="text-gray-300 text-lg font-light">
          Background removed with AI precision
        </p>
      </div>

      {/* Enhanced Image Comparison */}
      <div className="w-full space-y-8">
        {/* Image Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Original Image Card */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Original Image</h3>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-black/20 rounded-xl p-3 border border-white/10 relative h-64 md:h-80">
                <Image
                  src={input}
                  alt="Original image before background removal"
                  fill
                  className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Processed Image Card */}
          <div className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-green-400/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:scale-[1.02]">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="text-lg font-semibold text-white">Background Removed</h3>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div className="bg-black/20 rounded-xl p-3 border border-green-400/20 relative h-64 md:h-80">
                <Image
                  src={output}
                  alt="Processed image with background removed"
                  fill
                  className="rounded-lg object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Indicator */}
        <div className="flex items-center justify-center gap-4 text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
            <span className="text-sm">Original</span>
          </div>
          <div className="text-xl">→</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <span className="text-sm">Processed</span>
          </div>
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        {/* Download Button */}
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex-1 group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 disabled:from-blue-700 disabled:to-purple-800 text-white rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/25 font-semibold flex items-center justify-center gap-3 disabled:cursor-not-allowed"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

          {isDownloading ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
              <span className="relative z-10">Downloading...</span>
            </>
          ) : (
            <>
              <span className="text-xl relative z-10">💾</span>
              <span className="relative z-10">Download Magic</span>
            </>
          )}
        </button>

        {/* New Upload Button */}
        <button
          onClick={handleNewUploadWithEffect}
          className="flex-1 group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-gray-500/25 font-semibold flex items-center justify-center gap-3"
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>

          <span className="text-xl relative z-10">🔄</span>
          <span className="relative z-10">New Magic</span>
        </button>
      </div>

      {/* Success Badge */}
      <div className="px-6 py-3 bg-green-500/10 border border-green-400/30 rounded-2xl backdrop-blur-sm">
        <p className="text-green-400 font-medium text-sm flex items-center gap-2">
          <span className="text-lg">✅</span>
          Ready for your next creative project!
        </p>
      </div>
    </div>
  );
}
