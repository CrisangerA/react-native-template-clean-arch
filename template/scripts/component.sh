COMPONENT_NAME="$3"
CAPITALIZE_NAME=$(echo ${COMPONENT_NAME} | sed 's/^./\u&/; s/-\(.\)/ \u\1/g')
ROUTE="default"

case "${2}" in
  core)
    #echo "creating component $CAPITALIZE_NAME at ./src/ui/components/core/$CAPITALIZE_NAME.tsx"
    ROUTE="/core"
    ;;
  layout)
    #echo "creating component $CAPITALIZE_NAME at ./src/ui/components/layout/$CAPITALIZE_NAME.tsx"
    ROUTE="/layout"
    ;;
  global)
    ROUTE=""
    #echo "creating component $CAPITALIZE_NAME at ./src/ui/components/$COMPONENT_NAME"
    ;;
  *)
    echo "You typed an invalid argument. Only enabled: core | layout | global"
    exit 0;
    ;;
esac


case "$1" in
  -s)
    echo "Creating component $CAPITALIZE_NAME at ./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    cp -R ./scripts/scaffold/component/index.tsx "./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    sed -i -e "s/ScaffoldComponent/$CAPITALIZE_NAME/g" "./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    ;;
  -c)
    echo "Creating component $CAPITALIZE_NAME at ./src/ui/components$ROUTE/$COMPONENT_NAME"
    cp -R ./scripts/scaffold/component ./src/ui/components$ROUTE/$COMPONENT_NAME
    sed -i -e "s/ScaffoldComponent/$CAPITALIZE_NAME/g" ./src/ui/components$ROUTE/$COMPONENT_NAME/index.tsx
    ;;
  *)
    echo "Invalid component type"
    ;;
esac

