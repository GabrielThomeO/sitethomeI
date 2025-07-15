import { useState, useRef, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Phone,
  Instagram,
  Mail,
} from "lucide-react";

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    quartos: "",
    tipoProjeto: "",
    tipoServico: "",
    cozinhas: "",
    banheiros: "",
  });
  const [calculatedValue, setCalculatedValue] = useState<number | null>(null);

  // Carousel images - the 5 specific images provided
  const carouselImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2Faa0ab960008c4719a5d54ac001eeee93?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2Faa3520a33fd14533bc3cb5a61202469f?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2F672d92a1af184a0b94f99fde2ea51758?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2F9cd1aecd2e95485ea905e80ca4ff138d?format=webp&width=800",
    "https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2F9c0d560810f24278946a783627017fa8?format=webp&width=800",
  ];

  // Auto-slide carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const scrollToCalculator = () => {
    document
      .getElementById("calculator")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length,
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateValue = () => {
    const area = parseFloat(formData.area);
    const cozinhas = parseInt(formData.cozinhas) || 0;
    const banheiros = parseInt(formData.banheiros) || 0;

    if (!area || !formData.tipoProjeto || !formData.tipoServico) return null;

    // Base calculation from spreadsheet logic
    let baseValue = 0;

    // Project type multipliers
    const projectMultipliers = {
      arquitetura: 1.2,
      interiores: 1.0,
      paisagismo: 0.8,
    };

    // Service type base values
    const serviceValues = {
      consultoria: 150,
      "projeto-completo": 300,
      acompanhamento: 500,
    };

    baseValue =
      area * serviceValues[formData.tipoServico as keyof typeof serviceValues];
    baseValue *=
      projectMultipliers[
        formData.tipoProjeto as keyof typeof projectMultipliers
      ];

    // Add kitchen and bathroom bonuses
    baseValue += cozinhas * 2000 + banheiros * 1500;

    return Math.round(baseValue);
  };

  // Remove auto-calculation effect - only calculate when button is clicked

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre projetos.";
    const phone = "5512996462826";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation - Half size */}
      <nav className="fixed top-0 w-full z-50 bg-black/75 h-11">
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8059895daabedcbb55aae72740eb18def1b42aaf?width=242"
            alt="Thomé Logo"
            className="h-11 w-auto mt-1"
          />
          <div className="hidden lg:flex items-center space-x-8">
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
            <a
              href="#calculator"
              className="font-bebas text-white text-2xl tracking-wider text-stroke-white hover:text-gray-300 transition-colors"
            >
              calculadora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[150vh] bg-thome-dark overflow-hidden pt-11">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a270d1d8cd0a05309a74b87289a4967c46f908e6?width=3840"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Main logo positioned below sticky nav - doubled size */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 z-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2F85e72338147646dea7c9325fc8c7c1aa?format=webp&width=800"
            alt="Thomé Main Logo"
            className="w-[1200px] h-auto opacity-90 max-w-[90vw]"
          />
        </div>

        {/* Logo above carousel with carousel-similar width - positioned higher */}
        <div className="absolute bottom-[650px] md:bottom-[700px] left-1/2 transform -translate-x-1/2 z-20">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F4717588d46734d6f8b6837a8bbc277bb%2F74cc05c8f6174b7f867f07487501559a?format=webp&width=800"
            alt="Thomé Logo"
            className="w-[600px] md:w-[800px] h-auto opacity-90 max-w-[90vw] mb-[34px]"
          />
        </div>

        {/* Carousel - increased size and repositioned */}
        <div className="absolute bottom-[250px] left-1/2 transform -translate-x-1/2 z-20">
          <div className="relative w-[800px] h-[480px] max-w-[90vw]">
            <div className="relative w-full h-full rounded-[51px] border-[7px] border-thome-light overflow-hidden">
              <img
                src={carouselImages[currentSlide]}
                alt={`Project ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-thome-light hover:text-white transition-colors"
            >
              <ChevronLeft size={60} strokeWidth={4} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-thome-light hover:text-white transition-colors"
            >
              <ChevronRight size={60} strokeWidth={4} />
            </button>
          </div>
        </div>

        {/* Calculator Button */}
        <button
          onClick={scrollToCalculator}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 bg-black/75 rounded-2xl px-8 py-6"
        >
          <span className="font-bebas text-white text-4xl tracking-widest text-stroke-white">
            CALCULE JÁ O SEU PROJETO
          </span>
        </button>
      </section>

      {/* Conceitos Section */}
      <section
        id="conceitos"
        className="relative py-20 bg-thome-medium overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/886b2d2ef5ac3839056ac8beb1e9af9c2d812a2e?width=3840"
            alt="Conceitos Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h2 className="font-bebas text-white text-8xl tracking-widest text-stroke-white text-center mb-16">
            conceitos
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc1c96fd469f2afc4a4c50dd9997834f08ae1b04?width=1048"
                alt="Gabriel Thomé - Arquiteto"
                className="w-full max-w-lg mx-auto rounded-[53px] border-[5px] border-thome-light"
              />
              <h3 className="font-bebas text-white text-4xl tracking-wider text-stroke-white text-center mt-8">
                gabriel thomé - arquiteto
              </h3>
            </div>

            <div className="lg:order-2 text-white font-vietnam text-2xl leading-relaxed tracking-wide opacity-90 max-h-[600px] overflow-hidden">
              <p className="mb-6">
                A arquitetura ecológica vai muito além do visual verde. Ela
                nasce de escolhas conscientes, que buscam soluções realmente
                eficientes para o dia a dia — como conforto térmico sem depender
                de ar-condicionado, uso inteligente da água, materiais duráveis
                e sistemas que funcionam de verdade.
              </p>

              <p className="mb-6">
                É uma arquitetura viva, que responde ao clima, ao entorno e às
                pessoas. Versátil, ela não se prende a modismos, mas se adapta,
                se reinventa e permanece. Adotar essa abordagem é apostar em
                projetos mais humanos, mais sustentáveis e com menos
                desperdício.
              </p>

              <p>
                É pensar no presente sem comprometer o futuro — com beleza,
                responsabilidade e inteligência.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-thome-dark">
        <div className="container mx-auto px-4">
          <h2 className="font-bebas text-white text-8xl tracking-widest text-stroke-white text-center mb-16">
            PROJETOS
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <div
              className="group cursor-pointer"
              onClick={() => (window.location.href = "/chales")}
            >
              <div className="relative rounded-[53px] border-[5px] border-thome-light overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/42a61da78d764210d50436a8cd03ecca20d49651?width=1048"
                  alt="Chalés"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <h3 className="font-bebas text-white text-6xl tracking-widest text-stroke-white text-center mt-8">
                CHALÉS
              </h3>
            </div>

            <div
              className="group cursor-pointer"
              onClick={() => (window.location.href = "/interiores")}
            >
              <div className="relative rounded-[53px] border-[5px] border-thome-light overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2f662af3513e92ee778c895a8c805743af21dc3?width=1048"
                  alt="Interiores"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <h3 className="font-bebas text-white text-6xl tracking-widest text-stroke-white text-center mt-8">
                INTERIORES
              </h3>
            </div>

            <div
              className="group cursor-pointer"
              onClick={() => (window.location.href = "/arquitetura")}
            >
              <div className="relative rounded-[53px] border-[5px] border-thome-light overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6f2d2b861ef0043340f5d16b4af6f9d8b01ed7?width=1048"
                  alt="Arquitetura"
                  className="w-full h-96 lg:h-[500px] object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <h3 className="font-bebas text-white text-6xl tracking-widest text-stroke-white text-center mt-8">
                ARQUITETURA
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Section */}
      <section
        id="produtos"
        className="relative py-20 bg-thome-dark overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aaf4a4383c4caa1f6fd3da70863f7e6d2bdfe03a?width=3840"
            alt="Produtos Background"
            className="w-full h-full object-cover opacity-60"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <h2 className="font-bebas text-white text-8xl tracking-widest text-stroke-white text-center mb-16">
            PRODUTOS
          </h2>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="group">
              <div className="relative rounded-[53px] border-[5px] border-thome-light overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/920fad0be17585fa626c59df136c166dd012d6d6?width=918"
                  alt="Consultoria"
                  className="w-full h-96 object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <h3 className="font-bebas text-white text-5xl tracking-wider text-stroke-white text-center mt-8 mb-6">
                CONSULTORIA
              </h3>
              <div className="text-white font-abel text-xl leading-relaxed">
                <p>• Planta existente com medições</p>
                <p>• Plantas e cortes da solução proposta</p>
                <p>
                  • MoodBoard com sugestões e especificações de produtos e
                  fornecedores
                </p>
                <p>• Diagramas da solução proposta</p>
                <p>• Maquete 3D</p>
                <p>• Memorial consultivo com orientações</p>
                <p>• Link de acesso a todos os arquivos digitais</p>
                <p>• Voucher para o projeto completo</p>
              </div>
            </div>

            <div className="group">
              <div className="relative rounded-[53px] border-[5px] border-thome-light overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/59f67b2f39fcbf5ed9a21bb1b2a952dd3aa19e9b?width=918"
                  alt="Projeto Completo"
                  className="w-full h-96 object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <h3 className="font-bebas text-white text-5xl tracking-wider text-stroke-white text-center mt-8 mb-6">
                PROJETO COMPLETO
              </h3>
              <div className="text-white font-abel text-xl leading-relaxed">
                <p>• Todas as entregas da Consultoria</p>
                <p>• Tour virtual pelos espaços propostos</p>
                <p>
                  • Desenhos técnicos executivos - cortes, plantas e elevações
                </p>
                <p>• Detalhamentos construtivos</p>
                <p>
                  • Especificação técnica completa de materiais e acabamentos
                </p>
                <p>• Quadro de esquadrias completo</p>
                <p>
                  • Detalhes de marcenaria, áreas molhadas e elementos especiais
                </p>
                <p>• Seleção de profissionais e fornecedores</p>
                <p>• Pendrive e link de acesso a todos os arquivos digitais</p>
                <p>• Orçamento estimativo da obra</p>
              </div>
            </div>

            <div className="group">
              <div className="relative rounded-[53px] border-[5px] border-thome-light overflow-hidden transition-transform group-hover:scale-105">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f56923f0f8ef8085db5995b02b463ab102a7912?width=918"
                  alt="Acompanhamento"
                  className="w-full h-96 object-cover group-hover:brightness-110 transition-all"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
              </div>
              <h3 className="font-bebas text-white text-5xl tracking-wider text-stroke-white text-center mt-8 mb-6">
                ACOMPANHAMENTO
              </h3>
              <div className="text-white font-abel text-xl leading-relaxed">
                <p>• Todas as entregas do Projeto Completo</p>
                <p>• Maquete física</p>
                <p>• Aprovação do projeto na Prefeitura</p>
                <p>• Mapeamento das etapas da obra</p>
                <p>• Detalhes processuais da execução</p>
                <p>
                  • Contratação de profissionais qualificados para cada processo
                </p>
                <p>• Documentação necessária para execução</p>
                <p>• Visitas à obra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculadora Section */}
      <section id="calculator" className="py-20 bg-thome-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Dados Column */}
            <div className="bg-transparent border-2 border-white rounded-[50px] p-6 md:p-8 mx-auto w-full max-w-md lg:max-w-none">
              <h3 className="font-bebas text-white text-4xl md:text-6xl tracking-widest text-stroke-white text-center mb-6 md:mb-8">
                DADOS
              </h3>

              <div className="space-y-6">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome completo"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />

                <input
                  type="tel"
                  name="telefone"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />

                {calculatedValue && (
                  <div className="mt-8 p-6 bg-white/20 rounded-lg text-center">
                    <p className="font-bebas text-white text-2xl">
                      VALOR ESTIMADO
                    </p>
                    <p className="font-bebas text-white text-4xl tracking-wider">
                      R$ {calculatedValue.toLocaleString("pt-BR")}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Calculadora Column */}
            <div className="bg-transparent border-2 border-white rounded-[50px] p-6 md:p-8 flex flex-col mx-auto w-full max-w-md lg:max-w-none">
              <h3 className="font-bebas text-white text-4xl md:text-6xl tracking-widest text-stroke-white text-center mb-6 md:mb-8 flex-shrink-0">
                CALCULADORA
              </h3>

              <div className="space-y-6">
                <input
                  type="number"
                  name="area"
                  placeholder="Área (m²)"
                  value={formData.area}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />

                <input
                  type="number"
                  name="quartos"
                  placeholder="Número de quartos"
                  value={formData.quartos}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />

                <select
                  name="tipoProjeto"
                  value={formData.tipoProjeto}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white focus:bg-white/20 transition-all"
                >
                  <option value="">Tipo de projeto</option>
                  <option value="arquitetura">Arquitetura</option>
                  <option value="interiores">Interiores</option>
                  <option value="paisagismo">Paisagismo</option>
                </select>

                <select
                  name="tipoServico"
                  value={formData.tipoServico}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white focus:bg-white/20 transition-all"
                >
                  <option value="">Tipo de serviço</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="projeto-completo">Projeto Completo</option>
                  <option value="acompanhamento">Acompanhamento de Obra</option>
                </select>

                <input
                  type="number"
                  name="cozinhas"
                  placeholder="Número de cozinhas"
                  value={formData.cozinhas}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />

                <input
                  type="number"
                  name="banheiros"
                  placeholder="Número de banheiros"
                  value={formData.banheiros}
                  onChange={handleInputChange}
                  className="w-full p-4 rounded-lg border border-thome-light bg-white/10 text-white placeholder-white/70 focus:bg-white/20 transition-all"
                />
              </div>
            </div>

            {/* Contato Column */}
            <div className="bg-transparent border-2 border-white rounded-[50px] p-6 md:p-8 mx-auto w-full max-w-md lg:max-w-none">
              <h3 className="font-bebas text-white text-4xl md:text-6xl tracking-widest text-stroke-white text-center mb-6 md:mb-8">
                CONTATO
              </h3>

              <div className="space-y-8">
                <a
                  href="tel:+5512996462826"
                  className="flex items-center space-x-4 text-white hover:text-thome-light transition-colors"
                >
                  <Phone size={32} />
                  <span className="font-abel text-xl">(12) 99646-2826</span>
                </a>

                <a
                  href="https://instagram.com/gabriel_othome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-white hover:text-thome-light transition-colors"
                >
                  <Instagram size={32} />
                  <span className="font-abel text-xl">@gabriel_othome</span>
                </a>

                <a
                  href="mailto:gabriel.thome.oliveira@gmail.com"
                  className="flex items-center space-x-4 text-white hover:text-thome-light transition-colors"
                >
                  <Mail size={32} />
                  <span className="font-abel text-xl">
                    gabriel.thome.oliveira@gmail.com
                  </span>
                </a>

                <button
                  onClick={openWhatsApp}
                  className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white font-bebas text-xl py-4 px-6 rounded-lg transition-colors"
                >
                  FALAR NO WHATSAPP
                </button>
              </div>
            </div>
          </div>

          {/* Calculate Button */}
          <div className="mt-8 text-center px-4">
            <button
              onClick={() => {
                if (
                  formData.nome &&
                  formData.email &&
                  formData.telefone &&
                  formData.area &&
                  formData.tipoProjeto &&
                  formData.tipoServico
                ) {
                  const value = calculateValue();
                  setCalculatedValue(value);
                  // Here you could also send data to email
                  alert(
                    `Orçamento calculado: R$ ${value?.toLocaleString("pt-BR")}`,
                  );
                } else {
                  alert("Por favor, preencha todos os campos obrigatórios.");
                }
              }}
              className="bg-thome-light hover:bg-white text-thome-dark font-bebas text-2xl md:text-3xl py-4 md:py-6 px-8 md:px-12 rounded-lg transition-colors shadow-lg w-full max-w-md"
            >
              CALCULAR ORÇAMENTO
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
