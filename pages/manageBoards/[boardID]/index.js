import React from 'react';

import ManageBoardsContextProvider from '../../../contexts/manageBoardsContext';

import ManageBoardIndex from '../../../components/ManageBoard/ManageBoardsIndex';

const ManageBoard = (props) => {

  return (
    <ManageBoardsContextProvider>
        <ManageBoardIndex />
    </ManageBoardsContextProvider>
  )
}
  
export default ManageBoard;