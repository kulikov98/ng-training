# Changelog

## [0.0.5] - 2021-06-20
### Added
- OrderByPipe
- Ability to sort products in cart by name, quantity and price using provided order (ASC/DESC)
### Changed
- Apply OrderByPipe in cart-list component
- Declare CommonModule and FormsModule only in SharedModule
## [0.0.4] - 2021-06-20
### Added
- ConfigOptionsService
- ConstantsService
- GeneratorService, GeneratorFactory, genID
- LocalStorageService
- ToggleColor directive
### Changed
- CartService: modifications according requirements
- FirstComponent: inject new services
## [0.0.3] - 2021-06-13

### Added
- Styles using Tailwind CSS
## [0.0.2] - 2021-05-05
### Added
- Modules for features (cart, orders, products, shared)
- New product field (isAvailable)
- Disable "add to cart" button if product is not available
- Show total summ and quantity of products in cart
- Cart-item component
- Ability to change product quantity in cart
- Increase cart product quantity since 2nd click on "add to cart" button
- Dynamic title in app component
- Highlight directive

### Changed
- Updated products data
- Rewrite cart service to use observables and immutability

## [0.0.1] - 2021-04-20
### Added
- First component
- Products feature
- Cart feature
- Changelog
