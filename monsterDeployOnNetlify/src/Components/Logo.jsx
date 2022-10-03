// import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
// import { Box, Flex, IconButton, Image } from "@chakra-ui/react";
// import React from "react";

// function Logo() {
//   return (
//     <>
//       <Flex
//         h="100px"
//         p={6}
//         gap="1rem"
//         cursor="pointer"
//         bg="whiteAlpha.900"
//         // boxShadow="base"
//         // border="1px solid red"
//         marginTop={2}
//       >
//         <Box p={3}>
//           <IconButton
//             colorScheme="blue"
//             borderRadius="20px"
//             fontSize="20px"
//             bg="whiteAlpha.500"
//             color="black"
//             boxShadow="base"
//             _hover={{ boxShadow: "dark-lg" }}
//             icon={<ChevronLeftIcon />}
//           />
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box h="55px" bg="gray.100" p={1}>
//           <Image
//             src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"
//             p={2}
//           ></Image>
//         </Box>
//         <Box p={3}>
//           <IconButton
//             colorScheme="blue"
//             borderRadius="20px"
//             fontSize="20px"
//             bg="whiteAlpha.500"
//             color="black"
//             boxShadow="base"
//             _hover={{ boxShadow: "dark-lg" }}
//             icon={<ChevronRightIcon />}
//           />
//         </Box>
//       </Flex>
//     </>
//   );
// }

// export default Logo;











import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React from 'react'
import { Box, Image} from "@chakra-ui/react";

function Logo() {
  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    // centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      <Box p={2}>
      <Slider {...settings}>
        
        
          <Box h="100px" bg="gray.100" p={2} > 
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/september/8EFB5ogZpGqjJ8A3MFXPL7SokqKk0YsnO7imlEbk.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/august/nGqLoPmZun0GxVuKOgaEBB7Q63BGdyOPqHxRpTCl.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/I32QY2OzbvdjaGT1p5mPc7YPDdxkEOAMeyIt3vHT.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/may/csLqDvD5G1J8NuUjYIXIS9vjE8FQMQjWJ6SRP4aj.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/july/JpYoK5TOwijxrufQCDo0F2jYc6sImQgHW6Befx8f.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          <Box h="100px" bg="gray.100" p={2}>
          <Image
              src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg"
              p={2} w="300px"
            ></Image>
          </Box>
          
        </Slider>
        </Box>
    </div>
  )
}

export default Logo;
