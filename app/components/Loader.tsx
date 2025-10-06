"use client";

interface LoaderProps {
  message?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "quantum";
}

export default function Loader({ message = "Processing...", size = "md", variant = "quantum" }: LoaderProps) {
  // Size configurations
  const sizeConfig = {
    sm: {
      container: "h-6 w-6",
      border: "border-t-2 border-b-2",
      quantum: "h-4 w-4",
      message: "text-sm"
    },
    md: {
      container: "h-12 w-12",
      border: "border-t-2 border-b-2",
      quantum: "h-6 w-6",
      message: "text-base"
    },
    lg: {
      container: "h-16 w-16",
      border: "border-t-3 border-b-3",
      quantum: "h-8 w-8",
      message: "text-lg"
    }
  };

  // Hidden SEO content for search engines
  const seoStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Background Remover - Loading Interface",
    "description": "Loading animation and progress indicator for AI background removal processing",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": "Web Browser"
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      {/* Hidden SEO Content for Search Engines */}
      <div className="hidden" aria-hidden="true">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoStructuredData) }}
        />

        <h1>AI Background Removal Processing Loader</h1>
        <h2>Real-time Progress Indicator for Image Processing</h2>
        <p>
          This loading animation indicates that our AI background removal system is actively processing
          your uploaded image. The quantum loader provides visual feedback during the artificial intelligence
          analysis and background extraction process. Our advanced AI algorithms are working to deliver
          perfect background removal with clean edges and professional results.
        </p>
        <p>
          The processing time varies based on image complexity and file size. Typical processing takes
          between 5-30 seconds depending on the image dimensions and complexity of the background.
          Our quantum-inspired loader animation represents the advanced neural network processing
          happening in real-time to remove backgrounds from your images automatically.
        </p>
        <ul>
          <li>Real-time AI processing indicator</li>
          <li>Quantum-inspired loading animation</li>
          <li>Multiple size variants for different contexts</li>
          <li>Accessible loading states for screen readers</li>
          <li>Smooth CSS animations for better user experience</li>
          <li>Professional loading feedback during background removal</li>
          <li>Optimized for fast processing visualization</li>
          <li>Mobile-responsive loading components</li>
        </ul>

        {/* Additional SEO keywords */}
        <div style={{ display: 'none' }}>
          <span>AI background removal processing</span>
          <span>image processing loader</span>
          <span>quantum loading animation</span>
          <span>AI processing indicator</span>
          <span>background removal progress</span>
          <span>neural network processing</span>
          <span>real-time image analysis</span>
          <span>loading state for photo editing</span>
          <span>processing feedback interface</span>
          <span>AI algorithm progress indicator</span>
        </div>
      </div>

      {/* Hidden FAQ Schema for Loading Process */}
      <div itemScope itemType="https://schema.org/FAQPage" className="hidden">
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">How long does AI background removal processing take?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Processing time typically ranges from 5 to 30 seconds depending on image complexity,
              file size, and server load. Our AI algorithms work efficiently to provide fast results
              while maintaining high-quality background removal accuracy.
            </div>
          </div>
        </div>
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">What happens during the AI processing phase?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              During processing, our AI analyzes your image using neural networks to identify the
              main subject and separate it from the background. The system detects edges, colors,
              and patterns to create a precise mask for clean background removal.
            </div>
          </div>
        </div>
        <div itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <h3 itemProp="name">Can I use the website while images are processing?</h3>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <div itemProp="text">
              Yes, the loading animation is non-blocking and you can navigate to other parts of the
              website. However, for best results, we recommend waiting for the current processing
              to complete before uploading additional images.
            </div>
          </div>
        </div>
      </div>

      {/* Quantum Variant Loader */}
      {variant === "quantum" ? (
        <div className="flex flex-col items-center justify-center space-y-4"
             role="status"
             aria-live="polite"
             aria-label={`AI processing: ${message}`}>
          {/* Quantum Orb Container */}
          <div className="relative">
            {/* Pulsing Quantum Field */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse ${sizeConfig[size].container}`}></div>

            {/* Main Quantum Orb */}
            <div className={`
              relative rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400
              shadow-2xl shadow-blue-500/30
              animate-quantum-float
              ${sizeConfig[size].quantum}
            `}>
              {/* Quantum Core Glow */}
              <div className="absolute inset-0 rounded-full bg-white/30 animate-ping"></div>

              {/* Quantum Particles */}
              <div className="absolute -inset-2 rounded-full border-2 border-blue-300/30 animate-spin"></div>
              <div className="absolute -inset-3 rounded-full border border-purple-300/20 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
            </div>

            {/* Orbiting Quantum Particles */}
            <div className="absolute -inset-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute rounded-full bg-cyan-400/60 shadow-lg shadow-cyan-400/30
                    animate-quantum-orbit ${size === 'sm' ? 'h-1 w-1' : size === 'md' ? 'h-2 w-2' : 'h-3 w-3'}`}
                  style={{
                    animationDelay: `${i * 0.5}s`,
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                />
              ))}
            </div>

            {/* Energy Waves */}
            <div className="absolute -inset-6 opacity-40">
              <div className="absolute inset-0 rounded-full border-2 border-blue-400/30 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute inset-0 rounded-full border border-purple-400/20 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              <div className="absolute inset-0 rounded-full border border-cyan-400/15 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>

          {/* Processing Text with AI Context */}
          <div className="text-center space-y-2">
            <p className={`font-semibold text-white ${sizeConfig[size].message}`}>
              {message}
            </p>
            <p className="text-xs text-gray-400 animate-pulse">
              AI Neural Network Processing...
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="h-1 w-1 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      ) : (
        // Default Spinner Variant
        <div className="flex flex-col items-center justify-center space-y-3"
             role="status"
             aria-live="polite"
             aria-label={`Processing: ${message}`}>
          <div className={`animate-spin rounded-full ${sizeConfig[size].container} ${sizeConfig[size].border} border-blue-400`}></div>
          <p className={`text-gray-300 ${sizeConfig[size].message}`}>{message}</p>
        </div>
      )}

      {/* Additional Hidden SEO Content */}
      <div className="hidden">
        <h3>Advanced Loading States for AI Image Processing</h3>
        <p>
          Our quantum loader component provides sophisticated visual feedback during AI-powered
          background removal processing. The animation represents the complex neural network
          computations happening in real-time to analyze your images and extract backgrounds
          with pixel-perfect precision.
        </p>
        <p>
          The loader is designed to keep users informed about processing progress while
          maintaining engagement during wait times. With multiple variants and size options,
          it adapts to different contexts within the background removal workflow from quick
          preview processing to full-resolution image analysis.
        </p>

        {/* Technical SEO Content */}
        <div>
          <span>AI image processing loader component</span>
          <span>quantum loading animation for web applications</span>
          <span>neural network processing indicator</span>
          <span>real-time AI computation feedback</span>
          <span>background removal progress animation</span>
          <span>advanced CSS loading states</span>
          <span>accessible loading components</span>
          <span>responsive loader design</span>
          <span>AI algorithm progress visualization</span>
          <span>modern web application loading patterns</span>
        </div>
      </div>

      {/* Add CSS animations for quantum variant */}
      <style jsx>{`
        @keyframes quantum-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.05); }
        }
        @keyframes quantum-orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        .animate-quantum-float {
          animation: quantum-float 2s ease-in-out infinite;
        }
        .animate-quantum-orbit {
          animation: quantum-orbit 2s linear infinite;
        }
      `}</style>
    </div>
  );
}
