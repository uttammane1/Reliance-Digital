import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
  } from '@chakra-ui/react'

const Accordians = () => {
  return (
    <div>
    <Accordion allowMultiple >
    <AccordionItem margin={"10px"}>
      <h2>
        <AccordionButton>
          <Box as="span" flex='1' textAlign='left'>
            Features
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
       <input type="checkbox" value="port"/>{" "}
       <label>2</label>
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem margin={"10px"}>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         No of HDMI ports
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <input type="checkbox" value="port"/>{" "}
    <label>2</label>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem margin={"10px"}>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='left'>
       No of USB ports
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
  <input type="checkbox" value="port"/>{" "}
  <label>2</label>
  </AccordionPanel>
</AccordionItem>

<AccordionItem margin={"10px"}>
<h2>
  <AccordionButton>
    <Box as="span" flex='1' textAlign='left'>
     Display Type
    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4}>
<input type="checkbox" value="Ultra HD (4k)"/>{" "}
<label>Ultra HD 4K</label><br/>
<input type="checkbox" value="Full HD"/>{" "}
<label>FULL HD</label><br/>
<input type="checkbox" value="HD Ready"/>{" "}
<label>HD Ready</label><br/>
</AccordionPanel>
</AccordionItem>

<AccordionItem margin={"10px"}>
<h2>
  <AccordionButton>
    <Box as="span" flex='1' textAlign='left'>
      Screen Size
    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4}>
 <input type="checkbox" value="port"/>{" "}
 <label>51-55 inch</label><br/>
 <input type="checkbox" value="port"/>{" "}
 <label>45-50 inch</label><br/>
 <input type="checkbox" value="port"/>{" "}
 <label>33-44 inch</label><br/>
 <input type="checkbox" value="port"/>{" "}
 <label>25-32 inch</label><br/>
</AccordionPanel>
</AccordionItem>

<AccordionItem margin={"10px"}>
<h2>
  <AccordionButton>
    <Box as="span" flex='1' textAlign='left'>
     USB
    </Box>
    <AccordionIcon />
  </AccordionButton>
</h2>
<AccordionPanel pb={4}>
 <input type="checkbox" value="port"/>{" "}
 <label>USB Type-A</label><br/>
 <input type="checkbox" value="port"/>{" "}
 <label>Type-A</label>
</AccordionPanel>
</AccordionItem>
  </Accordion>
    </div>
  )
}

export default Accordians
