"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Camera,
  ShieldCheck,
  Cloud,
} from "lucide-react";

export default function CotizadorPage() {
  const [plan, setPlan] = useState("7");
  const [cameras, setCameras] = useState(4);
  const [vpn, setVpn] = useState(false);

  const prices: Record<string, number> = {
    "3": 4,
    "7": 5,
    "30": 6.5,
  };

  const result = useMemo(() => {
    const pricePerCamera = prices[plan];
    const subtotal = pricePerCamera * cameras;

    let discount = 0;

    if (cameras >= 4 && cameras <= 7) {
      discount = 0.1;
    }

    if (cameras >= 8) {
      discount = 0.15;
    }

    const discountAmount = subtotal * discount;
    const vpnPrice = vpn ? 100 : 0;

    return {
      subtotal,
      discount,
      discountAmount,
      vpnPrice,
      total: subtotal - discountAmount + vpnPrice,
      pricePerCamera,
    };
  }, [plan, cameras, vpn]);

  return (
    <div className="min-h-screen bg-[#050816] text-white relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_40%)]" />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-[160px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">
        {/* HERO */}
        <section className="text-center mb-24">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm mb-8 backdrop-blur-xl">
            <Calculator className="w-4 h-4" />
            Plataforma Cloud para Videovigilancia
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-[-0.03em] leading-[1.1] pb-4 pr-6 overflow-visible">
           COTIZADOR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
           CLOUD
          </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl mt-8 leading-relaxed font-light">
            Calculá el costo mensual de almacenamiento cloud
            para tu sistema de videovigilancia.
          </p>
        </section>

        {/* CONTENT */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
          {/* CONFIG */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Cloud className="w-8 h-8 text-blue-400" />
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Configuración
                </h2>

                <p className="text-slate-400 mt-1 text-lg">
                  Personalizá tu cotización
                </p>
              </div>
            </div>

            <div className="space-y-8">
              {/* PLAN */}
              <div>
                <label className="block text-sm text-slate-300 mb-3">
                  Plan de almacenamiento
                </label>

                <select
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full bg-[#0a1220] border border-white/10 rounded-2xl px-5 py-4 text-base outline-none focus:border-blue-500 transition-all"
                >
                  <option value="3">Cloud 3 días</option>
                  <option value="7">Cloud 7 días</option>
                  <option value="30">Cloud 30 días</option>
                </select>
              </div>

              {/* CAMERAS */}
              <div>
                <label className="block text-sm text-slate-300 mb-3">
                  Cantidad de cámaras
                </label>

               <select
  value={cameras}
  onChange={(e) => setCameras(Number(e.target.value))}
  className="w-full appearance-none bg-[#0a1220] border border-white/10 rounded-2xl px-5 py-4 text-base text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
>
  {Array.from({ length: 48 }, (_, i) => i + 1).map((num) => (
    <option key={num} value={num}>
      {num} 
    </option>
  ))}
</select>

                <div className="mt-4 text-sm text-slate-400 leading-relaxed">
                  0-3 cámaras: sin descuento · 4-7 cámaras:
                  <span className="text-blue-400"> 10% OFF </span>
                  · 8+ cámaras:
                  <span className="text-cyan-400"> 15% OFF</span>
                </div>
              </div>

              {/* VPN */}
              <div className="rounded-[28px] border border-blue-500/20 bg-blue-500/[0.05] p-6">
                <label className="flex items-start justify-between gap-5 cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-7 h-7 text-blue-400" />
                    </div>

                    <div>
                      <div className="text-lg font-semibold">
                        Agregar seguridad VPN (Pago por única vez)
                      </div>

                      <div className="text-slate-400 mt-2 text-sm leading-relaxed">
                        Acceso remoto seguro y conexión cifrada.
                      </div>

                      <div className="mt-4 inline-flex bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-1 rounded-xl text-xs font-semibold">
                        + USD 100
                      </div>
                    </div>
                  </div>

                  <input
                    type="checkbox"
                    checked={vpn}
                    onChange={() => setVpn(!vpn)}
                    className="w-5 h-5 mt-1 accent-blue-500"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* RESULT */}
          <div className="rounded-[32px] border border-blue-500/20 bg-gradient-to-b from-blue-500/[0.08] to-transparent backdrop-blur-2xl p-8 md:p-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <Calculator className="w-7 h-7 text-blue-400" />
              </div>

              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Resumen
                </h2>

                <p className="text-slate-400 text-lg mt-1">
                  Estimación mensual
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  Plan
                </span>

                <span className="text-lg font-light">
                  Cloud {plan}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  Precio por cámara
                </span>

                <span className="text-lg font-light">
                  USD {result.pricePerCamera}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  Cámaras
                </span>

                <span className="text-lg font-light flex items-center gap-2">
                  <Camera className="w-4 h-4 text-blue-400" />
                  {cameras}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  Subtotal
                </span>

                <span className="text-lg font-light">
                  USD {result.subtotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  Descuento
                </span>

                <span className="text-lg font-medium text-green-400">
                  -{(result.discount * 100).toFixed(0)}%
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">
                  VPN
                </span>

                <span className="text-lg font-light">
                  {vpn ? "USD 100" : "-"}
                </span>
              </div>

              <div className="border-t border-white/10 pt-8 mt-8">
                <div className="text-slate-400 text-sm mb-3">
                  Total
                </div>

                <div className="text-5xl md:text-6xl font-extrabold tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  USD {result.total.toFixed(2)}
                </div>
              </div>

          </div>
          </div>
        </section>
      </div>
    </div>
  );
}