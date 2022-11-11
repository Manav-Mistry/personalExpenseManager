import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Form from "./components/Form"
import Home from "./components/Home";
import Navbar from "./components/shared/Navbar";
import { UserProvider } from "./context/userContext"
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';
import { useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";

function App() {


    // useEffect(async () => {
    //     let res = await axios.post("http://localhost:5000/expenseBuddy/users/login", {
    //         email: "murtaza@gmail.com",
    //         password: "12345"
    //     }, {
    //         headers:{
    //             "authorization" : `Bearer ${localStorage.getItem("token")}`
    //         }
    //     })
    //     localStorage.setItem("token", res.data.token)
    //     console.log(res);
    // })

    return (
        <>
            <UserProvider>
                <GlobalProvider>
                    <Router >
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/form' element={<Form />} />
                            <Route path='/Login' element={<Login />} />
                            <Route path='/transaction' element={
                                <>
                                    <Header />
                                    <Balance />
                                    <IncomeExpenses />
                                    <TransactionList />
                                    <AddTransaction />
                                </>
                            } />
                        </Routes>
                    </Router>
                </GlobalProvider>
            </UserProvider>
        </>
    )
}

export default App