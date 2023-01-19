import React from 'react'
import {Box} from "@mui/material"
import { Outlet } from "react-router-dom"
import GlobalLoading from '../common/GlobalLoading'
import Footer from '../common/Footer'
import TopBar from '../common/TopBar'
import AuthModal from '../common/AuthModal'

const MainLayout = () => {
  return (
    <>
        {/* global Loading */}
        <GlobalLoading/>
        {/* global Loading */}


        {/* login Modal */}
        <AuthModal/>
        {/* login Modal */}

        <Box display="flex" minHeight="100vh">

            {/* header */}
            <TopBar/>
            {/* header */}

            {/* main */}
            <Box
                component="main"
                flexGrow={1}
                overflow="hidden"
            >
              <Outlet />
            </Box>
            {/* main */}

            {/* footer */}
            <Footer/>
            {/* footer */}
        </Box>

    </>
  )
}

export default MainLayout