import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
  Center,
  Image,
} from '@chakra-ui/react';
import {FaTwitter,FaFacebook,FaYoutube} from "react-icons/fa"

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#003380', '#003380')}
      color={useColorModeValue('white', 'white')}>
      <Container as={Stack} maxW={'7xl'} py={8} >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>PRODUCT CATEGORIES</ListHeader>
            <Link href={'#'}>Smartphones</Link>
              <Link href={'#'}>Laptops</Link>          
            <Link href={'#'}>DSLR Cameras</Link>
            <Link href={'#'}>Televisions</Link>
            <Link href={'#'}>Air Conditioners</Link>
            <Link href={'#'}>Refrigerators</Link>
            <Link href={'#'}>Kitchen Appliances</Link>
            <Link href={'#'}>Accessories</Link>
            <Link href={'#'}>Personal Care & Grooming</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>SITE INFO</ListHeader>
            <Link href={'#'}>About Digital Xpress</Link>
            <Link href={'#'}>resQ Services</Link>
            <Link href={'#'}>Site Map</Link>
            <Link href={'#'}>Gift Cards</Link>
            <Link href={'#'}>Corporate Enquries</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>RESOURCE CENTRE</ListHeader>
            <Link href={'#'}>Product Reviews</Link>
            <Link href={'#'}>Buying Guides</Link>
            <Link href={'#'}>How Tos</Link>
            <Link href={'#'}>Featured Stories</Link>
            <Link href={'#'}>Events & Happenings</Link>
            <Link href={'#'}>Nearest Store</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Cancellation and Return Policy</Link>
            <Link href={'#'}>Pricing and Payment Policy</Link>
            <Link href={'#'}>Shipping and Delivery Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>E-waste Recycling Policy</Link>
            <Link href={'#'}>EMI and Additional Cashbak T&C</Link>
            <Link href={'#'}>DigitalOne Loyalty Program T&C</Link>
            <Link href={'#'}>Caution Notice</Link>
          </Stack>
        </SimpleGrid>
      {/*-------------------------------------------------------------------------------*/}
    <Box p={2} justifyContent="center">
    <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={8}>
        <Stack>
          <Box>
            <Text fontWeight="500">FOLLOW US</Text>
          </Box>
          <Box>
          <Flex gap={3} cursor="pointer"> 
           <FaTwitter/>
           <FaFacebook/>
           <FaYoutube/> 
           </Flex>
          </Box>
        </Stack>
        <Stack>
          <Text fontWeight="500">
            EXPERIENCE RELIANCE DIGITAL APP ON MOBILE
          </Text>
          <Flex  gap="2" mt="2" cursor="pointer">
            <Image
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
              alt="Google Play Store"
              w="40%"
              objectFit="cover"
            />
            <Image
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
              alt="Apple Store"
              objectFit="cover"
              w="40%"
            />
          </Flex>
        </Stack>
        </SimpleGrid>
    </Box>


        {/**------------------------------------------------------------------------------ */}
      </Container>
      <Box backgroundColor="#0a244a" p="2">
      <Center lineHeight="15px" borderColor="white.500" w="5%" m="auto" p="3">
        <Text fontSize="14px" fontWeight="600" p="1">
          <u>Disclaimer</u>
        </Text>
      </Center>
      <Center>
        <Text fontSize="14px" w="92%" m="auto" textAlign="center" p="1">
          Product prices, offers and availability are subject to change from
          time to time. All prices are inclusive of taxes. Product colours &
          images are only for illustration and they may not exactly match with
          the actual product. Product specs are subject to change & may vary
          from actual product. While every care is taken to avoid inaccuracies
          in content, these are provided as is, without warranty of any kind.
        </Text>
      </Center>
      <Center
        mb="2"
        borderBottom="1px"
        borderBottomColor="whiteAlpha.400"
        p="1"
      >
        <Text fontSize="14px" w="90%" m="auto" textAlign="center"></Text>
      </Center>
      <Center>
        <Text fontSize="14px" p="1">
          {" "}
          © 2023 Digital Xpress. All Rights Reserved.
        </Text>
      </Center>
    </Box>
    </Box>
  );
}