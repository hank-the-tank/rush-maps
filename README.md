# maps

## Demo
<img src="./demo.gif" width="230">

## Install React Native
```
$ yarn add react-native
```
## Install packages
```
$ yarn
```

## Embed API Key
1. Create a folder and a file
```
$ mkdir config && touch config/keys.tsx
```
```typescript
export const GOOGLE_API_KEY: string =
  process.env.NODE_ENV === "development"
    ? "YOUR_API_KEY"
    : ""

```
## Start app with ios simulator
```
$ npx react-native run-ios
```
