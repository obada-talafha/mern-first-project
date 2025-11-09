import { Container, Flex, HStack, Text } from '@chakra-ui/react' // <-- 1. Add Text here
import { Link } from 'react-router-dom' // <-- 2. Add this import for Link
import { CiSquarePlus } from "react-icons/ci";

const Navbar = () => {
    return (
        <Container maxW={"1140px"} px={4}>
            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base: 'column',
                    sm: 'row'
                }}
            >
                <Text
                    fontSize={{ base: '22', sm: '28' }}
                    fontWeight="bold"
                    textTransform="uppercase"
                    textAlign={"center"}
                    bgGradient={"linear(to-r, cyan.400, blue.500)"}
                    bgClip={"text"}
                >
                    <Link to={"/"}>Product Store</Link>
                </Text>
                <HStack spacing={2} alignItems={"center"}>
                    <Link to={"/create"}>
                        <button>
                            <CiSquarePlus fontSize={20} />
                        </button>
                    </Link>
                </HStack>
            </Flex>
        </Container >
    )
}

export default Navbar