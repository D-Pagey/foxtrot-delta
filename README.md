# Foxtrot Delta

This is a codenamed project to render a simple menu from an API.

## Requirements

- [x] Render menu item name
- [x] Render menu item image
- [x] Render menu item description
- [x] Render menu item price
- [x] Mobile first, responsive layout
- [ ] Handle `isMasterOptionSet` to handle as standalone product
- [ ] Handle ignoring `MenuSectionItem` when `isMasterOptionSet` is true

### To Do

- [ ] Lazy load images
- [ ] Amend README with scripts
- [ ] Double check initial docs
- [ ] Add a simple snapshot test
- [ ] Write developer docs

### Developer notes

- SSR for SEO
- lot of data in the API response that could have taken advantage of
- make it clear this was timeboxed
- lazy load images
- tailwind for ease
- simple test for illustration purposes - no functionality so snapshot
- could have componentised it but considering scope premature
- could have componentised PageLayou but again premature
- didn't have time to deal with `isMasterOptionSet`
