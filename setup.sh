TARGET="/media/sf_node-es6/"
rsync -avz --exclude={node_modules,src,tests,build} "$TARGET." ./
ln -s "$TARGET/src/" src || true
ln -s "$TARGET/tests/" tests || true
ln -s "$TARGET/build/" build || true
