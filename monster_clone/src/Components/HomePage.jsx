import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Search2Icon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

import Logo from "./Logo";



function HomePage() {
  return (
    <>
      <Stack
        w="100%"
        h="300px"
        bgImage="https://static.vecteezy.com/system/resources/previews/002/088/794/non_2x/abstract-banner-with-low-poly-plexus-design-free-vector.jpg"
      >
        <Box w="80%" h="250px" margin="auto">
          <Box w="40%" h="50px">
            <Heading fontSize="24px" fontStyle="revert-layer" color="white">
              500,000+ Jobs.Find.better.Faster
            </Heading>
          </Box>
          <Stack p={2}>
            <Flex gap="1rem">
              <Box
                w="55%"
                h="180px"
                bg="rgba(0, 0, 0, 0.7)"
                // opacity="6"
              >
                <Stack
                  direction="row"
                  spacing={4}
                  align="center"
                  margin="auto"
                  w="90%"
                  p={2}
                >
                  <Button color="white" variant="link" fontWeight="thin">
                    All Jobs
                  </Button>
                  <Button color="white" variant="link" fontWeight="thin">
                    Work From Home
                  </Button>
                  <Button color="white" variant="link" fontWeight="thin">
                    Contract Jobs
                  </Button>
                  <Button color="white" variant="link" fontWeight="thin">
                    Fresher Jobs
                  </Button>
                </Stack>
                {/* ****** */}

                <Box marginTop="2rem">
                  <InputGroup w="90%" margin="auto" bg="white" border="none">
                    <InputLeftElement
                      // pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<Search2Icon />}
                    />
                    <Input
                      placeholder="Search by skills, Company & job Title"
                      borderRadius="none"
                    />
                    <Button
                      cursor="pointer"
                      borderRadius="none"
                      bg="#B794F4"
                      color="white"
                      _hover={{ bg: "#553C9A" }}
                    >
                      Search
                    </Button>
                    <InputRightElement />
                  </InputGroup>
                  <Text marginTop="1.5rem" fontSize="12px" color="white">
                    Trending Searches :Jobs in Delhi, Jobs in Mumbai, Jobs in
                    Hyderabad, Jobs in Bangalore, Jobs in Chennai, Jobs in Pune,
                    Jobs in Kolkata, Jobs in Lucknow
                  </Text>
                </Box>

                {/* ****** */}
              </Box>
              <Stack w="40%" h="172px" bg="rgba(0, 0, 0, 0.7)">
                <Flex gap={2} p={2}>
                  <Box w="50%" h="155px" bg="white" p={5}>
                    <Text fontWeight="bold" fontSize="13px">
                      NEW TO MONSTER?
                    </Text>
                    <Button
                      variant="link"
                      marginTop="0.25rem"
                      fontSize="13px"
                      color="blue"
                    >
                      REGISTER WITH US
                    </Button>
                    <Flex align="center" marginTop="0.25rem">
                      <Divider />
                      <Text padding="2" fontSize="sm" color="gray.400">
                        OR
                      </Text>
                      <Divider />
                    </Flex>

                    <Button
                      fontSize="14px"
                      bg="orange.400"
                      borderRadius="none"
                      _hover={{ bg: "orange.400", color: "white" }}
                    >
                      UPLOAD RESUME
                    </Button>
                  </Box>
                  <Box w="50%" h="155px" bg="white" p={5}>
                    <Text fontWeight="bold" fontSize="13px">
                      FREE JOB ALERT
                    </Text>
                    <Text fontWeight="bold" fontSize="11px" marginTop="0.25rem">
                      Get an email on jobs matching your criteria
                    </Text>
                    <Text fontWeight="sm" fontSize="10px" marginTop="0.25rem">
                      No registration required
                    </Text>
                    <Button
                      fontSize="12px"
                      bg="gray.400"
                      marginTop="0.80rem"
                      _hover={{ bg: "purple.700", color: "white" }}
                      borderRadius="none"
                      h="35px"
                    >
                      CREATE JOB ALEART
                    </Button>
                  </Box>
                </Flex>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Stack>

      <Stack border="1px solid red" w="85%" margin="auto">
        <Box p={2}>
          <Stack>
            <Heading fontSize="20px">Employers of Choice</Heading>
          </Stack>
          <Logo />
        </Box>
        {/* ***** */}
        <Box border="1px solid black" >
          <Flex border="1px solid black" gap={2}>
            <Box border="1px solid blue" w="80%" p={2}>
              {/* Work From Home Start*/}
              <Box bg="red.50">
                <Heading
                  fontSize="20px"
                  // border="1px solid green"
                  w="100%"
                  h="30px"
                  p={2}
                >
                  Work From Home Jobs
                </Heading>
                <Flex  gap={2} h="180px">
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="gray.300"
                      icon={<ChevronLeftIcon />}
                    />
                  </Box>
                  <Box
                    border="1px solid black"
                    h="100px"
                    w="30%"
                    margin="auto"
                  ></Box>
                  <Box
                    border="1px solid black"
                    h="100px"
                    w="30%"
                    margin="auto"
                  ></Box>
                  <Box
                    border="1px solid black"
                    h="100px"
                    w="30%"
                    margin="auto"
                  ></Box>
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="gray.300"
                      icon={<ChevronRightIcon />}
                    />
                  </Box>
                </Flex>
              </Box>
              {/* Work From Home End*/}
              {/* Recent Jobs Start*/}
              <Box bg="blue.50" marginTop={2}>
                <Heading
                  fontSize="20px"
                  // border="1px solid green"
                  w="100%"
                  h="30px"
                  p={2}
                >
                  Recent Jobs
                </Heading>
                <Flex  gap={2} h="180px">
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="gray.300"
                      icon={<ChevronLeftIcon />}
                    />
                  </Box>
                  <Box
                    border="1px solid black"
                    h="100px"
                    w="30%"
                    margin="auto"
                  ></Box>
                  <Box
                    border="1px solid black"
                    h="100px"
                    w="30%"
                    margin="auto"
                  ></Box>
                  <Box
                    border="1px solid black"
                    h="100px"
                    w="30%"
                    margin="auto"
                  ></Box>
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="gray.300"
                      icon={<ChevronRightIcon />}
                    />
                  </Box>
                </Flex>
              </Box>
              {/* Recent Jobs End*/}

              {/* Premium Services Start*/}
              <Box bg="blue.50" marginTop={2}>
                <Heading
                  fontSize="20px"
                  // border="1px solid green"
                  w="100%"
                  h="30px"
                  p={2}
                >
                  Premium Services
                </Heading>
                <Flex  gap={2} h="200px">
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="gray.300"
                      icon={<ChevronLeftIcon />}
                    />
                  </Box>
                  <Box
                    border="1px solid black"
                    h="150px"
                    w="25%"
                    margin="auto"
                  ></Box>
                  <Box
                    border="1px solid black"
                    h="150px"
                    w="25%"
                    margin="auto"
                  ></Box>
                  <Box
                    border="1px solid black"
                    h="150px"
                    w="25%"
                    margin="auto"
                  ></Box>
                    <Box
                    border="1px solid black"
                    h="150px"
                    w="25%"
                    margin="auto"
                  ></Box>
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="gray.300"
                      icon={<ChevronRightIcon />}
                    />
                  </Box>
                </Flex>
              </Box>
              {/* Premium Services End*/}
            </Box>

            
            <Box border="1px solid red" w="25%"  p={2}>
              <VStack>
                <Box border="1px solid black" w="100%" h="400px" bg="whitesmoke"> </Box>
                <Box border="1px solid blue" w="100%" h="400px" bg="whitesmoke"></Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}

export default HomePage;
