COMPONENT_NAME="$3"
CAPITALIZE_NAME=$(echo ${COMPONENT_NAME} | sed 's/^./\u&/; s/-\(.\)/ \u\1/g')
ROUTE="default"

case "${2}" in
  core)
    echo "!!! Core component"
    ROUTE="/core"
    ;;
  layout)
    echo "!!! Layout component"
    ROUTE="/layout"
    ;;
  global)
    echo "!!! Global component"
    ROUTE=""
    ;;
  *)
    echo "You typed an invalid argument. Only enabled: core | layout | global"
    exit 0;
    ;;
esac


case "$1" in
  -s)
    echo "Creating simple component"
    echo "Component $CAPITALIZE_NAME at ./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    cp -R ./scripts/scaffold/component/index.tsx "./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    sed -i -e "s/ScaffoldComponent/$CAPITALIZE_NAME/g" "./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    sed '3d' "./src/ui/components$ROUTE/$CAPITALIZE_NAME.tsx"
    ;;
  -c)
  echo "Creating complex component"
    echo "Component $CAPITALIZE_NAME at ./src/ui/components$ROUTE/$COMPONENT_NAME"
    cp -R ./scripts/scaffold/component ./src/ui/components$ROUTE/$COMPONENT_NAME
    sed -i -e "s/ScaffoldComponent/$CAPITALIZE_NAME/g" ./src/ui/components$ROUTE/$COMPONENT_NAME/index.tsx

    sed -i "2 a import {scaffoldComponentStyles as styles} from './styles';" ./src/ui/components$ROUTE/$COMPONENT_NAME/index.tsx
    sed -i '14d' ./src/ui/components$ROUTE/$COMPONENT_NAME/index.tsx
    sed -i '13d' ./src/ui/components$ROUTE/$COMPONENT_NAME/index.tsx
    sed -i -e "s/StyleSheet, //g" ./src/ui/components$ROUTE/$COMPONENT_NAME/index.tsx
    ;;
  *)
    echo "Invalid component type"
    ;;
esac

