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
  Image,
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
        h="400px"
        marginTop="4rem"
        bgImage="https://static.vecteezy.com/system/resources/previews/002/088/794/non_2x/abstract-banner-with-low-poly-plexus-design-free-vector.jpg"
      >
        <Box w="80%" h="300px" margin="auto" marginTop="5rem" >
          <Box w="40%" h="40px" >
            <Heading fontSize="30px" fontStyle="revert-layer" color="white">
              500,000+ Jobs.Find.better.Faster
            </Heading>
          </Box>
          <Stack p={2}>
            <Flex gap="1rem">
              <Box
                w="55%"
                h="230px"
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
                  <Button color="white" variant="link" fontWeight="thin" fontSize="17px">
                    All Jobs
                  </Button>
                  <Button color="white" variant="link" fontWeight="thin" fontSize="17px">
                    Work From Home
                  </Button>
                  <Button color="white" variant="link" fontWeight="thin" fontSize="17px">
                    Contract Jobs
                  </Button>
                  <Button color="white" variant="link" fontWeight="thin" fontSize="17px">
                    Fresher Jobs
                  </Button>
                </Stack>
                {/* ****** */}

                <Box marginTop="2rem">
                  <InputGroup w="90%" margin="auto" bg="white" border="none">
                    <InputLeftElement
                      // pointerEvents="none"
                      color="gray.300"
                      fontSize="2rem"
                      children={<Search2Icon />}
                    />
                    <Input
                    size="lg"
                      placeholder="Search by skills, Company & job Title"
                      borderRadius="none"
                      
                    />
                    <Button
                      cursor="pointer"
                      borderRadius="none"
                      bg="#B794F4"
                      color="white"
                      size="lg"
                      _hover={{ bg: "#553C9A" }}
                    >
                      Search
                    </Button>
                    <InputRightElement />
                  </InputGroup>
                  <Text marginTop="1.5rem" fontSize="15px" color="white">
                    Trending Searches : Jobs in Delhi, Jobs in Mumbai, Jobs in
                    Hyderabad, Jobs in Bangalore, Jobs in Chennai, Jobs in Pune,
                    Jobs in Kolkata, Jobs in Lucknow
                  </Text>
                </Box>

                {/* ****** */}
              </Box>
              <Stack w="40%" h="220px" bg="rgba(0, 0, 0, 0.7)"  >
                <Flex gap={2} p={2}>
                  <Box w="50%" h="200px" bg="white" p={5}>
                    <Text fontWeight="bold" fontSize="17px">
                      NEW TO MONSTER?
                    </Text>
                    <Button
                      variant="link"
                      marginTop="0.25rem"
                      fontSize="16px"
                      color="blue"
                    >
                      REGISTER WITH US
                    </Button>
                    <Flex align="center" marginTop="0.25rem">
                      <Divider />
                      <Text padding="2" fontSize="medium" color="gray.400">
                        OR
                      </Text>
                      <Divider />
                    </Flex>

                    <Button
                      marginTop="1rem"
                      h="50px"
                      fontSize="17px"
                      bg="orange.400"
                      borderRadius="none"
                      _hover={{ bg: "orange.400", color: "white" }}
                    >
                      UPLOAD RESUME
                    </Button>
                  </Box>
                  <Box w="50%" h="200px" bg="white" p={5}>
                    <Text fontWeight="bold" fontSize="17px">
                      FREE JOB ALERT
                    </Text>
                    <Text fontWeight="bold" fontSize="13px" marginTop="0.25rem">
                      Get an email on jobs matching your criteria
                    </Text>
                    <Text fontWeight="sm" fontSize="13px" marginTop="0.25rem">
                      No registration required
                    </Text>
                    <Button
                    
                      fontSize="17px"
                      bg="gray.400"
                      marginTop="1rem"
                      _hover={{ bg: "purple.700", color: "white" }}
                      borderRadius="none"
                      h="50px"
                      
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

      <Stack w="85%" margin="auto" p={1}>
        <Box p={4} boxShadow="base" h="180px">
          <Stack>
            <Heading fontSize="25px">Employers of Choice</Heading>
          </Stack>
          <Logo />
        </Box>

        {/* Start*/}
        {/* <Box border="2px solid black" h="120px" p={2}> */}
        <Flex gap={2}>
          <Box h="130px" w="80%" bg="blue.50">
            <Flex p={2}>
              <Box w="18%" h="100px">
                <Image
                  w="70%"
                  margin="auto"
                  src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-3.png"
                ></Image>
              </Box>
              <Box w="80%" h="100px">
                <Stack w="80%" h="100px" p={2} alignItems="flex-start">
                  <Heading fontSize="20px">
                    How to stand out from the milions of other resumes?
                  </Heading>
                  <Text fontFamily="cursive" fontSize="16px">
                    80% of the resumes are rejected in 11 seconds Don't want to
                    be the 80%
                  </Text>
                </Stack>
              </Box>
            </Flex>
          </Box>
          <Box h="130px" w="30%" bg="yellow.300">
            <Flex>
              <Box w="40%" h="100px">
                <Image
                  w="94%"
                  margin="auto"
                  src="https://media.monsterindia.com/trex/public/default/images/beware-icon.png"
                ></Image>
              </Box>
              <Box w="80%" h="100px">
                <Stack w="100%" h="100px" p={1} alignItems="flex-start">
                  <Heading fontSize="18px">Beware of fraud</Heading>
                  <Text fontFamily="body" fontSize="13px">
                    Monster or it's partners do not charge any money from job
                    seekers for job offers.
                  </Text>
                  <Stack>
                    <Button
                      color="blue.400"
                      variant="link"
                      fontSize="15px"
                      marginLeft="140px"
                    >
                      Know More
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Flex>
          </Box>
        </Flex>
        {/* </Box> */}
        {/* End */}

        {/* ***** */}
        <Box h="auto">
          <Flex gap={2} h="auto">
            <Box w="80%" p={2} >
              {/* Work From Home Start*/}
              {/* <Slider {...settings}> */}

              <Box bg="whiteAlpha.700" boxShadow="base" h="260px">
                <Heading
                  fontSize="23px"
                  // border="1px solid green"
                  w="100%"
                  h="30px"
                  p={2}
                >
                  Work From Home Jobs
                </Heading>
                <Flex gap={2} h="220px" cursor="pointer" >
                  <Box margin="auto" p={2}>
                    <IconButton
                    
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="whiteAlpha.500"
                      color="black"
                      boxShadow="base"
                      _hover={{ boxShadow: "dark-lg" }}
                      icon={<ChevronLeftIcon />}
                    />
                  </Box>
                  <Box
                    h="140px"
                    w="30%"
                    margin="auto"
                    p={2}
                    bg="whitesmoke"
                    boxShadow="base"
                  >
                    {" "}
                    <Stack alignItems="flex-start">
                      <Heading fontSize="18px">
                        Vakde Tech (India) Privet...
                      </Heading>
                      <Text fontSize="17px">CEOOFFICER SA WFH</Text>
                      <Text fontSize="15px"> Experience : 0 - 2 Years</Text>
                      <Text fontSize="15px">Location(s):Mumbai</Text>
                    </Stack>
                  </Box>
                  <Box
                    boxShadow="base"
                    h="140px"
                    w="30%"
                    margin="auto"
                    p={2}
                    bg="whitesmoke"
                  >
                    <Stack alignItems="flex-start">
                      <Heading fontSize="18px">
                        Aspire Systems India pri...
                      </Heading>
                      <Text fontSize="17px">Dot Net Develper</Text>
                      <Text fontSize="15px"> Experience : 3 - 8 Years</Text>
                      <Text fontSize="15px">Location(s):Chennai</Text>
                      {/* <Text fontSize="12px">Hyderabad/Secunderabad,...</Text> */}
                    </Stack>
                  </Box>
                  <Box
                    boxShadow="base"
                    h="140px"
                    w="30%"
                    margin="auto"
                    p={2}
                    bg="whitesmoke"
                  >
                    <Stack alignItems="flex-start">
                      <Heading fontSize="18px">
                        InfoDreven Solutions Priv...
                      </Heading>
                      <Text fontSize="17px">senior Mobile Engineer</Text>
                      <Text fontSize="15px"> Experience : 1 - 5 Years</Text>
                      <Text fontSize="15px">Location(s):Kolkata</Text>
                    </Stack>
                  </Box>
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="whiteAlpha.500"
                      color="black"
                      boxShadow="base"
                      _hover={{ boxShadow: "dark-lg" }}
                      icon={<ChevronRightIcon />}
                    />
                  </Box>
                </Flex>
              </Box>
              {/* </Slider> */}
              {/* Work From Home End*/}
              {/* Recent Jobs Start*/}
              <Box marginTop={2} boxShadow="2xl" bg="whiteAlpha.700" h="260px">
                <Heading
                  fontSize="23px"
                  // border="1px solid green"
                  w="100%"
                  h="30px"
                  p={2}
                >
                  Recent Jobs
                </Heading>
                <Flex gap={2} h="220px" cursor="pointer">
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="whiteAlpha.500"
                      color="black"
                      boxShadow="base"
                      _hover={{ boxShadow: "dark-lg" }}
                      icon={<ChevronLeftIcon />}
                    />
                  </Box>
                  <Box
                    boxShadow="base"
                    h="140px"
                    w="30%"
                    margin="auto"
                    p={2}
                    bg="whitesmoke"
                  >
                    <Stack alignItems="flex-start">
                      <Heading fontSize="18px">
                        Relince Jio Infocomm Li...
                      </Heading>
                      <Text fontSize="17px">Jio point Manager</Text>
                      <Text fontSize="15px"> Experience : 2 - 4 Years</Text>
                      <Text fontSize="15px">Venu : Mumbai</Text>
                    </Stack>
                  </Box>
                  <Box
                    boxShadow="base"
                    h="140px"
                    w="30%"
                    margin="auto"
                    p={2}
                    bg="whitesmoke"
                  >
                    <Stack alignItems="flex-start">
                      <Heading fontSize="18px">
                        Relince Jio Infocomm Li...
                      </Heading>
                      <Text fontSize="17px">JC Partner Master Supervis...</Text>
                      <Text fontSize="15px"> Experience : 5 - 8 Years</Text>
                      <Text fontSize="15px">Venu : Jangipur</Text>
                    </Stack>
                  </Box>
                  <Box
                    boxShadow="base"
                    h="140px"
                    w="30%"
                    margin="auto"
                    p={2}
                    bg="whitesmoke"
                  >
                    <Stack alignItems="flex-start">
                      <Heading fontSize="18px">
                        Relince Jio Infocomm Li...
                      </Heading>
                      <Text fontSize="17px">Home Sales Offer 2</Text>
                      <Text fontSize="15px"> Experience : 1 - 5 Years</Text>
                      <Text fontSize="15px">Venue : Jaipur,Ajmer</Text>
                    </Stack>
                  </Box>
                  <Box p={3} margin="auto">
                    <IconButton
                      colorScheme="blue"
                      borderRadius="20px"
                      fontSize="20px"
                      bg="whiteAlpha.500"
                      color="black"
                      boxShadow="base"
                      _hover={{ boxShadow: "dark-lg" }}
                      icon={<ChevronRightIcon />}
                    />
                  </Box>
                </Flex>
              </Box>
              {/* Recent Jobs End*/}

              {/* Premium Services Start*/}
              <Box marginTop={2} boxShadow="base" bg="whiteAlpha.700"  h="300px">
                <Heading
                  fontSize="23px"
                  // border="1px solid green"
                  w="100%"
                  h="30px"
                  p={2}
                >
                  Premium Services
                </Heading>
                <Box w="90%" h="300px" margin="auto">
                  <Flex h="250px"  gap={2}>
                    <Box boxShadow="base" h="200px" w="20%" bg="green.50" margin="auto"> 
                      <Box h="100px" bg="green.100">
                        <Image
                          src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png"
                          w="37%"
                          margin="auto"
                        ></Image>
                      </Box>
                      {/* ***** */}
                      <Stack p={2}>
                        <Heading fontSize="medium"> Resume Writing</Heading>
                        <Text fontSize="12px">
                          Professionally written resume + cover letter
                        </Text>
                      </Stack>
                      <Stack alignItems="flex-end" p={1}>
                        <Button color="blue.700" variant="link" fontSize="12px">
                          Read More
                        </Button>
                      </Stack>
                      {/* ********* */}
                    </Box>
                    <Box boxShadow="base" h="200px" w="20%" bg="blue.50" margin="auto">
                      <Box h="100px" bg="blue.100">
                        <Image
                          src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/Xra3gEbEDCZChclt6KyeY08aT14mQIemY87tp56k.png"
                          w="50%"
                          margin="auto"
                        ></Image>
                      </Box>
                      {/* ***** */}
                      <Stack p={2}>
                        <Heading fontSize="medium"> Featured Profile</Heading>
                        <Text fontSize="12px">
                          Better your chances of getting shortlisted
                        </Text>
                      </Stack>
                      <Stack alignItems="flex-end" p={1}>
                        <Button color="blue.700" variant="link" fontSize="12px">
                          Read More
                        </Button>
                      </Stack>
                      {/* ********* */}
                    </Box>
                    <Box boxShadow="base" h="200px" w="20%" bg="yellow.50" margin="auto">
                      <Box h="100px" bg="yellow.100">
                        <Image
                          src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/K109Ubc6KIVisXQSRJaQhTSXJpOAkU0UUA2dpe7R.png"
                          w="55%"
                          margin="auto"
                        ></Image>
                      </Box>
                      {/* ***** */}
                      <Stack p={2}>
                        <Heading fontSize="medium">Profile Highlighter</Heading>
                        <Text fontSize="12px">
                          Grab the attention of employers
                        </Text>
                      </Stack>
                      <Stack alignItems="flex-end" p={1}>
                        <Button color="blue.700" variant="link" fontSize="12px" >
                          Read More
                        </Button>
                      </Stack>
                      {/* ********* */}
                    </Box>
                    <Box h="200px" w="20%" bg="red.50" boxShadow="base" margin="auto">
                      <Box h="100px" bg="red.100">
                        <Image
                          src="https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/UWwaneAf2OBhqcauh7PujGU5mIavChpFlRnZabZp.png"
                          w="60%"
                          margin="auto"
                        ></Image>
                      </Box>
                      {/* ***** */}
                      <Stack p={2}>
                        <Heading fontSize="medium">Career Booster</Heading>

                        <Text fontSize="12px">
                          Get the power of two in one speed up your job search
                        </Text>
                      </Stack>
                      <Stack alignItems="flex-end" p={1}>
                        <Button color="blue.700" variant="link" fontSize="12px">
                          Read More
                        </Button>
                      </Stack>
                      {/* ********* */}
                    </Box>
                  </Flex>
                </Box>
              </Box>
              {/* Premium Services End*/}
            </Box>

            <Box w="25%" p={2}>
              <VStack>
                <Box
                  // border="1px solid black"
                  w="100%"
                  h="410px"
                  bg="whitesmoke"
                  p={2}
                >
                  <Stack p={1}>
                    <Heading fontSize="18px">Jobs by Top Skills</Heading>
                    <Divider />

                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Accounting Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Networking Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Analytics Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      {" "}
                      Architecture Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Banking Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      BPO Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Data Science Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      {" "}
                      Java Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Marketing Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Mechanical Engineering Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Online Marketing Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      SEO Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Teaching Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      UX/UI Jobs
                    </Button>
                  </Stack>
                </Box>
                <Box w="100%" h="320px" bg="whitesmoke" >
                  <Stack p={2}>
                    <Heading fontSize="18px">Popular Designations</Heading>
                    <Divider />
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Business Analyst Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      CEO Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Brand Manager Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      {" "}
                      VP Sales Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      VP Operations Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      VP Marketing Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      VP HR Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      {" "}
                      VP Finance Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      VP Business Development Jobs
                    </Button>
                    <Button
                      fontSize="14px"
                      cursor="pointer"
                      color="black"
                      fontWeight="10%"
                      variant="link"
                    >
                      Product Manager Jobs
                    </Button>
                  </Stack>
                </Box>
              </VStack>
            </Box>
          </Flex>
        </Box>
      </Stack>
    </>
  );
}

export default HomePage;
