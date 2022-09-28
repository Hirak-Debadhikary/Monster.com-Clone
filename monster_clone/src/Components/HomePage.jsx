import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function HomePage() {
  return (
    <>
      <Stack border="1px solid black" w="100%" h="300px">
        <Box border="1px solid red" w="80%" h="250px" margin="auto">
          <Box border="1px solid green" w="40%" h="50px">
            <Heading fontSize="24px" fontStyle="revert-layer">
              500,000+ Jobs.Find.better.Faster
            </Heading>
          </Box>
          <Stack p={2}>
            <Flex gap="1rem">
              <Box border="1px solid green" w="55%" h="180px" bg="gray.600">
                <Stack
                  direction="row"
                  spacing={4}
                  align="center"
                  margin="auto"
                  border="1px solid black"
                  w="90%"
                  p={2}
                >
                  <Button color="white" variant="link" fontFamily="mono">
                    All Jobs
                  </Button>
                  <Button colorScheme="teal" variant="link" fontFamily="mono">
                    Woek From Home
                  </Button>
                  <Button colorScheme="teal" variant="link" fontFamily="mono">
                    Contract Jobs
                  </Button>
                  <Button colorScheme="teal" variant="link" fontFamily="mono">
                    Fresher Jobs
                  </Button>
                </Stack>
              </Box>
              <Stack border="1px solid blue" w="40%" h="175px" bg="gray.600">
                <Flex gap={2} p={2.5}>
                  <Box
                    border="1px solid red"
                    w="50%"
                    h="155px"
                    bg="white"
                    p={5}
                  >
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
                  <Box
                    border="1px solid black"
                    w="50%"
                    h="155px"
                    bg="white"
                    p={5}
                  >
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
    </>
  );
}

export default HomePage;
