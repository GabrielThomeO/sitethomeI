import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Arquitetura() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images from Figma design for Arquitetura
  const arquiteturaImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/88246080a54e1581a440562a58acc01899175315?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/57c95b62f0febb70e07893cbda9b7a681645ad9a?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/160b1285efc2c89d36dce13da2415db428e14ac4?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d0d9f5835caa80301a12e4876121dbf6f4469baf?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/f1a6029de5bf9f9397282e5c2e25613a7c889f32?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6a76aff730b4cdda88b9a56caad0d8d156bd91c9?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3981e91e467ca8c44c5786225c1e0d9354099a5d?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/35d2c94ac633794889e17223e3b1789e089b362d?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ad4b561c25dbd9356e91d8c0bac1aaabbac40795?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3d457dbf2237432e8fb069bfcdb01e2388645cec?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/197181799ab7e52915cd12fecff7e20e460b0fc3?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/3cc588e16fe631f9ab20c89369c248b26e7430f7?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8a1b4b62c45250700b885990eb3ec0af24cfdcce?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c1097775178499a3516a82f3178301e972517c74?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9912e70d12b2cdc29f3af86789011ab9f566c8ce?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2b2cd0bab5cb0a13fd259a5f3bb6ee0e48c017e7?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b9f1ea1378515b21cc06c4a8971598687a3b2aec?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/448e7b91fcbd125d46bf7591df0803263e04c3af?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/5fafb090cdc6a13dee21a52c5f7c14f2b6109956?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/51d69a304ba98f1e80d2ea4ddbd69de631d2cc60?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/ae59830eef95fac30145e2d91480b79155410766?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/9da99e99f7d40b95f29384f223b4f313338b4872?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c682e45f8e4de09293f07544860a0ceaf4a6bed9?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/da1fffe3c6672301de060002e189615920de26c3?width=2400",
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
    setSelectedImage(arquiteturaImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + arquiteturaImages.length) %
      arquiteturaImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(arquiteturaImages[prevIndex]);
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
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              início
            </a>
            <a
              href="/chales"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              chalés
            </a>
            <a
              href="/interiores"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              interiores
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <h1 className="font-bebas text-white text-6xl md:text-8xl tracking-widest text-stroke-white text-center mb-12">
            ARQUITETURA
          </h1>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {arquiteturaImages.map((image, index) => {
              // Determine layout based on index pattern from Figma
              const isLarge = index % 9 === 2 || index % 9 === 6; // Large images
              const isTall = index % 7 === 1 || index % 7 === 4; // Tall images

              return (
                <div
                  key={index}
                  className={`
                    group cursor-pointer transition-transform hover:scale-105
                    ${isLarge ? "lg:col-span-2" : ""}
                    ${isTall ? "lg:row-span-2" : ""}
                  `}
                  onClick={() => openModal(image, index)}
                >
                  <div className="relative overflow-hidden rounded-[30px] md:rounded-[55px] border-2 md:border-4 border-thome-light">
                    <img
                      src={image}
                      alt={`Arquitetura projeto ${index + 1}`}
                      className={`
                        w-full object-cover group-hover:brightness-110 transition-all
                        ${isTall ? "h-64 md:h-96 lg:h-[500px]" : "h-48 md:h-64 lg:h-72"}
                        ${isLarge ? "lg:h-72" : ""}
                      `}
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-2 text-white hover:bg-black/70 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
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

            {/* Image */}
            <img
              src={selectedImage}
              alt="Arquitetura projeto expandido"
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white">
              {currentImageIndex + 1} / {arquiteturaImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
