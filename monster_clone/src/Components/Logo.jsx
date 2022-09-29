import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image } from "@chakra-ui/react";

// import "./App.css";
import React from "react";

function Logo() {
  return (
    <>
      <Flex h="100px" p={6} gap="1rem" cursor="pointer" bg="blue.50" marginTop={2}>
        <Box p={3}>
          <IconButton
            colorScheme="blue"
            borderRadius="20px"
            fontSize="20px"
            bg="gray.300"
            icon={<ChevronLeftIcon />}
          />
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box h="55px" bg="gray.100" p={1}>
          <Image
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"
            p={2}
          ></Image>
        </Box>
        <Box p={3}>
          <IconButton
            colorScheme="blue"
            borderRadius="20px"
            fontSize="20px"
            bg="gray.300"
            icon={<ChevronRightIcon />}
          />
        </Box>
      </Flex>
    </>
  );
}

export default Logo;
