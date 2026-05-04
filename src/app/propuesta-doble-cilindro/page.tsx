'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import s from './page.module.css';

export default function PropuestaDobleCilindro() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add(s.in);
        }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(`.${s.fade}`).forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const includes = [
    {
      icon: '🎨',
      title: 'Diseño responsivo desde cero',
      desc: 'Se ve bien en celular, tablet y computador. Se soluciona el responsive roto del sitio actual.',
    },
    {
      icon: '🛒',
      title: 'Tienda online funcional',
      desc: 'Catálogo de productos, carrito y pago real con MercadoPago. Los clientes compran desde el sitio.',
    },
    {
      icon: '🔄',
      title: 'Migración completa desde Wix',
      desc: 'Contenido, imágenes, servicios, dominio — todo se traslada sin perder tráfico ni posicionamiento.',
    },
    {
      icon: '🤖',
      title: 'Agente IA para editar el sitio',
      desc: 'Un chat dentro del panel admin. Le escribís lo que querés cambiar y el sitio se actualiza solo en segundos.',
    },
    {
      icon: '🔍',
      title: 'SEO básico configurado',
      desc: 'Títulos, descripciones, estructura correcta para que Google indexe bien el sitio desde el primer día.',
    },
    {
      icon: '🚀',
      title: 'Hosting en Vercel',
      desc: 'CDN global, SSL automático, carga rápida. Sin costo mensual adicional de hosting al entregar.',
    },
  ];

  const paySteps = [
    { pct: '50%', amt: '$450.000', lbl: 'Al confirmar — arrancan los trabajos' },
    { pct: '35%', amt: '$315.000', lbl: 'Al entregar el sitio terminado' },
    { pct: '15%', amt: '$135.000', lbl: 'Luego del período de marcha blanca' },
  ];

  const priceMeta = [
    { label: 'Plazo', value: '1 a 1½ meses' },
    { label: 'Revisiones', value: 'Incluidas' },
    { label: 'Extras', value: 'Ninguno' },
  ];

  return (
    <div className={s.proposal}>
      {/* NAV */}
      <nav className={s.nav}>
        <Image
          src="/images/doble-cilindro-texto.avif"
          alt="Doble Cilindro"
          width={200}
          height={40}
          className={s.navLogo}
          priority
        />
        <a href="#contacto" className={s.navCta}>Hablemos</a>
      </nav>

      {/* HERO */}
      <div className={`${s.hero} ${s.fade}`}>
        <div className={s.container}>
          <div className={s.heroInner}>
            <div className={s.heroContent}>
          <div className={s.heroEyebrow}>Mayo 2026</div>
          <h1>
            Una web nueva,<br />hecha para vender.
          </h1>
          <p className={s.heroDesc}>
            Migramos todo tu sitio actual desde Wix a una plataforma propia —
            con tienda online real y un agente de IA incluido para que puedas
            editarla tú mismo cuando quieras, sin llamar a nadie.
          </p>
          <div className={s.heroChips}>
            <span className={s.chip}><span className={s.dot} />$900.000 CLP + IVA</span>
            <span className={s.chip}><span className={s.dot} />1 a 1½ meses</span>
            <span className={s.chip}><span className={s.dot} />Precio fijo</span>
          </div>
            </div>
            <div className={s.heroMascot}>
              <Image
                src="/images/logo-doblecilindro.avif"
                alt="Mascota Doble Cilindro"
                width={220}
                height={220}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* QUÉ INCLUYE */}
      <section className={s.fade}>
        <div className={s.container}>
          <div className={s.sectionLabel}>Qué incluye</div>
          <h2>Todo en uno, sin extras ocultos</h2>
          <p className={s.sectionIntro}>
            Un solo precio cubre el diseño, el desarrollo, la tienda y el agente IA.
            Sin costos adicionales al entregar.
          </p>
          <div className={s.includesList}>
            {includes.map((item) => (
              <div key={item.title} className={s.includeItem}>
                <div className={s.includeIcon}>{item.icon}</div>
                <div className={s.includeText}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTE IA */}
      <section className={s.fade}>
        <div className={s.container}>
          <div className={s.sectionLabel}>El agente IA</div>
          <h2>
            Editás el sitio escribiendo,<br />sin tocar código
          </h2>
          <p className={s.sectionIntro}>
            Dentro del panel admin hay un chat. Le escribís lo que querés y el agente
            hace el cambio, lo sube a Git y Vercel despliega en segundos.
          </p>
          <div className={s.agentBox}>
            <div className={s.agentTitle}>Ejemplos de lo que podés pedirle</div>
            <div className={s.msgList}>
              <div className={s.msg}>Cambia el precio del servicio Express a $12.990</div>
              <div className={s.msg}>Agrega un producto nuevo: Cera en Spray — $8.500</div>
              <div className={s.msg}>Publica un artículo sobre cómo limpiar la cadena</div>
            </div>
            <div className={s.resultLine}>
              <span className={s.resultBadge}>✓ Listo</span>
              <span>Cambio aplicado → commit en Git → sitio actualizado en ~30 seg</span>
            </div>
          </div>
          <p className={s.agentFootnote}>
            El agente está incluido en el proyecto. Si después quieren mantenimiento mensual continuo,
            hay planes opcionales a partir de $25.000/mes — pero no es obligatorio.
          </p>
        </div>
      </section>

      {/* PRECIO */}
      <section id="precio" className={s.fade}>
        <div className={s.container}>
          <div className={s.sectionLabel}>Inversión</div>
          <h2>Un precio, todo incluido</h2>

          <div className={s.priceBlock}>
            <div className={s.priceAmount}>$900.000</div>
            <div className={s.priceNote}>CLP — precio fijo, IVA no incluido</div>
            <div className={s.priceMeta}>
              {priceMeta.map((item) => (
                <div key={item.label} className={s.priceMetaItem}>
                  <div className={s.metaLabel}>{item.label}</div>
                  <div className={s.metaValue}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={s.payTitle}>Forma de pago</div>
          <div className={s.paySteps}>
            {paySteps.map((step) => (
              <div key={step.pct} className={s.payStep}>
                <div className={s.pct}>{step.pct}</div>
                <div className={s.stepAmt}>{step.amt}</div>
                <div className={s.stepLbl}>{step.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANES OPCIONALES */}
      <section id="agente" className={s.fade}>
        <div className={s.container}>
          <div className={s.sectionLabel}>Opcional</div>
          <h2>Mantenimiento mensual con el agente</h2>
          <p className={s.sectionIntro}>
            Si quieren seguir usando el agente para actualizaciones frecuentes después del
            lanzamiento, hay planes mensuales. Son opcionales — se puede activar, pausar o
            cancelar cuando quieran.
          </p>

          <div className={s.plansGrid}>
            {/* Básico */}
            <div className={s.plan}>
              <div className={`${s.planHead} ${s.planHeadLight}`}>
                <div className={s.planName}>Básico</div>
                <div className={s.planPrice}>$25.000</div>
                <div className={s.planSub}>por mes</div>
                <div className={s.planQuota}>20 cambios/mes</div>
              </div>
              <div className={s.planBody}>
                <div className={s.pf}><span className={s.ok}>✓</span>Chat IA en el panel</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Deploy automático</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Hosting Vercel</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Soporte (48 hrs)</div>
                <div className={s.pf}><span className={s.no}>–</span><span className={s.dim}>Rollback de versiones</span></div>
                <div className={s.pf}><span className={s.ok}>+</span>Extra: $1.500/cambio</div>
              </div>
            </div>

            {/* Pro */}
            <div className={`${s.plan} ${s.planFeatured}`}>
              <div className={`${s.planHead} ${s.planHeadDark}`}>
                <div className={s.planName}>
                  Pro{' '}
                  <span style={{ background: '#2563eb', color: 'white', fontSize: '.65rem', padding: '2px 7px', borderRadius: '100px' }}>
                    Popular
                  </span>
                </div>
                <div className={s.planPrice}>$45.000</div>
                <div className={s.planSub}>por mes</div>
                <div className={s.planQuota}>60 cambios/mes</div>
              </div>
              <div className={s.planBody}>
                <div className={s.pf}><span className={s.ok}>✓</span>Chat IA en el panel</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Deploy automático</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Hosting Vercel</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Soporte (48 hrs)</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Rollback de versiones</div>
                <div className={s.pf}><span className={s.ok}>+</span>Extra: $1.000/cambio</div>
              </div>
            </div>

            {/* Ilimitado */}
            <div className={s.plan}>
              <div className={`${s.planHead} ${s.planHeadLight}`}>
                <div className={s.planName}>Ilimitado</div>
                <div className={s.planPrice}>$65.000</div>
                <div className={s.planSub}>por mes</div>
                <div className={s.planQuota}>Sin límite</div>
              </div>
              <div className={s.planBody}>
                <div className={s.pf}><span className={s.ok}>✓</span>Chat IA en el panel</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Deploy automático</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Hosting Vercel</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Soporte prioritario</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Rollback de versiones</div>
                <div className={s.pf}><span className={s.ok}>✓</span>Cambios extras incluidos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className={`${s.ctaSection} ${s.fade}`} id="contacto">
        <div className={s.container}>
          <h2>¿Te interesa? Hablemos.</h2>
          <p>Escribime y coordinamos una llamada corta para ver si encajamos.</p>
          <a
            href="https://wa.me/56977221088?text=Hola%20Miguel%2C%20vi%20tu%20propuesta%20y%20quiero%20saber%20m%C3%A1s."
            className={s.btnMain}
          >
            Escribir a miguel.gil.9210@gmail.com
          </a>
          <div className={s.ctaPhone}>
            o llamar al <a href="tel:+56977221088">+56 9 7722 1088</a>
          </div>
          <div className={s.ctaNote}>Propuesta válida por 30 días · Mayo 2026</div>
        </div>
      </div>

      <footer className={s.footer}>
        doblecilindro.com &nbsp;·&nbsp; Santiago, Chile
      </footer>
    </div>
  );
}
