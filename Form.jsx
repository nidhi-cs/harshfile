import React, { useState } from "react";
import {
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  VStack,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const Form = () => {
  const [userType, setUserType] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const Formik = useFormik({
      initialValues: initialValues,
      onSubmit: (values) => {
        console.log(values);
      },
    });



    // authentication logic
    const adminCredentials = { username: "admin", password: "admin123" };
    const userCredentials = { username: "user", password: "user123" };

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      setUserType("admin");
    } else if (
      username === userCredentials.username &&
      password === userCredentials.password
    ) {
      setUserType("user");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <VStack spacing={4}>
      <Heading>Login</Heading>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <FormControl id="username">
        <FormLabel>Username:</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Password:</FormLabel>
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormControl>
      <Button onClick={handleLogin}>Log In</Button>
    </VStack>
  );
};

export default Form;
