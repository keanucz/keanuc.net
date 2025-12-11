Shortcodes — Cheatsheet

- **Alert**: GitHub-style alert shortcodes. Types: `note`, `tip`, `info`, `warning`, `danger`. Optional `title` and `icon` (string).
  - Inline:
    {{/* alert(type="danger", icon="tip", title="An important tip", text="Stay hydrated~") */}}
  - Block body:
    {%/* alert(type="danger", icon="tip", title="An important tip") */%}
    Stay hydrated~
    {%/* end */%}
  - Examples:
    {{ alert(type="note", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
    {{ alert(type="tip", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
    {{ alert(type="info", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
    {{ alert(type="warning", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
    {{ alert(type="danger", text="Some **content** with _Markdown_ `syntax`. Here is [a `link`](#alert-shortcode).") }}
    {{ alert(type="note", title="Custom title and icon", icon="tip", text="Some **content**...") }}
  - Note: Zola 0.21.0 supports GitHub-flavored Markdown alerts (e.g., > [!NOTE]) but shortcode produces better HTML/accessibility.

- **Mastodon**: Embed a Mastodon post.
  - Usage:
    {{/* mastodon(url="https://hachyderm.io/@ebkalderon/114462281016082381") */}}
  - Example:
    {{ mastodon(url="https://hachyderm.io/@ebkalderon/114462281016082381") }}

- **References**: Formats a reference section with hanging indent.
  - Usage:
    {%/* references() */%}
    Your references here (one per line; Markdown allowed).
    {%/* end */%}

- **Responsive Image**: Create responsive, lazy-loaded images with multiple widths.
  - Default widths: 640, 784, 1280, 1920, 2560 (browser chooses best).
  - Default lazy-loading is enabled; override with `lazy=false`.
  - Usage:
    {{/* responsive_image(src="example-hi-res-image.jpg", alt="Responsive hi-res image") */}}
  - Config override (in `config.toml`):

    ```toml
    [extra.responsive_images]
    widths = [640, 784, 1280, 1920, 2560]
    fallback_width = 1280
    ```

- **Wide Container**: Wider container for tables, code blocks, paragraphs (desktop only; tables scroll on mobile).
  - Usage:
    {%/* wide_container() */%}
    Place your content (table, code block, etc.)
    {%/* end */%}
  - Example table:

    | Title             | Year | Director             | Genre         |
    |-------------------|------|----------------------|---------------|
    | Beoning           | 2018 | Lee Chang-dong       | Drama/Mystery |

---

Markdown Syntax Guide — Cheatsheet

- **Headings**: `#` through `######` for H1–H6.
  - Example:
    # H1
    ## H2
    ### H3

- **Paragraphs**: Standard blank-line separated text.

- **Blockquotes**:
  - Simple:
    > Quoted text...
  - With attribution:
    > Quote
    >
    > — <cite>Author</cite>

- **GitHub-style Alerts (Markdown)**:
  - Syntax (Zola 0.21.0+):
    > [!NOTE]
    > Note content.

- **Buttons & Links**:
  - Raw HTML allowed:
    <button>Button</button>
    <a href="">Link</a>

- **Tables**:
  - Pipe-delimited tables allowed.
  - Example:

    Name  | Age
    ----- | ---
    Bob   | 27

- **Lists**:
  - Ordered:
    1. First
    2. Second
  - Unordered:
    - Item
    - Another
  - Nested lists supported; task lists supported:
    - [x] Completed
    - [ ] Incomplete

- **Preformatted Text**:
  - Triple backticks preserve spacing:

    ```
    Preformatted text
       Indent preserved
    ```

- **Code Blocks**:
  - Regular:

    ```rust
    fn main() { println!("Hello"); }
    ```
  - With line numbers / highlighting (example metadata):

    ```rust,linenos,hl_lines=10,name=~/path/src/main.rs
    // code...
    ```

- **Other Inline HTML Elements**:
  - Abbreviation: <abbr title="...">GIF</abbr>
  - Sub/sup: H<sub>2</sub>O, X<sup>n</sup>
  - Keyboard: <kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd>
  - Details:
    <details>
    <summary>Summary</summary>
    Hidden content
    </details>
  - Highlights: <mark>text</mark>

---

If you want a different format (shorter quick reference or printable PDF), tell me which and I will generate it.
