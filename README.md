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

## Embed API Key for setting up the simulator

1. Create a folder and a file

```
$ mkdir config && touch config/keys.tsx
```

2. Put the key in the file

```typescript
export const GOOGLE_API_KEY: string =
  process.env.NODE_ENV === 'development' ? 'YOUR_API_KEY' : ''
```

3. Add api key in `ios/Maps/AppDelegate.m`

```
# line 45
+  [GMSServices provideAPIKey:@"YOUR_API_KEY"]; // add this line using the api key obtained from Google Console
```

## Start app with ios simulator

```
$ npx react-native run-ios
```
