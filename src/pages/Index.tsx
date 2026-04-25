import { useState } from "react";
import {
  BedDouble,
  Bath,
  Ruler,
  Maximize,
  Waves,
  Trees,
  ChefHat,
  ArrowUpToLine,
  Lightbulb,
  Snowflake,
  Sun,
  MessageCircle,
  MapPin,
  Camera,
  Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import hero from "@/assets/hero-exterior.webp";
import ext9 from "@/assets/ext-9.webp";
import ext10 from "@/assets/ext-10.webp";
import ext12 from "@/assets/ext-12.webp";
import cocina14 from "@/assets/cocina-14.webp";
import cocina15 from "@/assets/cocina-15.webp";
import sala16 from "@/assets/sala-16.webp";
import hab17 from "@/assets/hab-17.webp";
import hab18 from "@/assets/hab-18.webp";
import amen20 from "@/assets/amen-20.webp";
import amen22 from "@/assets/amen-22.webp";
import bano19 from "@/assets/bano-19.webp";
import PropertyMap from "@/components/PropertyMap";

type Language = "es" | "en";

const copy = {
  es: {
    listing: "Listing No. 0925",
    location: "Carretera Sur · Managua",
    salePrice: "Precio de venta",
    cta: "Agendar Visita VIP",
    whatsappMessage:
      "Hola, me interesa la propiedad de Reparto Santa Anita ($750,000). Quisiera agendar una visita VIP.",
    heroAlt: "Mansión de lujo en Reparto Santa Anita, Carretera Sur",
    languageTitle: "Elige tu experiencia",
    languageSubtitle: "Selecciona el idioma para explorar esta residencia privada.",
    spanish: "Español",
    english: "English",
    stats: [
      { icon: BedDouble, value: "6", label: "Habitaciones" },
      { icon: Bath, value: "7", label: "Baños" },
      { icon: Ruler, value: "532 m²", label: "Construcción" },
      { icon: Maximize, value: "1,763 m²", label: "Lote" },
    ],
    aboutEyebrow: "La propiedad",
    aboutTitleA: "Elegancia y",
    aboutTitleB: "Exclusividad",
    aboutBody:
      "Ubicada en el prestigioso reparto Santa Anita, esta extraordinaria residencia de lujo ofrece un estilo de vida exclusivo, rodeado del clima fresco y natural de Carretera Sur, donde la tranquilidad y la elegancia se fusionan a la perfección. La propiedad se distribuye en tres amplios niveles diseñados para brindar funcionalidad, confort y privacidad.",
    amenitiesEyebrow: "Amenidades",
    amenitiesTitle: "Cada detalle, pensado para vivir mejor.",
    amenities: [
      { icon: Waves, label: "Piscina privada" },
      { icon: Sun, label: "Terraza y espacio al aire libre" },
      { icon: Trees, label: "Pérgola y jardín" },
      { icon: ChefHat, label: "Isla de cocina y encimeras de piedra" },
      { icon: ArrowUpToLine, label: "Techos altos" },
      { icon: Lightbulb, label: "Clósets y espejos con iluminación táctil" },
      { icon: Snowflake, label: "Aire acondicionado en todos los ambientes" },
    ],
    galleryEyebrow: "Galería",
    galleryTitle: "Una mirada al interior.",
    galleryButton: "Ver las 28 fotos",
    galleryCategories: [
      {
        id: "exterior",
        label: "Exterior",
        images: [
          { src: ext9, alt: "Piscina y fachada posterior" },
          { src: ext10, alt: "Entrada principal y parqueo" },
          { src: ext12, alt: "Pasillo lateral con palmera" },
        ],
      },
      {
        id: "cocina",
        label: "Cocina",
        images: [
          { src: cocina14, alt: "Cocina con isla y barra" },
          { src: cocina15, alt: "Cocina moderna con electrodomésticos" },
        ],
      },
      {
        id: "sala",
        label: "Sala",
        images: [{ src: sala16, alt: "Sala de estar principal" }],
      },
      {
        id: "habitaciones",
        label: "Habitaciones",
        images: [
          { src: hab17, alt: "Habitación con sala de estar" },
          { src: hab18, alt: "Habitación principal con piso de madera" },
        ],
      },
      {
        id: "bano",
        label: "Baño",
        images: [{ src: bano19, alt: "Baño con ducha de vidrio y mármol" }],
      },
      {
        id: "amenidades",
        label: "Amenidades",
        images: [
          { src: amen20, alt: "Sala con escaleras de mármol" },
          { src: amen22, alt: "Pasillo y escalera de madera" },
        ],
      },
    ],
    mapEyebrow: "Ubicación",
    mapTitleA: "Un enclave privado",
    mapTitleB: "a pasos de todo.",
    mapBody:
      "Por privacidad, mostramos un radio aproximado de 50 metros alrededor de la propiedad. La dirección exacta se comparte con compradores calificados.",
    mapDetailA: "Zona residencial exclusiva · Acceso controlado",
    mapDetailB: "Dirección exacta reservada para visitas privadas",
    finalEyebrow: "Propiedad por cita",
    finalTitleA: "Una visita privada vale más",
    finalTitleB: "que mil fotografías.",
    footer: "Desarrollado por",
    footerSuffix: "Tecnología Inmobiliaria",
    whatsappLabel: "Contactar por WhatsApp",
  },
  en: {
    listing: "Listing No. 0925",
    location: "Carretera Sur · Managua",
    salePrice: "Sale price",
    cta: "Schedule VIP Tour",
    whatsappMessage:
      "Hello, I am interested in the Reparto Santa Anita property ($750,000). I would like to schedule a VIP tour.",
    heroAlt: "Luxury mansion in Reparto Santa Anita, Carretera Sur",
    languageTitle: "Choose your experience",
    languageSubtitle: "Select your preferred language to explore this private residence.",
    spanish: "Español",
    english: "English",
    stats: [
      { icon: BedDouble, value: "6", label: "Bedrooms" },
      { icon: Bath, value: "7", label: "Bathrooms" },
      { icon: Ruler, value: "532 m²", label: "Built area" },
      { icon: Maximize, value: "1,763 m²", label: "Lot size" },
    ],
    aboutEyebrow: "The property",
    aboutTitleA: "Elegance and",
    aboutTitleB: "Exclusivity",
    aboutBody:
      "Located in the prestigious Reparto Santa Anita, this extraordinary luxury residence offers an exclusive lifestyle surrounded by the fresh, natural climate of Carretera Sur, where tranquility and elegance come together seamlessly. The property unfolds across three generous levels designed for functionality, comfort, and privacy.",
    amenitiesEyebrow: "Amenities",
    amenitiesTitle: "Every detail, designed for elevated living.",
    amenities: [
      { icon: Waves, label: "Private pool" },
      { icon: Sun, label: "Terrace and outdoor living area" },
      { icon: Trees, label: "Pergola and garden" },
      { icon: ChefHat, label: "Kitchen island and stone countertops" },
      { icon: ArrowUpToLine, label: "High ceilings" },
      { icon: Lightbulb, label: "Touch-lit closets and mirrors" },
      { icon: Snowflake, label: "Air conditioning in every room" },
    ],
    galleryEyebrow: "Gallery",
    galleryTitle: "A look inside.",
    galleryButton: "View all 28 photos",
    galleryCategories: [
      {
        id: "exterior",
        label: "Exterior",
        images: [
          { src: ext9, alt: "Pool and rear facade" },
          { src: ext10, alt: "Main entrance and parking area" },
          { src: ext12, alt: "Side passage with palm tree" },
        ],
      },
      {
        id: "cocina",
        label: "Kitchen",
        images: [
          { src: cocina14, alt: "Kitchen with island and bar" },
          { src: cocina15, alt: "Modern kitchen with appliances" },
        ],
      },
      {
        id: "sala",
        label: "Living room",
        images: [{ src: sala16, alt: "Main living room" }],
      },
      {
        id: "habitaciones",
        label: "Bedrooms",
        images: [
          { src: hab17, alt: "Bedroom with sitting area" },
          { src: hab18, alt: "Primary bedroom with wood flooring" },
        ],
      },
      {
        id: "bano",
        label: "Bathroom",
        images: [{ src: bano19, alt: "Bathroom with glass shower and marble" }],
      },
      {
        id: "amenidades",
        label: "Amenities",
        images: [
          { src: amen20, alt: "Living area with marble staircase" },
          { src: amen22, alt: "Hallway and wood staircase" },
        ],
      },
    ],
    mapEyebrow: "Location",
    mapTitleA: "A private enclave",
    mapTitleB: "close to everything.",
    mapBody:
      "To protect privacy, the map highlights an approximate 50-meter radius around the property. The exact address is shared with qualified buyers.",
    mapDetailA: "Exclusive residential area · Controlled access",
    mapDetailB: "Exact address reserved for private showings",
    finalEyebrow: "By appointment only",
    finalTitleA: "A private tour says more",
    finalTitleB: "than a thousand photographs.",
    footer: "Developed by",
    footerSuffix: "Real Estate Technology",
    whatsappLabel: "Contact via WhatsApp",
  },
} satisfies Record<Language, Record<string, unknown>>;

const WHATSAPP_PHONE = "50500000000";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("exterior");
  const [language, setLanguage] = useState<Language | null>(null);
  const t = copy[language ?? "es"];
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
    t.whatsappMessage as string
  )}`;

  useScrollReveal();

  return (
    <main className="min-h-screen bg-background text-foreground">
      {!language && (
        <section className="fixed inset-0 z-[100] flex min-h-svh items-center justify-center bg-background/95 px-6 backdrop-blur-md animate-fade-in">
          <div className="absolute inset-0">
            <img
              src={hero}
              alt={t.heroAlt as string}
              className="h-full w-full object-cover opacity-30"
            />
            <div className="hero-overlay absolute inset-0" />
          </div>

          <div className="relative z-10 w-full max-w-md border border-border bg-card/80 p-8 text-center shadow-elevated animate-scale-in sm:p-10">
            <Globe2 className="mx-auto h-8 w-8 text-gold" strokeWidth={1.25} />
            <p className="mt-6 text-[10px] uppercase tracking-[0.35em] text-gold">
              Santa Anita Residence
            </p>
            <h2 className="mt-5 text-3xl font-light leading-tight sm:text-4xl">
              {t.languageTitle as string}
            </h2>
            <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-muted-foreground">
              {t.languageSubtitle as string}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className="btn-shine border border-gold/50 bg-gold px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground shadow-gold transition-all duration-500 hover:scale-[1.02]"
              >
                {t.spanish as string}
              </button>
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className="border border-border bg-secondary px-6 py-4 text-xs font-medium uppercase tracking-[0.25em] text-foreground transition-all duration-500 hover:border-gold hover:text-gold"
              >
                {t.english as string}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt={t.heroAlt as string}
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Top badge */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10 animate-fade-in">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
            Sacuanjoche · Luxury
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-foreground/70 sm:block">
            {t.listing as string}
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex h-[calc(100%-64px)] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20">
          <div
            className="flex items-center gap-2 text-foreground/80 animate-fade-in-left"
            style={{ animationDelay: "0.2s" }}
          >
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em]">
              {t.location as string}
            </span>
          </div>

          <h1
            className="mt-5 max-w-3xl text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            Reparto
            <span className="block font-normal">Santa Anita</span>
          </h1>

          <div
            className="mt-8 hairline w-24 origin-left animate-hairline-grow"
            style={{ animationDelay: "0.7s" }}
          />

          <p
            className="mt-8 text-[10px] uppercase tracking-[0.35em] text-foreground/60 animate-fade-in"
            style={{ animationDelay: "0.85s" }}
          >
            {t.salePrice as string}
          </p>
          <p
            className="mt-2 text-5xl font-light tracking-tight gold-shimmer sm:text-7xl md:text-8xl animate-fade-in-up"
            style={{ animationDelay: "0.95s" }}
          >
            $750,000
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine mt-10 inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90 sm:w-auto sm:self-start shadow-gold animate-fade-in-up"
            style={{ animationDelay: "1.15s" }}
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta as string}
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-4 sm:gap-y-0 sm:px-10 sm:py-16">
          {(t.stats as typeof copy.es.stats).map((s, i) => (
            <div
              key={s.label}
              className={`reveal reveal-delay-${i + 1} flex flex-col items-center text-center sm:border-l sm:border-border/40 sm:first:border-l-0 group`}
            >
              <s.icon
                className="h-6 w-6 text-gold transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                strokeWidth={1.25}
              />
              <p className="mt-4 text-2xl font-light tracking-tight text-foreground sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="reveal text-[10px] uppercase tracking-[0.35em] text-gold">
            {t.aboutEyebrow as string}
          </p>
          <h2 className="reveal reveal-delay-1 mt-6 text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
            {t.aboutTitleA as string}
            <span className="block italic font-extralight text-gold">
              {t.aboutTitleB as string}
            </span>
          </h2>
          <div className="reveal reveal-delay-2 mt-10 hairline w-16" />
          <p className="reveal reveal-delay-3 mt-10 text-base leading-[1.9] text-muted-foreground sm:text-lg">
            {t.aboutBody as string}
          </p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-card px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="reveal text-[10px] uppercase tracking-[0.35em] text-gold">
            {t.amenitiesEyebrow as string}
          </p>
          <h2 className="reveal reveal-delay-1 mt-6 max-w-2xl text-3xl font-light leading-tight sm:text-5xl">
            {t.amenitiesTitle as string}
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
            {(t.amenities as typeof copy.es.amenities).map((a, i) => (
              <div
                key={a.label}
                className={`reveal reveal-delay-${(i % 5) + 1} group flex items-center gap-5 border-b border-border/40 py-6 transition-colors hover:border-gold/60`}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40 transition-all duration-500 group-hover:border-gold group-hover:bg-gold/10 group-hover:rotate-[8deg]">
                  <a.icon
                    className="h-5 w-5 text-gold transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1.25}
                  />
                </span>
                <span className="text-base text-foreground transition-colors group-hover:text-gold sm:text-lg">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="reveal text-[10px] uppercase tracking-[0.35em] text-gold">
                {t.galleryEyebrow as string}
              </p>
              <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-light sm:text-5xl">
                {t.galleryTitle as string}
              </h2>
            </div>
            <Camera
              className="reveal reveal-delay-2 hidden h-6 w-6 text-gold sm:block animate-float"
              strokeWidth={1.25}
            />
          </div>

          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mt-12"
          >
            <TabsList className="reveal reveal-delay-2 flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:gap-3">
              {(t.galleryCategories as typeof copy.es.galleryCategories).map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-none border border-border/40 bg-transparent px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-all duration-300 hover:border-gold/60 hover:text-gold data-[state=active]:border-gold data-[state=active]:bg-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {(t.galleryCategories as typeof copy.es.galleryCategories).map((cat) => (
              <TabsContent
                key={cat.id}
                value={cat.id}
                className="mt-10 data-[state=active]:animate-fade-in"
              >
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {cat.images.map((img, i) => (
                    <div
                      key={i}
                      className={`img-zoom group relative ${
                        i === 0 && cat.images.length > 2
                          ? "col-span-2 sm:col-span-2 sm:row-span-2"
                          : ""
                      }`}
                      style={{ animation: `image-reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.1}s both` }}
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover aspect-square"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="reveal mt-12 flex justify-center">
            <Button
              variant="outline"
              className="btn-shine border-gold/50 bg-transparent px-8 py-6 text-xs uppercase tracking-[0.25em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground hover:shadow-gold"
            >
              {t.galleryButton as string}
            </Button>
          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="reveal text-[10px] uppercase tracking-[0.35em] text-gold">
              {t.mapEyebrow as string}
            </p>
            <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-light leading-tight sm:text-5xl">
              {t.mapTitleA as string}
              <span className="block italic text-gold">{t.mapTitleB as string}</span>
            </h2>
            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-sm text-muted-foreground sm:text-base">
              {t.mapBody as string}
            </p>
          </div>

          <div className="reveal reveal-delay-3 overflow-hidden border border-border shadow-elevated">
            <PropertyMap />
          </div>

          <div className="reveal reveal-delay-4 mt-6 flex flex-col items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground sm:flex-row">
            <span>{t.mapDetailA as string}</span>
            <span className="text-gold">{t.mapDetailB as string}</span>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-border/40 bg-card px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-[10px] uppercase tracking-[0.35em] text-gold">
            {t.finalEyebrow as string}
          </p>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-light leading-tight sm:text-5xl">
            {t.finalTitleA as string}
            <span className="block italic text-gold">{t.finalTitleB as string}</span>
          </h2>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reveal reveal-delay-2 btn-shine mt-10 inline-flex items-center justify-center gap-3 bg-gold px-10 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-gold transition-all duration-500 hover:opacity-90 hover:scale-[1.03]"
          >
            <MessageCircle className="h-4 w-4" />
            {t.cta as string}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Santa Anita Residence
          </p>
          <p className="text-center text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-right">
            {t.footer as string}{" "}
            <span className="text-gold">Sacuanjoche.dev</span> — {t.footerSuffix as string}
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.whatsappLabel as string}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-gold transition-transform duration-300 hover:scale-110 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </main>
  );
};

export default Index;
