# Landing page

A static HTML, CSS and JavaScript landing page with no build step.

## Agent workflow

1. Install dependencies with `npm ci`.
2. Run the tests once with `npm test`; run the CI gate with `npm run test:ci`.
3. Put tests in `test/` and name them `*.test.js`.
4. Add or update a test for every code change.
5. The required `test` check fails when it finds zero tests.
6. A person reviews and merges every pull request.

Open `index.html` in a browser to view the page.
