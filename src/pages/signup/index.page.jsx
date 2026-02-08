import React, { useCallback, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useSignup } from "~/hooks/useSignup";
import { useId } from "~/hooks/useId";
import { SignField } from "~/components/SignField";

const SignUp = () => {
  const auth = useSelector((state) => state.auth.token !== null);

  const id = useId();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signup } = useSignup();

  const onSubmit = useCallback(
    (data) => {
      setIsSubmitting(true);

      signup({ email: data.email, name: data.name, password: data.password })
        .catch((err) => {
          setErrorMessage(`サインアップに失敗しました: ${err.message}`);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    },
    [signup],
    /*依存配列（Dependency Array）というものらしい*/
  );

  if (auth) {
    return <Redirect to="/" />;
  }

  return (
    <SignField
      id={id}
      isSignUp={true}
      errorMessage={errorMessage}
      onSubmit={onSubmit}
      SubmitState={isSubmitting}
    ></SignField>
  );
};

export default SignUp;
