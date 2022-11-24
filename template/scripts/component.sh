
COMPONENT_NAME="$1"
echo "creating component files $COMPONENT_NAME at ./src/ui/components/$COMPONENT_NAME"
echo "updating export files"

## copy over files
cp -R ./scripts/scaffold/component ./src/ui/components/$COMPONENT_NAME
