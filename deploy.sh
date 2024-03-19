# init with:  wrangler pages project create
node ./setupkeys.js
npm run build && wrangler pages deploy --project-name supasveltic ./build
