NAME="$1"
CAPITALIZE_NAME=$(echo ${NAME} | sed 's/^./\u&/; s/-\(.\)/ \u\1/g')
echo "creating hook file $CAPITALIZE_NAME at ./src/ui/hooks/$CAPITALIZE_NAME"
echo "updating export files"

## copy over files
cp -R ./scripts/scaffold/hook/useScaffold.ts "./src/ui/hooks/use$CAPITALIZE_NAME.ts"

## change name
sed -i -e "s/useScaffold/use$CAPITALIZE_NAME/g" "./src/ui/hooks/use$CAPITALIZE_NAME.ts"
