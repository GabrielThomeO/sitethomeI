export default function Interiores() {
  return (
    <div className="min-h-screen bg-thome-dark pt-22">
      {/* Sticky Navigation Placeholder */}
      <nav className="fixed top-0 w-full z-50 bg-black/75 h-22">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8059895daabedcbb55aae72740eb18def1b42aaf?width=242"
            alt="Thomé Logo"
            className="h-22 w-auto"
          />
          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="/"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              início
            </a>
            <a
              href="#conceitos"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              conceitos
            </a>
            <a
              href="#projetos"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              projetos
            </a>
            <a
              href="#produtos"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              produtos
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-20">
        <h1 className="font-bebas text-white text-8xl tracking-widest text-stroke-white text-center mb-16">
          INTERIORES
        </h1>

        {/* Project Gallery */}
        <div className="mb-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2Fb0c91363d9614006840a1cc94e0b260b?format=webp&width=800"
            alt="Projetos de Interiores"
            className="w-full h-auto rounded-lg border-4 border-thome-light"
          />
        </div>

        <div className="text-center">
          <p className="text-white font-vietnam text-2xl mb-8">
            Design de interiores sustentável com foco em funcionalidade e
            bem-estar
          </p>
          <a
            href="/"
            className="inline-block bg-thome-light hover:bg-white text-thome-dark font-bebas text-2xl py-4 px-8 rounded-lg transition-colors"
          >
            VOLTAR AO INÍCIO
          </a>
        </div>
      </div>
    </div>
  );
}
