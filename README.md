# CS:GO Crosshair Generator

> The only crosshair generator for Counter-Strike:Global Offensive you need! ✌️

## Features:
- [x] Easy customize your CS:GO crosshair
- [x] Crosshair displayed on CS:GO Map Background(s)
  - [ ] Add different Map Backgrounds
- [x] Choose from presets
  - [ ] Add Presets from CS:GO Pro Players
- [x] Share your crosshair configuration with a custom url

### Roadmap (dev):
- [ ] Add dockerfile for local developement
- [x] Add FlowType for type checking
- [x] Unit Tests with Jest and Enzyme
- [ ] Add [Github Buttons](https://buttons.github.io/)

### Known issues:
- [x] ~~The Gap slider should update cl_fixedcrosshairgap **and** cl_crosshairgap~
  - [x] ~~Sliders should be able to update more than one value~~
- [x] ~~cl_crosshairthickness slider can not set step 0.5~~
- [x] ~~canvas: can not draw 0.5px lines~~
- [ ] Performance when replacing url params could be better (maybe debounce?)

Big shoutout to [@kstdnr](https://github.com/kstdnr) for the canvas crosshair calculation.
