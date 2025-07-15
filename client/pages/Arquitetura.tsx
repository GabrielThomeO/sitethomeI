import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Arquitetura() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images extracted from Figma design for Arquitetura in exact order and positioning
  const arquiteturaImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/57c95b62f0febb70e07893cbda9b7a681645ad9a?width=2310",
      width: 1155,
      height: 770,
      left: 99,
      top: 96,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/88246080a54e1581a440562a58acc01899175315?width=1028",
      width: 514,
      height: 773,
      left: 1309,
      top: 96,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/160b1285efc2c89d36dce13da2415db428e14ac4?width=3446",
      width: 1723,
      height: 1149,
      left: 99,
      top: 918,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0d9f5835caa80301a12e4876121dbf6f4469baf?width=1026",
      width: 513,
      height: 773,
      left: 99,
      top: 2120,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f1a6029de5bf9f9397282e5c2e25613a7c889f32?width=2316",
      width: 1158,
      height: 773,
      left: 664,
      top: 2120,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6a76aff730b4cdda88b9a56caad0d8d156bd91c9?width=1028",
      width: 514,
      height: 773,
      left: 1309,
      top: 2937,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3981e91e467ca8c44c5786225c1e0d9354099a5d?width=2314",
      width: 1157,
      height: 771,
      left: 99,
      top: 2938,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/35d2c94ac633794889e17223e3b1789e089b362d?width=3448",
      width: 1724,
      height: 1150,
      left: 99,
      top: 3761,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad4b561c25dbd9356e91d8c0bac1aaabbac40795?width=3448",
      width: 1724,
      height: 1150,
      left: 99,
      top: 4960,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3d457dbf2237432e8fb069bfcdb01e2388645cec?width=2314",
      width: 1157,
      height: 771,
      left: 99,
      top: 6160,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/197181799ab7e52915cd12fecff7e20e460b0fc3?width=1028",
      width: 514,
      height: 773,
      left: 1309,
      top: 6160,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3cc588e16fe631f9ab20c89369c248b26e7430f7?width=1028",
      width: 514,
      height: 773,
      left: 99,
      top: 6979,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8a1b4b62c45250700b885990eb3ec0af24cfdcce?width=2312",
      width: 1156,
      height: 770,
      left: 667,
      top: 6980,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c1097775178499a3516a82f3178301e972517c74?width=3446",
      width: 1723,
      height: 1149,
      left: 99,
      top: 7800,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9912e70d12b2cdc29f3af86789011ab9f566c8ce?width=2310",
      width: 1155,
      height: 770,
      left: 99,
      top: 8999,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b2cd0bab5cb0a13fd259a5f3bb6ee0e48c017e7?width=1028",
      width: 514,
      height: 773,
      left: 1309,
      top: 8998,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9f1ea1378515b21cc06c4a8971598687a3b2aec?width=3448",
      width: 1724,
      height: 1149,
      left: 99,
      top: 9818,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/448e7b91fcbd125d46bf7591df0803263e04c3af?width=1012",
      width: 506,
      height: 773,
      left: 99,
      top: 11013,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fafb090cdc6a13dee21a52c5f7c14f2b6109956?width=2310",
      width: 1155,
      height: 770,
      left: 667,
      top: 11015,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/51d69a304ba98f1e80d2ea4ddbd69de631d2cc60?width=2312",
      width: 1156,
      height: 771,
      left: 99,
      top: 11825,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ae59830eef95fac30145e2d91480b79155410766?width=1028",
      width: 514,
      height: 773,
      left: 1309,
      top: 11825,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9da99e99f7d40b95f29384f223b4f313338b4872?width=1128",
      width: 564,
      height: 772,
      left: 99,
      top: 12645,
      borderRadius: 57,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c682e45f8e4de09293f07544860a0ceaf4a6bed9?width=2312",
      width: 1156,
      height: 770,
      left: 668,
      top: 12645,
      borderRadius: 55,
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da1fffe3c6672301de060002e189615920de26c3?width=3446",
      width: 1723,
      height: 1149,
      left: 99,
      top: 13465,
      borderRadius: 55,
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
    const nextIndex = (currentImageIndex + 1) % arquiteturaImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(arquiteturaImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + arquiteturaImages.length) %
      arquiteturaImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(arquiteturaImages[prevIndex].src);
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
              href="/chales"
              className="font-bebas text-white text-sm sm:text-lg lg:text-2xl tracking-wider text-stroke-white-thin hover:text-gray-300 transition-colors"
            >
              chalés
            </a>
            <a
              href="/interiores"
              className="font-bebas text-white text-sm sm:text-lg lg:text-2xl tracking-wider text-stroke-white-thin hover:text-gray-300 transition-colors"
            >
              interiores
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Header */}
          <h1 className="font-bebas text-white text-6xl md:text-8xl tracking-widest text-stroke-white text-center mb-12">
            ARQUITETURA
          </h1>

          {/* Desktop Layout - Pixel Perfect Figma */}
          <div
            className="hidden lg:block relative mx-auto overflow-hidden"
            style={{
              width: "1400px",
              height: "10591px",
              transform: "scale(0.65)",
              transformOrigin: "top center",
              maxWidth: "100vw",
            }}
          >
            {arquiteturaImages.map((image, index) => (
              <div
                key={index}
                className="absolute cursor-pointer group transition-transform hover:scale-105"
                style={{
                  width: `${image.width}px`,
                  height: `${image.height}px`,
                  left: `${image.left + 200}px`, // Center offset
                  top: `${image.top}px`,
                }}
                onClick={() => openModal(image.src, index)}
              >
                <img
                  src={image.src}
                  alt={`Arquitetura projeto ${index + 1}`}
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
              {arquiteturaImages.map((image, index) => (
                <div
                  key={index}
                  className="break-inside-avoid group cursor-pointer transition-transform hover:scale-105 mb-4"
                  onClick={() => openModal(image.src, index)}
                >
                  <div className="relative overflow-hidden rounded-[30px] md:rounded-[55px] border-2 md:border-4 border-thome-light">
                    <img
                      src={image.src}
                      alt={`Arquitetura projeto ${index + 1}`}
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
              alt="Arquitetura projeto expandido"
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white">
              {currentImageIndex + 1} / {arquiteturaImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
