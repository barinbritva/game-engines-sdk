# Contributing

## Developing process

```sh
# do a local build
npm install
npm run dev --workspace=@barinbritva/phaser-sdk

# link the package
cd ./packages/phaser
npm link

# in a consumer project
npm link @barinbritva/phaser-sdk
```
