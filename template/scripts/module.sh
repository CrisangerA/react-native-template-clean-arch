MODULE_NAME="$1"
CAPITALIZE_NAME=$(echo ${MODULE_NAME} | sed 's/^./\u&/; s/-\(.\)/ \u\1/g')
echo "creating module files $MODULE_NAME at ./src/modules/$MODULE_NAME"
echo "updating export files"

## copy over files
cp -R ./scripts/scaffold/module ./src/modules/$MODULE_NAME

sed -i -e "s/ScaffoldModel/$CAPITALIZE_NAME/g" ./src/modules/$MODULE_NAME/domain/model.ts
sed -i -e "s/ScaffoldModelValues/$CAPITALIZE_NAME\Values/g" ./src/modules/$MODULE_NAME/domain/model.ts
sed -i -e "s/ScaffoldRepository/$CAPITALIZE_NAME\Repository/g" ./src/modules/$MODULE_NAME/domain/repository.ts

USE_CASE="UseCase"
USE_CASE_NAME="$CAPITALIZE_NAME$USE_CASE"
sed -i -e "s/ScaffoldRepository/$CAPITALIZE_NAME\Repository/g" ./src/modules/$MODULE_NAME/application/useCase.ts
sed -i -e "s/ScaffoldUseCase/$USE_CASE_NAME/g" ./src/modules/$MODULE_NAME/application/useCase.ts

sed -i -e "s/ScaffoldRepository/$CAPITALIZE_NAME\Repository/g" ./src/modules/$MODULE_NAME/infrastructure/implementation.ts
sed -i -e "s/ScaffoldImpl/$CAPITALIZE_NAME\Impl/g" ./src/modules/$MODULE_NAME/infrastructure/implementation.ts