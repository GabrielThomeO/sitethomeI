import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Chales() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images extracted from Figma design for Chalés in exact order and positioning
  const charesImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6b4aaea6d359bf71f056bd3116ded607f00ba8f?width=2304",
      width: 1152,
      height: 768,
      left: 100,
      top: 74,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccd5bb6fd5dc7da082bc88703da09007db5577f9?width=3435",
      width: 1718,
      height: 1145,
      left: 100,
      top: 894,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/89d46d67e416b7504d7e1b98a891ee74f61ef4ad?width=1024",
      width: 512,
      height: 770,
      left: 100,
      top: 2092,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/580ed2699d5e39f4eb4b8814ea16bc64658ef643?width=2313",
      width: 1157,
      height: 771,
      left: 663,
      top: 2092,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfe29e15d177778bc23237b86eed5c61a23cf64d?width=2304",
      width: 1152,
      height: 768,
      left: 100,
      top: 2909,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6011eae4c2e4b7d1a435a595acf1d7aaf3114ad4?width=1023",
      width: 511,
      height: 769,
      left: 1307,
      top: 2908,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5033ccb0ced88dcb8f01248da276e555ec4d8778?width=3438",
      width: 1719,
      height: 1146,
      left: 100,
      top: 3729,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ab56ca7d511029da9336cf17757ada2c24f6f1e?width=3438",
      width: 1719,
      height: 1146,
      left: 100,
      top: 4925,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c38245c548b312750a30e7472147255d64321ec8?width=1024",
      width: 512,
      height: 770,
      left: 100,
      top: 6120,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/014251587ecaf26cc42b154e5ff91de1969f65d1?width=2307",
      width: 1154,
      height: 769,
      left: 666,
      top: 6121,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/406b99c61c72be711e7cc2994e2079ac41315629?width=2307",
      width: 1154,
      height: 769,
      left: 100,
      top: 6938,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e3a7dd57976fe540a78e6be5e6b0964a1245c94?width=1023",
      width: 511,
      height: 769,
      left: 1307,
      top: 6938,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98c2afebfdae8ad84d3862b189c6ae04e210a85b?width=3438",
      width: 1719,
      height: 1146,
      left: 100,
      top: 7755,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fb3ccd9fa6ddbbcab50cee95a0075f5c0fc7ec3?width=1042",
      width: 521,
      height: 769,
      left: 100,
      top: 8949,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360aa26207d9aeacdb26836216953f6c4cab0?width=2307",
      width: 1154,
      height: 769,
      left: 667,
      top: 8951,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/893e73aa3e92c1c5207a5f52df6116bb95b59f44?width=3438",
      width: 1719,
      height: 1146,
      left: 100,
      top: 9768,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e1e23a2775251698f01ca05481afe32473ee50f?width=3438",
      width: 1719,
      height: 1146,
      left: 100,
      top: 10984,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/44b9cd028e226dc75c82035833b685994fd2211d?width=1042",
      width: 521,
      height: 769,
      left: 100,
      top: 12201,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8ec16dbe13a215165748de2136557dffde652b?width=2304",
      width: 1152,
      height: 769,
      left: 667,
      top: 12203,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/82630da6be8e7494ba3e4fadfcb8af63e28330e9?width=3438",
      width: 1719,
      height: 1146,
      left: 100,
      top: 13024,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e098f2be5215419c3a32998173c24261f1e3cab?width=1024",
      width: 512,
      height: 770,
      left: 1307,
      top: 74,
      borderRadius: 57,
    },
  ];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % charesImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(charesImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + charesImages.length) % charesImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(charesImages[prevIndex].src);
  };

  return (
    <div className="min-h-screen bg-thome-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-black/75 h-11">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8059895daabedcbb55aae72740eb18def1b42aaf?width=242"
            alt="Thomé Logo"
            className="h-11 w-auto mt-1 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          />
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
            <a
              href="/"
              className="font-bebas text-white text-sm sm:text-lg lg:text-2xl tracking-wider text-stroke-white-thin hover:text-gray-300 transition-colors"
            >
              início
            </a>
            <a
              href="/interiores"
              className="font-bebas text-white text-sm sm:text-lg lg:text-2xl tracking-wider text-stroke-white-thin hover:text-gray-300 transition-colors"
            >
              interiores
            </a>
            <a
              href="/arquitetura"
              className="font-bebas text-white text-sm sm:text-lg lg:text-2xl tracking-wider text-stroke-white-thin hover:text-gray-300 transition-colors"
            >
              arquitetura
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <h1 className="font-bebas text-white text-6xl md:text-8xl tracking-widest text-stroke-white text-center mb-12">
            CHALÉS
          </h1>

          {/* Desktop Layout - Pixel Perfect Figma */}
          <div
            className="hidden lg:block relative mx-auto overflow-hidden"
            style={{
              width: "800px",
              height: "5704px",
              transform: "scale(0.35)",
              transformOrigin: "top center",
              maxWidth: "85vw",
            }}
          >
            {charesImages.map((image, index) => (
              <div
                key={index}
                className="absolute cursor-pointer group transition-transform hover:scale-105"
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`,
                  left: `${image.left - 300}px`, // Larger negative offset to move left
                  top: `${image.top}px`,
                }}
                onClick={() => openModal(image.src, index)}
              >
                <img
                  src={image.src}
                  alt={`Chalé projeto ${index + 1}`}
                  className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                  style={{
                    borderRadius: `${image.borderRadius}px`,
                    border: "4px solid #DFDCD4",
                  }}
                />
                <div
                  className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"
                  style={{ borderRadius: `${image.borderRadius}px` }}
                ></div>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden">
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {charesImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group cursor-pointer transition-transform hover:scale-105 mb-4"
                  onClick={() => openModal(image.src, index)}
                >
                  <div className="relative overflow-hidden rounded-[30px] md:rounded-[55px] border-2 md:border-4 border-thome-light">
                    <img
                      src={image.src}
                      alt={`Chalé projeto ${index + 1}`}
                      className="w-full h-auto object-cover group-hover:brightness-110 transition-all"
                      style={{ aspectRatio: `${image.width}/${image.height}` }}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            >
              <ChevronRight size={32} />
            </button>

            <img
              src={selectedImage}
              alt="Chalé projeto expandido"
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white">
              {currentImageIndex + 1} / {charesImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
