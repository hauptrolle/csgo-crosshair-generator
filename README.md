# CS:GO Crosshair Generator

> A crosshair generator for Counter-Strike:Global Offensive build with react

## Features:
- [x] Easy customize your crosshair
- [ ] Crosshair displayed on CS:GO Background
- [x] Choose preset
  - Add Presets from CS:GO Pro Players
- [ ] Share configuration with custom url

### Roadmap (dev):
- [ ] Add dockerfile for local developement
- [x] Add FlowType for type checking
- [x] Unit Tests with Jest and Enzyme

### Known issues:
- [ ] The Gap slider should update cl_fixedcrosshairgap *and* cl_crosshairgap
 - Sliders should be able to update more than one value
- [x] ~~cl_crosshairthickness slider can not set step 0.5~~
- [ ] canvas: can not draw 0.5px lines


Big shoutout to [@kstdnr](https://github.com/kstdnr) for the canvas crosshair calculation.
