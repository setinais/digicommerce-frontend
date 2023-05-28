"use client";
import { User } from "@/api/models/login";
import { GoogleIcon } from "@/components/icons/google";
import {
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { validate } from "class-validator";
import { ChangeEvent, useState } from "react";
import { PasswordField } from "../../../components/inputs/passwordField";
import handleErrors from "@/core/validations/handleErrors";

export default function SignIn() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: true,
    isSubmitted: false,
  });
  const [errors, setErrors] = useState({
    email: { isError: false, message: [] },
    password: { isError: false, message: [] },
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setForm((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
    console.log(form);
  };
  const handleCheckChange = (): void => {
    setForm((prevProps) => ({
      ...prevProps,
      remember: !form.remember,
    }));
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const user = new User(form.email, form.password);
    const validateUser = handleErrors(await validate(user));
    if (validateUser.length > 0) {
      validateUser.forEach((errors) => {
        setErrors((prevProps) => ({
          ...prevProps,
          [errors.attribute]: errors.messages,
        }));
      });
    }
  };

  return (
    <Stack spacing="6">
      <Stack spacing="5">
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleInputChange}
            value={form.email}
          />
        </FormControl>
        <PasswordField onChange={handleInputChange} value={form.password} />
      </Stack>
      <HStack justify="space-between">
        <Checkbox
          onChange={handleCheckChange}
          name="remember"
          isChecked={form.remember}
        >
          Lembrar-me
        </Checkbox>
        <Button variant="link" colorScheme="blue" size="sm">
          Esqueceu sua Senha?
        </Button>
      </HStack>
      <Stack spacing="6">
        <Button
          isLoading={form.isSubmitted}
          onClick={onSubmit}
          variant="solid"
          colorScheme="teal"
        >
          Login
        </Button>
        <HStack>
          <Divider />
          <Text fontSize="sm" whiteSpace="nowrap" color="muted">
            ou continue com
          </Text>
          <Divider />
        </HStack>
        <Button key="Google" width="full">
          <VisuallyHidden>Sign in with Google</VisuallyHidden>
          <GoogleIcon boxSize="5"></GoogleIcon>
        </Button>
      </Stack>
    </Stack>
  );
}
