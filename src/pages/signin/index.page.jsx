import React, { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLogin } from "~/hooks/useLogin";
import { useId } from "~/hooks/useId";
import { SignField } from "~/components/SignField";

const SignIn = () => {
  const auth = useSelector((state) => state.auth.token !== null);
  const { login } = useLogin();

  const id = useId();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = useCallback(
    (data) => {
      setIsSubmitting(true);

      login({ email: data.email, password: data.password })
        .catch((err) => {
          setErrorMessage(err.message);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [login],
  );

  if (auth) {
    return <Redirect to="/" />;
  }

  return (
    <SignField
      id={id}
      isSignUp={false}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
      SubmitState={isSubmitting}
    ></SignField>
  );
};

export default SignIn;
