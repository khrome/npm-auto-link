module-auto-link
================

NPM5 has completely screwed `npm link` development for multi-module developers who need to develop 1 feature among more than one package without craziness.

This just opens your `package.json`, looks at the dependencies and then links to any directories it finds in the parent that match your dependencies.

You can do it without installing using: `npx module-auto-link -c 'npm-auto-link'`

now you can just execute `npm-auto-link` and not continually downgrading or playing the relink dance.

Enjoy,

    -Abbey Hawk Sparrow
