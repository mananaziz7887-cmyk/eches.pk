import { DressItem } from '../types';

export const WHATSAPP_PHONE = '923090312505';

export const COLLECTION_ITEMS: DressItem[] = [
  {
    id: 'dress-1',
    number: '01',
    name: 'Noir Draped Cowl Gown',
    fabric: 'Heavy Obsidian Crepe Silk',
    silhouette: 'Sculptural Fluted Silhouette',
    image: '/dress1.jpg',
    status: 'Active',
    description: 'An avant-garde espresso-black structured luxury gown featuring an architectural cowl neckline and fluid bias-cut drape designed to accentuate posture and grace.',
    details: ['100% Mulberry Silk Crepe', 'Hand-finished Bias Cut', 'Invisible Corset Interior', 'Made to Measure in Atelier']
  },
  {
    id: 'dress-2',
    number: '02',
    name: 'Champagne Aurora Gown',
    fabric: 'Pleated Gold Lamé & Silk',
    silhouette: 'Sculptural Shoulder Evening Dress',
    image: '/dress2.jpg',
    status: 'Active',
    description: 'A luminous champagne gold gown crafted with sunray pleating and structured shoulder pads, catching subtle ambient light with every movement.',
    details: ['Micro-pleated Silk Lamé', 'Sculptural Shoulder Framing', 'Floor-grazing Hemline', 'Bespoke Tailoring Included']
  },
  {
    id: 'dress-3',
    number: '03',
    name: 'Bronze Velvet Trench Gown',
    fabric: 'Crushed Bronze & Obsidian Velvet',
    silhouette: 'Tailored Lapel Trench Gown',
    image: '/dress3.jpg',
    status: 'Active',
    description: 'A powerful synthesis of tailoring and evening wear, combining sharp notched lapels, deep bronze crushed velvet, and a cinched sash waist.',
    details: ['Italian Silk Velvet', 'Horn Button Closures', 'Removable Sculpted Sash', 'Handmade Canvas Interfacing']
  },
  {
    id: 'dress-4',
    number: '04',
    name: 'Mocha Geometric Organza',
    fabric: 'Layered Translucent Sheer Organza',
    silhouette: 'Fluid Column with Sheer Sleeves',
    image: '/dress4.jpg',
    status: 'Active',
    description: 'A delicate dialogue between transparency and structure. Multi-layered mocha organza with architectural geometric sleeve panels.',
    details: ['Pure Silk Organza', 'French Seam Construction', 'Double Layer Silk Slip Included', 'Hand-Rolled Hems']
  },
  {
    id: 'dress-5',
    number: '05',
    name: 'Architectural Taupe Blazer Gown',
    fabric: 'Structured Deconstructed Silk Wool',
    silhouette: 'Deconstructed Tailored Blazer Gown',
    image: '/dress5.jpg',
    status: 'Active',
    description: 'A commanding masterclass in modern deconstruction. Sharp architectural shoulders meet a feminine crossover drape in warm neutral taupe.',
    details: ['Fine Wool Silk Blend', 'Padded Power Shoulders', 'Internal Grosgrain Stay', 'Bespoke Fitting Session Included']
  },
  {
    id: 'dress-6',
    number: '06',
    name: 'Midnight Satin Open-Back Column',
    fabric: 'Fluid Dark Chocolate Satin',
    silhouette: 'Floor-length Column Gown',
    image: '/dress6.jpg',
    status: 'Active',
    description: 'A minimalist floor-length silhouette in rich chocolate satin, featuring a dramatic deep open back anchored by delicate jewelry-grade chain detailing.',
    details: ['Heavy Weight Liquid Satin', 'Deep Sculpted Back Cut', 'Custom Gold Plated Fastener', 'Hand-hemmed Trail']
  },
  {
    id: 'dress-7',
    number: '07',
    name: 'Camel Cashmere Sculptural Wrap',
    fabric: 'Sculptural Cashmere Wool',
    silhouette: 'Asymmetrical Draped Wrap Gown',
    image: '/dress7.jpg',
    status: 'Active',
    description: 'Sumptuous camel cashmere woven with a subtle warm sheen, draped across the shoulders in an asymmetrical cascade for cool evening luxury.',
    details: ['Grade-A Cashmere & Wool', 'Seamless Shoulder Drape', 'Hand-stitched Edge Binding', 'Exclusive Atelier Edition']
  },
  {
    id: 'dress-8',
    number: '08',
    name: 'Espresso Palazzo Suit',
    fabric: 'Heavy Crepe Silk',
    silhouette: 'Two-Piece Palazzo Ensemble',
    image: '/dress8.jpg',
    status: 'Active',
    description: 'The pinnacle of relaxed atelier elegance. Wide fluid palazzo trousers paired with a structured, drape-neck halter bodice in signature espresso crepe.',
    details: ['Heavy Crepe Silk (40mm)', 'High-waist Pleated Trousers', 'Silk-lined Bodice', 'Complimentary Bespoke Hemming']
  }
];

export function getWhatsAppBookingUrl(dress: DressItem): string {
  const message = `Hello, I'm interested in booking Dress ${dress.number} — ${dress.name}. Please share the details.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getGeneralConciergeWhatsAppUrl(): string {
  const message = `Hello, I would like to book a private fitting consultation at ECHOES.PK Atelier with Hannan Aziz.`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
