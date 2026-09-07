# Meows

This repository contains the source for the official Meows website at
[app.kvitra.com](https://app.kvitra.com/).

It includes the product site, online manual, privacy policy, and terms of use. The site is a
static GitHub Pages project with English, Simplified Chinese, Traditional Chinese,
Japanese, and Korean content. Theme-aware screenshots follow the visitor's system
theme.

## Language links

The home page, manual, privacy policy, and terms of use accept the same `lang` query values:

```text
en
zh-Hans
zh-Hant
ja
ko
```

A valid value is applied across the site and saved for later navigation. The
`lang` parameter is then removed from the address bar while other query
parameters and the fragment remain intact. Without `lang`, the site uses the
saved choice or the browser language.

## Local preview

Run a static server from this directory:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deployment

GitHub Pages serves the files in this repository directly. There is no build
step. Keep `CNAME`, `sitemap.xml`, and the Google Search Console verification meta
when publishing changes.

## License

The website is proprietary and is not open source. Public viewing and GitHub
forking remain subject to the limited rights in the
[GitHub Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service).
The repository grants no additional permission to reuse, modify, distribute,
republish, or deploy its contents. See [LICENSE](LICENSE) for the complete notice.
Third-party assets, including the Google Play badge, remain subject to their
owners' terms.
