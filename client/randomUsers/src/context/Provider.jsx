/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AppContext = createContext();

export const Provider = ({ children }) => {
    const [region, setRegion] = useState("EN");
    const [seed, setSeed] = useState(Math.floor(Math.random() * 100000));
    const [error, setError] = useState(0);
    const [csvExport,setCsvExport] = useState("No data");

    return (
        <AppContext.Provider value={{ region, seed, error, csvExport, setRegion, setSeed, setError, setCsvExport }}>
            {children}
        </AppContext.Provider>
    );
}
