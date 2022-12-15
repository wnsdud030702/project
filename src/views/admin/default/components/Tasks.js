// Chakra imports
import {
  Box,
  Flex,
  Text,
  useColorModeValue,

} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import React from "react";
export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex alignItems='center' w='100%' mb='30px'>
        <Text color={textColor} fontSize='lg' fontWeight='700'>
          하위 행정구역
        </Text>
        
      </Flex>
      <Box px='11px'>
        <Flex mb='20px'>
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            서울특별시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경기도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;광주광역시
          </Text>
        </Flex>
        <Flex mb='20px'>
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            부산광역시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;경상도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;울산광역시
          </Text>
        </Flex>
        <Flex mb='20px'>
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
           인천광역시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전라도&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;세종특별자치도
          </Text>
        </Flex>
        <Flex mb='20px'>
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            대전광역시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;충청도
          </Text>
        </Flex>
        <Flex mb='20px'>
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            대구광역시&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제주도
          </Text>
        </Flex>
      </Box>
    </Card>
  );
}
