import React, { useState, useEffect, useContext } from 'react';
import { ExtensionContextData, ExtensionContext } from '@looker/extension-sdk-react';
import { Box } from '@looker/components';
import styled from 'styled-components'
import { IBoard } from '@looker/sdk/lib/sdk/4.0/models';
import { useParams } from 'react-router-dom';
import { EmbedDashboard } from './EmbedDashboard';
import { BoardSidebar } from './BoardSidebar';
// import { EmbedPage } from './EmbedPage';

export function BoardPage( ) {
  const [board, setBoard] = useState<IBoard>()
  const extensionContext = useContext<ExtensionContextData>(ExtensionContext);
  const sdk = extensionContext.core40SDK;

  // @ts-ignore
  let board_id = 8;

  useEffect(()=>{

    if (board_id) {
        console.log('trying')
      getBoard();
    }
  },[board_id])

  const getBoard = async () => {
    const b = await sdk.ok(sdk.board(Number(board_id)))
    setBoard(b);
  }


    return (
        <>
        </>
    //   <Layout p="small">
    //         {/* <Box><BoardSidebar board={board} /></Box>  */}
    // {/* {/* //     <Box><EmbedDashboard /></Box> */}
    //   </Layout> 
    );


}



// @ts-ignore
export const Layout = styled(Box)`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 200px auto;
  width: 100vw;
`
