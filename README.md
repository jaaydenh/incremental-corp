# incremental-corp

Incremental game based on adventure capitalist and built using html5 canvas.

## description

The goal of this project is to build the basic features of an incremental game entirely within the html5 canvas. The constraint is to use vanilla javascript instead of an already built game engine.

Features:
- Buy and upgrade businesses
- Click a button to make money from a busiiness
- Hire managers to automate a business
- Saving and restoring progress

Because of time contraints, this solution focuses on the front-end. With additional time, the back-end goal would be to integrate with Playfab for cross-device play, analytics and leaderboards.

Architecture:

The technical design goal was to build the game entirely with the canvas while using utilizin ECMAScript 6. Although a classic incremental game does
not necesarily require the capabilities of canvas, this foundation would be more favorable to complex and visually pleasing effects as later improvements. Additionally, the goal was also to implement the typical game engine draw and update loops. Drawing to the canvas felt like a better fit for his than other frameworks such as angular, react, etc.

Trade-offs:

Although my current skill set is stronger on the back-end, it seemed more feasible to build a solution that more completely implemented the core features by focusing on the front-end first. Here are a list of items that were left out and would be worked on next with additional time.

- Pre-loading assets: espcially as the project grows, it would be better to pre-load assets such as images on a loading screen.
- Cleaner separation between model and view: this project was built organically as an exploration of html5 canvas. A refactoring pass should be done to better separate game logic from drawing to the screen. This would also improve testability with the jasmine unit tests.
- Idle progress - this is the last major feature that was not completed in the initial version. With saving/restoring game state to local storagee  already implemented, this would take minimal effort to complete.

## Building

```bash
npm install
npm run build
```

## Testing
Current tests are not yet comprehensive and are meant as a foundation for future additions.

To run the tests you just need to execute the following commands inside the project root folder:
```bash
npm test
```
