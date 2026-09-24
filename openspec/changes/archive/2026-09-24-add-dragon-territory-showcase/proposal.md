## Why

Dragon Territory is a live Wayool studio game (arcade Othello for kids) deployed at `dragon-territory.vercel.app`, but it is missing from the homepage showcase and has no branded subdomain under `wayool.com`. Adding both keeps the studio catalog complete and matches how other products are presented.

## What Changes

- Add a Dragon Territory card to the homepage `AppShowcase` grid (category Kids games), linking to `https://dragon-territory.wayool.com`
- Create Cloudflare DNS: `dragon-territory.wayool.com` CNAME → `cname.vercel-dns.com` (DNS-only, not proxied)
- Attach `dragon-territory.wayool.com` as a custom domain on the existing Vercel project `dragon-territory`

## Capabilities

### New Capabilities

- `app-showcase`: Homepage product showcase cards that present Wayool studio apps with name, category, benefit copy, status, and visit links

### Modified Capabilities

- (none)

## Impact

- Code: `app/_components/AppShowcase.tsx` (new `APPS` entry)
- Infra: Cloudflare zone `wayool.com` DNS; Vercel project `dragon-territory` (`prj_r4pKbcrfrkZpLRE1LPtPlIpbbfTC`) domains
- No API or dependency changes; no privacy page required for this game
