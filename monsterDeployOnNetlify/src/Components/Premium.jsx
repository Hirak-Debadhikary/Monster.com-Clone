
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Contact from "./Contact";
import SmallBox from "./SmallBox";

function Premium() {
  return (
    <div>
      <Box  marginTop="4rem" p={10}>
        <Stack  margin="auto" marginBottom="2rem" >
          <Flex justifyContent="space-between">
            <Box p={4}>
              <Heading fontFamily="cursive"> Buy Premium Services</Heading>
              <Text fontSize="20px" fontFamily="cursive">
                Give your job search journey a boost
              </Text>
            </Box>
            <Box p="4">
              <Button
                w="300px"
                h="50px"
                border="1px"
                // borderColor="black"
                bg="purple.600"
                color="white"
                _hover={{ bg: "purple.600", color: "white", border: "none" }}
                fontSize="16px"
                gap="5"
                fontWeight="bold"
                fontStyle="oblique"
              >
                <Image
                  src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/phone-desktop.svg"
                  w="16px"
                ></Image>
                Call me back
              </Button>
            </Box>
          </Flex>

          <Text fontWeight="medium" fontSize="16px" fontStyle="italic">
            Premium Services are paid services specially crafted for job
            seekers. These services are offered by Monster to help the seekers
            get in touch with Industry Experts and professionals. It helps
            candidates with their Resume, highlighting profiles in our database
            and making them job-ready through Mock Interviews!
          </Text>
        </Stack>
        <SmallBox />
        <Contact/>
      </Box>
    </div>
  );
}

export default Premium;
