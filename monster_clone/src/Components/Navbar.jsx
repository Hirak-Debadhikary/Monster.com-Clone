// import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";

import React from "react";
// import { Link } from "react-router-dom";
import Login from "./Login";

const Navbar = () => {
  return (
    <div>
      <Box
        as="div"
        boxShadow="base"
        p={2}
        h="4rem"
        bg="white"
        position={"fixed"}
        zIndex={"10"}
        w="100%"
      >
        <Flex justifyContent="space-evenly">
          <Box as="div" w="12%" p={2} color="white" h="3rem">
            <Image
              src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
              alt="image"
              cursor="pointer"
            ></Image>
          </Box>
          <Box as="div" w="45%" p={0.5} color="white" h="3rem">
            <Stack
              spacing={4}
              direction="row"
              align="center"
              justifyContent="space-evenly"
            >
              <Menu>
                <MenuButton
                  as={Button}
                  // bottomIcon={<ChevronDownIcon />}
                  color="black"
                  fontSize="12px"
                  fontStyle="revert"
                  variant="none"
                  // w="170px"
                >
                  JOB SEARCH
                </MenuButton>
                <MenuList color="black" borderRadius="none" fontSize="11px">
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY LOCATION
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY SKILLS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY TITLE
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY FUNCTIONS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY INDUSTRY
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY EDUCATION
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    FRESHERS JOBS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    OTHER JOBS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY COMPANY
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY CONSULTANT
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS BY RECRUITER
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* <Button
                color="black"
                fontSize="12px"
                fontStyle="revert"
                variant="none"
              >
                WORK FROM HOME
              </Button> */}
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  color="black"
                  fontSize="12px"
                  fontStyle="revert"
                  variant="none"
                >
                  WORK FROM HOME
                </MenuButton>
                <MenuList color="black" borderRadius="none" fontSize="11px">
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN BANGALORE
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN MUMBAI
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN CHENNAI
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN HYDERABAD
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN KOLKATA
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN PUNE
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN CELHI NCR
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN NOIDA
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    WORK FROM HOME JOBS IN GURGAON
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    VIEW ALL WORK FROM HOME JOBS
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <Button
                color="black"
                fontSize="12px"
                fontStyle="revert"
                variant="none"
              >
                CAREER TIPS
              </Button> */}
              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  color="black"
                  fontSize="12px"
                  fontStyle="revert"
                  variant="none"
                >
                  CAREER TIPS
                </MenuButton>
                <MenuList color="black" borderRadius="none" fontSize="11px">
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOB SEARCH STRATEGY
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    RESUME & COVER LETTER
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    INTERVIEW TIPS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    SALARY NOEGOTIA TIONS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    COURSES
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <Button
                color="orange.600"
                fontSize="12px"
                w="35%"
                fontStyle="revert"
                variant="none"
                bg="orange.200"
                _hover={{ color: "blue" }}
              >
                PREMIUM SERVICES
              </Button> */}

              <Menu>
                {/* <Link to="/premium"> */}

                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  color="orange.600"
                  fontSize="12px"
                  w="35%"
                  fontStyle="revert"
                  variant="none"
                  bg="orange.200"
                  _hover={{ color: "blue" }}
                >
                  PREMIUM SERVICES
                </MenuButton>

                {/* </Link> */}

                <MenuList color="black" borderRadius="none" fontSize="11px">
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    FEATURED FROFILE
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    PROFILE HIGHLIGHTER
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    CAREER BOOSTER
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    RESUME WRITING
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    PSYCHOMENTRIC TEST
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    MOCK INTERVIEW
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    LINKEDIN MAKEOVER
                  </MenuItem>
                </MenuList>
              </Menu>
              {/* <Button
                color="black"
                fontSize="12px"
                fontStyle="revert"
                variant="none"
              >
                HOME
              </Button> */}

              <Menu>
                <MenuButton
                  as={Button}
                  // rightIcon={<ChevronDownIcon />}
                  color="black"
                  fontSize="12px"
                  fontStyle="revert"
                  variant="none"
                >
                  HOME
                </MenuButton>
                <MenuList color="black" borderRadius="none" fontSize="11px">
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    SPECIAL ABITITY JOBS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    FREE JOB ALERT
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    PSYCHOMETRIC TEST
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    EMPLOYMENT INDEX
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    SALARY INDEX
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    SEARCH TIPS
                  </MenuItem>
                  <Divider />
                  <MenuItem _hover={{ bg: "gray.200", color: "purple.500" }}>
                    JOBS APP
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Box>
          <Box as="div" w="25%" p={1.5} color="white" h="3rem">
            <Flex justifyContent="space-evenly" gap="2px">
              <Stack
                spacing={1}
                direction="row"
                align="center"
                justifyContent="space-evenly"
              >
                <Login />
                <Button
                  w="140px"
                  h="30"
                  borderColor="black"
                  border="1px"
                  bg="white"
                  color="black"
                  _hover={{ bg: "orange.400", color: "white", border: "none" }}
                  fontSize="12px"
                >
                  FOR EMPLOUERS
                </Button>
              </Stack>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Navbar;
