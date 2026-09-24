## 1. Custom domain

- [x] 1.1 Create Cloudflare DNS CNAME `dragon-territory.wayool.com` → `cname.vercel-dns.com` with proxied=false and verify the record exists via Cloudflare API
- [x] 1.2 Add `dragon-territory.wayool.com` to Vercel project `dragon-territory` and verify the domain is listed and verified (or complete verification if required)

## 2. Showcase card

- [x] 2.1 Append a Dragon Territory entry to `APPS` in `app/_components/AppShowcase.tsx` (category Kids games, visitHref `https://dragon-territory.wayool.com`, Live status, fire/ice accent, Flame icon) and verify the homepage typechecks / renders the new card name in the showcase section
- [x] 2.2 Smoke-check that `https://dragon-territory.wayool.com` resolves to the game (or is verifying) and that the card link matches that URL
