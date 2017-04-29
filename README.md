# CS:GO Crosshair Generator

> The only crosshair generator for Counter-Strike:Global Offensive you need! ✌️

## Features:
- [x] Easy customize your CS:GO crosshair
- [x] Crosshair displayed on CS:GO Map Background(s)
  - [x] Add different Map Backgrounds
- [x] Choose from presets
  - [ ] Add Presets from CS:GO Pro Players
- [x] Share your crosshair configuration with a custom url

### Roadmap (dev):
- [ ] Add dockerfile for local development
- [x] Add FlowType for type checking
- [x] Unit Tests with Jest and Enzyme
- [ ] Add [Github Buttons](https://buttons.github.io/)
- [ ] Remove redux-dev-tools on production build
- [x] Add styles for each component instead of one big file
  - [x] Add a preprocessor (sass or postcss)
  - [x] ~~Maybe css-modules?~
  - [x] Styled Components !
  - [ ] Add stylelint
  - [x] dont use any **!important**
- [ ] Add Google Analytics

### Known issues:
- [x] ~~Currently not working in other browsers than Google Chrome~~
- [x] ~~The Gap slider should update cl_fixedcrosshairgap **and** cl_crosshairgap~
  - [x] ~~Sliders should be able to update more than one value~~
- [x] ~~cl_crosshairthickness slider can not set step 0.5~~
- [x] ~~canvas: can not draw 0.5px lines~~
- [ ] Url params only update on every second change ?!
- [ ] Performance when replacing url params could be better (maybe debounce?)

Big shoutout to [@kstdnr](https://github.com/kstdnr) for the canvas crosshair calculation.
