import React, { use } from 'react'
import { Box, Button, Container, Heading, Input, VStack, useColorModeValue } from '@chakra-ui/react';
const CreatePage = () => {
    const [newProduct, setNewProduct] = React.useState({
        name: '',
        price: '',
        imageUrl: ''
    });

    const handleAddProduct = () => {
        console.log(newProduct);
    }

    return (
        <Container maxW={'container.sm'}>
            <VStack spacing={8} >
                <Heading as="h1" size="2xl" textAlign={'center'} mb={8}>
                    Create New Product
                </Heading>
                <Box
                    w={'full'} bg={useColorModeValue('white', 'gray.800')}
                    p={6} rounded={'lg'} shadow={'md'}
                >
                    <VStack spacing={4}>
                        <Input
                            name="name"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        />
                        <Input
                            name="price"
                            placeholder="Product Price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        />
                        <Input
                            name="imageUrl"
                            placeholder="Image URL"
                            value={newProduct.imageUrl}
                            onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                        />
                        <Button colorScheme="blue"
                            onClick={handleAddProduct} w={'full'}
                        >
                            Create Product
                        </Button>
                    </VStack>
                </Box>
            </VStack>
        </Container>
    )
}

export default CreatePage
