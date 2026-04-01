# keanuc.net

after a long while of having a personal website with hugo and not having one, I now have one again.
this time I decided to use Zola for generating the site statically and I also used a customised version of the [terminus](https://github.com/ebkalderon/terminus) theme.

some quick links:

- Config: `config.toml`
- Homepage template override: `templates/index.html`
- Site-level partials: `templates/partials/`

## Getting started (local development)

1. Install Zola: https://www.getzola.org/documentation/getting-started/installation/
2. Clone this repo (ensure to initialise submodules with `git submodule update --init --recursive` if you keep the theme as a submodule):

```powershell
git clone --recursive <repo-url>
cd keanuc.net
zola serve
```

Open http://127.0.0.1:1111 to preview the site.

## Customizations in this repo

- Header title: set `extra.header_title` in `config.toml` (used for the header only).
- Theme switching: controlled by `extra.theme_switcher` in `config.toml` - enable and set a default theme.
- Accent colour override: this repo includes a site-level CSS/JS override, so you can change the accent colour or force reloads without editing the theme submodule.
- VCard on homepage: `templates/partials/vcard.html` - configure `extra.email`, `extra.linkedin`, `extra.github`, and `extra.profile_image` in `config.toml`.

## Credits & licenses

- Theme: Terminus by Eyal Kalderon - https://github.com/ebkalderon/terminus
- Site code: MIT License (see `LICENSE`)
