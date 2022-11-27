COMPONENT_NAME="$1"
CAPITALIZE_NAME=$(echo ${COMPONENT_NAME} | sed 's/^./\u&/; s/-\(.\)/ \u\1/g')

echo "creating component file $CAPITALIZE_NAME at ./src/ui/components/$COMPONENT_NAME"

## copy over files
cp -R ./scripts/scaffold/component ./src/ui/components/$COMPONENT_NAME
## change component name
sed -i -e "s/ScaffoldComponent/$CAPITALIZE_NAME/g" ./src/ui/components/$COMPONENT_NAME/index.tsx
