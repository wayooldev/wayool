## Context

Homepage products live in `app/_components/AppShowcase.tsx` as the `APPS` array. Other branded products use Cloudflare CNAME `*.wayool.com` → `cname.vercel-dns.com` (proxied: false) plus a Vercel project domain. Dragon Territory already deploys as Vercel project `dragon-territory` with only `dragon-territory.vercel.app`. See proposal.md for motivation.

## Goals / Non-Goals

**Goals:**
- Ship a Kids games showcase card for Dragon Territory at the end of the existing grid
- Wire `dragon-territory.wayool.com` via Cloudflare DNS + Vercel domain attachment
- Match existing card visual patterns (accent wash, Lucide icon, motion)

**Non-Goals:**
- Changing Dragon Territory app code or its `vercel.app` URL
- Adding a privacy policy page for the game
- Reordering or redesigning the showcase layout
- Proxying the subdomain through Cloudflare (orange cloud)

## Decisions

1. **Category label: `Kids games`**  
   More specific than `Games`; matches the product audience (~6yo).

2. **visitHref: `https://dragon-territory.wayool.com`**  
   Prefer branded subdomain like Passward / MangaTrack; keep `vercel.app` as secondary deploy URL only.

3. **DNS: CNAME → `cname.vercel-dns.com`, DNS-only**  
   Same pattern as `passward.wayool.com`. Alternatives: A/AAAA to Vercel IPs (more brittle); Cloudflare proxy (can break Vercel SSL/cert issuance).

4. **Accent: fire orange + ice sky**  
   Aligns with product Fire/Ice branding (`#fb923c` / `#38bdf8` family). Icon: `Flame` from lucide-react.

5. **Card placement: append to `APPS`**  
   User requested same grid as other apps without a special slot.

6. **Ops order: DNS → Vercel domain → card**  
   Domain verify works more smoothly when DNS already points at Vercel.

## Risks / Trade-offs

- [DNS propagation delay] → Use TTL auto (1); verify with dig/`list_project_domains` before marking done
- [Vercel domain verify pending] → Re-check verification after DNS; complete verify step if required
- [Cloudflare proxy accidentally enabled] → Explicitly set `proxied: false`

## Migration Plan

1. Create Cloudflare CNAME for `dragon-territory.wayool.com`
2. Add domain on Vercel project `dragon-territory`; confirm verified
3. Deploy Wayool card change pointing at the branded URL
4. Rollback: remove card entry; delete Vercel domain + Cloudflare record if needed
