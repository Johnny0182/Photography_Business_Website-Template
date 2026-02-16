'use client';

import { FormEvent, useMemo, useState } from 'react';

type Tier = {
  name: string;
  price: string;
  points: string[];
  popular?: boolean;
};

const navItems = [
  'HOME',
  'ABOUT US',
  'OUR EDITING STYLES',
  'QUINCEAÑERA PRICING',
  'WEDDING PRICING',
  'ACCESS PHOTOS',
  'MORE ▾',
];

const services = [
  { title: 'Weddings', text: 'Full-day documentary coverage with elegant portraits and timeline guidance.' },
  { title: 'Quinceañeras', text: 'Traditions, family portraits, and celebration details captured with intention.' },
  { title: 'Graduations', text: 'Confident editorial portraits and candid moments for grads and loved ones.' },
  { title: 'Music Videos', text: 'Stylized campaign stills and visual storytelling for artist releases.' },
  { title: 'Events / Parties', text: 'Fast-moving coverage of toasts, dances, and meaningful interactions.' },
  { title: 'Lifestyle / Brand', text: 'Clean, modern imagery for creators, entrepreneurs, and personal brands.' },
];

const styles = ['True-to-life', 'Warm cinematic', 'Moody film', 'Vibrant celebration'];

const quinceTiers: Tier[] = [
  {
    name: 'Starter',
    price: '$1,800',
    points: ['6 hours coverage', 'One photographer', 'Secure online gallery'],
  },
  {
    name: 'Signature',
    price: '$2,900',
    points: ['8 hours coverage', 'Two-photographer team', 'Highlight slideshow'],
    popular: true,
  },
  {
    name: 'Legacy',
    price: '$4,200',
    points: ['10 hours coverage', 'Pre-session portraits', 'Premium print credit'],
  },
];

const weddingTiers: Tier[] = [
  {
    name: 'Starter',
    price: '$2,400',
    points: ['7 hours coverage', 'Planning support', 'Secure digital delivery'],
  },
  {
    name: 'Signature',
    price: '$3,800',
    points: ['9 hours coverage', 'Two-photographer team', 'Cinematic edit collection'],
    popular: true,
  },
  {
    name: 'Legacy',
    price: '$5,600',
    points: ['12 hours coverage', 'Next-day preview', 'Heirloom album credit'],
  },
];

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContext, setModalContext] = useState('Request Availability');
  const [showPackages, setShowPackages] = useState(true);
  const [galleryCode, setGalleryCode] = useState('');
  const [galleryUnlocked, setGalleryUnlocked] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [contactSent, setContactSent] = useState(false);

  const bookedDays = useMemo(() => new Set([3, 8, 12, 17, 21, 29]), []);

  const openModal = (context: string) => {
    setModalContext(context);
    setIsModalOpen(true);
  };

  const handleGallery = (event: FormEvent) => {
    event.preventDefault();
    setGalleryUnlocked(galleryCode.trim().length > 0);
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setContactSent(true);
  };

  return (
    <main className="min-h-screen bg-bright">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-6 sm:px-6 lg:px-10">
        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 border-b border-slate-200 pb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-700 sm:gap-x-6 sm:text-xs">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              disabled
              aria-disabled
              className="pointer-events-none cursor-default select-none rounded-full px-2 py-1"
            >
              {item}
            </button>
          ))}
        </nav>

        <section className="mx-auto max-w-4xl py-14 text-center sm:py-20">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-indigo-600">Lantern&LogicPhotography</p>
          <h1 className="serif-display text-3xl uppercase leading-tight tracking-[0.08em] text-slate-900 sm:text-5xl lg:text-6xl">
            Legacy Moments, Captured with Light, Emotion, and Intention
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            We are a two-person travel photography studio documenting weddings, quinceañeras, graduations,
            parties, and music visuals with premium storytelling and refined edits.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => openModal('Request Availability')}
              className="rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-glow transition hover:brightness-110"
            >
              Request Availability
            </button>
            <button
              type="button"
              onClick={() => setShowPackages((prev) => !prev)}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-slate-800 transition hover:border-slate-500"
            >
              View Packages
            </button>
          </div>
        </section>

        <div className="mb-16 h-[280px] overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-300/35 via-sky-200/30 to-white shadow-glow sm:h-[420px]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85),transparent_42%),linear-gradient(130deg,rgba(79,70,229,0.18),rgba(56,189,248,0.22))]" />
        </div>

        <section className="mb-16 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="serif-display text-3xl uppercase tracking-[0.08em] text-slate-900">About Our Story</h2>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              Lantern&LogicPhotography is a travel-based two-person team serving Los Angeles and destination
              celebrations throughout California and beyond. We blend documentary honesty with polished editorial
              direction. We do not operate a physical studio; every experience is personalized and delivered through
              secure digital methods.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              ['✈️', 'Travel-ready team', 'Flexible service for Los Angeles, statewide, and destination events.'],
              ['🔒', 'Secure delivery', 'Private gallery links and protected final photo handoff.'],
              ['🎞️', 'Cinematic editing', 'Premium color grading and timeless tonal treatment.'],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-soft p-4">
                <p className="text-xl">{icon}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-900">{title}</p>
                <p className="mt-2 text-xs leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-display text-center text-3xl uppercase tracking-[0.08em] text-slate-900">Services</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="serif-display text-center text-3xl uppercase tracking-[0.08em] text-slate-900">
            Editing Styles
          </h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {styles.map((styleName) => (
              <div key={styleName} className="rounded-2xl border border-indigo-100 bg-soft p-5">
                <p className="text-[11px] uppercase tracking-[0.18em] text-indigo-500">Style</p>
                <p className="serif-display mt-2 text-xl text-slate-900">{styleName}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">Styles shown are examples; final look is tailored.</p>
        </section>

        <section className="mb-16">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="serif-display text-3xl uppercase tracking-[0.08em] text-slate-900">Pricing</h2>
            <span className="rounded-full border border-indigo-200 bg-white px-4 py-1 text-[10px] uppercase tracking-[0.14em] text-indigo-600">
              {showPackages ? 'Packages Expanded' : 'Packages Collapsed'}
            </span>
          </div>
          {showPackages && (
            <div className="space-y-8">
              <PricingGroup title="Quinceañera Pricing" tiers={quinceTiers} onInquire={openModal} />
              <PricingGroup title="Wedding Pricing" tiers={weddingTiers} onInquire={openModal} />
            </div>
          )}
        </section>

        <section className="mb-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="serif-display text-3xl uppercase tracking-[0.08em] text-slate-900">Access Photos</h2>
          <p className="mt-2 text-sm text-slate-600">🔐 Share this code with family to access your secure gallery.</p>
          <form onSubmit={handleGallery} className="mt-5 flex flex-wrap gap-3">
            <input
              value={galleryCode}
              onChange={(event) => setGalleryCode(event.target.value)}
              placeholder="Enter Gallery Code"
              className="min-w-[220px] flex-1 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none placeholder:text-slate-400 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              Unlock
            </button>
          </form>
          {galleryUnlocked && (
            <div className="mt-5">
              <p className="text-sm text-emerald-700">Gallery found: Hernandez-Quince-2026</p>
              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="aspect-[4/3] rounded-xl border border-indigo-100 bg-gradient-to-br from-indigo-100 to-sky-100"
                  />
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="mb-16 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="serif-display text-3xl uppercase tracking-[0.08em] text-slate-900">Availability</h2>
          <p className="mt-2 text-xs text-slate-500">This is a demo calendar for the template.</p>
          <div className="mt-5 rounded-2xl border border-slate-200 p-4 sm:p-5">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-700">October 2026</p>
              <p className="text-xs text-slate-500">Tap a day to mark your preference</p>
            </div>
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2 text-center text-xs">
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const isBooked = bookedDays.has(day);
                const isSelected = selectedDay === day;

                return (
                  <button
                    key={day}
                    type="button"
                    disabled={isBooked}
                    onClick={() => setSelectedDay(day)}
                    className={`rounded-lg border px-1 py-2 sm:px-2 transition ${
                      isBooked
                        ? 'cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400'
                        : isSelected
                          ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'
                    }`}
                  >
                    <span className="block text-[11px] font-semibold sm:text-xs">{day}</span>
                    <span className="mt-1 block text-[9px] uppercase tracking-[0.08em] sm:text-[10px]">
                      {isBooked ? 'Booked' : 'Open'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="serif-display text-3xl uppercase tracking-[0.08em] text-slate-900">Contact</h2>
          <p className="mt-2 text-sm text-slate-600">Based in Los Angeles, traveling across CA and beyond.</p>
          <form onSubmit={submitContact} className="mt-5 grid gap-4 sm:grid-cols-2">
            <input required placeholder="Name" className="rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <input required type="email" placeholder="Email" className="rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <input required placeholder="Phone" className="rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <select required className="rounded-xl border border-slate-300 px-4 py-3 text-sm">
              <option value="">Event Type</option>
              <option>Wedding</option>
              <option>Quinceañera</option>
              <option>Graduation</option>
              <option>Music Video</option>
              <option>Event / Party</option>
              <option>Lifestyle / Brand</option>
            </select>
            <input required type="date" className="rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <input required placeholder="Location" className="rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <textarea
              required
              placeholder="Tell us about your event"
              className="min-h-32 rounded-xl border border-slate-300 px-4 py-3 text-sm sm:col-span-2"
            />
            <button
              type="submit"
              className="rounded-xl bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-white sm:col-span-2"
            >
              Send Inquiry
            </button>
          </form>
          {contactSent && <p className="mt-4 text-sm text-emerald-700">Thanks! We&apos;ll respond within 24–48 hours.</p>}
          <div className="mt-5 space-y-1 text-sm text-slate-700">
            <p>Phone: 323-000-0000</p>
            <p>Email: ask@lanternandlogic.com</p>
          </div>
        </section>

        <footer className="border-t border-slate-200 pt-6 text-center text-xs leading-6 text-slate-600">
          <p className="uppercase tracking-[0.16em] text-slate-800">Lantern&LogicPhotography</p>
          <p>lanternandlogic.com</p>
          <p>323-000-0000 · ask@lanternandlogic.com</p>
          <p>Template demo site — links disabled.</p>
        </footer>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/35 p-4">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.14em] text-indigo-600">Inquiry Modal</p>
            <h3 className="serif-display mt-2 text-2xl text-slate-900">{modalContext}</h3>
            <p className="mt-2 text-sm text-slate-600">Share your event details and we&apos;ll respond with options in 24–48 hours.</p>
            <input autoFocus placeholder="Your name" className="mt-5 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm" />
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl border border-slate-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl bg-accent px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function PricingGroup({
  title,
  tiers,
  onInquire,
}: {
  title: string;
  tiers: Tier[];
  onInquire: (context: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">{title}</h3>
      <div className="grid gap-4 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article key={tier.name} className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {tier.popular && (
              <span className="absolute right-4 top-4 rounded-full bg-indigo-100 px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-indigo-700">
                Most Popular
              </span>
            )}
            <p className="text-xs uppercase tracking-[0.14em] text-slate-600">{tier.name}</p>
            <p className="serif-display mt-2 text-3xl text-slate-900">{tier.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {tier.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => onInquire(`Inquire: ${title} - ${tier.name}`)}
              className="mt-6 w-full rounded-xl bg-slate-900 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white"
            >
              Inquire
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
