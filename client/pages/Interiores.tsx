import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Interiores() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images from Figma design for Interiores
  const interioresImages = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b65091fef61c25f0c197befd12b2f84d9500a384?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/35164df5a73b3673a98ad7803fcb2fd0dbb0be26?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8bcab94abeb1248abf2c2251a3e9bf9605312059?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/6d6ad356a046e0369b000113325007c6c0da875e?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7e28bd94df86033a1aca2d8746c9832e7026cb5b?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/32670e764f09c8663d09c2e5bf18afb7af7cc586?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/8d1b623c8ce0af8e03f75a75c43865336e1ba2ad?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7c6462d85d6df63d74f8c77b579f457f05828de4?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/03a8475386efe4f0351922f02725c81edc81d193?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/a93228332d6ff63c6b7959349ae98478bdc41c16?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1fa1730531b3dc92c7a0d6f863f6a99f383566dd?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7d3c481e0dbb4852c5b3306b708d6045f8a0736e?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/7e67e5adf4b690bb89608dfbb265724ad46aff2f?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b70e49d7fd4c13a5b750416fd2fa33471c83fac8?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/63dd829456798235fa2d662e0ee1bdf1916cfb84?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/34a0a53b977da9c1262d2bb179cbc09f020131f0?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/411ec9692155ab7b7620908231542c03a7bff88f?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b4e77365cb25e4894bb2a280c110d5977715da24?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/392577d1a620f3cf76529879b0f4a27e3580453d?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/209d6ec8a795e8afa99d103ceb60d7cb105d2498?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/b6c81d86cce8e749c9d1db21fc6452db098a2e3a?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c6999a74ab66f9e71fc3112ac9a5c9ba035aefb1?width=2400",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/d218e2cfbb9fa9fb64a69f8d3ab8f6e640c73690?width=2400",
  ];

  const openModal = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % interioresImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(interioresImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex =
      (currentImageIndex - 1 + interioresImages.length) %
      interioresImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(interioresImages[prevIndex]);
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
              href="/arquitetura"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              arquitetura
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <h1 className="font-bebas text-white text-6xl md:text-8xl tracking-widest text-stroke-white text-center mb-12">
            INTERIORES
          </h1>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {interioresImages.map((image, index) => {
              // Determine layout based on index pattern from Figma
              const isLarge = index % 8 === 1 || index % 8 === 5; // Large images
              const isTall = index % 5 === 0 || index % 5 === 2; // Tall images

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
                      alt={`Interior projeto ${index + 1}`}
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
              alt="Interior projeto expandido"
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full px-4 py-2 text-white">
              {currentImageIndex + 1} / {interioresImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
