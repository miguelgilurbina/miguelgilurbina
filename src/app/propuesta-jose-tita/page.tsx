'use client';

import { useEffect } from 'react';
import s from './page.module.css';

const fases = [
  {
    colorClass: s.c1,
    num: '1',
    titulo: 'Los primeros resultados',
    periodo: 'Mes 1 – 2',
    items: [
      'Entendemos a fondo cómo trabaja José hoy — sin asumir nada.',
      'Configuramos el sistema que busca remates cada semana en El Mercurio y el Boletín Concursal automáticamente.',
      'Cada propiedad encontrada se analiza con los criterios exactos de José: deudas, sector, metro, m², avalúo fiscal, precio del dueño original.',
      'José recibe un reporte limpio y listo. Lee, evalúa y decide. En minutos, no en horas.',
      'Capacitación simple en el uso de Claude — sin jerga, sin complicaciones.',
    ],
  },
  {
    colorClass: s.c2,
    num: '2',
    titulo: 'Un sistema más inteligente',
    periodo: 'Mes 3 – 4',
    items: [
      'El sistema aprende a estimar el valor real de entrada de cada propiedad — cruzando avalúo, deudas, arriendo del sector y precio pagado.',
      'Automatizamos la revisión de resoluciones de liquidación y contratos.',
      'Integración en al menos una de las 7 empresas de José.',
      'Menos tiempo leyendo documentos. Más tiempo tomando decisiones.',
    ],
  },
  {
    colorClass: s.c3,
    num: '3',
    titulo: 'El patrimonio, organizado',
    periodo: 'Mes 5 en adelante',
    items: [
      'Expansión del sistema a las 7 empresas — protocolos, documentos, flujos.',
      'Un dashboard que muestra el portafolio completo de José en una sola pantalla.',
      'Estrategia de IA para revisar oportunidades de optimización tributaria.',
      'Mantenimiento continuo: el sistema evoluciona a medida que cambian los criterios de José.',
    ],
  },
];

const porqueItems = [
  {
    num: '01',
    title: 'El sistema funciona con los criterios de José — no con criterios genéricos.',
    body: 'Hay cientos de portales y sistemas de búsqueda inmobiliaria. Ninguno está calibrado con la lógica de inversión que José ha construido durante décadas. Eso es lo que hacemos aquí: trasladar su criterio a un sistema que trabaja las 24 horas.',
  },
  {
    num: '02',
    title: 'No hay caja negra. José siempre sabe qué hace el sistema y por qué.',
    body: 'No es magia. No es un software misterioso. Cada análisis que entrega el sistema tiene una lógica visible y explicable. Si José quiere cambiar un criterio, lo cambia. Si quiere revisar cómo funciona, puede hacerlo.',
  },
  {
    num: '03',
    title: 'Una persona, no una empresa. Una relación, no un contrato.',
    body: 'José no está contratando un proveedor tecnológico. Está eligiendo un asesor que entiende su negocio, aprende con el tiempo, y está disponible cuando hay una duda o una oportunidad urgente. Eso no se consigue con un software.',
  },
  {
    num: '04',
    title: 'Resultados medibles desde las primeras semanas.',
    body: 'Al final del primer mes, José tendrá en la mano un reporte semanal automatizado de remates en Santiago que habría tomado horas hacer a mano. Ese es el punto de partida, no la promesa de algo lejano.',
  },
];

const confianzaPuntos = [
  { icon: '🔒', text: 'Confidencialidad total del portafolio y las empresas' },
  { icon: '📂', text: 'El código de todo lo desarrollado es propiedad de José' },
  { icon: '🤝', text: 'Honestidad sobre lo que la IA puede y no puede hacer hoy' },
  { icon: '📞', text: 'Disponibilidad real, no solo en la reunión semanal' },
  { icon: '🧭', text: 'Transferencia de conocimiento para no depender siempre de nosotros' },
];

export default function PropuestaJoseTita() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(s.visible);
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(`.${s.fadeIn}`).forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={s.proposal}>

      {/* ── HERO ── */}
      <section className={s.hero} id="hero">
        <div className={s.heroInner}>
          <span className={s.heroEyebrow}>Propuesta Personal · Abril 2026</span>
          <h1>
            Décadas de experiencia.<br />
            Es hora de que <em>la tecnología<br />trabaje para usted.</em>
          </h1>
          <p className={s.heroSubtitle}>
            Una propuesta preparada con cuidado para José y Tita.<br />
            No es un producto. Es una relación de confianza.
          </p>
          <a href="#dolor" className={s.heroCta}>Leer la propuesta</a>

          <div className={s.heroStats}>
            <div>
              <div className={s.statNum}>80+</div>
              <div className={s.statLabel}>propiedades en Santiago</div>
            </div>
            <div>
              <div className={s.statNum}>7</div>
              <div className={s.statLabel}>empresas activas</div>
            </div>
            <div>
              <div className={s.statNum}>∞</div>
              <div className={s.statLabel}>horas ahorradas por año</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PUENTE ── */}
      <section className={s.puente}>
        <div className={`${s.puenteText} ${s.fadeIn}`}>
          <p>
            José ha construido todo lo que tiene con su propio criterio, su instinto y su trabajo.
            No necesita que nadie le enseñe a invertir.<br /><br />
            Lo que sí existe hoy es una herramienta que puede hacer en segundos lo que
            antes tomaba horas — y que puede hacerlo con los criterios exactos de José,
            no con criterios genéricos de mercado.
          </p>
          <p className={`${s.firma} ${s.sans}`}>Esta propuesta explica cómo.</p>
        </div>
      </section>

      {/* ── DOLOR ── */}
      <section className={s.dolor} id="dolor">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={s.goldLine} />
          <h2 className={s.sectionTitle}>Lo que hoy le cuesta <em>tiempo y energía</em></h2>
          <p className={`${s.sectionLead} ${s.sans}`}>
            Cada semana, el mismo proceso. Manual. Disperso. Dependiente de que José esté disponible.
          </p>
          <div className={s.dolorGrid}>
            {[
              { icon: '📰', title: 'Revisar el Mercurio y el Boletín Concursal', body: 'Cada domingo, buscar entre páginas y páginas para no perderse ningún remate que valga la pena.' },
              { icon: '📋', title: 'Analizar cada propiedad a mano', body: 'Deudas de contribuciones, agua, luz, gastos comunes. Distancia al metro. Avalúo fiscal. Precio de arriendo. Todo uno por uno.' },
              { icon: '⏰', title: 'Tiempo que no se recupera', body: 'El análisis depende completamente de que José esté disponible. Si no está, la oportunidad puede pasar.' },
              { icon: '🔍', title: 'Sin filtro previo', body: 'Se revisan propiedades que muchas veces no cumplen los criterios mínimos. El tiempo de José vale demasiado para eso.' },
            ].map((c) => (
              <div key={c.title} className={s.dolorCard}>
                <span className={s.dolorCardIcon}>{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMBOS ── */}
      <section className={s.ambos} id="ambos">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={`${s.goldLine} ${s.centered}`} />
          <h2 className={`${s.sectionTitle} ${s.center}`}>
            Lo que esto significa<br /><em>para cada uno</em>
          </h2>
          <p className={`${s.sectionLead} ${s.sans} ${s.centered}`} style={{ marginTop: 16, color: 'rgba(255,255,255,0.6)' }}>
            Esta consultoría tiene un valor distinto para José y para Tita. Los dos ganan. De formas diferentes.
          </p>
          <div className={s.ambosGrid}>
            <div className={`${s.ambosCol} ${s.goldBorder}`}>
              <span className={s.ambosName}>Para José</span>
              <h3>Recuperar el tiempo para lo que realmente importa.</h3>
              <ul>
                <li>Un reporte semanal de remates listo cada lunes — sin buscarlo.</li>
                <li>Cada propiedad ya analizada con sus propios criterios.</li>
                <li>Decisiones más rápidas. Menos oportunidades perdidas.</li>
                <li>Un sistema que trabaja aunque José esté en otra cosa.</li>
                <li>La misma intuición de siempre, potenciada con datos.</li>
              </ul>
            </div>
            <div className={`${s.ambosCol} ${s.goldBorder}`}>
              <span className={s.ambosName}>Para Tita</span>
              <h3>La tranquilidad de que el trabajo de décadas está bien protegido.</h3>
              <ul>
                <li>José con menos carga operativa semana a semana.</li>
                <li>Un asesor de confianza — una persona, no una empresa anónima.</li>
                <li>Todo lo construido organizado, documentado y con respaldo.</li>
                <li>Un proceso que no depende de que José esté siempre disponible.</li>
                <li>Tranquilidad de que hay alguien que entiende el negocio.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FASES ── */}
      <section className={s.fases} id="fases">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={s.goldLine} />
          <h2 className={s.sectionTitle}>Cómo funciona. <em>Paso a paso.</em></h2>
          <p className={`${s.sectionLead} ${s.sans}`}>
            Tres fases. Sin tecnicismos. Resultados concretos desde el primer mes.
          </p>
          <div className={s.fasesList}>
            {fases.map((fase) => (
              <div key={fase.num} className={s.faseCard}>
                <div className={`${s.faseNumCol} ${fase.colorClass}`}>
                  <span className={s.faseNum}>{fase.num}</span>
                  <span className={s.faseNumLabel}>Fase</span>
                </div>
                <div className={s.faseContent}>
                  <div className={s.faseHeader}>
                    <span className={s.faseTitulo}>{fase.titulo}</span>
                    <span className={s.fasePeriodo}>{fase.periodo}</span>
                  </div>
                  <div className={s.faseItems}>
                    {fase.items.map((item, i) => (
                      <div key={i} className={s.faseItem}>{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRECIOS ── */}
      <section className={s.precios} id="precios">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={s.goldLine} />
          <h2 className={s.sectionTitle}>Tres opciones. <em>Una sola decisión.</em></h2>
          <p className={`${s.sectionLead} ${s.sans}`}>
            Sin letra chica. Sin permanencia indefinida. Comenzamos con lo que tenga sentido para ustedes.
          </p>
          <div className={s.preciosGrid}>

            {/* Opción B */}
            <div className={s.precioCard}>
              <div className={s.precioHead}>
                <span className={s.precioBadge}>Opción B</span>
                <div className={s.precioNombre}>Por proyecto</div>
                <div className={s.precioDesc}>Precio fijo por cada fase. Sin compromiso de continuidad.</div>
              </div>
              <div className={s.precioBody}>
                <div className={s.precioValor}>$8M – $14M</div>
                <div className={`${s.precioMoneda} ${s.sans}`}>CLP por fase completada · IVA incluido</div>
                <ul className={s.precioFeatures}>
                  <li>Ideal para comenzar sin compromiso largo</li>
                  <li>50% al inicio, 50% contra entrega</li>
                  <li>Cada fase es un contrato independiente</li>
                  <li>Entregables claros antes de pagar</li>
                </ul>
              </div>
            </div>

            {/* Opción A — Recomendada */}
            <div className={`${s.precioCard} ${s.featured}`}>
              <div className={s.precioHead}>
                <span className={s.precioBadge}>★ Recomendado · Opción A</span>
                <div className={s.precioNombre}>Asesoría continua</div>
                <div className={s.precioDesc}>Reunión semanal + soporte permanente + entregables recurrentes.</div>
              </div>
              <div className={s.precioBody}>
                <div className={s.precioValor}>$3,5M – $4,5M</div>
                <div className={`${s.precioMoneda} ${s.sans}`}>CLP al mes · IVA incluido</div>
                <ul className={s.precioFeatures}>
                  <li>Compromiso inicial de 3 meses</li>
                  <li>Reunión semanal fija con José</li>
                  <li>Soporte prioritario ante cualquier duda</li>
                  <li>Ajustes y mejoras continuas sin costo extra</li>
                  <li>El consultor está disponible, no solo cuando hay proyecto</li>
                </ul>
              </div>
            </div>

            {/* Opción C */}
            <div className={s.precioCard}>
              <div className={s.precioHead}>
                <span className={s.precioBadge}>Opción C</span>
                <div className={s.precioNombre}>Modelo mixto</div>
                <div className={s.precioDesc}>Retainer reducido + tarifa por proyecto específico.</div>
              </div>
              <div className={s.precioBody}>
                <div className={s.precioValor}>$2M / mes</div>
                <div className={`${s.precioMoneda} ${s.sans}`}>+ $3M por proyecto adicional · IVA incluido</div>
                <ul className={s.precioFeatures}>
                  <li>Mínimo 2 meses de retainer</li>
                  <li>Flexibilidad para escalar en el tiempo</li>
                  <li>Buen punto de entrada si hay dudas del alcance</li>
                  <li>Se ajusta a medida que crece la relación</li>
                </ul>
              </div>
            </div>

          </div>
          <p className={`${s.precioNota} ${s.sans}`}>
            Todos los valores en pesos chilenos. Pago mensual anticipado vía transferencia bancaria.
            La Opción A es la recomendada porque alinea los incentivos: el consultor gana cuando
            José gana, no solo cuando entrega un proyecto puntual.
          </p>
        </div>
      </section>

      {/* ── POR QUÉ ── */}
      <section className={s.porque} id="porque">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={s.goldLine} />
          <h2 className={s.sectionTitle}>Por qué tiene sentido<br /><em>confiar en esta relación</em></h2>
          <p className={`${s.sectionLead} ${s.sans}`}>Cuatro razones concretas. Sin adornos.</p>
          <div className={s.porqueList}>
            {porqueItems.map((item) => (
              <div key={item.num} className={s.porqueItem}>
                <div className={s.porqueNum}>{item.num}</div>
                <div className={s.porqueText}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONFIANZA ── */}
      <section className={s.confianza} id="confianza">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={`${s.goldLine} ${s.centered}`} />
          <h2 className={s.sectionTitle}>Lo que siempre está garantizado</h2>
          <p className={`${s.sectionLead} ${s.sans} ${s.centered}`} style={{ marginTop: 16 }}>
            Compromisos que no necesitan contrato largo para cumplirse.
          </p>
          <div className={s.confianzaPuntos}>
            {confianzaPuntos.map((p) => (
              <div key={p.text} className={s.confPunto}>
                <span className={s.confPuntoIcon}>{p.icon}</span>
                <div className={s.confPuntoText}>{p.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={s.cta} id="cta">
        <div className={`${s.container} ${s.fadeIn}`}>
          <div className={`${s.goldLine} ${s.centered}`} />
          <h2 className={s.sectionTitle}>El primer paso es<br /><em>una conversación.</em></h2>
          <p className={`${s.sectionLead} ${s.sans} ${s.centered}`} style={{ marginTop: 16 }}>
            No hay nada que firmar hoy. Solo una reunión para resolver dudas,
            ajustar lo que sea necesario y ver si tiene sentido avanzar juntos.
          </p>
          <div className={s.ctaButtons}>
            <a
              href="mailto:miguel.gil.9210@gmail.com?subject=Consultor%C3%ADa%20IA%20-%20Propuesta%20Jos%C3%A9"
              className={s.btnPrimary}
            >
              Agendar reunión de seguimiento
            </a>
            <a href="#fases" className={s.btnSecondary}>Revisar las fases</a>
          </div>
          <div className={s.ctaFootnote}>
            Esta propuesta tiene validez de 30 días desde su emisión.<br />
            Preparada con cuidado para José y Tita · Santiago de Chile · Abril 2026
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={s.footer}>
        <p>Consultoría de Transformación Digital e Inteligencia Artificial · Santiago, Chile · 2026</p>
        <p className={s.footerSub}>Documento confidencial preparado exclusivamente para José y Tita.</p>
      </footer>

    </div>
  );
}
