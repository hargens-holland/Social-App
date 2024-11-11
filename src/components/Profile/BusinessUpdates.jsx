import { Box, VStack, Text, Heading, Divider } from "@chakra-ui/react";

const BusinessUpdates = ({ updates }) => {
    // Temporary mock data - replace with actual business updates later
    const mockUpdates = [
        {
            id: 1,
            title: "Q4 Earnings Report",
            content: "Exceeded market expectations with 15% YoY growth",
            date: "2024-03-15",
        },
        {
            id: 2,
            title: "New Product Launch",
            content: "Announcing our latest innovation in the market",
            date: "2024-03-10",
        },
    ];

    return (
        <Box p={4}>
            <Heading size="md" mb={4}>Company Updates</Heading>
            <VStack spacing={4} align="stretch">
                {mockUpdates.map((update) => (
                    <Box
                        key={update.id}
                        p={4}
                        borderRadius="lg"
                        bg="whiteAlpha.100"
                    >
                        <Heading size="sm" mb={2}>{update.title}</Heading>
                        <Text fontSize="sm" color="gray.300">{update.content}</Text>
                        <Text fontSize="xs" color="gray.500" mt={2}>
                            {new Date(update.date).toLocaleDateString()}
                        </Text>
                        <Divider mt={2} />
                    </Box>
                ))}
            </VStack>
        </Box>
    );
};

export default BusinessUpdates;