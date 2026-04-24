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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
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

const WHATSAPP_URL =
  "https://wa.me/50500000000?text=" +
  encodeURIComponent(
    "Hola, me interesa la propiedad de Reparto Santa Anita ($750,000). Quisiera agendar una visita VIP."
  );

const stats = [
  { icon: BedDouble, value: "6", label: "Habitaciones" },
  { icon: Bath, value: "7", label: "Baños" },
  { icon: Ruler, value: "532 m²", label: "Construcción" },
  { icon: Maximize, value: "1,763 m²", label: "Lote" },
];

const amenities = [
  { icon: Waves, label: "Piscina privada" },
  { icon: Sun, label: "Terraza y espacio al aire libre" },
  { icon: Trees, label: "Pérgola y jardín" },
  { icon: ChefHat, label: "Isla de cocina y encimeras de piedra" },
  { icon: ArrowUpToLine, label: "Techos altos" },
  { icon: Lightbulb, label: "Clósets y espejos con iluminación táctil" },
  { icon: Snowflake, label: "Aire acondicionado en todos los ambientes" },
];

const galleryCategories = [
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
    images: [
      { src: sala16, alt: "Sala de estar principal" },
    ],
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
    images: [
      { src: bano19, alt: "Baño con ducha de vidrio y mármol" },
    ],
  },
  {
    id: "amenidades",
    label: "Amenidades",
    images: [
      { src: amen20, alt: "Sala con escaleras de mármol" },
      { src: amen22, alt: "Pasillo y escalera de madera" },
    ],
  },
];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("exterior");

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Mansión de lujo en Reparto Santa Anita, Carretera Sur"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        {/* Top badge */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-8 sm:px-10 sm:pt-10">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
            Sacuanjoche · Luxury
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-foreground/70 sm:block">
            Listing No. 0925
          </span>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex h-[calc(100%-64px)] flex-col justify-end px-6 pb-16 sm:px-10 sm:pb-20">
          <div className="flex items-center gap-2 text-foreground/80">
            <MapPin className="h-4 w-4 text-gold" />
            <span className="text-xs uppercase tracking-[0.25em]">
              Carretera Sur · Managua
            </span>
          </div>

          <h1 className="mt-5 max-w-3xl text-4xl font-light leading-[1.05] sm:text-6xl md:text-7xl">
            Reparto
            <span className="block font-normal">Santa Anita</span>
          </h1>

          <div className="mt-8 hairline w-24" />

          <p className="mt-8 text-[10px] uppercase tracking-[0.35em] text-foreground/60">
            Precio de venta
          </p>
          <p className="mt-2 text-5xl font-light tracking-tight text-gold sm:text-7xl md:text-8xl">
            $750,000
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 bg-gold px-8 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground transition-all hover:opacity-90 sm:w-auto sm:self-start shadow-gold"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar Visita VIP
          </a>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/40 bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-4 sm:gap-y-0 sm:px-10 sm:py-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center sm:border-l sm:border-border/40 sm:first:border-l-0"
            >
              <s.icon className="h-6 w-6 text-gold" strokeWidth={1.25} />
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
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            La propiedad
          </p>
          <h2 className="mt-6 text-4xl font-light leading-[1.1] sm:text-5xl md:text-6xl">
            Elegancia y
            <span className="block italic font-extralight text-gold">
              Exclusividad
            </span>
          </h2>
          <div className="mt-10 hairline w-16" />
          <p className="mt-10 text-base leading-[1.9] text-muted-foreground sm:text-lg">
            Ubicada en el prestigioso reparto Santa Anita, esta extraordinaria
            residencia de lujo ofrece un estilo de vida exclusivo, rodeado del
            clima fresco y natural de Carretera Sur, donde la tranquilidad y la
            elegancia se fusionan a la perfección. La propiedad se distribuye en
            tres amplios niveles diseñados para brindar funcionalidad, confort y
            privacidad.
          </p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="bg-card px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Amenidades
          </p>
          <h2 className="mt-6 max-w-2xl text-3xl font-light leading-tight sm:text-5xl">
            Cada detalle, pensado para vivir mejor.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-2 sm:grid-cols-2">
            {amenities.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-5 border-b border-border/40 py-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold/40">
                  <a.icon className="h-5 w-5 text-gold" strokeWidth={1.25} />
                </span>
                <span className="text-base text-foreground sm:text-lg">
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
              <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Galería
              </p>
              <h2 className="mt-6 text-3xl font-light sm:text-5xl">
                Una mirada al interior.
              </h2>
            </div>
            <Camera className="hidden h-6 w-6 text-gold sm:block" strokeWidth={1.25} />
          </div>

          <Tabs
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mt-12"
          >
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0 sm:gap-3">
              {galleryCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="rounded-none border border-border/40 bg-transparent px-5 py-2.5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground data-[state=active]:border-gold data-[state=active]:bg-gold data-[state=active]:text-primary-foreground data-[state=active]:shadow-none"
                >
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {galleryCategories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id} className="mt-10">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
                  {cat.images.map((img, i) => (
                    <div
                      key={i}
                      className={
                        i === 0 && cat.images.length > 2
                          ? "col-span-2 sm:col-span-2 sm:row-span-2"
                          : ""
                      }
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="h-full w-full object-cover aspect-square"
                      />
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              className="border-gold/50 bg-transparent px-8 py-6 text-xs uppercase tracking-[0.25em] text-gold hover:bg-gold hover:text-primary-foreground"
            >
              Ver las 28 fotos
            </Button>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-border/40 bg-card px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Propiedad por cita
          </p>
          <h2 className="mt-6 text-3xl font-light leading-tight sm:text-5xl">
            Una visita privada vale más
            <span className="block italic text-gold">que mil fotografías.</span>
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center gap-3 bg-gold px-10 py-5 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-gold transition-all hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            Agendar Visita VIP
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Santa Anita Residence
          </p>
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Desarrollado por{" "}
            <span className="text-gold">Sacuanjoche.dev</span> — Tecnología
            Inmobiliaria
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-primary-foreground shadow-gold transition-transform hover:scale-105 sm:h-16 sm:w-16"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </main>
  );
};

export default Index;
