# Theme Customizations

This document tracks customizations made to the Terminus theme.

## Modified Files

### `themes/terminus/sass/css/style.scss`
- Added `@use 'vcard';` import to include custom vcard styles

### `themes/terminus/sass/css/_vcard.scss` (NEW)
- Created custom vcard component styles
- Two-column layout with profile picture and bio
- Circular profile picture with theme-colored border
- Horizontal social icons with hover effects
- Responsive design for mobile devices

### `templates/partials/vcard.html` (NEW)
- Created vcard partial for homepage
- Displays profile picture, name, bio, and social links
- Uses config values from `config.toml`

### `templates/index.html`
- Added `{% include "partials/vcard.html" %}` to display vcard on homepage

### `config.toml`
- Set `theme_switcher.enable = true`
- Set `theme_switcher.default = "nord"`
- Added convenience fields for vcard:
  - `email`
  - `linkedin`
  - `github`
  - `profile_image`

### `content/_index.md`
- Set `theme_switcher.default = "nord"` in frontmatter

### `themes/terminus/sass/css/_timeline.scss` (NEW)
- Terminal-styled timeline component for homepage
- Year labels with vertical text on desktop, horizontal on mobile
- Grid layout with accent-color bordered cards
- Bracket-style `[links]` for project/devpost/github URLs
- Highlight variant for award-winning entries
- Responsive: stacks to single column on mobile

### `themes/terminus/sass/css/style.scss`
- Added `@use 'timeline';` import

## Notes

- Due to Zola's SASS compiler limitations, theme extensions via root `sass/` folder don't work reliably
- Customizations are made directly in theme files for stability
- When updating the theme, these files will need to be re-applied or merged