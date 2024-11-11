import { Box, VStack, Text, Heading, Flex, Button } from "@chakra-ui/react";
import { useState } from "react";

const UserWatchlist = ({ userProfile }) => {
    // Temporary mock data - replace with actual watchlist data from Firebase
    const [watchlist] = useState([
        {
            stockId: "AAPL",
            companyName: "Apple Inc.",
            currentPrice: 175.50,
            potentialInvestment: 1000,
            priceChange: 2.5,
            dateAdded: new Date().toISOString(),
        },
        {
            stockId: "GOOGL",
            companyName: "Alphabet Inc.",
            currentPrice: 142.75,
            potentialInvestment: 2000,
            priceChange: -1.2,
            dateAdded: new Date().toISOString(),
        },
    ]);

    return (
        <Box p={4}>
            <Heading size="md" mb={4}>Your Watchlist</Heading>
            <VStack spacing={4} align="stretch">
                {watchlist.map((stock) => (
                    <Box
                        key={stock.stockId}
                        p={4}
                        borderRadius="lg"
                        bg="whiteAlpha.100"
                    >
                        <Flex justify="space-between" align="center">
                            <Box>
                                <Heading size="sm">{stock.stockId}</Heading>
                                <Text fontSize="sm" color="gray.300">{stock.companyName}</Text>
                            </Box>
                            <Box textAlign="right">
                                <Text fontSize="lg" fontWeight="bold">
                                    ${stock.currentPrice}
                                </Text>
                                <Text
                                    fontSize="sm"
                                    color={stock.priceChange >= 0 ? "green.400" : "red.400"}
                                >
                                    {stock.priceChange > 0 ? "+" : ""}{stock.priceChange}%
                                </Text>
                            </Box>
                        </Flex>
                        <Flex mt={3} justify="space-between" align="center">
                            <Text fontSize="sm" color="gray.500">
                                Potential Investment: ${stock.potentialInvestment}
                            </Text>
                            <Button size="sm" colorScheme="red" variant="ghost">
                                Remove
                            </Button>
                        </Flex>
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default UserWatchlist;