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
- [x] Handle `isMasterOptionSet` to handle as standalone product
- [x] Handle ignoring `MenuSectionItem` when `isMasterOptionSet` is true

## Developer notes

I would have liked to spend more time on this but my time was limited. Here are some considerations and things I would have liked to do with more time:

- I would have liked to lazy load images, especially those out of initial view
- SSR seemed appropriate given the potential SEO benefits
- I added a snapshot test as there's no functionality to test
- If there were multiple pages, I would have abstracted the `Head` and meta data into a `PageLayout` component
- Lots of data in the API that I could have done something creative with with more time
