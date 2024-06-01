import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { Link as RouterLink } from "react-router-dom";
import "./dropdown.css";

let accessories = ["Tablet Accessorries","Mobile Accessories", "Memory Cards", "Cables & Cords", "Chargers & Adapters"];
const Dropdown = () => {
  return (
    <div>
      <Box
        backgroundColor={"rgb(37,47,100)"}
        color="white"
        
          // p={1}
        style={{
          display: "flex",
          gap: "5px",
          justifyContent: "space-between",
        }}
        pl={[0, 0, 0, 4, 12]}
        pr={[0, 0, 0, 4, 12]}
        fontSize={["13px", "13px", "13px", "16px"]}
      >
    {/*------------------------------------mobile dropdown-----------------------------*/ }
      <Flex alignItems="center">
      <div class="dropdown">
      <RouterLink to="/mobile" >
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
      <button class="dropbtn" style={{fontSize : "13px"}} >
      MOBILE & TABLETS
    </button>
    <BiChevronDown />
    </Flex>
      </RouterLink>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
            <Box style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} >
              <Box>
              <RouterLink to="/mobile" >
                <Text fontWeight={"semibold"} fontSize = {"16px"}>SmartPhones</Text>
                </RouterLink>
                <RouterLink to="/mobile" >
                <Text pt={6} pb = {6} fontWeight = {"semibold"}>SMARTWATCHES</Text>
                </RouterLink>
                <RouterLink to="/mobile" >
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Accessories</Text>
                </RouterLink>

                {
                  accessories.map((el,index) => {
                    return (
                      <RouterLink to="/mobile" >
                      <Text fontSize={"14px"} mt={2} key = {index}>{el}</Text>
                      </RouterLink>
                    )
                  })
                }
              </Box>
              <Box>
               <RouterLink to="/mobile" >
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Headphones & Headsets</Text>
              </RouterLink>
              <RouterLink to="/mobile" >
              <Text fontWeight={"semibold"} fontSize = {"16px"} pt={6} pb = {6}>Tablets & eReaders</Text>
              </RouterLink>
              <RouterLink to="/mobile" >
              <Text fontSize={"14px"} mt={2}>Every Day use Tablets below 15000</Text>
              </RouterLink>
              <RouterLink to="/mobile" >
              <Text fontSize={"14px"} mt={2}>Premium Tablets, above 15001</Text>
              </RouterLink>
              <RouterLink to="/mobile" >
              <Text fontWeight={"semibold"} fontSize = {"16px"} pt={6} pb = {6}>Power Banks</Text>
              </RouterLink>
            </Box>

            <Box>
            <RouterLink to="/mobile" >
              <Text fontWeight={"semibold"} fontSize = {"16px"}>AI Learning Robots</Text>
              </RouterLink>
          </Box>

          <Box>
          <RouterLink to="/mobile" >
              <Image mb={-2} ml={14} width = "95%" src = "https://i.ibb.co/8D0JyY3/tablet-nav1.jpg" alt = "image"/>
              </RouterLink>
          </Box>

            </Box>
          </div>
        </div>
      </div>
    </div>
      
    </Flex>
    {/**-----------------------------------televison dropdown--------------------------------- */}
        <Flex alignItems="center">
          <div class="dropdown">
          <RouterLink to="/televisions">
          <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
          <button class="dropbtn" style={{fontSize : "13px"}}>
          TELEVISION
        </button>
          <BiChevronDown />
        </Flex>
          </RouterLink>
          <div class="dropdown-content">
            <div class="row">
              <div class="column">
              <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                  <Box>
                  <RouterLink to="/televisions">
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Televisions</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Smart TV's</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>32 Inch Tv's</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>43 Inc TV's</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>55 Inch TV's</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Android TV's</Text>
                  </RouterLink>
                  </Box>

                  <Box>
                  <RouterLink to="/televisions">
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Gaming</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Gaming Consoles</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Gaming Accessories</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Gaming Titles</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Projectors</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Streming Devices</Text>
                  </RouterLink>
                  </Box>

                  <Box>
                  <RouterLink to="/televisions">
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>Reconnect Disney | Marvel Audio Collections</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontWeight={"semibold"} fontSize = {"16px"}>TV & Audio Accessiories</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Vertual Reality Headsets</Text>
                  </RouterLink>
                  <RouterLink to="/televisions">
                  <Text fontSize={"14px"} mt={3}>Stablizers & Surge Protections</Text>
                  </RouterLink>
                  </Box>

            </Box>
              </div>
            </div>
          </div>
        </div>
        </Flex>
    {/*------------------------------------headphone dropdown----------------------------------*/}
        <Flex alignItems="center">
        <div class="dropdown">
        <RouterLink to="/headphone">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
        <button class="dropbtn" style={{fontSize : "13px"}}>
        AUDIO
      </button>
        <BiChevronDown />
      </Flex>
        </RouterLink>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
            <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                <Box>
                <RouterLink to="/headphone">
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Headphones & Headsets</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>True Wireless</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Bluetooth Nechbands</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Wired Earphones</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>On Ear Headphones</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Hoise Cancellling Headphones</Text>
                </RouterLink>
                </Box>

                <Box>
                <RouterLink to="/headphone">
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Bluetooth & WiFi Speakers</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Blueetooth Speakers</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Smart Speakers</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Gaming Titles</Text>
                </RouterLink>
              
                </Box>

                <Box>
                <RouterLink to="/headphone">
                <Text fontWeight={"semibold"} fontSize = {"16px"}>TV Speakers & Soundbars</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Soundbars</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}> Theatre System </Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Party Speakers</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Multimedia</Text>
                </RouterLink>
                </Box>

                <Box>
                <RouterLink to="/headphone">
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Musical Insturments</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Guitars and Ukuleses</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Microphones</Text>
                </RouterLink>
                <RouterLink to="/headphone">
                <Text fontSize={"14px"} mt={3}>Musical Keyboards</Text>
                </RouterLink>
                </Box>

          </Box>
            </div>
          </div>
        </div>
      </div>
      </Flex>
    {/*------------------------------------home dropdown--------------------------------------*/}
      <Flex alignItems="center">
      <div class="dropdown">
      <RouterLink to="/home">
      <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
      <button class="dropbtn" style={{fontSize : "13px"}}>
     APPLIANCES
    </button>
      <BiChevronDown />
    </Flex>
      </RouterLink>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
          <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
              <Box>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Air conditioners</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Split Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Window Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Smart Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Energy Efficient Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>1 ton Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>1.5 ton Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>5 ton Air Conditions</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} mt = {4} fontSize = {"16px"}>Air Cooler</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} mt = {4} fontSize = {"16px"}>Air Purifier</Text>
              </RouterLink>
              </Box>

              <Box>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Washing Machines</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Fully Automatic Front Load</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Fully Automatic Top Load</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Semi-Automatic Top Load</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Refrigerator</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Single Door</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Double Door</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Side by Side Refrigerator</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontSize={"14px"} mt={3}>Convertible</Text>
              </RouterLink>
              </Box>

              <Box>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} >Vacuum Cleaners</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Robotic Vacuum Cleaners</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Dishwashers</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>FAns</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Cloth Dryers</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Geysers</Text>
              </RouterLink>
              <RouterLink to="/">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Room Heater</Text>
              </RouterLink>   
              </Box>
        </Box>
          </div>
        </div>
      </div>
    </div>
    </Flex>
    {/**----------------------------------computer dropdown-------------------------------- */}
        <Flex alignItems="center">        
        <RouterLink to="/computer">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
        <button class="dropbtn" style={{fontSize : "13px"}}>
        COMPUTERS       
      </button>
      <BiChevronDown />
      </Flex>
        </RouterLink>
    
        </Flex>
    {/*-----------------------------------camera dropdown-----------------------------*/ }
        <Flex alignItems="center">
        <div class="dropdown">
        <RouterLink to="/camera">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
        <button class="dropbtn" style={{fontSize : "13px"}}>
        CAMERA
      </button>
        <BiChevronDown />
      </Flex>
        </RouterLink>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
            <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
                <Box>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} >DSLR Cameras</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Mirroless Cameras Cameras</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Point & Shoot Cameras</Text> 
                </RouterLink> 
                <RouterLink to="/camera">             
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>ProSumer Cameras</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Action Cameras</Text>  
                </RouterLink> 
                <RouterLink to="/camera">             
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Photo Storage Devices</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Memory Cards</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Pen Drives</Text>
                </RouterLink>
                </Box>

                <Box>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"}>Binoculars</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Camera Lens</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Digital Camera Accessories</Text> 
                </RouterLink>               
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Camera Batteries & Chargers</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Camera Bags & Cases</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Tripods & Monopods</Text>
                </RouterLink>
                <RouterLink to="/camera">
                <Text fontSize={"14px"} mt={3}>Action Camera Accessories</Text>
                </RouterLink>
                </Box>

          </Box>
            </div>
          </div>
        </div>
      </div>
      </Flex>
    {/*------------------------------------kitchen dropdown-----------------------------*/ }
      <Flex alignItems="center">
      <div class="dropdown">
      <RouterLink to="/kitchen">
      <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
      <button class="dropbtn" style={{fontSize : "13px"}}>
      KITCHENS & APPLIANCES
  
    </button>
      <BiChevronDown />
    </Flex>
      </RouterLink>
      <div class="dropdown-content">
        <div class="row">
          <div class="column">
          <Box  style={{display : "flex", gap : "50px"}} pl= {10} pt = {4} pb={6}>
              <Box>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Microwave Ovens</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Microwave Ovens</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Water Purifiers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Fruit & Vagitable Cleaners</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Oven Toaster Grillers (OTG)</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Cookwares</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Juicers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontSize={"14px"} mt={3}>Juicers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontSize={"14px"} mt={3}>Hand Mixers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontSize={"14px"} mt={3}>Mixer Grinder</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontSize={"14px"} mt={3}>Chopper & Slicer</Text>
              </RouterLink>
              </Box>

              <Box>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Inducution Cooker</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Food Proccessors</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Blenders</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Kitchen Hobs & Gas Stoves</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Kitchen Chymnis</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Rice Cookers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Sandwitch Maker</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Popup Toaster</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Coffee</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Coffee Makers & Grinder</Text>
              </RouterLink>
              </Box>

              <Box>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"}>Reconnect Disney Marvel Kitchen Collection</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Air Fryers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Electric Cattles</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Water Dispensers</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Wet Grinder</Text>
              </RouterLink>
              <RouterLink to="/kitchen">
              <Text fontWeight={"semibold"} fontSize = {"16px"} mt = {4}>Flour Mills</Text>
           </RouterLink>     
              </Box>   
        </Box>
          </div>
        </div>
      </div>
    </div>
    </Flex>
    {/*------------------------------------personal dropdown-----------------------------*/ }
        <Flex alignItems="center">
        <RouterLink to="/personal">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
        <button class="dropbtn" style={{fontSize : "13px"}}>
        PERSONAL CARE     
      </button>
        <BiChevronDown  />
        </Flex>
        </RouterLink>
        
        </Flex>
        
   {/*------------------------------------admin-----------------------------*/ }
        {/* <Flex alignItems="center">
        <RouterLink to="/admin/login">
        <Flex _hover={{backgroundColor:"#e42529"}} p={3}>
          <button class="dropbtn" style={{fontSize : "13px"}}>
            ADMIN
          </button>
          </Flex>
        </RouterLink>
         
        </Flex> */}
      </Box>
    </div>
  );
};

export default Dropdown;
