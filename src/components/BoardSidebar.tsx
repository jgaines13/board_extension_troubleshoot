import React, { useContext } from 'react';
import {Flex, Heading, MenuGroup, MenuItem, MenuList, Paragraph, } from '@looker/components';
import styled from 'styled-components'
import { keyBy } from 'lodash';
import { useHistory, useParams } from 'react-router-dom';
// import AppContext from './AppContext';
import qs from 'query-string'
// import { BoardSidebarButtons } from './BoardSidebarButtons';
import { ExtensionContext } from '@looker/extension-sdk-react';

export function BoardSidebar( { board }: any ) {
  let history = useHistory();
  let {board_id, content_type, content_id }: any = useParams<any>();
//   let { filters } = useContext(AppContext)
  let {  extensionSDK } = useContext(ExtensionContext)

//   const handleClick = (board_item: any) => {
//     if (board_id && board_item?.url) {
//       history.push({
//         pathname: `/boards/${board_id}${board_item.url}`
//         // search: qs.stringify(filters)
//       })
//     }
//   }

  const icon={7:"Dashboard", 8:"FieldLocation", 6:"SqlRunner", 5:"Tune"};

  const board_sections = keyBy(board.board_sections, 'id' )
  const Section = board.section_order.map((id: number)=>{
    const section_items = keyBy(board_sections[id].board_items, 'id')
    let MenuItemComponents: any = []
    board_sections[id].item_order.forEach((item_id: number)=>{
      if (section_items && section_items[item_id] && section_items[item_id].url) {
        console.log(item_id)
        MenuItemComponents.push(
          <MenuItem
            // icon="Dashboard"
            key={`item::${item_id}`}
            current={(section_items[item_id].url === `/${content_type}/${content_id}`)}
            // onClick={()=>{handleClick(section_items[item_id])}}
          > <img src="//drive.google.com/thumbnail?id=1yl2C2U7yMqv1Qd2YgAM0xB30P2g2qVwO" width="20"></img>
          <Paragraph textTransform="uppercase" fontSize="medium" textAlign="left-aligned">{section_items[item_id].title} </Paragraph> </MenuItem>
      );
      } 
    })
    
    if (MenuItemComponents?.length) {
      return (
        <StyledMenuGroup 
          key={`section::${id}`} 
        >
           {(MenuItemComponents?.length) ? MenuItemComponents : <></>} 
        </StyledMenuGroup>
      )
    }

  })
  return <>
  <br/>
  <img src="https://i.ibb.co/tMLgf7g/Png-Item-2307401.png" width="200"></img>
  <br/>
  <br/>
  <Flex 
    height="80vh"
    flexDirection="column" 
    justifyContent="space-between"
  >
    <MenuList>{Section} </MenuList> 
    {/* <BoardSidebarButtons /> */}
  </Flex>
  </>
}
// @ts-ignore
const StyledMenuGroup = styled(MenuGroup)`
  list-style: none;
`