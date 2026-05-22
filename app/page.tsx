"use client";

import Link from "next/link";
import {
  Cloud,
  ShieldCheck,
  Camera,
  HardDrive,
  Globe,
  Store,
  Building2,
  Warehouse,
  House,
  Building,
  UtensilsCrossed,
  CheckCircle2,
  CircleAlert,
  Server,
  ChevronRight,
} from "lucide-react";

export default function CCTVCloudLanding() {
  const useCases = [
    { icon: Store, title: "Comercios" },
    { icon: Building2, title: "Oficinas" },
    { icon: Warehouse, title: "Depósitos" },
    { icon: House, title: "Barrios privados" },
    { icon: Building, title: "Sucursales" },
    { icon: Building2, title: "Empresas" },
    { icon: UtensilsCrossed, title: "Locales gastronómicos" },
  ];

  const plans = [
  {
    name: "Cloud 3",
    retention: "3 días de grabación",
    description: "Ideal para respaldo básico y monitoreo diario.",
    price: "USD 4",
    discount1: {
      cameras: "4-7",
      off: "-10%",
    },
    discount2: {
      cameras: "8+",
      off: "-15%",
    },
  },
  {
    name: "Cloud 7",
    retention: "7 días de grabación",
    description: "La opción más elegida para hogares y comercios.",
    price: "USD 5",
    featured: true,
    discount1: {
      cameras: "4-7",
      off: "-10%",
    },
    discount2: {
      cameras: "8+",
      off: "-15%",
    },
  },
  {
    name: "Cloud 30",
    retention: "30 días de grabación",
    description: "Máxima retención y acceso permanente.",
    price: "USD 6,5",
    discount1: {
      cameras: "4-7",
      off: "-10%",
    },
    discount2: {
      cameras: "8+",
      off: "-15%",
    },
  },
];

  return (
    <div className="min-h-screen bg-[#050816] text-white overflow-hidden relative">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_45%)]" />

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/5 bg-[#050816]/80">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cloud className="w-8 h-8 text-blue-400" />

            <div className="text-2xl font-extrabold tracking-tight">
              CCTV{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                CLOUD
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm text-slate-300 relative left-45">
            <a href="#compatibilidad">Compatibilidad</a>
            <a href="#planes">Planes</a>
            <a href="#faq">FAQ</a>
            <a href="#instaladores">Instaladores</a>
          </div>

          <Link
            href="/cotizador"
            className="bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-all"
          >
            Evaluar mi instalación
          </Link>
        </div>
      </header>

      <div className="relative z-10">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-10">
              <Cloud className="w-4 h-4" />
              Plataforma Cloud para Videovigilancia
            </div>

            <h1 className="text-6xl md:text-8xl font-extrabold tracking-[-0.05em] leading-none py-4 overflow-visible">
  <span className="block">
    PROTEGÉ TU
  </span>

  <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
    EVIDENCIA
  </span>
</h1>

            <p className="text-slate-300 text-xl leading-relaxed mt-10 max-w-2xl">
              Tus grabaciones se respaldan automáticamente en la nube para que
              sigan disponibles aunque roben, dañen o falle el almacenamiento de tu DVR/NVR.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-12">
              <Link
                href="/cotizador"
                className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-5 rounded-2xl text-lg font-semibold hover:scale-105 transition-all"
              >
                Evaluar mi instalación
              </Link>

              <a
                href="#planes"
                className="border border-white/10 bg-white/[0.03] px-8 py-5 rounded-2xl text-lg"
              >
                Ver planes
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-16">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-blue-400" />
                Grabaciones seguras
              </div>

              <div className="flex items-center gap-3">
                <Globe className="text-blue-400" />
                Acceso remoto
              </div>

              <div className="flex items-center gap-3">
                <HardDrive className="text-blue-400" />
                Respaldo automático
              </div>

              <div className="flex items-center gap-3">
                <Cloud className="text-blue-400" />
                Planes flexibles
              </div>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="relative">
            <div className="rounded-[40px] border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-10 backdrop-blur-2xl">
              <div className="aspect-video rounded-3xl border border-white/10 bg-[#09111f] flex items-center justify-center">
                <div className="text-center">
                  <Cloud className="w-28 h-28 text-blue-400 mx-auto mb-6" />

                  <div className="flex items-center justify-center gap-5">
                    <Camera className="w-12 h-12 text-slate-300" />
                    <ChevronRight className="text-blue-400" />
                    <Server className="w-12 h-12 text-cyan-300" />
                    <ChevronRight className="text-blue-400" />
                    <Cloud className="w-12 h-12 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUCIONES */}
        <section className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl font-extrabold tracking-tight">
              Soluciones utilizadas en distintos tipos de instalaciones
            </h2>

            <p className="text-blue-100 text-xl mt-6 max-w-3xl mx-auto">
              CCTV CLOUD se adapta tanto a pequeños comercios como a proyectos
              corporativos multisucursal.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-10 mt-16">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-24 h-24 rounded-3xl bg-white/10 backdrop-blur-xl flex items-center justify-center">
                    <item.icon className="w-12 h-12 text-white" />
                  </div>

                  <div className="font-medium text-lg">{item.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPATIBILIDAD */}
        <section
          id="compatibilidad"
          className="max-w-7xl mx-auto px-6 py-28"
        >
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl font-extrabold tracking-tight leading-none">
                Compatible con tu instalación actual
              </h2>

              <p className="text-slate-400 text-xl mt-8 leading-relaxed">
                CCTV CLOUD funciona con instalaciones Dahua, Hikvision,
                Uniview y sistemas ONVIF compatibles.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Sin modificar tu instalación actual",
                  "Configuración simple",
                  "Respaldo automático",
				  "Infraestructura segura con conexiones VPN cifradas (Opcional)"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-blue-400" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>

              
            </div>

            <div className="rounded-[40px] border border-white/10 bg-white/[0.03] p-12">
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 text-center">
                <div>
                  <Camera className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-semibold">Cámaras</div>
                </div>

                <ChevronRight className="w-10 h-10 text-blue-400" />

                <div>
                  <Server className="w-16 h-16 text-cyan-300 mx-auto mb-4" />
                  <div className="text-2xl font-semibold">DVR / NVR</div>
                </div>

                <ChevronRight className="w-10 h-10 text-blue-400" />

                <div>
                  <Cloud className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <div className="text-2xl font-semibold">CCTV CLOUD</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DVR */}
        <section className="bg-black py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-extrabold leading-none">
                Tu DVR puede fallar.
                <br />

                <span className="text-red-500">
                  Tu evidencia no.
                </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-10">
              <div className="rounded-[36px] border border-red-500/20 bg-red-500/5 p-12">
                <h3 className="text-4xl font-bold text-red-500 mb-10">
                  Situaciones reales
                </h3>

                <div className="space-y-8">
                  {[
                    "Robo del DVR/NVR",
                    "Falla de disco rígido",
                    "Daños eléctricos",
                    "Manipulación del equipo",
                    "Pérdida de grabaciones",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-5 text-2xl"
                    >
                      <CircleAlert className="text-red-500 w-8 h-8" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[36px] border border-green-500/20 bg-green-500/5 p-12">
                <h3 className="text-4xl font-bold text-green-500 mb-10">
                  Grabaciones protegidas
                </h3>

                <div className="space-y-8">
                  {[
                    "Grabaciones respaldadas en CCTV CLOUD",
                    "Acceso remoto seguro",
                    "Retención configurable",
                    "Infraestructura protegida mediante VPN",
                    "Disponibilidad continua",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-5 text-2xl"
                    >
                      <CheckCircle2 className="text-green-500 w-8 h-8" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center text-slate-300 text-2xl mt-16">
              Las grabaciones críticas siguen disponibles cuando más las
              necesitás.
            </p>
          </div>
        </section>

        {/* POR QUE */}
        <section className="max-w-7xl mx-auto px-6 py-28">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold">
              Pensado para instalaciones de seguridad reales
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {[
              "Experiencia en videovigilancia profesional",
              "Tecnología Dahua para máxima confiabilidad",
              "Respaldo automático de grabaciones",
              "Infraestructura segura con conexiones VPN cifradas",
              "Compatible con instalaciones existentes",
              "Escalable según cantidad de cámaras",
              "Soporte técnico especializado",
              "Soluciones para comercios, empresas y proyectos corporativos",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8"
              >
                <CheckCircle2 className="text-blue-400 mb-5" />
                <div className="text-lg leading-relaxed">{item}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-300 text-xl mt-16 max-w-5xl mx-auto">
            No somos solo almacenamiento cloud. Somos una solución diseñada
            específicamente para sistemas de seguridad y videovigilancia.
          </p>
        </section>

        {/* PLANES */}
        <section
          id="planes"
          className="max-w-7xl mx-auto px-6 py-28"
        >
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold">
              Planes Cloud
            </h2>

            <p className="text-slate-400 text-xl mt-6">
              Elegí la retención ideal para tu sistema de videovigilancia.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[36px] border p-10 flex flex-col h-full ${
                  plan.featured
                    ? "border-blue-500 bg-blue-500/[0.06]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 rounded-full text-sm font-semibold">
                    MÁS ELEGIDO
                  </div>
                )}

                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-5xl font-bold">
                    {plan.name.split(" ")[0]}{" "}
                    <span className="text-blue-400">
                      {plan.name.split(" ")[1]}
                    </span>
                  </h3>

                  <div className="w-20 h-20 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Camera className="w-10 h-10 text-blue-400" />
                  </div>
                </div>

                <div className="flex flex-col flex-1">
                  <div className="min-h-[170px]">
                    <div className="text-3xl font-semibold text-blue-400 mb-5">
                      {plan.retention}
                    </div>

                    <p className="text-slate-300 text-xl leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-8 mt-auto">
                    <div className="text-6xl font-extrabold mb-3">
                      {plan.price}
                    </div>

                   <div className="text-slate-400 text-lg mb-8">
  por cámara / mes
</div>

{/* DESCUENTOS */}
<div className="grid grid-cols-2 gap-4 mb-8">
  <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4 text-center">
    <div className="text-2xl font-bold text-blue-400">
      {plan.discount1.cameras}
    </div>

    <div className="text-sm text-slate-300 mt-1">
      cámaras
    </div>

    <div className="mt-3 inline-flex items-center justify-center bg-blue-600 px-3 py-1 rounded-lg text-sm font-semibold">
      {plan.discount1.off}
    </div>
  </div>

  <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4 text-center">
    <div className="text-2xl font-bold text-blue-400">
      {plan.discount2.cameras}
    </div>

    <div className="text-sm text-slate-300 mt-1">
      cámaras
    </div>

    <div className="mt-3 inline-flex items-center justify-center bg-blue-600 px-3 py-1 rounded-lg text-sm font-semibold">
      {plan.discount2.off}
    </div>
  </div>
</div>

                    <Link
                      href="/cotizador"
                      className="w-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl py-5 text-xl font-semibold hover:scale-[1.02] transition-all"
                    >
                      Evaluar mi instalación
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ + INSTALADORES */}
        <section
          id="faq"
          className="max-w-7xl mx-auto px-6 pb-28 grid lg:grid-cols-2 gap-10"
        >
          <div className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10">
            <h2 className="text-4xl font-extrabold mb-10">
              Preguntas frecuentes
            </h2>

            <div className="space-y-8">
              {[
                {
                  q: "¿Consume mucho internet?",
                  a: "Depende de cámaras, resolución y calidad configurada.",
                },
                {
                  q: "¿Qué pasa si me roban el DVR?",
                  a: "Las grabaciones respaldadas continúan disponibles.",
                },
                {
                  q: "¿Funciona con sistemas existentes?",
                  a: "Compatible con Dahua, Hikvision y sistemas ONVIF.",
                },
			    {
                  q: "¿Puedo ampliar cámaras más adelante?",
                  a: "Sí. La plataforma es escalable y permite agregar cámaras o ampliar almacenamiento.",
                },
				{
                  q: "¿Cómo accedo a las grabaciones?",
                  a: "El acceso puede realizarse desde PC o celular mediante conexiones seguras protegidas por VPN.",
                },
              ].map((faq) => (
                <div key={faq.q}>
                  <div className="font-semibold text-xl mb-2">{faq.q}</div>
                  <div className="text-slate-400">{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="instaladores"
            className="rounded-[36px] border border-white/10 bg-white/[0.03] p-10"
          >
            <h2 className="text-4xl font-extrabold mb-6">
              ¿Sos instalador?
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-10">
              Sumá respaldo cloud profesional a tus instalaciones y ofrecé un
              servicio de mayor valor para tus clientes.
            </p>

            <div className="space-y-5">
              {[
                "Compatible con sistemas existentes",
                "Configuración asistida",
                "Planes escalables",
                "Soluciones para clientes corporativos",
                "Múltiples sucursales",
                "Soporte técnico especializado",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="text-blue-400" />
                  {item}
                </div>
              ))}
            </div>

            <p className="text-slate-400 mt-10">
              Consultanos por soluciones para integradores y proyectos
              especiales.
            </p>

           <a
  href="https://wa.me/5491111111111?text=Quiero%20hablar%20con%20un%20asesor%20CCTV%20Cloud"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 w-full flex justify-center items-center bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl py-5 text-lg font-semibold hover:scale-[1.02] transition-all"
>
  Hablar con un asesor
</a>
          </div>
        </section>
      </div>

      {/* WHATSAPP */}
      <a
  href="https://wa.me/5491111111111?text=Hola!%20Quiero%20evaluar%20mi%20instalación%20para%20CCTV%20CLOUD."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-12 h-12 fill-white"
  >
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.45 0 .06 5.39.06 12c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62A11.94 11.94 0 0 0 12.06 24h.01c6.61 0 12-5.39 12-12 0-3.2-1.25-6.2-3.55-8.52ZM12.07 21.8h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.67.96.98-3.58-.24-.37A9.8 9.8 0 0 1 2.26 12c0-5.41 4.4-9.81 9.81-9.81 2.62 0 5.08 1.02 6.93 2.88A9.73 9.73 0 0 1 21.87 12c0 5.41-4.4 9.8-9.8 9.8Zm5.38-7.35c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.2-.44-2.29-1.41-.84-.75-1.41-1.68-1.58-1.97-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.37-.02-.51-.07-.15-.65-1.57-.89-2.15-.23-.55-.47-.48-.65-.49h-.55c-.19 0-.49.07-.75.34-.26.29-.98.96-.98 2.34s1 2.71 1.14 2.9c.14.19 1.96 3 4.75 4.2.66.28 1.17.45 1.57.57.66.21 1.26.18 1.73.11.53-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.07-.12-.27-.19-.56-.34Z"/>
  </svg>
</a>
    </div>
  );
}