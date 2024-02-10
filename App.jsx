import { useState } from "react";
import { Input, Button, FormControl, FormLabel, VStack } from "@chakra-ui/react";

const App = () => {
  const [userType, setUserType] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
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
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      {userType === "admin" ? (
        <div>
          <h1>Welcome Admin!</h1>
        </div>
      ) : userType === "user" ? (
        <div>
          <h1>Welcome User!</h1>
        </div>
      ) : (
        <div>
          
          <VStack spacing={12}>
      <FormControl>
        <FormLabel>Username:</FormLabel>
        <Input type="text"  value={username} onChange={(e) => setUsername(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>Password:</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button onClick={handleLogin}>Log In</Button>
    </VStack>
        </div>
      )}
    </div>
  );
};

export default App;
