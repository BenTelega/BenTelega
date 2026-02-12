# BenTelega Documentation Site

This directory contains the Jekyll-based documentation site for BenTelega.

## Structure

```
docs/
├── _layouts/          # Jekyll layout files
├── _includes/         # Reusable components
├── _sass/             # Sass/CSS styles
├── assets/            # Static assets
│   ├── docs/          # Documentation-specific assets
│   │   ├── css/       # CSS files
│   │   ├── js/        # JavaScript files
│   │   └── images/    # Images
├── index.md           # Home page
├── 404.md             # 404 error page
└── README.md          # This file
```

## Building the Site

To build the site locally:

```bash
# Install Jekyll and dependencies
bundle install

# Build the site
bundle exec jekyll build

# Serve the site locally
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Deployment

The site is automatically deployed to GitHub Pages on pushes to the `main` branch via the GitHub Actions workflow in `.github/workflows/jekyll-gh-pages.yml`.

## Configuration

Site configuration is managed in `_config.yml` in the root directory.

## Content Management

Content is written in Markdown format and stored in this directory. The site uses:

- **Collections**: For organizing related content (docs, notes)
- **Front Matter**: YAML headers for page metadata
- **Liquid Templates**: For dynamic content generation

## Obsidian Integration

This site is integrated with Obsidian for local note-taking. The Obsidian vault is in the root directory, and the `docs/` directory serves as the publishing directory.

## License

See the main [README.md](../README.md) in the root directory for licensing information.