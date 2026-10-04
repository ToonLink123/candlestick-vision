'use client'

import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, ChevronRight, GitBranch, Play, Scan, Sparkles } from 'lucide-react'

const pipeline = [
  { step: '01', title: 'Capture', detail: 'RGB + depth frames' },
  { step: '02', title: 'Detect', detail: 'YOLOv8 fine-tuned' },
  { step: '03', title: 'Understand', detail: 'Temporal context' },
  { step: '04', title: 'Act', detail: 'Low-latency output' },
]

export default function Page() {
  const [view, setView] = useState<'thermal' | 'detection'>('detection')

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground"><Scan size={16} /></span>
          VISION / 01
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground md:flex">
          <a href="#about" className="transition-colors hover:text-foreground">About</a>
          <a href="#pipeline" className="transition-colors hover:text-foreground">Pipeline</a>
          <a href="#results" className="transition-colors hover:text-foreground">Results</a>
        </nav>
        <a href="#contact" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em]">Let&apos;s connect <ArrowUpRight size={14} /></a>
      </header>

      <section id="top" className="mx-auto max-w-[1400px] px-5 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-2 rounded-full bg-accent" /> Independent computer vision study · 2026
        </div>
        <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <h1 className="max-w-4xl font-serif text-[clamp(3.6rem,9vw,9rem)] leading-[0.83] tracking-[-0.075em]">
            Teaching a camera<br /><span className="text-accent">to notice.</span>
          </h1>
          <div className="max-w-sm pb-2">
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">A real-time vision system that helps machines read the room — recognizing objects, movement, and intent in messy environments.</p>
            <a href="#about" className="inline-flex items-center gap-3 border-b border-foreground pb-2 text-sm font-semibold">Explore the project <ArrowDownRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="mx-5 md:mx-10">
        <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-ink p-5 text-white md:min-h-[600px] md:p-10">
          <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="absolute left-[12%] top-[18%] h-[48%] w-[34%] rounded-[42%] border border-accent/70 shadow-[0_0_80px_rgba(242,84,45,.18)] md:left-[23%] md:w-[26%]" />
          <div className="absolute left-[18%] top-[28%] h-[28%] w-[22%] rounded-[45%] border border-accent/35 md:left-[29%] md:w-[18%]" />
          <div className="absolute right-[12%] top-[12%] flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/55"><span className="size-2 animate-pulse rounded-full bg-accent" /> Live inference</div>
          <div className="absolute bottom-8 left-6 right-6 flex flex-col justify-between gap-5 md:bottom-10 md:left-10 md:right-10 md:flex-row md:items-end">
            <div><div className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">Scene / 0042</div><div className="font-serif text-4xl tracking-tight md:text-6xl">What does it see?</div></div>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 border-l border-white/20 pl-5 text-xs text-white/60"><span>OBJECTS</span><strong className="text-white">07 detected</strong><span>LATENCY</span><strong className="text-white">31 ms</strong></div>
          </div>
          <div className="absolute left-[31%] top-[39%] rounded border border-accent bg-accent/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-accent">person · 98.4%</div>
          <div className="absolute left-[58%] top-[27%] rounded border border-signal bg-signal/10 px-2 py-1 text-[10px] uppercase tracking-[0.12em] text-signal">chair · 91.2%</div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1400px] gap-14 px-5 py-24 md:grid-cols-[0.7fr_1.3fr] md:px-10 md:py-36">
        <div><div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">01 / The question</div><h2 className="font-serif text-5xl leading-none tracking-[-0.05em] md:text-7xl">Seeing is not<br />the same as<br /><em>understanding.</em></h2></div>
        <div className="max-w-2xl self-end"><p className="text-2xl leading-snug tracking-tight md:text-4xl">Most vision systems are trained on clean images and tidy labels. The real world is neither.</p><p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">This project explores how a lightweight model can stay reliable when lighting shifts, objects overlap, and the scene refuses to hold still. The goal is not just detection — it&apos;s useful perception.</p></div>
      </section>

      <section id="pipeline" className="border-y border-border bg-card px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1400px]"><div className="mb-12 flex items-end justify-between"><div><div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">02 / The pipeline</div><h2 className="font-serif text-5xl tracking-[-0.06em] md:text-7xl">From pixels<br />to signal.</h2></div><Sparkles className="hidden text-accent md:block" size={42} /></div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">{pipeline.map((item, index) => <div key={item.step} className="bg-card p-6 md:min-h-52 md:p-8"><div className="mb-14 flex justify-between text-xs text-muted-foreground"><span>{item.step}</span>{index < 3 && <ChevronRight className="hidden md:block" size={15} />}</div><h3 className="mb-2 text-xl font-semibold">{item.title}</h3><p className="text-sm text-muted-foreground">{item.detail}</p></div>)}</div>
        </div>
      </section>

      <section id="results" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><div className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">03 / Results</div><h2 className="font-serif text-5xl tracking-[-0.06em] md:text-7xl">A model with<br /><span className="text-accent">something to say.</span></h2></div><div className="flex rounded-full border border-border p-1 text-xs font-semibold"><button onClick={() => setView('detection')} className={`rounded-full px-4 py-2 ${view === 'detection' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>Detection</button><button onClick={() => setView('thermal')} className={`rounded-full px-4 py-2 ${view === 'thermal' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'}`}>Thermal</button></div></div>
        <div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-accent p-8 text-accent-foreground md:col-span-2"><div className="mb-16 flex justify-between text-xs uppercase tracking-[0.16em]"><span>Validation set / 2,400 frames</span><Play size={16} fill="currentColor" /></div><div className="font-serif text-8xl tracking-[-0.08em] md:text-[10rem]">94.7<span className="text-4xl">%</span></div><div className="mt-2 text-sm font-semibold uppercase tracking-[0.16em]">mean average precision</div></div><div className="flex flex-col justify-between rounded-2xl bg-ink p-8 text-white"><span className="text-xs uppercase tracking-[0.16em] text-white/50">Current view</span><div><div className="mb-3 text-3xl font-semibold">{view === 'detection' ? 'Object detection' : 'Thermal signal'}</div><p className="text-sm leading-relaxed text-white/55">{view === 'detection' ? 'Bounding boxes, confidence scores, and class labels in real time.' : 'Heat signatures isolated from visual noise for low-light scenes.'}</p></div><div className="mt-12 flex items-center gap-2 text-xs text-accent"><span className="size-2 rounded-full bg-accent" /> Model online</div></div></div>
      </section>

      <footer id="contact" className="bg-ink px-5 py-16 text-white md:px-10 md:py-24"><div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-12 md:flex-row md:items-end"><div><div className="mb-5 text-xs uppercase tracking-[0.2em] text-accent">Open to ideas</div><h2 className="max-w-2xl font-serif text-5xl tracking-[-0.06em] md:text-8xl">Let&apos;s make<br />machines <em>look closer.</em></h2></div><div className="flex gap-5"><a aria-label="GitHub" href="#" className="grid size-11 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white hover:text-ink"><GitBranch size={18} /></a><a href="mailto:hello@vision01.studio" className="flex items-center gap-2 border-b border-accent pb-2 text-sm">hello@vision01.studio <ArrowUpRight size={15} /></a></div></div><div className="mx-auto mt-20 flex max-w-[1400px] justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[0.16em] text-white/40"><span>Vision / 01</span><span>Built with curiosity</span><span>© 2026</span></div></footer>
    </main>
  )
}
