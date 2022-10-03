import { LockIcon, PhoneIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
// import {signInWithGoogle} from "./firebase"

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  return (
    <div>
      <Button
        w="170px"
        h="40px"
        border="1px"
        borderColor="black"
        bg="white"
        color="black"
        _hover={{ bg: "orange.400", color: "white", border: "none" }}
        fontSize="16px"
        gap="1"
        onClick={onOpen}
      >
        <Image
          src="https://cdn-icons-png.flaticon.com/512/7919/7919743.png"
          w="16px"
        ></Image>
        JOBSEEKER LOGIN
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <Box border="1px solid red" p={4} gap={2} h="800px">
            <Stack
              // border="1px solid black"
              gap={1}
            >
              <Heading fontSize="30px">Welcome!</Heading>
              <Text fontSize="19px">Log in using your Monster credentials</Text>
              <DrawerCloseButton
                bg="black"
                color="white"
                _hover={{ bg: "red.300" }}
              />
              {/* */}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input
                  borderRadius="none"
                  type="email"
                  placeholder="E-mail/Mobile"
                  size="lg"
                ></Input>
              </InputGroup>

              {/*  */}
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="gray.300" />}
                />

                <Input
                  borderRadius="none"
                  type="password"
                  placeholder="Enter password"
                  size="lg"
                ></Input>
                <InputRightElement children={<ViewIcon color="gray.300" />} />
              </InputGroup>
            </Stack>
            <Stack
              // border="1px solid blue"
              marginTop="2rem"
            >
              <Button
                colorScheme="blue"
                variant="link"
                fontSize="15px"
                marginLeft="68%"
              >
                Forgot Password
              </Button>
              <Button
                variant="solid"
                bg="#E9D8FD"
                _hover={{ bg: "purple.400" }}
                size="lg"
              >
                Login
              </Button>
            </Stack>
            <Flex align="center" marginTop="1rem">
              <Divider />
              <Heading padding="2" fontSize="xl" color="gray.400">
                OR
              </Heading>
              <Divider />
            </Flex>
            <Text fontSize="20px" align="center" marginBottom="2rem">
              with your social network
            </Text>
            {/*******************/}
            <Stack
              direction="row"
              align="center"
              marginTop="2rem"
              alignItems="center"
              w="80%"
              margin="auto"
            >
              <Button
                margin="auto"
                colorScheme="teal"
                variant="outline"
                fontSize="13px"
                gap={2}
                h="45px"
                borderRadius="50px"
                _hover={{ bg: "green.100", color: "black", border: "none" }}
                // onClick={signInWithGoogle}
              >
                <Image
                  src="https://developers.google.com/static/business-communications/images/logo-guidelines/do-logo-circle.png"
                  alt="image"
                  w="22px"
                ></Image>
                Login with google
              </Button>
              <Button
                margin="auto"
                colorScheme="teal"
                variant="outline"
                fontSize="13px"
                gap={2}
                h="45px"
                borderRadius="50px"
                _hover={{ bg: "blue.100", color: "black", border: "none" }}
              >
                <Image
                  src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                  alt="image"
                  w="30px"
                ></Image>
                Login with facebook
              </Button>
            </Stack>
            {/*******************/}
            <Box
              border="1px solid gray"
              borderRadius="8px"
              bg="#F7FAFC"
              p={4}
              marginTop="1rem"
              h="200px"

            >
              <Heading fontSize="22px" align="center">
                New to Monster?
              </Heading>
              <Text align="center" fontSize="18px" marginTop="1rem">
                Create your profile now and be visible to the top recruiters in
                the world
              </Text>
              <Button
                marginTop="1rem"
                w="100%"
                variant="solid"
                bg="purple.400"
                size="lg"
                _hover={{ bg: "purple.700", color: "white" }}
              >
                Register with us
              </Button>
            </Box>
          </Box>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Login;
