

## Add "ZOOTY" Wordmark Above Hero Headline

Add a large "ZOOTY" wordmark above the existing "Redefining campus mobility" headline on the landing hero.

### Visual Treatment

- Text: `ZOOTY` (all caps)
- Font: `DM Serif Display` (matches the brand wordmark used elsewhere per typography memory)
- Size: very large display — `text-6xl lg:text-8xl` — sits as a brand statement above the headline
- Color: `text-foreground` (white) with normal weight; gold accent reserved for the headline highlight below
- Spacing: tight tracking (`tracking-tight`), `mb-4 lg:mb-6` gap before headline
- Animation: fade + slight upward motion, slightly earlier than the headline (delay 0.1s) so it lands first, then the headline reveals

### Layout

Stays within the existing left-aligned hero content block. Headline and "Read vision →" link remain unchanged in copy and position; the wordmark is simply prepended.

```text
┌─────────────────────────────────────────┐
│                                         │
│   ZOOTY                                 │  ← new, oversized serif
│   Redefining campus mobility:           │
│   Autonomous vehicles serving to        │
│   your doorstep                         │
│                                         │
│   Read vision →                         │
└─────────────────────────────────────────┘
```

### Files

- `src/components/HeroSection.tsx` — add a `motion.h2` (semantically the brand mark) above the existing `motion.h1` headline, using `font-['DM_Serif_Display']` class consistent with the MAZOUT brand styling.

### Result

The hero opens with a confident "ZOOTY" brand mark, then resolves into the value-prop headline — reinforcing brand recall without disturbing the current minimalist composition or the gold accent on "campus mobility".

