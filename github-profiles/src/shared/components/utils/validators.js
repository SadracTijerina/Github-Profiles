const VALIDATOR_TYPE_REQUIRE = "REQUIRE";

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE });

export const validate = (value) => {
  let isValid = true;

  return isValid && value.trim().length > 0;
};
