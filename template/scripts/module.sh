MODULE_NAME="$1"
echo "creating module files $MODULE_NAME at ./src/modules/$MODULE_NAME"
echo "updating export files"

## copy over files
cp -R ./scripts/scaffold/module ./src/modules/$MODULE_NAME
