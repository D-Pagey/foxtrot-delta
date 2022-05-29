# Foxtrot Delta

This is a codenamed project to render a simple menu from an API. You can view a deployed version here - https://foxtrot-delta.vercel.app/.

## Useful scripts

I use `yarn` but feel free to use `npm` equivalent scripts.

- `yarn` will install dependencies
- `yarn dev` will run a local server on http://localhost:3000/
- `yarn test` will run the test suite

## Requirements

- [x] Render menu item name
- [x] Render menu item image
- [x] Render menu item description
- [x] Render menu item price
- [x] Mobile first, responsive layout
- [ ] Handle `isMasterOptionSet` to handle as standalone product
- [ ] Handle ignoring `MenuSectionItem` when `isMasterOptionSet` is true

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
