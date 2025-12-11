# keanuc.net

This repository is the source for keanuc.net — my personal website. It uses
Zola as the static site generator and the `terminus` theme (customized).

Quick links

- Theme: `themes/terminus` (original theme by Eyal Kalderon) — https://github.com/ebkalderon/terminus
- Config: `config.toml`
- Homepage template override: `templates/index.html`
- Site-level partials: `templates/partials/`

Getting started (local development)

1. Install Zola: https://www.getzola.org/documentation/getting-started/installation/
2. Clone this repo (ensure submodules if you keep the theme as a submodule):

```powershell
git clone --recursive <repo-url>
cd keanuc.net
zola serve
```

Open http://127.0.0.1:1111 to preview the site.

Customizations in this repo

- Header title: set `extra.header_title` in `config.toml` (used for the header only).
- Theme switching: controlled by `extra.theme_switcher` in `config.toml` — enable and set a default theme.
- Accent colour override: this repo includes a site-level CSS/JS override so you can change the accent colour or force reloads without editing the theme submodule.
- VCard on homepage: `templates/partials/vcard.html` — configure `extra.email`, `extra.linkedin`, `extra.github`, and `extra.profile_image` in `config.toml`.

Notes on the Terminus theme

This site borrows the Terminus theme by Eyal Kalderon. Big thanks to Eyal —
his theme provides the retro terminal look and many accessible defaults. I
kept the theme as a submodule (or copy) and applied small, site-level
overrides so the original theme directory remains easy to update.

Credits & licenses

- Theme: Terminus by Eyal Kalderon — https://github.com/ebkalderon/terminus
- Site code: MIT License (see `LICENSE`)
