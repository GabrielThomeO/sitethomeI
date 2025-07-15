import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Chales() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images extracted from Figma design for Chalés in exact order and positioning
  const charesImages = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6b4aaea6d359bf71f056bd3116ded607f00ba8f?width=2304",
      size: "medium", // 1152x768
      position: { row: 1, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e098f2be5215419c3a32998173c24261f1e3cab?width=1024",
      size: "tall", // 512x770
      position: { row: 1, col: 3 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ccd5bb6fd5dc7da082bc88703da09007db5577f9?width=3435",
      size: "wide", // 1718x1145
      position: { row: 2, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/89d46d67e416b7504d7e1b98a891ee74f61ef4ad?width=1024",
      size: "tall", // 512x770
      position: { row: 3, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/580ed2699d5e39f4eb4b8814ea16bc64658ef643?width=2313",
      size: "medium", // 1157x771
      position: { row: 3, col: 2 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cfe29e15d177778bc23237b86eed5c61a23cf64d?width=2304",
      size: "medium", // 1152x768
      position: { row: 4, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6011eae4c2e4b7d1a435a595acf1d7aaf3114ad4?width=1023",
      size: "tall", // 511x769
      position: { row: 4, col: 3 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5033ccb0ced88dcb8f01248da276e555ec4d8778?width=3438",
      size: "wide", // 1719x1146
      position: { row: 5, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ab56ca7d511029da9336cf17757ada2c24f6f1e?width=3438",
      size: "wide", // 1719x1146
      position: { row: 6, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c38245c548b312750a30e7472147255d64321ec8?width=1024",
      size: "tall", // 512x770
      position: { row: 7, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/014251587ecaf26cc42b154e5ff91de1969f65d1?width=2307",
      size: "medium", // 1154x769
      position: { row: 7, col: 2 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/406b99c61c72be711e7cc2994e2079ac41315629?width=2307",
      size: "medium", // 1154x769
      position: { row: 8, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e3a7dd57976fe540a78e6be5e6b0964a1245c94?width=1023",
      size: "tall", // 511x769
      position: { row: 8, col: 3 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98c2afebfdae8ad84d3862b189c6ae04e210a85b?width=3438",
      size: "wide", // 1719x1146
      position: { row: 9, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fb3ccd9fa6ddbbcab50cee95a0075f5c0fc7ec3?width=1042",
      size: "tall", // 521x769
      position: { row: 10, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b9e360aa26207d9aeacdb26836216953f6c4cab0?width=2307",
      size: "medium", // 1154x769
      position: { row: 10, col: 2 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/893e73aa3e92c1c5207a5f52df6116bb95b59f44?width=3438",
      size: "wide", // 1719x1146
      position: { row: 11, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0e1e23a2775251698f01ca05481afe32473ee50f?width=3438",
      size: "wide", // 1719x1146
      position: { row: 12, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/44b9cd028e226dc75c82035833b685994fd2211d?width=1042",
      size: "tall", // 521x769
      position: { row: 13, col: 1 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/6f8ec16dbe13a215165748de2136557dffde652b?width=2304",
      size: "medium", // 1152x769
      position: { row: 13, col: 2 },
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/82630da6be8e7494ba3e4fadfcb8af63e28330e9?width=3438",
      size: "wide", // 1719x1146
      position: { row: 14, col: 1 },
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
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              início
            </a>
            <a
              href="/interiores"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              interiores
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
        <div className="container mx-auto px-4 max-w-[1920px]">
          {/* Header */}
          <h1 className="font-bebas text-white text-6xl md:text-8xl tracking-widest text-stroke-white text-center mb-12">
            CHALÉS
          </h1>

          {/* Figma-accurate masonry layout */}
          <div className="relative">
            {/* Desktop layout */}
            <div className="hidden lg:block">
              <div className="relative w-full" style={{ height: "14255px" }}>
                {charesImages.map((image, index) => {
                  let width, height, left, top;

                  // Extract exact positions and sizes from Figma
                  if (image.size === "wide") {
                    width = image.src.includes("1718") ? "1718px" : "1719px";
                    height = image.src.includes("1145") ? "1145px" : "1146px";
                    left = "100px";
                  } else if (image.size === "tall") {
                    width = image.src.includes("512")
                      ? "512px"
                      : image.src.includes("511")
                        ? "511px"
                        : "521px";
                    height = image.src.includes("770") ? "770px" : "769px";
                    left =
                      index === 1
                        ? "1307px"
                        : index === 6
                          ? "1307px"
                          : index === 12
                            ? "1307px"
                            : "100px";
                  } else {
                    width = image.src.includes("1157")
                      ? "1157px"
                      : image.src.includes("1154")
                        ? "1154px"
                        : "1152px";
                    height = image.src.includes("771")
                      ? "771px"
                      : image.src.includes("769")
                        ? "769px"
                        : "768px";
                    left =
                      index === 4
                        ? "663px"
                        : index === 10
                          ? "666px"
                          : index === 15
                            ? "667px"
                            : index === 19
                              ? "667px"
                              : "100px";
                  }

                  // Calculate top position based on index
                  const topPositions = [
                    74, 74, 894, 2092, 2092, 2909, 2908, 3729, 4925, 6120, 6121,
                    6938, 6938, 7755, 8949, 8951, 9768, 10984, 12201, 12203,
                    13024,
                  ];
                  top = `${topPositions[index]}px`;

                  return (
                    <div
                      key={index}
                      className="absolute cursor-pointer group transition-transform hover:scale-105"
                      style={{ width, height, left, top }}
                      onClick={() => openModal(image.src, index)}
                    >
                      <img
                        src={image.src}
                        alt={`Chalé projeto ${index + 1}`}
                        className="w-full h-full object-cover rounded-[55px] border-4 border-thome-light group-hover:brightness-110 transition-all"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all rounded-[55px]"></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Mobile/Tablet responsive grid */}
            <div className="lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {charesImages.map((image, index) => (
                  <div
                    key={index}
                    className={`
                      group cursor-pointer transition-transform hover:scale-105
                      ${image.size === "wide" ? "sm:col-span-2" : ""}
                    `}
                    onClick={() => openModal(image.src, index)}
                  >
                    <div className="relative overflow-hidden rounded-[30px] md:rounded-[55px] border-2 md:border-4 border-thome-light">
                      <img
                        src={image.src}
                        alt={`Chalé projeto ${index + 1}`}
                        className={`
                          w-full object-cover group-hover:brightness-110 transition-all
                          ${image.size === "tall" ? "h-80 md:h-96" : image.size === "wide" ? "h-48 md:h-64" : "h-56 md:h-72"}
                        `}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                    </div>
                  </div>
                ))}
              </div>
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
