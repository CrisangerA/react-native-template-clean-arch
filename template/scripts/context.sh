NAME="$1"
CAPITALIZE_NAME=$(echo ${NAME} | sed 's/^./\u&/; s/-\(.\)/ \u\1/g')

## copy over files
cp -R ./scripts/scaffold/context/ScaffoldContext.tsx "./src/ui/contexts/${CAPITALIZE_NAME}Context.tsx"
cp -R ./scripts/scaffold/context/useScaffoldContext.ts "./src/ui/hooks/use$CAPITALIZE_NAME.ts"

# change names in context
sed -i -e "s/ScaffoldContextState/${CAPITALIZE_NAME}ContextState/g" "./src/ui/contexts/${CAPITALIZE_NAME}Context.tsx"
sed -i -e "s/ScaffoldContext/${CAPITALIZE_NAME}Context/g" "./src/ui/contexts/${CAPITALIZE_NAME}Context.tsx"
sed -i -e "s/ScaffoldProvider/${CAPITALIZE_NAME}Provider/g" "./src/ui/contexts/${CAPITALIZE_NAME}Context.tsx"

# change names in hook
sed -i -e "s/ScaffoldContext/${CAPITALIZE_NAME}Context/g" "./src/ui/hooks/use$CAPITALIZE_NAME.ts"
sed -i -e "s/useScaffoldContext/use${CAPITALIZE_NAME}Context/g" "./src/ui/hooks/use$CAPITALIZE_NAME.ts"