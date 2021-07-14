import { Flex, Grid, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex 
            bg="white" 
            w="100%" 
            as="header" 
            mx="auto" 
            px="1rem" 
            h={["50px", "100px"]} 
            align="center" 
            justify="center"
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                templateColumn="repeat(3, 1fr)"
                justifyContent="center"
            >
                <Image 
                    src="/logo.svg"
                    alt="Um avião voando sobre o nome da marca"
                    justifySelf="center"
                    gridColumn="2"
                    w={["81px", "184px"]}
                />

            </Grid>
        </Flex>
    )
}