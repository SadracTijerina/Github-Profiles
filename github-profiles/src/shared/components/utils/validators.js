const VALIDATOR_TYPE_REQUIRE = "REQUIRE";

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });

export const validate = (value) => {
  let isValid = true;
  if (validator.type === VALIDATOR_TYPE_REQUIRE) {
    isValid = isValid && value.trim().length > 0;
  }
  return isValid;
};
