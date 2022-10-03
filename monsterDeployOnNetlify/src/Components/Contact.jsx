import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Contact() {
  return (
    <div>
      <Stack bg="purple.50" w="80%"  margin="auto" borderRadius="10px">
        <Flex p={2} gap={2}>
          <Box w="60%"  margin="auto" p={2}>
            <Heading fontSize="25px">Talk to our experts</Heading>
            <Image
              src="https://media.monsterindia.com/trex/public/default/images/career-services/career-contactUs/humanFig2.svg"
              
              margin="auto"
            ></Image>
            <Text fontWeight="bold" fontFamily="heading">
              {" "}
              Toll Free No: 1-800-4196666
            </Text>
            <Text fontWeight="bold" fontFamily="heading">
              {" "}
              Toll No: +91-40-66116611
            </Text>
          </Box>

          {/* ******************************************************* */}
          <Box  w="90%" margin="auto" p={5}>
            <Stack alignItems="flex-start" w="70%" margin="auto">
              <Text fontSize="20px" fontWeight="bold">
                CONTACT US
              </Text>
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input placeholder="Enter Name" bg="white"  boxShadow="base" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  bg="white"
                  placeholder="Enter Email"
                  boxShadow="base"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Phone</FormLabel>
                <Input placeholder="Enter Number" bg="white"  boxShadow="base" />
              </FormControl>
            </Stack>
            <Stack marginLeft="15%">
              <Button
                bg="purple.600"
                color="white"
                _hover={{bg:"purple.600"}}
                variant="solid"
                marginTop="2rem"
                w="40%"
              >
                CALL ME BACK
              </Button>
            </Stack>
          </Box>
        </Flex>
      </Stack>
    </div>
  );
}
