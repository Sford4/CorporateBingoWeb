import { useState, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router'

// component imports
import Layout from '../components/Layout';

// reducer imports
import { userReducerState, userReducer } from  '../reducers/userReducer';

const Index = () => {

    return (
        <Layout>
            <div>
                <p>HOME</p>
            </div>
        </Layout>
    )
  };
  
  export default Index;