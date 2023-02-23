import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from "./Sidebar";
import {SIDEBAR_TREE} from "@/config/layout.config";

jest.mock('./SidebarLink/SidebarLink', () => () => <div>MockedLink</div>);

describe('Sidebar', () =>{
    test('all passed headers are rendered', () => {
        render(<Sidebar />);

        SIDEBAR_TREE.forEach((el) => {
            const header = screen.getByText(new RegExp(`${el.title}`, 'i'));
            expect(header).toBeInTheDocument();
        })
    });

    test('renders correct count of links', () => {
        render(<Sidebar />);

        const links = screen.getAllByText(/MockedLink/i);
        expect(SIDEBAR_TREE.reduce((acc, val) => acc + val.links.length, 0)).toEqual(links.length);
    });
})

