import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function SmallBox() {
  return (
    <div>
      <Stack w="85%" margin="auto">
        <Flex gap={1} p={1}>
          <Box w="50%">
            <VStack p={2}>
              {/* 1 */}
              <Box
                boxShadow="base"
                w="100%"
                h="220px"
                borderRadius="20px"
                // border="1px solid black"
              >
                <Flex p={2}>
                  <Box w="50%" h="200px" borderRadius="20px" bg="pink.50">
                    <Image
                      src="https://media.monsterindia.com/trex/public/default/images/career-services/featured-profile-services.png"
                      w="80%"
                      margin="auto"
                      marginTop="1.6rem"
                    ></Image>
                  </Box>
                  <Box w="50%" h="200px" p={2}>
                    <Heading fontSize="18px"> Featured Profile</Heading>
                    <Text fontSize="15px" fontWeight="light" marginTop="1rem">
                      Rank your profile at the top to make you stand out in a
                      crowd of jobseekers
                    </Text>

                    <Button
                      w="90%"
                      bg="purple.700"
                      variant="solid"
                      marginTop="1rem"
                      color="white"
                      _hover={{ bg: "purple.700" }}
                    >
                      Starting at Rs:1999
                    </Button>

                    <Button
                      colorScheme="teal"
                      variant="link"
                      marginTop="1rem"
                      color="blackAlpha.700"
                      fontSize="12px"
                    >
                      Benefits
                    </Button>
                  </Box>
                </Flex>
              </Box>
              {/* 2 */}
              <Box
                boxShadow="base"
                w="100%"
                h="220px"
                borderRadius="20px"
                // border="1px solid black"
              >
                <Flex p={2}>
                  <Box w="50%" h="200px" borderRadius="20px" bg="pink.50">
                    <Image
                      src="https://media.monsterindia.com/trex/public/default/images/career-services/career-booster-services.png"
                      w="80%"
                      margin="auto"
                      marginTop="1.6rem"
                    ></Image>
                  </Box>
                  <Box w="50%" h="200px" p={2}>
                    <Heading fontSize="18px"> Career Booster</Heading>
                    <Text fontSize="15px" fontWeight="light" marginTop="1rem">
                      Get the power of Resume Writing & Featured Profile to
                      boost your job search
                    </Text>

                    <Button
                      w="90%"
                      bg="purple.700"
                      variant="solid"
                      marginTop="1rem"
                      color="white"
                      _hover={{ bg: "purple.700" }}
                    >
                      Starting at Rs:1999
                    </Button>

                    <Button
                      colorScheme="teal"
                      variant="link"
                      marginTop="1rem"
                      color="blackAlpha.700"
                      fontSize="12px"
                    >
                      Benefits
                    </Button>
                  </Box>
                </Flex>
              </Box>
              {/* 3 */}
              <Box
                boxShadow="base"
                w="100%"
                h="220px"
                borderRadius="20px"
                // border="1px solid black"
              >
                <Flex p={2}>
                  <Box w="50%" h="200px" borderRadius="20px" bg="pink.50">
                    <Image
                      src="https://media.monsterindia.com/trex/public/default/images/career-services/linkedin-makeover-services.png"
                      w="80%"
                      margin="auto"
                      marginTop="1.6rem"
                    ></Image>
                  </Box>
                  <Box w="50%" h="200px" p={2}>
                    <Heading fontSize="18px">LinkedIn Makeover</Heading>
                    <Text fontSize="15px" fontWeight="light" marginTop="1rem">
                      Transform your linkedIn profile to elevate your
                      professional brand
                    </Text>

                    <Button
                      w="90%"
                      bg="purple.700"
                      variant="solid"
                      marginTop="1rem"
                      color="white"
                      _hover={{ bg: "purple.700" }}
                    >
                      Starting at Rs:1999
                    </Button>

                    <Button
                      colorScheme="teal"
                      variant="link"
                      marginTop="1rem"
                      color="blackAlpha.700"
                      fontSize="12px"
                    >
                      Benefits
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>
          <Box w="50%">
            <VStack p={2}>
              {/* 1 */}
              <Box
                boxShadow="base"
                w="100%"
                h="220px"
                borderRadius="20px"
                // border="1px solid black"
              >
                <Flex p={2}>
                  <Box w="50%" h="200px" borderRadius="20px" bg="pink.50">
                    <Image
                      src="https://media.monsterindia.com/trex/public/default/images/career-services/resume-writing-services.png"
                      w="80%"
                      margin="auto"
                      marginTop="1.6rem"
                    ></Image>
                  </Box>
                  <Box w="50%" h="200px" p={2}>
                    <Heading fontSize="18px">Resume Writing</Heading>
                    <Text fontSize="15px" fontWeight="light" marginTop="1rem">
                      Get professionally written resume which helps you get your
                      dream job
                    </Text>

                    <Button
                      w="90%"
                      bg="purple.700"
                      variant="solid"
                      marginTop="1rem"
                      color="white"
                      _hover={{ bg: "purple.700" }}
                    >
                      Starting at Rs:1999
                    </Button>

                    <Button
                      colorScheme="teal"
                      variant="link"
                      marginTop="1rem"
                      color="blackAlpha.700"
                      fontSize="12px"
                    >
                      Benefits
                    </Button>
                  </Box>
                </Flex>
              </Box>
              {/* 2 */}
              <Box
                boxShadow="base"
                w="100%"
                h="220px"
                borderRadius="20px"
                // border="1px solid black"
              >
                <Flex p={2}>
                  <Box w="50%" h="200px" borderRadius="20px" bg="pink.50">
                    <Image
                      src="https://media.monsterindia.com/trex/public/default/images/career-services/resume-highlighter-services.png"
                      w="80%"
                      margin="auto"
                      marginTop="1.6rem"
                    ></Image>
                  </Box>
                  <Box w="50%" h="200px" p={2}>
                    <Heading fontSize="18px">Profile Highlighter</Heading>
                    <Text fontSize="15px" fontWeight="light" marginTop="1rem">
                      Differentiate yourself from the crowd and increase
                      visibility to the recruiters
                    </Text>

                    <Button
                      w="90%"
                      bg="purple.700"
                      variant="solid"
                      marginTop="1rem"
                      color="white"
                      _hover={{ bg: "purple.700" }}
                    >
                      Starting at Rs:1999
                    </Button>

                    <Button
                      colorScheme="teal"
                      variant="link"
                      marginTop="1rem"
                      color="blackAlpha.700"
                      fontSize="12px"
                    >
                      Benefits
                    </Button>
                  </Box>
                </Flex>
              </Box>
              {/* 3 */}
              <Box
                boxShadow="base"
                w="100%"
                h="220px"
                borderRadius="20px"
                // border="1px solid black"
              >
                <Flex p={2}>
                  <Box w="50%" h="200px" borderRadius="20px" bg="pink.50">
                    <Image
                      src="https://media.monsterindia.com/trex/public/default/images/career-services/mock-interview-services.png"
                      w="80%"
                      margin="auto"
                      marginTop="1.6rem"
                    ></Image>
                  </Box>
                  <Box w="50%" h="200px" p={2}>
                    <Heading fontSize="18px">Mock Interview</Heading>
                    <Text fontSize="15px" fontWeight="light" marginTop="1rem">
                      Gain confidence to crack even the toughest interviews!
                    </Text>

                    <Button
                      w="90%"
                      bg="purple.700"
                      variant="solid"
                      marginTop="1rem"
                      color="white"
                      _hover={{ bg: "purple.700" }}
                    >
                      Starting at Rs:1999
                    </Button>

                    <Button
                      colorScheme="teal"
                      variant="link"
                      marginTop="1rem"
                      color="blackAlpha.700"
                      fontSize="12px"
                    >
                      Benefits
                    </Button>
                  </Box>
                </Flex>
              </Box>
            </VStack>
          </Box>
        </Flex>
      </Stack>
    </div>
  );
}

export default SmallBox;
