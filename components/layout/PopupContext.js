'use client'
import { createContext, useContext } from 'react';

const PopupContext = createContext();

export function usePopup() {
    return useContext(PopupContext);
}

export default PopupContext;