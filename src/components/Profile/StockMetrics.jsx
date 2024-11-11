import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow } from "@chakra-ui/react";

const StockMetrics = ({ stockData }) => {
    // Temporary mock data - replace with actual API data later
    const metrics = {
        currentPrice: 150.25,
        change: 2.5,
        percentChange: 1.67,
        volume: "1.2M",
        marketCap: "2.5B",
    };

    return (
        <Box p={4} borderRadius="lg" bg="whiteAlpha.100">
            <Flex wrap="wrap" gap={4} justify="space-around">
                <Stat>
                    <StatLabel>Current Price</StatLabel>
                    <StatNumber>${metrics.currentPrice}</StatNumber>
                    <StatHelpText>
                        <StatArrow type={metrics.change >= 0 ? 'increase' : 'decrease'} />
                        {metrics.percentChange}%
                    </StatHelpText>
                </Stat>

                <Stat>
                    <StatLabel>Volume</StatLabel>
                    <StatNumber>{metrics.volume}</StatNumber>
                </Stat>

                <Stat>
                    <StatLabel>Market Cap</StatLabel>
                    <StatNumber>{metrics.marketCap}</StatNumber>
                </Stat>
            </Flex>
        </Box>
    );
};

export default StockMetrics;