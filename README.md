## Discord Mirror

* Clone this repo
```
git clone
```
* cd into the directory
```
cd ./discordMirror

```
* Install packages

```
# Using Node
npm i
# Using bun
bun i 
```

* [[Create a discord bot and store the token](https://discord.com/developers)]


* Get your user token
You can use this script inside your web browser to get it
```
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    if (!req.c) return;
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px')
```

* Add the channels ids to mirror.ts

* Run the script
```
bun mirror.ts
```
